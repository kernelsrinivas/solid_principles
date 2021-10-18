abstract class PartialMessageService {
	abstract sendMessage(message: string): void;
	checkInternet(): boolean {
		console.log("Checking Internet");
		return true;
	}
}

class EmailServiceImple extends PartialMessageService {
	sendMessage(message: string): void {
		console.log(`${message} Message Sent by SMTP`);
	}
}

class SmSServiceImple extends PartialMessageService {
	sendMessage(message: string): void {
		console.log(`${message} Message Sent by Gateway`);
	}
}

class PushServiceImple extends PartialMessageService {
	sendMessage(message: string): void {
		console.log(`${message} Message Sent by Mqtt/Websocket`);
	}
}

class MessageSerive {
	messageService: PartialMessageService;
	constructor(messageService: PartialMessageService){
		this.messageService = messageService;
	}
	sendMessage(message: string): void {
		if (this.messageService.checkInternet()) {
			this.messageService.sendMessage(message);
		}
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