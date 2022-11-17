var oracledb = require('oracledb');
const dbConfig = require('./dbConfig');

module.exports.executeQuery = async function (query,env) {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: dbConfig[env].user,
            password: dbConfig[env].password,
            connectString: dbConfig[env].connectString
        });
        console.log("Successfully connected to Oracle!");
        let result = await connection.execute(
            query,
            []);
        return convertDBResultToJson(result);
    } catch (err) {
        console.log("Error: ", err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('DB connection closed');
            } catch (err) {
                console.log("Error when closing the database connection: ", err);
            }
        }
    }
}

function convertDBResultToJson(result) {
    let JSONResult = [];
    let JSONKeys = [];
    result.metaData.forEach(function (data) {
        JSONKeys.push(data.name);
    }
    );
    result.rows.forEach(function (row) {
        var JSONRow = {};
        var counter = 0;
        JSONKeys.forEach(function (key) {
            JSONRow[key] = row[counter];
            counter++;
        });
        JSONResult.push(JSONRow);
    });
    return JSONResult;
}