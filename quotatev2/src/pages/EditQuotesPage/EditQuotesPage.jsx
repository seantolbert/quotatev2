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
    <>
      <h1>Edit Quote</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div className="block">
          <textarea
            className="textarea is-medium is-warning"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-small is-warning"
              name="quotee"
              value={formData.quotee}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-small is-warning"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='buttons is-grouped'>
          <button
            type="submit"
            className="button is-success"
            disabled={invalidForm}
          >
            SAVE
          </button>
          <button className="button is-danger">
            <Link to="/quotes">CANCEL</Link>
          </button>
        </div>
      </form>
    </>
  );
}
