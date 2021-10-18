interface IMessageService {
	messageByEmail(message: string): void;
	messageBySms(message: string): void;
}

class MessageServiceImpl implements IMessageService {
	messageByEmail(message: string): void{
		console.log(`${message} Message Sent by SMTP`);
	}
	messageBySms(message: string): void{
		console.log(`${message} Message Sent by Gateway`);
	}
}

function run(): void {
	const message: IMessageService = new MessageServiceImpl();
	message.messageByEmail("Hi");
	message.messageBySms("Hello");
}

run();