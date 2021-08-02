var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema(
	{
		quotee: { type: String, default: ''},
		title: { type: String },
        content: { type: String }
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Quote', quoteSchema);
