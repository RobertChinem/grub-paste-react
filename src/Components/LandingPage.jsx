import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
	return (
		<div className="d-flex min-vh-100 align-items-center justify-content-center container">
			<div className="row">
				<div className="row text-center mb-5">
					<h1 className="display-1">GRUB PASTE</h1>
					<h5>O melhor compartilhador de códigos</h5>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-md-2 d-grid mb-3">
						<Link to='/saiba-mais' className="btn btn-lg btn-outline-dark">Saiba mais</Link>
					</div>
					<div className="col-md-2 d-grid mb-3">
						<Link to='/app' className="btn btn-lg btn-dark">Começar</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
