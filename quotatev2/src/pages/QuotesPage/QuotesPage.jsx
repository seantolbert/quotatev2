import QuoteListItem from "../../components/QuoteListItem/QuoteListItem";

export default function QuotesPage(props) {
  return (
    <>
    <div className="field has-addons has-addons-right">
    <div className="control">

    <input className="input" type="text" />
    </div>
    <div className="control">

    <button className="button is-info">
      Filter
    </button>
    </div>
    </div>
      <div className="QuoteListPage-grid">
        {props.quotes.map((quote) => (
          <QuoteListItem
            quote={quote}
            key={quote._id}
            handleDeleteQuote={props.handleDeleteQuote}
          />
        ))}
      </div>
    </>
  );
}
