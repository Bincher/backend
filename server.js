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
  res.json({result: '스마트앱프로그래밍 백엔드'})
})

app.get('/cookie', (req, res) => {
    const sql = 'select * from Cookie'
    
      db.query(sql, (err, rows) => {
          if (err) {
              res.json({result: "error"})
              return console.log(err)
          }
          res.json(rows)
      })
  })

app.get('/location', (req, res) => {
    const sql = 'select * from Location'
    
      db.query(sql, (err, rows) => {
          if (err) {
              res.json({result: "error"})
              return console.log(err)
          }
          res.json(rows)
      })
  })
  app.get('/type', (req, res) => {
    const sql = 'select * from Type'
    
      db.query(sql, (err, rows) => {
          if (err) {
              res.json({result: "error"})
              return console.log(err)
          }
          res.json(rows)
      })
  })
  app.get('/rarity', (req, res) => {
    const sql = 'select * from Rarity'
    
      db.query(sql, (err, rows) => {
          if (err) {
              res.json({result: "error"})
              return console.log(err)
          }
          res.json(rows)
      })
  })
app.listen(port, () => {
  console.log(`서버 실행됨 (port ${port})`)
})