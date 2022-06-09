const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('user', {
      // id_user:{
      //     type: DataTypes.INTEGER,
      //     autoIncrement: true,
      //     primaryKey: true
      // },
      email:{
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
              isEmail: true,
          }
      },
      name:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      employment_status:{
          type: DataTypes.ENUM(["empleado", "desempleado"]) //tema a consultar sobre el idioma y los valores
      },
      age:{
          type: DataTypes.INTEGER,
          allowNull: false,
          validate:{ //edad entre 0 y 200 años permitido
              min: 0,
              max: 200
          }
      },
      image:{
          type: DataTypes.STRING,
          validate:{
              isUrl: true,
          }
      }, 
      description:{
          type: DataTypes.TEXT
      },
      technologiesName:{
          type: DataTypes.ARRAY(DataTypes.STRING)
      },
      nationality:{
          type: DataTypes.STRING
      },
      url:{
          type: DataTypes.STRING,
          validate:{
              isUrl: true
          }
      },
      cv:{
          type: DataTypes.STRING //string de manera temporal,mientra descubro como se almacena
      }
  })
}
