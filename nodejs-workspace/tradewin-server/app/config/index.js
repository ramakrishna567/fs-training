require('dotenv').config();

// // Local db
// const port = process.env.PORT || 2020;
// const host = '127.0.0.1';
// const dbUrl = 'mongodb://127.0.0.1:27017/tradewin';
// const authSource = 'admin';
// const dbUser = 'ramakrishna567';
// const dbPwd = 'ramki567';
// const secretKay = 'Thisismysecretkeyforjwt'

// // remote TRADEWIN db
// const port = process.env.PORT || 2020;
// const host = '127.0.0.1';
// const dbUrl = 'mongodb://ds249123.mlab.com:49123/tradewin';
// const authSource = 'tradewin';
// const dbUser = 'ramakrishna567';
// const dbPwd = 'ramki567';
// const secretKay = 'Thisismysecretkeyforjwt'

// MySql db at ubuntu
const sql_dbUrl = 'localhost';
const sql_authSource = 'tradewin';
const sql_dbUser = 'root';
const sql_dbPwd = 'ramki567';

// PROCESS ENV TRADEWIN db
const port = process.env.PORT;
const host = process.env.HOST;
const dbUrl = process.env.DB_HOST;
const authSource = process.env.DB_AUTH;
const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PASS;
const secretKay = process.env.SECRET_KEY;


// //Remote db(mLab) - rk_bank-
// const port = 5090;
// const host = '127.0.0.1';
// const dbUrl = 'mongodb://ds159263.mlab.com:59263/rk_bank';
// const authSource = 'rk_bank';
// const dbUser = 'bank_admin';
// const dbPwd = 'ramki567';
// const secretKay = 'ThisIs Bank Of RamaKrishna Key'


// //Remote db(mLab) - tech_solutions
// const port = 4567;
// const host = '127.0.0.1';
// const dbUrl = 'mongodb://ds131237.mlab.com:31237/tech_solutions';
// const authSource = 'tech_solutions';
// const dbUser = 'tech_admin';
// const dbPwd = 'ramki567';

module.exports = {
    PORT : port,
    HOST : host,
    DBURL : dbUrl,
    AUTHSRC : authSource,
    DBUSR : dbUser,
    DBPWD : dbPwd,
    SECRETKEY : secretKay,
    SQL_DBURL : sql_dbUrl,
    SQL_DBUSER : sql_dbUser,
    SQL_DBPWD : sql_dbPwd,
    SQL_DB : sql_authSource
}