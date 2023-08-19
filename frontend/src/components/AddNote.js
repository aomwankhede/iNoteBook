import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

function AddNote() {
  const context = useContext(NoteContext);
  const { addNote, notes, setNotes } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <h1 className="my-3">Add a note</h1>
        <div
          style={{ border: "2px solid #242222cf", borderRadius: "14px" }}
          className="container"
        >
          <form>
            <div className="form-group my-3">
              <label
                htmlFor="title"
                style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
              >
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="title"
                onChange={onChange}
              />
            </div>
            <div className="form-group my-3">
              <label
                htmlFor="description"
                style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
              >
                Description
              </label>
              <input
                type="description"
                className="form-control"
                id="password"
                placeholder="Password"
                name="description"
                onChange={onChange}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                className="btn btn-primary my-1"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNote;
