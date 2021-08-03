import React, { useState, useRef, useEffect } from "react";

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
        <div className="block">
          <textarea
            className="textarea is-medium is-primary"
            placeholder="Enter new quote here"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label className="field-label is-normal">Source</label>
          <div className="control">
            <input
              className="input is-small is-primary"
              placeholder="Enter the name of the person who said the quote"
              name="quotee"
              value={formData.quotee}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="field">
          <p className="control">
            <input
              className="input is-small is-primary"
              placeholder="Enter the title of the quote's source (book, movie, TV show, etc.)"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </p>
        </div>
        <button type="submit" className="button is-primary" disabled={invalidForm}>
          ADD
        </button>
      </form>
    </>
  );
}
