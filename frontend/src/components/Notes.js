import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, getAllNote } = context;

  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" });
  const ref = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  };
  useEffect(() => {
    getAllNote();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="d-none btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group my-3">
                  <label
                    htmlFor="etitle"
                    style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    aria-describedby="emailHelp"
                    placeholder="Title"
                    name="etitle"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label
                    htmlFor="edescription"
                    style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                  >
                    Description
                  </label>
                  <input
                    type="edescription"
                    className="form-control"
                    id="password"
                    placeholder="Description"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label
                    htmlFor="tag"
                    style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
                  >
                    Tags
                  </label>
                  <input
                    type="etag"
                    className="form-control"
                    id="password"
                    placeholder="Tags"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container my-3 row align-items-start"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>You Notes</h2>
        {/* {console.log(notes)} */}
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}
