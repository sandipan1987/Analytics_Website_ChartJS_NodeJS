var express = require("express");
var path = require('path');

const app = express();
const apiConfig = require('./Node API/API Config/apiConfig');
const dbQueryExecute = require('./Node API/DB/dbQueryExecute');
const dbQueries = require('./Node API/DB/DBQueries');

var env = 'PROD'

app.get('/api/v1/appVersion_Stores', function (req, res) {
    dbQueryExecute.executeQuery(dbQueries.appVersion_Stores, env).then(result => res.send(result));

});

app.get('/api/v1/appVersion_TC55', function (req, res) {
    dbQueryExecute.executeQuery(dbQueries.appVersion_TC55, env).then(result => res.send(result));

});

app.get('/api/v1/Device_Store_Count', function (req, res) {
    dbQueryExecute.executeQuery(dbQueries.Device_Store_Count, env).then(result => res.send(result));

});

app.get('/api/v1/Device_MultipleStore', function (req, res) {
    dbQueryExecute.executeQuery(dbQueries.Device_MultipleStore, env).then(result => res.send(result));

});

app.get('/api/v1/LoginType_Appversion', function (req, res) {
    dbQueryExecute.executeQuery(dbQueries.LoginType_Appversion, env).then(result => res.send(result));

});

app.get('/api/v1/StoreNumber_uers_TC55_Count', function (req, res) {
    dbQueryExecute.executeQuery(dbQueries.StoreNumber_uers_TC55_Count, env).then(result => res.send(result));

});

app.get('/api/v1/TC55_Browser', function (req, res) {
    dbQueryExecute.executeQuery(dbQueries.TC55_Browser, env).then(result => res.send(result));

});

app.get('/api/v1/TC55_Stores_Users', function (req, res) {
    dbQueryExecute.executeQuery(dbQueries.TC55_Stores_Users, env).then(result => res.send(result));

});


app.use('/', express.static(__dirname + '/dist/StoreAppAnalytics'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/StoreAppAnalytics', 'index.html'))
});


app.listen(apiConfig.port, () => {
    console.log(`Example app listening on port !` + apiConfig.port);
}
);


