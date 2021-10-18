interface IMessageService {
	writeMessage(message: string): void;
	messageByEmail(): void;
	messageBySms(): void;
	printMessage(): void;
}

class MessageServiceImpl implements IMessageService {
	messageContent:string;
	constructor(){
		this.messageContent = "";
	}
	writeMessage(message: string): void {
		this.messageContent = message;
	}
	printMessage(): void{
		console.log(`Message : ${this.messageContent}`);
	}
	messageByEmail(): void{
		console.log(`${this.messageContent} Message Sent by SMTP`);
	}
	messageBySms(): void{
		console.log(`${this.messageContent} Message Sent by Gateway`);
	}
}

function run(): void {
	const message: IMessageService = new MessageServiceImpl();
	message.writeMessage("Hello, SRP");
	message.printMessage();
	message.messageByEmail();
	message.messageBySms();
}

run();