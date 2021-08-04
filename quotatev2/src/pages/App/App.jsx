import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as quoteAPI from "../../utilities/quotes-api";
import * as noteAPI from "../../utilities/notes-api"
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewQuotePage from "../NewQuotePage/NewQuotePage";
import QuotesPage from "../QuotesPage/QuotesPage";
import QuotesDetailPage from "../QuotesDetailPage/QuotesDetailPage";
import EditQuotesPage from "../EditQuotesPage/EditQuotesPage";
import "../../bulma.css"
import "./App.css";

export default function App(props) {
  const [user, setUser] = useState(getUser());
  const [quotes, setQuotes] = useState([]);
  const [notes, setNotes] = useState([])
  const [filteredQuotes, setFilteredQuotes] = useState([])
  
  const history = useHistory();

  useEffect(() => {
    async function getQuotes() {
      // retrieve the quotes data
      const quotes = await quoteAPI.getAll();
      // set it to state
      setQuotes(quotes);
    }
    getQuotes();
  }, []);

  useEffect(() => {
    // This is listenting for each time puppies state is changed,
    // then will run our function below to reroute
    history.push("/quotes");
  }, [quotes, history]);

  async function handleAddQuote(newQuoteData) {
    const newQuote = await quoteAPI.create(newQuoteData);
    setQuotes([...quotes, newQuote]);
  }

  async function handleAddNote(newNoteData) {
    const newNote = await noteAPI.create(newNoteData);
    setNotes([...notes, newNote]);
  }

  async function handleUpdateQuote(updatedQuoteData) {
    // invoke the fetch call from api services
    const updatedQuote = await quoteAPI.update(updatedQuoteData);
    // set the new state using the result from the fetch call
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
            <QuotesPage quotes={quotes} handleDeleteQuote={handleDeleteQuote} />
          </Route>
          <Route exact path="/quotes/new">
            <NewQuotePage handleAddQuote={handleAddQuote} />
          </Route>
          <Route exact path="/quotes/details">
            <QuotesDetailPage handleAddNote={handleAddNote}/>
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
