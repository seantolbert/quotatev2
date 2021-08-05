import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QuoteCard from "../../components/QuoteCard/QuoteCard";

export default function QuoteDetailPage(props) {
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
    </>
  );
}
