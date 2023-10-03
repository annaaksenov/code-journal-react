import NavBar from './NavBar';
// import EntryView from "./EntryView";

export default function Journal() {
  return (
    <>
      <header className="header purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <NavBar />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          {/*<EntryView />
            <Entries />
            */}
        </div>
      </main>
    </>
  );
}
