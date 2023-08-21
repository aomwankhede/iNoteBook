import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  
  const getAllNote = async()=>{
    const url = `${host}/api/notes/fetchall`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZmJjMTYxODdkNTI5MjAxYjMxMTMyIn0sImlhdCI6MTY5MjM4NjUyMX0.7ghx1anrl5T5MjokquLn3DG2Xtt1jjXLzmJBVd57UzU",
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  //Add a note

  const addNote = async (title, description, tag) => {
    //To do api call
    const url = `${host}/api/notes/add`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZmJjMTYxODdkNTI5MjAxYjMxMTMyIn0sImlhdCI6MTY5MjM4NjUyMX0.7ghx1anrl5T5MjokquLn3DG2Xtt1jjXLzmJBVd57UzU",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const note = {
      _id: "64dfd41a7684bd5aa013f5a",
      user: "64dfbc16187d529201b31132",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-18T20:27:06.393Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
    // setNotes(notes.push(note)); will not do
  };

  //Update a note
  
  const updateNote = async (note) => {
    const { _id, title, description, tags } = note;
    const url = `${host}/api/notes/update/${note._id}`;
    
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZmJjMTYxODdkNTI5MjAxYjMxMTMyIn0sImlhdCI6MTY5MjM4NjUyMX0.7ghx1anrl5T5MjokquLn3DG2Xtt1jjXLzmJBVd57UzU",
      },
      body: JSON.stringify({title,description,tags}),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === _id) {
        element.title = 'MachuPichu';
        element.description ='Best place to live lively' ;
        element.tag = '#machu';
      }
    }
  };

  //Delete a note

  const deleteNote = async(id) => {
    console.log(`Deleting the node with value ${id}`);
    const url = `${host}/api/notes/delete/${id}`;
    
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkZmJjMTYxODdkNTI5MjAxYjMxMTMyIn0sImlhdCI6MTY5MjM4NjUyMX0.7ghx1anrl5T5MjokquLn3DG2Xtt1jjXLzmJBVd57UzU",
      }
    });
    const DeletedNotes = notes.filter((not) => id !== not._id);
    setNotes(DeletedNotes);
    console.log(DeletedNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, updateNote,getAllNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
