import QuoteListItem from "../../components/QuoteListItem/QuoteListItem";

export default function QuotesPage(props) {
  return (
    <>
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
