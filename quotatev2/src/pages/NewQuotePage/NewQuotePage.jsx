import React, { useState, useRef, useEffect } from "react";
import "./NewQuotePage.css";

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
    <>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="box">
          <div className="columns is-multiline is-mobile is-center">
            <div className="container is-fluid">
              <h2 className="title">New Quote</h2>
              <div className="column is-three-quarters is-center">
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
                <button
                  type="submit"
                  className="button is-primary"
                  disabled={invalidForm}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
