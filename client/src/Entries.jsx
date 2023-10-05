export default function Entries() {
  return (
    <>
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <h3>
            <a className="white-text form-link">NEW</a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <ul className="entry-ul"></ul>
        </div>
      </div>
    </>
  );
}
