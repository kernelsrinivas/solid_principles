var MessageServiceImpl = /** @class */ (function () {
    function MessageServiceImpl() {
        this.messageContent = "";
    }
    MessageServiceImpl.prototype.writeMessage = function (message) {
        this.messageContent = message;
    };
    MessageServiceImpl.prototype.printMessage = function () {
        console.log("Message : " + this.messageContent);
    };
    MessageServiceImpl.prototype.messageByEmail = function () {
        console.log(this.messageContent + " Message Sent by SMTP");
    };
    MessageServiceImpl.prototype.messageBySms = function () {
        console.log(this.messageContent + " Message Sent by Gateway");
    };
    return MessageServiceImpl;
}());
function run() {
    var message = new MessageServiceImpl();
    message.writeMessage("Hello, SRP");
    message.printMessage();
    message.messageByEmail();
    message.messageBySms();
}
run();
