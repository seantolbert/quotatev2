import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QuoteCard from "../../components/QuoteCard/QuoteCard";

export default function QuoteDetailPage(props) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddNote(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const {
    state: { quote },
  } = useLocation();

  return (
    <>
      <QuoteCard className=""  quote={quote} key={quote._id} />
      {/* <form autoComplete="off" ref={formData} onSubmit={handleSubmit}>
        <input
          className="textarea is-medium is-primary"
          name="note"
          value={formData.note}
          onChange={handleChange}
          placeholder
          type="text"
        />
        <button type="submit" className="button is-primary">
          ADD
        </button>
      </form> */}
    </>
  );
}
