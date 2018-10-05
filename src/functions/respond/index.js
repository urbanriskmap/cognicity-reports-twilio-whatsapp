import config from '../../config';
import NetworkService from '../../services/network';

exports.handler = (event, context, callback) => {
  // parse twilio-whatsapp programmable sms body
  const body = JSON.parse(event.body);
  const userMessage = body.Body;
  const userNumber = body.From;

  // create receive service
  const network = new NetworkService(config);

  // get cardId
  network.handleResponse(userMessage, userNumber)
      // Log responded successfully
      .then((result) => callback(null, result))
      // Throw error
      .catch((err) => callback(err));
};
