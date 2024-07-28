const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define(
  "User",
  {
    telegramId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
      },
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: {
            args: /^\+998\d{9}$/,
            msg: 'Telephone number must be in the format +998XXXXXXXXX'
          }

        }
    },
    isActive:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 100
      }
    }
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = User;
