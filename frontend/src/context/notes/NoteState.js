import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const getAllNote = async () => {
    const url = `${host}/api/notes/fetchall`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //To do api call
    const url = `${host}/api/notes/add`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log(response)
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
  const EditNote = async (note) => {
    const { id, etitle, edescription, etag } = note;
    const url = `${host}/api/notes/update/${id}`;

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({
        title: etitle,
        description: edescription,
        tag: etag,
      }),
    });
    const json = response.json();
    setNotes(
      notes.map((note) =>
        note._id === id
          ? { ...note, title: etitle, description: edescription, tag: etag }
          : note
      )
    );
    console.log(json)
  };

  //Delete a note
  const deleteNote = async (id) => {
    const url = `${host}/api/notes/delete/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    console.log(response);
    const DeletedNotes = notes.filter((not) => id !== not._id);
    setNotes(DeletedNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, EditNote, getAllNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
