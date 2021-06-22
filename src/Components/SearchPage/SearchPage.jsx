import React from 'react'
import FilePreview from './FilePreview'
import { FILES_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'

const SearchPage = () => {
	const [name, setName] = React.useState('')
	const [files, setFiles] = React.useState([])
	const { request } = useFetch()


	async function handleChange({target}){
		setName(target.value)
	}

	React.useEffect(async () => {
		async function search() {
			if(name.length === 0) setFiles([])
			else {
				const { url, options } = FILES_GET(name)
				const { response, json } = await request(url, options)
				if(response.ok) setFiles(json)
			}
		}
		await search()
	}, [name, request])


	return (
		<div className="row d-flex justify-content-center">
			<div className="col-md-6 my-5">
				<h1 className="text-center mb-5">Buscar</h1>
				<div className="mb-5">
					<input 
						onChange={handleChange} 
						name='name' 
						placeholder='Digite o nome do arquivo...'
						className="form-control form-control-lg"
					/>
				</div>
				{ files.map((file) => <FilePreview key={file._id} {...file} />) }
			</div>
		</div>
	)
}

export default SearchPage
