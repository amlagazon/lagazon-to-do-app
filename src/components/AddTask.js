import {
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBTooltip,
} from "mdb-react-ui-kit";
export default function AddTask() {
  return (
    <div className="pb-2">
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex flex-row align-items-center">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Add new..."
            />
            <MDBTooltip
              tag="a"
              wrapperProps={{ href: "#!" }}
              title="Set due date"
            >
              <MDBIcon fas icon="calendar-alt" size="lg" className="me-3" />
            </MDBTooltip>
            <div>
              <MDBBtn>Add</MDBBtn>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
