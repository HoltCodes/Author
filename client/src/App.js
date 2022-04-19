import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllAuthors from './components/AllAuthors';
import EditAuthors from './components/EditAuthor';
import Error from './components/Error';
import NewAuthor from './components/NewAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllAuthors/>} />
            <Route path="/edit:id" element={<EditAuthors/>} />
            <Route path="/error" element={<Error/>} />
            <Route path="/new" element={<NewAuthor/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
