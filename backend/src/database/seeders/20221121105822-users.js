"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Enzo",
          password: bcrypt.hashSync("123456S8", 3),
          accountId: 1,
        },
        {
          username: "Ana",
          password: bcrypt.hashSync("123456S8", 3),
          accountId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
