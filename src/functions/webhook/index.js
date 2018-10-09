import config from '../../config';
import NetworkService from '../../services/network';

exports.handler = (event, context, callback) => {
  // parse twilio-whatsapp programmable sms body
  const body = JSON.parse(event.body);

  // create network service
  const network = new NetworkService(config);

  network.handleResponse(body)
      // Log responded successfully
      .then((result) => callback(null, result))
      // Throw error
      .catch((err) => callback(err));
};