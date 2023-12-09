import express from "express"
import mysql from "mysql"

const app = express()
const port = 3010

const db = mysql.createConnection({
	host: 'svc.sel5.cloudtype.app',
    port: 32274,
	user: 'root',
	password: 'mysql1234',
	database: 'mydb',
})

db.connect()

app.get('/', (req, res) => {
    res.json({ result: '스마트앱프로그래밍 백엔드' });
  });
  
  app.get('/cookie', (req, res) => {
    const sql = 'SELECT Cookie.cookie_id, Cookie.name, Cookie.img, Cookie.skill, Cookie.element, Location.img AS Location_img, Type.img AS Type_img, Rarity.img AS Rarity_img FROM Cookie INNER JOIN Location ON Cookie.Location_name = Location.name INNER JOIN Type ON Cookie.Type_name = Type.name INNER JOIN Rarity ON Cookie.Rarity_name = Rarity.name';
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.json({ result: "error" });
        return console.log(err);
      }
      res.json(rows);
    });
  });
  
  app.get('/cookie_non', (req, res) => {
    const sql = 'SELECT * FROM Cookie';
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.json({ result: "error" });
        return console.log(err);
      }
      res.json(rows);
    });
  });
  
  app.get('/location', (req, res) => {
    const sql = 'SELECT * FROM Location';
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.json({ result: "error" });
        return console.log(err);
      }
      res.json(rows);
    });
  });
  
  app.get('/type', (req, res) => {
    const sql = 'SELECT * FROM Type';
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.json({ result: "error" });
        return console.log(err);
      }
      res.json(rows);
    });
  });
  
  app.get('/rarity', (req, res) => {
    const sql = 'SELECT * FROM Rarity';
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.json({ result: "error" });
        return console.log(err);
      }
      res.json(rows);
    });
  });
  
  app.listen(port, () => {
    console.log(`서버 실행됨 (port ${port})`);
  });