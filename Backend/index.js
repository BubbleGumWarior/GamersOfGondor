const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, '../Frontend/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../Frontend/client/build/index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Username: ${username}, Password: ${password}`);
    res.send({ status: 'success' });
  });   

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
