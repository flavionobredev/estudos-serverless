const { SQSClient, SendMessageCommand,  } = require("@aws-sdk/client-sqs");

const hanlder = async (event) => {
  for (const record of event.Records) {
    const messageAttributes = record.messageAttributes;
    console.log(
      "Message Attribute: ",
      messageAttributes.AttributeName.stringValue
    );
    console.log("Message Body: ", record.body);
  }
};

module.exports = {
  hanlder,
};
