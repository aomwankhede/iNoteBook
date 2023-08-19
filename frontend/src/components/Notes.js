import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <>    
    <div className="container my-3 row align-items-start" style={{display:"flex",alignItems:'center',justifyContent:'center'}}>
      <h2 style={{textAlign:'center'}}>You Notes</h2>
      {notes.map((note) => {
            return <NoteItem note={note}/>;
      })}
    </div>
    </>

  );
}