import React, { useState, useRef, useEffect } from "react";
import QuoteListItem from "../../components/QuoteListItem/QuoteListItem";

export default function QuotesPage(props) {
  const [filterData, setFilterData] = useState("");

  const filteredQuotesRef = useRef();
  filteredQuotesRef.current = props.quotes;
  
  const handleChange = (e) => {
    setFilterData(e.target.value);
  };
  
  const handleClick = (filterData) => {
    filteredQuotesRef.current = props.quotes.filter((quote) => {
      quote.content.includes(filterData);
      console.log("quote", quote.content);
      console.log(`filterData`, filterData);
    });
    return filteredQuotesRef.current
  };

  return (
    <>
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
      <div className="QuoteListPage-grid">
        {filteredQuotesRef.current.map((quote) => (
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
