const mysql = require('mysql');

const pool = mysql.createPool({
connectionLimit : 10,
host : 'altinokhost.com',
user : 'oyunstud_admin',
password : 'Albay563231AKS',
database : 'oyunstud_oyunstudyosu'
}).catch(console.log("Bağlantı kurulurken hata oluştu.. "));

module.exports = pool;