export default function NavBar({ view, setView }) {
  function handleSwapView() {
    setView(!view);
    console.log('view is swaped to:', view);
  }
  return (
    <>
      <h1 className="white-text">Code Journal</h1>
      <h3 onClick={handleSwapView}>
        <a id="entriesLink" className="entries-link white-text">
          Entries
        </a>
      </h3>
    </>
  );
}
