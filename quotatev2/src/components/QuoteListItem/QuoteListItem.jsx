import React from 'react';
import { Link } from 'react-router-dom';

export default function QuoteListItem({ quote, handleDeleteQuote }) {
	return (
		<div className='panel panel-default'>
			<div className='panel-heading'>
				<blockquote className='quote-submit'>{quote.content}</blockquote>
				<small className='source-submit'> - {quote.quotee} <span>{quote.title}</span></small>
			</div>
			<div className='details-button-container'>
				<Link
					className='details-button'
					to={{
						pathname: 'quotes/details',
						state: { quote },
					}}
				>
					DETAILS
				</Link>
				<Link
					className='edit-button'
					to={{
						pathname: 'quotes/edit',
						state: { quote },
					}}
				>
					EDIT
				</Link>
				<button
					className='delete-button'
					onClick={() => handleDeleteQuote(quote._id)}
				>
					DELETE
				</button>
			</div>
		</div>
	);
}
