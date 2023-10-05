export default function EntryView() {
  return (
    <>
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1>New Entry</h1>
        </div>
      </div>
      <Form />
      <div className="row">
        <div className="column-full d-flex justify-between">
          <DeleteButton />
          <SaveButton />
        </div>
      </div>
    </>
  );
}

function Form() {
  return (
    <form>
      <div className="row margin-bottom-1">
        <div className="column-half">
          <PreviewPhoto />
        </div>
        <div className="column-half">
          <label className="margin-bottom-1 d-block">Title</label>
          <input
            type="text"
            className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
          />
          <label className="margin-bottom-1 d-block">Photo URL</label>
          <input
            type="text"
            className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
          />
        </div>
      </div>
      <div className="row margin-bottom-1">
        <div className="column-full">
          <label className="margin-bottom-1 d-block">Notes</label>
          <textarea
            className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
            cols="30"
            rows="10"></textarea>
        </div>
      </div>
    </form>
  );
}

function PreviewPhoto() {
  return (
    <>
      <img
        className="input-b-radius form-image"
        src="./images/placeholder-image-square.jpg"
      />
    </>
  );
}

function DeleteButton() {
  return (
    <button className="invisible delete-entry-button" type="button">
      Delete Entry
    </button>
  );
}

function SaveButton() {
  return (
    <button className="input-b-radius text-padding purple-background white-text">
      SAVE
    </button>
  );
}
