var AWS = require("aws-sdk");
const awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "_YOUR_ACCESSKEYID_", "secretAccessKey": "_YOUR_SECRETACCESSKEY_"
};
AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();
const readByKey = function () {
    var params = {
        TableName: "users",
        Key: {
            "id": "1"
        }
    };
    docClient.get(params, function (err, data) {
        if (!err) 
          console.log(params.TableName + " Success - " + JSON.stringify(data, null, 2));            
        else 
          console.log(params.TableName + " error - " + JSON.stringify(err, null, 2));                
    })
}

readByKey();
        