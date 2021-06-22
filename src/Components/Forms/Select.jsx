import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, name, value, onChange, error, options }) => {
	return (
		<div className="mb-3">
			<label htmlFor={name} className="form-label">{label}</label>
			<select value={value} onChange={onChange} className="form-select" id={name} required>
				{options.map(o => <option key={o} value={o}>{o}</option>)}
			</select>
			{error && <p className="text-danger">{error}</p>}
		</div>
	)
}

Select.propTypes = {
	label: PropTypes.any,
	name: PropTypes.any, 
	value: PropTypes.any,
	onChange: PropTypes.any,
	error: PropTypes.any, 
	options: PropTypes.any, 
}

export default Select
