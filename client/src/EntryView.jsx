export default function EntryView() {
  return (
    <>
      <div className="row">
        <h1>New Entry</h1>
        <PreviewPhoto />
        <Form />
        {/*<SaveButton />*/}
      </div>
    </>
  );
}

function PreviewPhoto() {
  return (
    <>
      <img src="./images/placeholder-image-square.jpg" />
    </>
  );
}

function Form() {
  return (
    <form>
      <label>Title</label>
      <input type="text" />
      <label>Photo URL</label>
      <input type="text" />
      <label>Notes</label>
      <textarea />
    </form>
  );
}
