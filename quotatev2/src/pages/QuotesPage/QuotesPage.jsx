import QuoteListItem from "../../components/QuoteListItem/QuoteListItem";

export default function QuotesPage(props) {
  // const handleClick = () => {
  //   props.handleFilter();
  // };

  // let finalQuotes 
  // if (props.filterData) {
  //   finalQuotes = props.filteredQuotes
  // } else {
  //   finalQuotes = props.quotes
  // }

  return (
    <>
      <div className="block">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <p className="title">All Quotes</p>
                </div>
              </div>
              <div className="level-right">
                <div className="field has-addons has-addons-right">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="find quotes"
                      name="filterData"
                      // value={props.filterData}
                      // onChange={props.handleChange}
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info" >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
