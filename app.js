const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
require("./db/conn")
const noticeRoute = require('./Routes/noticeRoute')
const loginRoute = require('./Routes/loginRoute')
const createNewsRoute =  require('./Routes/createNewsRoute')
const privateNotice =  require('./Routes/privateNoticeRoute')
const rmListRoute =  require('./Routes/rmListRoute')
const profileRoute = require('./Routes/profileRoute')
const transactionsRoute = require('./Routes/transactionRoute')
const dashboardRoute = require('./Routes/getDashboardRoute')
const withdrawRoute = require('./Routes/allWithdrawRoute')
const openRoute = require('./Routes/openWIthdrawRoute')
const closedRoute = require('./Routes/closedWithdrawRoute')
const accountsRoute = require('./Routes/getAccountsListRoute')
const Notice = require("./models/Notice")
const formidable = require('express-formidable');
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express()
const checkAuth = require("./middleware/check-auth")
app.use(express.json());
// app.use(formidable());
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
//ALL ROUTERS CONNECT
app.use('/v1/createmessage/public', noticeRoute )
app.use('/v1/public_notifications', noticeRoute )
app.use('/v1/user_profile', profileRoute )
app.use('/v1/open_withdraw', openRoute )
app.use('/v1/closed_withdraw', closedRoute )

app.use('/v1/transactions', transactionsRoute )
app.use('/v1/dashboard', dashboardRoute )
app.use('/v1/all_withdraw_requests', withdrawRoute )
app.use('/v1/createnews', createNewsRoute )
app.use('/v1/getnews', createNewsRoute )
app.use('/v1/auth/login', loginRoute )
app.use('/v1/createmessage/private', privateNotice )
app.use('/v1/private_notifications', privateNotice )
app.use('/v1/rmlist', rmListRoute )
app.use('/v1/accounts_list', accountsRoute )
app.get("/", checkAuth, function(req, res){
    res.send( "working");
});
 // PORT
app.listen(3006, () => {
    console.log(`server is running`)
});











