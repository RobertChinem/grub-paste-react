import React from 'react'
import PropTypes from 'prop-types'


const TextArea = ({ label, name, value, onChange, error }) => {
	return (
		<div className="mb-3">
			<label htmlFor={name} className="form-label">{label}</label>
			<textarea value={value} onChange={onChange} className="form-control" id={name} rows="5"></textarea>
			{error && <p className="text-danger">{error}</p>}
		</div>
	)
}

TextArea.propTypes = {
	label: PropTypes.any, 
	name: PropTypes.any,
	value: PropTypes.any,
	onChange: PropTypes.any,
	error: PropTypes.any
}

export default TextArea
