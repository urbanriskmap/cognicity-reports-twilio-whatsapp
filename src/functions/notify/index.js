import config from '../../config';
import NetworkService from '../../services/network';

exports.handler = (event, context, callback) => {
  // TODO: parse server notification body
  // const body = JSON.parse(event.body);
  const reportId = 'body.CHECK_KEY';
  const userNumber = 'body.CHECK_KEY';

  const network = new NetworkService(config);

  network.notify(reportId, userNumber)
      // Log response sent successfully
      .then((result) => callback(null, result))
      // Throw error
      .catch((err) => callback(err));
};
