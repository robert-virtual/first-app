const { Sequelize } = require("sequelize");

const db = new Sequelize("desofiwdb", "root", "", {
  host: "localhost",
  dialect: "mysql" /* one of  | 'mariadb' | 'postgres' | 'mssql' */,
});

(async () => {
  try {
    await db.sync();
    console.log("connected to database");
  } catch (error) {
    throw new Error(error.toString());
  }
})();

module.exports = db;
