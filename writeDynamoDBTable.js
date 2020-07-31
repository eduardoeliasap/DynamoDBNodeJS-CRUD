var AWS = require("aws-sdk");
const awsConfig = {
    "region": "us-east-1",
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": "_YOUR_ACCESSKEYID_", "secretAccessKey": "_YOUR_SECRETACCESSKEY_"
};
AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();

const createUser = function () {

    var input = {
        "id": "2", "name": "Mellina da Silva Simões", "email": "mellina@email.com"
    };
    var params = {
        TableName: "users",
        Item:  input
    };
    docClient.put(params, function (err, data) {
        if (!err) 
          console.log("User successfully created!!");                                
        else 
          console.log("User insertion failed - " + JSON.stringify(err, null, 2));                              
    });
}

createUser();