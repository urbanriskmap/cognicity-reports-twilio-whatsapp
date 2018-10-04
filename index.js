require('dotenv').load();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const app = require('express')();
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', function (req, res) {
//   // console.log('request received');
//
//   client.messages
//     .create({
//       body: 'Chal pada whatsapp',
//       from: 'whatsapp:+14155238886', // 202-88-FLOOD > will work for sms (remove whatsapp:), otherwise upgrade account
//       to: 'whatsapp:+16178034916' // Adi: 7346048580
//     })
//     .then(message => {
//       console.log(message.sid);
//       res.send('Message sent');
//     })
//     .catch(error => {
//       console.log(error);
//       res.send(error);
//     })
//     .done();
// });

app.post('/', (req, res) => {
  // const twiml = new MessagingResponse();
  // const message = twiml.message();
  //
  // message.body(''); // Text content
  // message.media(''); // Graphic for MMS
  //
  // res.writeHead(200, { 'Content-Type': 'text/xml' });
  // res.end(twiml.toString());

  client.messages
    .create({
      body: 'Please visit riskmap.us to see live flood reports',
      from: req.body.To,
      to: req.body.From
    })
    .then(msg => console.log('Reply sent'))
    .catch(err => console.log(err))
    .done();
});

app.listen(3000, function () {
  console.log('Twilio sms app running on port 3000!');
});
