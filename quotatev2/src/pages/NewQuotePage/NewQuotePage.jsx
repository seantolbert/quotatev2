import React, { useState, useRef, useEffect } from 'react';

export default function NewQuotePage(props) {
	const [invalidForm, setValidForm] = useState(true);
	const [formData, setFormData] = useState({
        content: '',
		quotee: '',
		title: ''
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity()
			? setValidForm(false)
			: setValidForm(true);
	}, [formData]);

	const handleSubmit = e => {
		e.preventDefault();
		props.handleAddQuote(formData);
	};

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Add Quote</h1>
			<form autoComplete='off' ref={formRef} onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>Quote </label>
					<textarea
						className='form-control'
						placeholder='Enter New Quote Here...'
						name='content'
						value={formData.content}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Quoter </label>
					<input
						className='form-control'
						name='quotee'
						value={formData.quotee}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label>Source </label>
					<input
						className='form-control'
						name='title'
						value={formData.title}
						onChange={handleChange}
					/>
				</div>
				<button type='submit' className='btn' disabled={invalidForm}>
					ADD
				</button>
			</form>
		</>
	);
}
