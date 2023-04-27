import express from 'express';
const app = express();
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 3000;


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Configure the app
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use([
  morgan('dev'),
  express.static(path.join(__dirname, 'public')),
]);

app.get('/', async (req, res) => {

  // const url = "http://api:5000/api/login";
  // const data = {
  //   email: "aaron@aarondev.co.uk",
  //   password: "password"
  // };

  // await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  // .then(res => res.json())
  // .then((json) => {
  //   console.log(json)
  //   return res.render('index', {data: json})
  // })
  // .catch(err => console.log(err));
  res.render('home')
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// app.get('/template', (req, res) => {
//   res.render('template');
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
