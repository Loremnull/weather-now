const express = require('express')
const app = express()
//setting view engien
app.set('view engine', 'ejs');

/*
    ROUTES
*/
app.get('/', function (req, res) {
  res.render('home.ejs');
});

//middleweare
app.use()



app.listen(3000 , function(){
    console.log('server is live on port 3000');
});
