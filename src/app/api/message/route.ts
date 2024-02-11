import { inputChecker } from "@/assets/js/tools";

export async function POST(request: Request) {
	try {
		const { email, name } = await request.json()
		if (!email) return new Response(JSON.stringify({message: 'Email is not provided'}), {status: 400})
		if (!name) return new Response(JSON.stringify({message: 'Name is not provided'}), {status: 400})

		//check email is valid
		let errText = inputChecker({ value: name, valueType: 'name' })
		if (errText !== null) return new Response(JSON.stringify({ message: `Name is not correct: ${errText}` }), { status: 400 })

		errText = inputChecker({ value: email, valueType: 'email' })
		if (errText !== null) return new Response(JSON.stringify({ message: `Email is not correct: ${errText}` }), { status: 400 })

		//send to TG
		const urlMessage= `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`;
		try { 
			const response = await fetch(urlMessage, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id: process.env.TG_CHAT_ID, text: `Name: ${name}, email: ${email}` })
			})
			if (!response.ok) {
				console.log('Error while sending message using TG.', response);
				return new Response(JSON.stringify({message: "Message cann't be sent, please try again later"}), {status: 400})
			}
			
			return new Response(JSON.stringify({ message: 'Your email has been sent' }), {headers: {"Content-Type": "application/json" }, status: 200 })

		} catch (e) {
			console.log(`Something wrong while sending message to TG, try again later. Error: ${e}`)
			new Response(JSON.stringify({message: "Message cann't be sent, please try again later"}), {status: 400})
		}


	} catch (error) {
		if (request.body?.locked) return new Response(JSON.stringify({ message: 'No payload found' }), { status: 400 })
		return new Response(JSON.stringify({ message: `Internal server error: ${error}` }), { status: 500 })
	}
}