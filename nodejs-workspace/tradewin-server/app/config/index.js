// Local db
const port = process.env.PORT || 2020;
const host = '127.0.0.1';
const dbUrl = 'mongodb://127.0.0.1:27017/tradewin';
const authSource = 'admin';
const dbUser = 'ramakrishna567';
const dbPwd = 'ramki567';
const secretKay = 'Thisismysecretkeyforjwt'

// // remote TRADEWIN db
// const port = process.env.PORT || 2020;
// const host = '127.0.0.1';
// const dbUrl = 'mongodb://ds249123.mlab.com:49123/tradewin';
// const authSource = 'tradewin';
// const dbUser = 'ramakrishna567';
// const dbPwd = 'ramki567';
// const secretKay = 'Thisismysecretkeyforjwt'


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
    SECRETKEY : secretKay
}