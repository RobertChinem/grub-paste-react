import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
	return (
		<div className="mt-5 p-5">
			<div className="row d-flex justify-content-center pt-5">
				<div className="col-md-4 border border-dark rounded">
					<div className="row text-center my-5">
						<h1>O que deseja fazer ?</h1>
					</div>
					<div className="row py-5 d-flex justify-content-center">
						<div className="col-5 d-grid">
							<Link className="btn py-3 btn-outline-dark" to='search'>
								<i className="bi bi-search"></i> Buscar
							</Link>
						</div>
						<div className="col-5 d-grid">
							<Link className="btn py-3 btn-dark" to='create'>
								<i className="bi bi-plus-lg"></i> Criar arquivo
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Menu
