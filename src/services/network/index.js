import Bot from '@urbanriskmap/cognicity-bot-core';
import twilio from 'twilio';

import messages from '../messages';

export default class {
  constructor(config) {
    this.config = config;

    this.config.MESSAGES = messages;
    this.bot = new Bot(this.config);
    this.properties = {
      language: this.config.DEFAULT_LANGUAGE,
      network: this.config.NETWORK_NAME,
    };

    this.client = twilio(
        this.config.TWILIO_ACCOUNT_SID,
        this.config.TWILIO_AUTH_TOKEN
    );
  }

  notify(text, userNumber) {
    return new Promise((resolve, reject) => {
      this.client.messages
          .create({
            body: text,
            from: this.config.NETWORK_NUMBER,
            to: userNumber,
          })
          .then((msg) => resolve(msg))
          .catch((err) => reject(err));
    });
  }

  sendThanks(body) {
    return new Promise((resolve, reject) => {
      // Add instance region code to properties,
      // catch reports outside the reporting area and reply with default
      this.properties.instanceRegionCode = body.instanceRegionCode ?
          body.instanceRegionCode : this.config.DEFAULT_INSTANCE_REGION_CODE;

      // Add report id to properties
      this.properties.reportId = body.reportId;

      this.bot.thanks(this.properties)
          .then(({text, link}) => {
            const thanksMessage = text + link;
            const userNumber = decodeURIComponent(body.userId);

            // Send message
            this.notify(thanksMessage, userNumber)
                .then((msg) => resolve(msg))
                .catch((err) => reject(err));
          })
          .catch((err) => reject(err));
    });
  }

  handleResponse(body) {
    return new Promise((resolve, reject) => {
      const msg = body.Body.toLowerCase();
      const userNumber = body.From;

      if (this.config.CARDS_DECK.indexOf(msg) >= 0) {
        // User is requesting a report card link

        // Add user id to properties
        this.properties.userId = encodeURIComponent(userNumber);

        // Get one time card link
        this.bot.card(this.properties)
            .then(({text, link}) => {
              const responseMessage = text + link;

              // Send message
              this.notify(responseMessage, userNumber)
                  .then((msg) => resolve(msg))
                  .catch((err) => reject(err));
            })
            .catch((err) => reject(err));
      } else if (msg === 'help') {
        // Send command list

      } else {
        // Get default message
        this.bot.default(this.properties)
            .then(({text}) => {
              // Send message
              this.notify(text, userNumber)
                  .then((msg) => resolve(msg))
                  .catch((err) => reject(err));
            })
            .catch((err) => reject(err));
      }
    });
  }
}
