import React from "react";
import { Link } from "react-router-dom";

export default function QuoteCard({ quote }) {
  return (
    <div className="content">
      <div className="box">
        <blockquote>{quote.content}</blockquote>
        <small>
          - {quote.quotee} {`(${quote.title})`}
        </small>
      </div>
      <button className="button">
        <Link
          className="btn btn-xs btn-warning"
          to={{
            pathname: "/quotes/edit",
            state: { quote },
          }}
        >
          EDIT
        </Link>
      </button>
      <button className="button">
        <div className="panel-footer">
          <Link to="/quotes">RETURN TO QUOTES</Link>
        </div>
      </button>
    </div>
  );
}
