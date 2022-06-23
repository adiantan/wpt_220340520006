const { response } = require("express");
const express = require("express");
const app = express();

const mysql = require("mysql2");

app.use(express.static("abc"));

app.listen(900);

app.get("/getdetails", (req, res) => {
  const dobject = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "pleasework",
    port: 3306,
  };

  const wpt = mysql.createConnection(dobject);
  let output = { dtails: { bi: 0, bk: "", pb: 0 } };
  let bi = req.query.bi;
  wpt.query(
    "select bookid,bookname,price where bookid=?",
    [bi],

    (error, row) => {
      if (error) {
        console.log("error is found");
      } else {
        if (rows.length > 0) {
          console.log("details are found");
          output.detail = row[0];
        } else {
          console.log("book  not found");
        }
      }

      console.log(output);
      response.send(output);
    }
  );
});

app.get("/getupdate");
(req, res) => {
  const dobject = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "pleasework",
    port: 3306,
  };

  const wpt = mysql.createConnection(dobject);
  let output = { dtails: { bi: 0, bk: "", pb: 0 } };
  let bi = req.query.bi;
  let bk = req.query.bk;
  let pb = req.query.pb;
  wpt.query(
    "update book set pb=? where bi=? ,bk=?",
    [pb, bi, bk],

    (error, row) => {
      if (error) {
        console.log("error is found");
      } else {
        if (rows.length > 0) {
          console.log("details are found");
          output.detail = row[0];
        } else {
          console.log("price is not updated");
        }
      }

      console.log(output);
      response.send(output);
    }
  );
};
