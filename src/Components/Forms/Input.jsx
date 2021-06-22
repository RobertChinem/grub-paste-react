import React from 'react'
import PropTypes from 'prop-types'


const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
	return (
		<div className="mb-3">
			<label htmlFor={name} className="form-label">{label}</label>
			<input 
				type={type} 
				className="form-control" 
				id={name} 
				value={value} 
				onChange={onChange}
				onBlur={onBlur}
			/>
			{error && <p className="text-danger">{error}</p>}
		</div>
	)
}

Input.propTypes = {
	label: PropTypes.any, 
	type: PropTypes.any, 
	name: PropTypes.any,
	value: PropTypes.any,
	onChange: PropTypes.any,
	error: PropTypes.any,
	onBlur: PropTypes.any
}

export default Input
