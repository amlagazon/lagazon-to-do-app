import React from "react";
import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./App.css";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
export default function App() {
  return (
    <section className="gradient-custom-2 vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<TaskList />} />
          </Routes>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
