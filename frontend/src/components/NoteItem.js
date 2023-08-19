import React from "react";

function NoteItem(props) {
  return (
    <>
      <div className="card my-3 mx-4" style={{ width: "30rem" ,border:'2px solid black'}}>
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.note.tag}</h6>
          <p className="card-text">{props.note.description}</p>
          <p href="#" className="card-link">
            {props.note.date}
          </p>
        </div>
      </div>
    </>
  );
}

export default NoteItem;
