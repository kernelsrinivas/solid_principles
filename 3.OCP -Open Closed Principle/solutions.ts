interface IMessageService {
	sendMessage(message: string): void;
}

class EmailServiceImple implements IMessageService {
	sendMessage(message: string): void {
		console.log(`${message} Message Sent by SMTP`);
	}
}

class SmSServiceImple implements IMessageService {
	sendMessage(message: string): void {
		console.log(`${message} Message Sent by Gateway`);
	}
}

class PushServiceImple implements IMessageService {
	sendMessage(message: string): void {
		console.log(`${message} Message Sent by Mqtt/Websocket`);
	}
}

class MessageSerive {
	messageService: IMessageService;
	constructor(messageService: IMessageService){
		this.messageService = messageService;
	}
	sendMessage(message: string): void {
		this.messageService.sendMessage(message);
	}
}

function run(): void {
	let message: MessageSerive = new MessageSerive(new EmailServiceImple());
	message.sendMessage("Hi");
	message = new MessageSerive(new SmSServiceImple());
	message.sendMessage("Hello");
	message = new MessageSerive(new PushServiceImple());
	message.sendMessage("Hey");
}

run();