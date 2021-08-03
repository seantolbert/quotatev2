const Quote = require("../../models/quote");

module.exports = {
  create,
};

function create(req, res) {
  Quote.findById(req.params.id, function (err, quote) {
    quote.notes.push(req.body);
    quote.save(function (err) {
      res.redirect(`/quotes/${quote._id}`);
    });
  });
}
