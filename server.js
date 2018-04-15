import express from 'express';
let app = express();
import bodyParser from 'body-parser';
import db_sql from './database/db';
import _ from 'underscore';
let server = require('http').createServer(app);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../src/'));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', ' Content-Type');
  next();
});

app.post('/api/users',(req,res)=>{
  let newUser = {user_name:req.body.user_name,Auth0Id:req.body.Auth0Id}
  db_sql.user.findOne({where:{Auth0Id:newUser.Auth0Id}})
    .then((result)=>{
      if(result===null){
        db_sql.user.create(newUser);
        res.json(newUser.user_name);
      }
    },(e)=>{
      res.status(400).send(e)
    })
});

db_sql.sequelize.sync()
  .then(()=>{
    server.listen(9000,()=>{
      console.log('server listening on port 9000')
    })
  }).catch((error)=>{
  console.log(error); // db errors
})
