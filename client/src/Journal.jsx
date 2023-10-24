import NavBar from './NavBar';
import EntryView from './EntryView';
import Entries from './Entries';
//import { useState } from 'react';
import data from './data';

// false = new entry, true = entries
export default function Journal({ currentView, setCurrentView }) {
  console.log(data);
  return (
    <>
      <header className="purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <NavBar view={currentView} setView={setCurrentView} />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          {currentView ? <EntryView data={data} /> : <Entries data={data} />}
        </div>
      </main>
      <Modal />
    </>
  );
}

function Modal() {
  return (
    <>
      <article>
        <div className="modal-container d-flex justify-center align-center hidden">
          <div className="modal row">
            <div className="column-full d-flex justify-center">
              <p>Are you sure you want to delete this entry?</p>
            </div>
            <div className="column-full d-flex justify-between">
              <button className="modal-button">Cancel</button>
              <button className="modal-button red-background white-text">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
