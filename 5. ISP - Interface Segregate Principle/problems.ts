interface IMessageService {
	sendEmail(message: string): void;
	sendSms(message: string): void;
}

class MessageServiceClient implements IMessageService {
	sendEmail(message: string): void{
		console.log(`${message} Message Sent by SMTP`);
	}
	sendSms(message: string): void{
		console.log(`${message} Message Sent by Gateway`);
	}
}

function run(): void {
	const message: IMessageService = new MessageServiceClient();
	message.sendEmail("Hi");
	message.sendSms("Hello");
}

run();