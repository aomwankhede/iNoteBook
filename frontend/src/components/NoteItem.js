import React from "react";

function NoteItem(props) {
  return (
    <>
      <div className="card my-3 mx-4" style={{ width: "30rem" ,border:'2px solid black'}}>
        <div className="card-body">
          <h5 className="card-title" style={{fontWeight:'bolder',fontSize:'25px'}}>{props.note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.note.tag}</h6>
          <p className="card-text">{props.note.description}</p>
          <p href="#" className="card-link" style={{fontWeight:'bold'}}>
            {props.note.date}
          </p>
            <i className="fa-solid fa-trash fa-lg"></i>
            <i class="fa-solid fa-pen-to-square fa-lg" style={{position:'relative',float:'right'}}></i>
        </div>
      </div>
    </>
  );
}

export default NoteItem;
