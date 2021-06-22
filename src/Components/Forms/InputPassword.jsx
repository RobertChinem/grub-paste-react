import React from 'react'
import PropTypes from 'prop-types'


const InputPassword = ({ label, name, value, onChange, onBlur }) => {
	const [visible, setVisible] = React.useState(false)
    
	function handleClick() {
		setVisible(!visible)
	}

	return (
		<div className="mb-3">
			<label htmlFor={name} className="form-label">{label}</label>
			<div className="input-group">
				<input 
					type={visible ? 'text': 'password'} 
					className="form-control" 
					id={name} 
					value={value} 
					onChange={onChange}
					onBlur={onBlur}
				/>
				<button onClick={handleClick} className="btn btn-outline-dark" type="button">
					<i className="bi bi-eye"></i>
				</button>
			</div>
		</div>
	)
}

InputPassword.propTypes = {
	label: PropTypes.any, 
	type: PropTypes.any, 
	name: PropTypes.any,
	value: PropTypes.any,
	onChange: PropTypes.any,
	onBlur: PropTypes.any
}

export default InputPassword
