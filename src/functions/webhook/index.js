import qs from 'querystring';

import config from '../../config';
import NetworkService from '../../services/network';

exports.handler = (event, context, callback) => {
  // parse twilio-whatsapp programmable sms body
  const body = qs.parse(event.body);

  // create network service
  const network = new NetworkService(config);

  network.handleResponse(body)
      // Log responded successfully
      .then((result) => callback(null, result))
      // Throw error
      .catch((err) => {
        console.log(JSON.stringify(err));
        callback(err);
      });
};
