import React from "react";
import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./App.css";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
export default function App() {
  return (
    <section className="gradient-custom-2 vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol md="12" xl="10">
            <MDBCard className="mask-custom">
              <TaskList />
            </MDBCard>
          </MDBCol>
          {/* <MDBCol md="12" xl="5">
            <MDBCard className="mask-custom">
              <Login />
            </MDBCard>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
