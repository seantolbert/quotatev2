import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./EditQuotesPage.css";

export default function EditQuotePage(props) {
  const location = useLocation();

  const [formData, setFormData] = useState(location.state.quote);

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdateQuote(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="block">
        <section className="hero is-warning">
          <div className="hero-body">
            <div className="container is-fluid">
              <p className="title">Edit Quote</p>
              <p className="subtitle">everybody makes mistakes</p>
            </div>
          </div>
        </section>
      </div>
      <div className="container is-fluid">
        <div className="box">
          <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
            <div className="columns is-multiline is-mobile is-center">
              <div className="container is-fluid">
                <div className="column is-three-quarters">
                  <textarea
                    className="textarea is-medium is-info"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    placeholder="Enter new quote here"
                  />
                </div>
              </div>
              <div className="container is-fluid">
                <div className="column is-three-quarters">
                  <input
                    className="input is-info"
                    name="quotee"
                    value={formData.quotee}
                    onChange={handleChange}
                    placeholder="Enter the name of the person who said the quote"
                  />
                </div>
              </div>
              <div className="container is-fluid">
                <div className="column is-three-quarters">
                  <input
                    className="input is-info"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter the title of the quote's source (book, movie, TV show, etc.)"
                  />
                </div>
              </div>
              <div className="container is-fluid">
                <div className="column">
                  <div className="buttons has-addons">
                    <button type="submit" className="button is-primary">
                      save
                    </button>
                    <button className="button is-danger">
                      <Link className="cancel-button-text" to="/quotes">
                        cancel
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
