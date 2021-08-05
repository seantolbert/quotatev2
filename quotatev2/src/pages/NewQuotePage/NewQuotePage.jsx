import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NewQuotePage(props) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    content: "",
    quotee: "",
    title: "",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddQuote(formData);
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
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container is-fluid">
              <p className="title">New Quote</p>
              <p className="subtitle">
                hear something worth writing down recently?
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container is-fluid">
        <div className="box">
          <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
            <div className="columns is-multiline is-mobile is-center">
              <div className="container is-fluid">
                <div className="column is-three-quarters">
                  <textarea
                    className="textarea is-medium is-primary"
                    placeholder="Enter new quote here"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="container is-fluid">
                <div className="column is-three-quarters">
                  <input
                    className="input is-primary"
                    placeholder="Enter the name of the person who said the quote"
                    name="quotee"
                    value={formData.quotee}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="container is-fluid">
                <div className="column is-three-quarters">
                  <input
                    className="input is-primary"
                    placeholder="Enter the title of the quote's source (book, movie, TV show, etc.)"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="container is-fluid">
                <div className="column">
                  <div className="buttons has-addons">
                    <button
                      type="submit"
                      className="button is-primary"
                      disabled={invalidForm}
                    >
                      add
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
