import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ViewContact from './components/ViewContact';
import ContactList from './components/ContactList';
import { SearchProvider } from './SearchContext';



function App() {
  return (
      <SearchProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Navigate to={'/contacts/list'}/>} />
          <Route path={'/contacts/list'} element={<ContactList />}/>
          <Route path={"/contacts/add"} element={<AddContact />} />
          <Route path={'/contacts/edit/:contactId'} element={<EditContact />} />
          <Route path={'/contacts/view/:contactId'} element={<ViewContact />} />
        </Routes>
      </div>
      </SearchProvider>

  );
}

export default App;
