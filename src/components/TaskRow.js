import {
  MDBBadge,
  MDBCardBody,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from "mdb-react-ui-kit";
export default function TaskRow() {
  return (
    <tr className="fw-normal">
      <th>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
          alt="avatar 1"
          style={{ width: "45px", height: "auto" }}
        />
        <span className="ms-2">Alice Mayer</span>
      </th>
      <td className="align-middle">
        <span>Call Sam For payments</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <MDBBadge className="mx-2" color="danger">
            High priority
          </MDBBadge>
        </h6>
      </td>
      <td className="align-middle">DATE</td>
      <td className="align-middle">TIME</td>
      <td className="align-middle">
        <MDBTooltip tag="a" wrapperProps={{ href: "#!" }} title="Done">
          <MDBIcon
            fas
            icon="check"
            color="success"
            size="lg"
            className="me-3"
          />
        </MDBTooltip>
        <MDBTooltip tag="a" wrapperProps={{ href: "#!" }} title="Remove">
          <MDBIcon
            fas
            icon="trash-alt"
            color="warning"
            size="lg"
            className="me-3"
          />
        </MDBTooltip>
      </td>
    </tr>
  );
}
