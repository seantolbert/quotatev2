import React from "react";
import { Link } from "react-router-dom";
import "./QuoteListItem.css";

export default function QuoteListItem({ quote, handleDeleteQuote }) {
  return (
    <div className="block">
      <div className="container is-fluid">
        <div className="content">
          <div className="box">
            <div className="notification is-info is-light">
              <button
                className="delete"
                onClick={() => handleDeleteQuote(quote._id)}
              >
                X
              </button>
              <blockquote className="quote-submit">{`" ${quote.content} "`}</blockquote>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p>
                      {" "}
                      - {quote.quotee} <i>{quote.title}</i>
                    </p>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <div className="buttons has-addons is-right">
                      <button className="button is-link">
                        <Link
                          className="details-button-text"
                          to={{
                            pathname: "quotes/details",
                            state: { quote },
                          }}
                        >
                          details
                        </Link>
                      </button>

                      <button className="button is-warning">
                        <Link
                          className="edit-button-text"
                          to={{
                            pathname: "quotes/edit",
                            state: { quote },
                          }}
                        >
                          edit
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
