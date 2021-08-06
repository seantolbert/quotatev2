import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as quoteAPI from "../../utilities/quotes-api";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewQuotePage from "../NewQuotePage/NewQuotePage";
import QuotesPage from "../QuotesPage/QuotesPage";
import QuotesDetailPage from "../QuotesDetailPage/QuotesDetailPage";
import EditQuotesPage from "../EditQuotesPage/EditQuotesPage";
import "../../bulma.css";
export default function App(props) {
  const [user, setUser] = useState(getUser());
  const [quotes, setQuotes] = useState([]);
  // const [filterData, setFilterData] = useState("");
  // const [filteredQuotes, setFilteredQuotes] = useState(quotes);

  const history = useHistory();

  // const handleChange = (e) => {
  //   console.log('handleChange event', e)
  //   console.log('target.value', e.target.value)
  //   setFilterData(e.target.value);
  // };

  // const handleFilter = () => {
  //   console.log(filteredQuotes);
  //   if (!filterData) {
  //     setFilteredQuotes(quotes);
  //   } else {
  //     const updatedQuotesList = setFilteredQuotes(
  //       quotes.filter((quote) => quote.content.includes(filterData))
  //     );
  //     setFilteredQuotes(updatedQuotesList);
  //   }
  // };

  useEffect(() => {
    async function getQuotes() {
      const quotes = await quoteAPI.getAll();
      setQuotes(quotes);
    }
    getQuotes();
  }, []);

  useEffect(() => {
    history.push("/quotes");
  }, [quotes, history]);

  async function handleAddQuote(newQuoteData) {
    const newQuote = await quoteAPI.create(newQuoteData);
    setQuotes([...quotes, newQuote]);
  }

  async function handleUpdateQuote(updatedQuoteData) {
    const updatedQuote = await quoteAPI.update(updatedQuoteData);
    const newQuotesArray = quotes.map((q) =>
      q._id === updatedQuote._id ? updatedQuote : q
    );
    setQuotes(newQuotesArray);
  }

  async function handleDeleteQuote(id) {
    await quoteAPI.deleteOne(id);
    setQuotes(quotes.filter((quote) => quote._id !== id));
  }

  return (
    <main className="main">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Route exact path="/quotes">
            <QuotesPage
              quotes={quotes}
              handleDeleteQuote={handleDeleteQuote}
              // handleFilter={handleFilter}
              // handleChange={handleChange}
              // filterData={filterData}
              // filteredQuotes={filteredQuotes}
            />
          </Route>
          <Route exact path="/quotes/new">
            <NewQuotePage handleAddQuote={handleAddQuote} />
          </Route>
          <Route exact path="/quotes/details">
            <QuotesDetailPage />
          </Route>
          <Route exact path="/quotes/edit">
            <EditQuotesPage handleUpdateQuote={handleUpdateQuote} />
          </Route>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
