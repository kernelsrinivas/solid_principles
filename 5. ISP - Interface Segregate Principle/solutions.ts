interface IEmailService {
	sendEmail(message: string): void;
}

interface ISmsService {
	sendSms(message: string): void;
}

class MessageServiceClient implements IEmailService, ISmsService {
	sendEmail(message: string): void{
		console.log(`${message} Message Sent by SMTP`);
	}
	sendSms(message: string): void{
		console.log(`${message} Message Sent by Gateway`);
	}
}

function run(): void {
	const message: MessageServiceClient = new MessageServiceClient();
	message.sendEmail("Hi");
	message.sendSms("Hello");
}

run();