import React from "react";
import { Link } from "react-router-dom";
import "./QuoteListItem.css";

export default function QuoteListItem({ quote, handleDeleteQuote }) {
  return (
    <div className="content">
      <div className="box">
        <blockquote className="quote-submit">{quote.content}</blockquote>
        <small>
          {" "}
          - {quote.quotee}, <i>{quote.title}</i>
        </small>
        <div className="buttons has-addons is-right">
          <button className="button is-small is-info is-light">
            <Link
              to={{
                pathname: "quotes/details",
                state: { quote },
              }}
            >
              details
            </Link>
          </button>

          <button className="button is-small is-warning">
            <Link
              className="edit-button"
              to={{
                pathname: "quotes/edit",
                state: { quote },
              }}
            >
              edit
            </Link>
          </button>

          <button
            className="button is-small is-danger is-light"
            onClick={() => handleDeleteQuote(quote._id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}
