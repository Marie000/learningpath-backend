import Sequelize from 'sequelize';

const sequelize = new Sequelize('learningpath','learningpath','learningpath',{
  host:'localhost',
  port:'3307',
  dialect:'mysql'
});

let db = {};

//models
db.user = sequelize.import('./models/user.js');

//relations
//db.room.belongsToMany(db.user,{through: 'room_users'});
//db.user.belongsToMany(db.room,{through: 'room_users'});

//db.user.hasMany(db.chatMessage, {as:'author'});
//db.room.hasMany(db.chatMessage, {as:'room'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;