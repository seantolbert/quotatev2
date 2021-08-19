import React from "react";
import { useLocation } from "react-router-dom";
import QuoteCard from "../../components/QuoteCard/QuoteCard";

export default function QuoteDetailPage(props) {

  const {
    state: { quote },
  } = useLocation();

  return (
    <>
      <QuoteCard className=""  quote={quote} key={quote._id} />
    </>
  );
}
