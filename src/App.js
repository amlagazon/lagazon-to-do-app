import React, { useEffect } from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./App.css";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
export default function App() {
  const { users } = useSelector((state) => state);
  useEffect(() => {
    console.log("test");
    console.log(users);
  }, []);
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
