import React from 'react'
import { useParams } from 'react-router-dom'
import { FILE_GET } from '../api'
import useFetch from '../Hooks/useFetch'
import hljs from 'highlight.js'
import InputPassword from './Forms/InputPassword'
import useForm from '../Hooks/useForm'
import CryptoJS from 'crypto-js'


const languages = {
	'C++': 'c++',
	'Python': 'python',
	'Java': 'java',
	'Plain text': 'plaintext'
}

const ContentView = () => {
	const { id } = useParams()
	const { request } = useFetch()
	const [file, setFile] = React.useState(null)
	const [copying, setCopying] = React.useState(false)
	const [error, setError] = React.useState(0)
	const password = useForm()
	const textarea = React.useRef(null)

	React.useEffect(async() => {
		const {url, options} = FILE_GET(id)
		const {json} = await request(url, options)
		setFile(json)
	}, [id])

	React.useEffect(() => {
		hljs.highlightAll()
	}, [file])

	React.useEffect(() => {
		if(copying) {
			setTimeout(()=> {
				setCopying(false)
			}, 1500)
		}
	}, [copying])

	function handleClickCopyBtn() {
		setCopying(true)
		textarea.current.className = ''
		textarea.current.value = file.content
		textarea.current.select()
		document.execCommand('copy')
		textarea.current.className = 'd-none'
	}

	function handleUnlockFile(){
		function decrypt(string, key) {
			const bytes = CryptoJS.AES.decrypt(string, key)
			return bytes.toString(CryptoJS.enc.Utf8)
		}

		if(decrypt(file.pattern, password.value) === 'pattern'){
			setFile({
				...file,
				content: decrypt(file.content, password.value),
				pattern: decrypt(file.pattern, password.value),
				protected: false
			})
		}
		else setError(error+1)
	}

	if(file === null) return null

	return (
		<div className="row d-flex justify-content-center mt-5">
			<textarea className="d-none" ref={textarea}/>
			<div className="row d-flex justify-content-center">
				<div className="col-md-4">
					{file.protected && (
						<div className="card mb-3">
							<div className="card-body text-center">
								<h3 className="card-title">
									O arquivo está criptografado
								</h3>
								<InputPassword name="password" label="Senha" {...password} />
								{error > 0 && (
									<p className="text-danger">senha incorreta ({error})</p>
								)}
								<div className="d-grid mt-4">
									<button onClick={handleUnlockFile} type="button" className="btn btn-lg btn-dark">Desbloquear</button>
								</div>
							</div>
						</div>
					)}
					
				</div>
			</div>
			{file && !file.protected && (
				<div className="col-md-8">
					<div className="d-flex justify-content-between align-items-center">
						<h1 className="mb-5">{file.name}</h1>
						{copying ? (
							<button onClick={handleClickCopyBtn} className="btn btn-dark">Copiado</button>
						) : (
							<button onClick={handleClickCopyBtn} className="btn btn-outline-dark">Copiar</button>
						)}
					
					</div>
					<pre>
						<code className={`language-${languages[file.type]}`}>
							{file.content}
						</code>
					</pre>
				</div>
			)}
		</div>
	)
}

export default ContentView
