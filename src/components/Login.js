import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

export default function Login() {
  return (
    <MDBCol md="12" xl="5">
      <MDBCard className="mask-custom">
        <MDBCardBody className="p-5 w-100 d-flex flex-column">
          <h2 className="fw-bold mb-2 text-center">Sign in</h2>
          <p className="text-white-50 mb-3">
            Please enter your login and password!
          </p>

          <MDBInput
            wrapperClass="mb-4 w-100"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4 w-100"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
          />

          <MDBCheckbox
            name="flexCheck"
            id="flexCheckDefault"
            className="mb-4"
            label="Remember password"
          />

          <MDBBtn size="lg">Login</MDBBtn>

          <hr className="my-4" />

          <MDBBtn
            className="mb-2 w-100"
            size="lg"
            style={{ backgroundColor: "#dd4b39" }}
          >
            <MDBIcon fab icon="google" className="mx-2" />
            Sign in with google
          </MDBBtn>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#3b5998" }}
          >
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Sign in with facebook
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
