import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Notes from "./Notes";
const Home = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <div className="container">
      <h1 className="my-3">Add a note</h1>
      <div
        style={{ border: "2px solid #242222cf", borderRadius: "14px" }}
        className="container"
      >
        <form>
          <div className="form-group my-3">
            <label
              htmlFor="email"
              style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group my-3">
            <label
              htmlFor="password"
              style={{ fontWeight: "bold", fontFamily: "sans-serif" }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary my-1">
              Submit
            </button>
          </div>
        </form>
      </div>
        <Notes/>
    </div>
  );
};

export default Home;

{
  /* <form>
  <div className="form-group">
    <label htmlhtmlFor="title" style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'larger'}}>Title</label>
    <input
      type="title"
      className="form-control"
      id="title"
      placeholder="Title"
    />
  </div>
  <div className="form-group">
    <label htmlhtmlFor="tags" style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'larger'}}>Tags</label>
    <input className="form-control" id="tags" placeholder="tags"/>
  </div>
  <div className="form-group">
    <label htmlhtmlFor="description" style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'larger'}}>Description</label>
    <textarea
      className="form-control"
      id="description"
      rows="3"
      placeholder="Type here ..."
    ></textarea>
  </div>
</form> */
}
