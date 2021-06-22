import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, ...props }) => {
	return( 
		<div className="d-grid py-5">
			<button className="btn btn-lg btn-dark" {...props}>{children}</button>
		</div>
	)
}

Button.propTypes = {
	children: PropTypes.any, 
	props: PropTypes.any,
}

export default Button
