import express from 'express';
import bodyParser from 'body-parser';

import mailer from './indexMailer'

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server berjalan. Klik ke "/contact" untuk mengirim email')
})

app.post('/contact', (req, res) => {
  const { email = '', nama = '', message = '' } = req.body

  mailer({ email, nama, text: message }).then(() => {
    console.log(`Berhasil kirim email "${message}" dari <${name}> ${email}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Gagal kirim email "${message}" dari <${name}> ${email} karena error ${error && error.message}`);
    res.redirect('/#error');
  })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App ada di Port ${PORT}!`);
})