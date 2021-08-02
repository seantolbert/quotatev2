const Quote = require('../../models/quote');

module.exports = {
	index,
	create,
	show,
	update,
	delete: deleteOne,
};

async function index(req, res) {
	const puppies = await Quote.find({});
	res.status(200).json(puppies);
}

async function create(req, res) {
	const newQuote = await Quote.create(req.body);
	res.status(201).json(newQuote);
}

async function show(req, res) {
	const quote = await Quote.findById(req.params.id);
	res.status(200).json(quote);
}

async function update(req, res) {
	const updatedQuote = await Quote.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedQuote);
}

async function deleteOne(req, res) {
	// find document by the ID from the collection mapped to the Model and remove that document,
	// return the removed document
	const deletedQuote = await Quote.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedQuote);
}
