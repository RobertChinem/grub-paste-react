import React from 'react'
import PropTypes from 'prop-types'

const FilePreview = ({name, type, _id}) => {

	return (
		<div className="card mb-3">
			<div className="card-body">
				<h3 className="card-title">
					<a href={`/app/view/${_id}`} className="text-dark">{name}</a>
				</h3>
				<h6 className="card-subtitle mb-2 text-muted">{type}</h6>
			</div>
		</div>
	)
}

FilePreview.propTypes = {
	name: PropTypes.any,
	type: PropTypes.any,
	_id: PropTypes.any
}

export default FilePreview
