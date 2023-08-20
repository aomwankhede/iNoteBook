import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [
    {
      _id: "64dfd4157684b8d5aa013f42",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description:
        "Good morn \\AS Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt iure quibusdam odit, omnis non voluptas necessitatibus id debitis saepe, nam assumenda voluptate repellat tempora fuga repellendus ab velit nesciunt!",
      tag: "personal",
      date: "2023-08-18T20:27:01.737Z",
      __v: 0,
    },
    {
      _id: "64dfd4157684b8d5aa013f42",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description:
        "Good morn \\AS Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt iure quibusdam odit, omnis non voluptas necessitatibus id debitis saepe, nam assumenda voluptate repellat tempora fuga repellendus ab velit nesciunt!",
      tag: "personal",
      date: "2023-08-18T20:27:01.737Z",
      __v: 0,
    },
    {
      _id: "64dfd4167684b8d5aa013f44",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:02.656Z",
      __v: 0,
    },
    {
      _id: "64dfd4177684b8d5aa013f46",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:03.329Z",
      __v: 0,
    },
    {
      _id: "64dfd4177684b8d5aa013f48",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:03.963Z",
      __v: 0,
    },
    {
      _id: "64dfd4187684b8d5aa013f4a",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:04.586Z",
      __v: 0,
    },
    {
      _id: "64dfd4197684b8d5aa013f4c",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:05.014Z",
      __v: 0,
    },
    {
      _id: "64dfd4197684b8d5aa013f4e",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:05.190Z",
      __v: 0,
    },
    {
      _id: "64dfd4197684b8d5aa013f50",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:05.389Z",
      __v: 0,
    },
    {
      _id: "64dfd4197684b8d5aa013f52",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:05.581Z",
      __v: 0,
    },
    {
      _id: "64dfd4197684b8d5aa013f54",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:05.773Z",
      __v: 0,
    },
    {
      _id: "64dfd4197684b8d5aa013f56",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:05.973Z",
      __v: 0,
    },
    {
      _id: "64dfd41a7684b8d5aa013f58",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:06.174Z",
      __v: 0,
    },
    {
      _id: "64dfd41a7684b8d5aa013f5a",
      user: "64dfbc16187d529201b31132",
      title: "Title1",
      description: "Good morn \\AS",
      tag: "personal",
      date: "2023-08-18T20:27:06.393Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

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

  const deleteNote = (id) => {
    console.log(`Deleting the node with value ${id}`);
    const DeletedNotes = notes.filter((not) => id !== not._id);
    setNotes(DeletedNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, updateNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
