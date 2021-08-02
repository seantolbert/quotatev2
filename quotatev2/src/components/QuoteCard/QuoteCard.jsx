import React from "react";
import { Link } from "react-router-dom";

export default function QuoteCard({ quote }) {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
          <blockquote>{quote.content}</blockquote>
          <small>{quote.quotee}  {`(${quote.title})`}</small>
      </div>
      <Link
        className="btn btn-xs btn-warning"
        to={{
          pathname: "/quotes/edit",
          state: { quote },
        }}
      >
        EDIT
      </Link>
      <div className="panel-footer">
        <Link to="/quotes">RETURN TO QUOTES</Link>
      </div>
    </div>
  );
}
