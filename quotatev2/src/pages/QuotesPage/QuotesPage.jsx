import QuoteListItem from "../../components/QuoteListItem/QuoteListItem";
import {useState} from 'react'

export default function QuotesPage(props) {
  const [filterData, setFilterData] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState(props.quotes);

  const handleClick = () => {
    props.handleFilter();
  };

  const handleFilter = () => {
    console.log(filteredQuotes);
    if (!filterData) {
      setFilteredQuotes(props.quotes);
    } else {
      const updatedQuotesList = setFilteredQuotes(
        props.quotes.filter((quote) => quote.content.includes(filterData))
      );
      setFilteredQuotes(updatedQuotesList);
    }
  };

  const handleChange = (e) => {
    console.log('handleChange event', e)
    console.log('target.value', e.target.value)
    setFilterData(e.target.value);
  };

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
                      value={filterData}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={handleClick}>
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
