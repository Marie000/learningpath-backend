module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user',{
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Auth0Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
    },
    
  })
}