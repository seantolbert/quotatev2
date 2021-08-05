import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditQuotePage(props) {
  const location = useLocation();

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.quote);

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

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
        <div className="container is-fluid">
          <h1 className="title">Edit Quote</h1>
        </div>
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
                  <div className="buttons is-grouped">
                    <button type="submit" className="button is-primary">
                      SAVE
                    </button>
                    <button className="button is-danger">
                      <Link to="/quotes">CANCEL</Link>
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
