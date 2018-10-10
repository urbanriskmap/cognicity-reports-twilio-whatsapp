import config from '../../config';
import NetworkService from '../../services/network';

exports.handler = (event, context, callback) => {
  // parse cognicity server notification body
  const body = JSON.parse(event.body);

  // create network service
  const network = new NetworkService(config);

  network.sendThanks(body)
      // Log response sent successfully
      .then((result) => callback(null, result))
      // Throw error
      .catch((err) => {
        console.log(JSON.stringify(err));
        callback(err);
      });
};
