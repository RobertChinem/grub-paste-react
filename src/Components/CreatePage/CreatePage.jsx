import React from 'react'
import Input from '../Forms/Input'
import InputPassword from '../Forms/InputPassword'
import Select from '../Forms/Select'
import Button from '../Forms/Button'
import TextArea from '../Forms/TextArea'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import CryptoJS from 'crypto-js'
import { FILE_POST } from '../../api'
import { useNavigate } from 'react-router'

const CreatePage = () => {
	const options = ['Plain text','C++','Python','Java']
	const name = useForm()
	const type = useForm() 
	const content = useForm()
	const password = useForm(false)

	const { request } = useFetch()
	const navigate = useNavigate()


	React.useEffect(() => {
		if(!type.value){
			type.setValue(options[0])
		}
	}, [type, options])
	

	async function handleSubmit(event){
		event.preventDefault()

		const validations = [
			name.validate(),
			type.validate(),
			content.validate()
		]

		if(validations.reduce((a, b) => a && b, true)) {
			const file = {
				name: name.value,
				type: type.value,
				content: content.value,
				protected: false,
				pattern: 'pattern'
			}

			if(password.value.length > 0) {
				file.content = CryptoJS.AES.encrypt(file.content, password.value).toString()
				file.pattern = CryptoJS.AES.encrypt(file.pattern, password.value).toString()
				file.protected = true
			}

			const {url, options} = FILE_POST(file)

			const { response, json } = await request(url, options)
			
			if(response.ok) {
				const { _id } = json
				navigate(`/app/view/${_id}`)
			}
		}
	}

	return (
		<div className="row d-flex justify-content-center mt-5">
			<div className="col-md-4 text-center p-3 border">
				<h1>Criar</h1>
				<form onSubmit={handleSubmit}>
					<Input label="Nome do arquivo" name="filename" {...name}/>
					<Select options={options} label="Tipo" name="type" {...type}/>
					<InputPassword label="Senha (opcional)" name="password" {...password} />
					<TextArea label="Conteúdo" name="content" {...content}/>
					<Button>Salvar</Button>
				</form>
			</div>
		</div>
	)
}

export default CreatePage
