import React from "react";
import { Link } from "react-router-dom";
import './QuoteCard.css'

export default function QuoteCard({ quote }) {
  return (
    <div className="container is-fluid">
      <div className="content">
        <div className="box">
          <blockquote>{quote.content}</blockquote>
          <small>
            - {quote.quotee} <i>{quote.title}</i>
          </small>
        </div>
        <div className="buttons has-addons">
          <button className="button is-warning">
            <Link
              className="edit-button-text"
              to={{
                pathname: "/quotes/edit",
                state: { quote },
              }}
            >
              edit
            </Link>
          </button>
          <button className="button is-link">
            <Link className="return-button-text" to="/quotes">
              Return to Quotes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
