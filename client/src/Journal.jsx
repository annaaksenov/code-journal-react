import NavBar from './NavBar';
import EntryView from './EntryView';
import Entries from './Entries';

export default function Journal() {
  return (
    <>
      <header className="purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <NavBar />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container hidden">
          <EntryView />
        </div>
        <div className="container">
          <Entries />
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
