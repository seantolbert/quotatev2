import React from 'react';
import { useLocation } from 'react-router-dom';
import QuoteCard from '../../components/QuoteCard/QuoteCard';

export default function QuoteDetailPage(props) {
	// Refer to PuppyListItem to see how puppy is being passed via the <Link>
	// using the useLocation hook from react-router dom, to grab the
	// state, desctructering the puppy variable attached to state
	const {
		state: { quote },
	} = useLocation();

	return (
		<>
			<h1>Details</h1>
			<QuoteCard quote={quote} key={quote._id} />
		</>
	);
}

