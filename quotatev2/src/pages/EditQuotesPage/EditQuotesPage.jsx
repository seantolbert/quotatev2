import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function EditQuotePage(props) {
	const location = useLocation();

	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState(location.state.quote);

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleUpdateQuote(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Edit Quote</h1>
			<form ref={formRef} autoComplete='off' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Quote (required)</label>
					<input
						className='form-control'
						name='content'
						value={formData.content}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Quoter (required)</label>
					<input
						className='form-control'
						name='quotee'
						value={formData.quotee}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Title (required)</label>
					<input
						className='form-control'
						name='title'
						value={formData.title}
						onChange={handleChange}
						required
					/>
				</div>
				<button
					type='submit'
					className='btn btn-xs'
					disabled={invalidForm}
				>
					SAVE
				</button>
				&nbsp;&nbsp;
				<Link to='/quotes'>CANCEL</Link>
			</form>
		</>
	);
}
