import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});
// connect to the data base
db.connect((err) => {
  if (err) {
    console.error("database connect error: " + err.stack);
    return;
  }
  console.log("database connnect success");
});

export default db;
