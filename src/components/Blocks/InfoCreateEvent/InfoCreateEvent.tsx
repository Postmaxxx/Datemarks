'use client'
import Link from 'next/link'
import './info-create-event.scss'
import { linkPrivacy, linkTerms, requests } from '@/assets/js/consts'
import Input, { IInputFunctions } from '@/components/Input/Input'
import { useEffect, useRef, useState } from 'react'
import { useAppContext } from '@/hooks/useAppContext'
import ModalMessage from '../ModalMessage/ModalMessage'
import Preloader from '@/components/Preloader/Preloader'


const InfoCreateEvent: React.FC = ():JSX.Element => {
	const { modal } = useAppContext()
	const _email = useRef<IInputFunctions>(null)
	const _name = useRef<IInputFunctions>(null)
	const [sending, setSending] = useState<boolean>(false)

	useEffect(() => {
		if (sending) {
			modal?.current?.openModal({
				name: 'sendingPreloader',
				onClose: (() => modal.current?.closeCurrent()),
				closable: false,
				children: <Preloader />
			})
		} else {
			modal?.current?.closeName('sendingPreloader')
		}
	}, [sending])


	const onEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const fieldsList = [_name, _email]
		const errors: string[] = fieldsList
			.map(el => el.current?.getError()?.errorText)
			.filter(el => el) as string[]
		if (errors.length > 0) {
			///modal with errors
			modal?.current?.openModal({
                name: 'error',
                onClose: (() => modal.current?.closeCurrent()),
				children: <ModalMessage 
					texts={errors}
					button='OK'
					header='Errors found:'
					status='error'
					onClick={() => modal.current?.closeCurrent()}
				/>
            })
			return
		}

		const name = _name.current?.getValue()
		const email = _email.current?.getValue()
		setSending(true)
		
		//send data
		try {
			const response: Response = await fetch(requests.sendEmail.url, {
                method: requests.sendEmail.method,
                headers: {
                    "Content-Type": 'application/json',
                },
				body: JSON.stringify({ email, name })
            })
			
			const result: {message: string} = await response.json()
			if (!response.ok) {
				modal?.current?.openModal({
					name: 'error',
					onClose: (() => modal.current?.closeCurrent()),
					children: <ModalMessage 
						texts={[result.message]}
						button='OK'
						header='Errors occured:'
						status='error'
						onClick={() => modal.current?.closeCurrent()}
					/>
				})
				setSending(false)
				return
			}
			
			modal?.current?.openModal({
				name: 'success',
				onClose: (() => {
					modal.current?.closeCurrent()
					_name.current?.setValue('')
					_email.current?.setValue('')
				}),
				children: <ModalMessage 
					texts={[result.message]}
					button='Close'
					header='Success'
					status='success'
					onClick={() => {
						modal.current?.closeCurrent()
						_name.current?.setValue('')
						_email.current?.setValue('')
					}}
				/>
			})
		} catch (error) {
			const message = error instanceof Error ?  error.message : String(error)
			modal?.current?.openModal({
                name: 'error',
                onClose: (() => modal.current?.closeCurrent()),
				children: <ModalMessage 
					texts={[message]}
					button='OK'
					header='Errors occured:'
					status='error'
					onClick={() => modal.current?.closeCurrent()}
				/>
            })
		}
		setSending(false)
	}



	return (
		<div className='block_info-create-events'>
			<h2>Create events in minutes</h2>
			<form onSubmit={onEmailSubmit}>
				<Input 
					ref={_name}
					name='name'
					valueType='name'
					id='name'
					placeholder='Your name'
					description='Enter your name to subscribe'
				/>
				<Input 
					ref={_email}
					name='email'
					valueType='email'
					id='email'
					placeholder='Your email'
					description='Enter your email to subscribe'
				/>
				<button className='button_square' type='submit' disabled={sending}>Start</button>
			</form>
			<p>By signing up, you agree to the <Link href={linkTerms}>Terms</Link> and <Link href={linkPrivacy}>Privacy Policy</Link>.</p>
		</div>
	)
}




export default InfoCreateEvent