import {
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCard,
  MDBCol,
} from "mdb-react-ui-kit";
import TaskRow from "./TaskRow";
import AddTask from "./AddTask";
export default function TaskList() {
  return (
    <MDBCol md="12" xl="10">
      <MDBCard className="mask-custom">
        <section id="list1">
          <MDBCardBody className="p-4">
            <div className="text-center pt-3 pb-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                alt="Check"
                width="60"
              />
              <h2 className="my-4">Task List</h2>
              <AddTask />
            </div>
            <MDBTable className="mb-0">
              <MDBTableHead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Task</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <TaskRow />
                <TaskRow />
                <TaskRow />
                {/* <tr className="fw-normal">
              <th>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                  alt="avatar 2"
                  style={{ width: "45px", height: "auto" }}
                />
                <span className="ms-2">Kate Moss</span>
              </th>
              <td className="align-middle">
                <span>Make payment to Bluedart</span>
              </td>
              <td className="align-middle">
                <h6 className="mb-0">
                  <MDBBadge className="mx-2" color="success">
                    Low priority
                  </MDBBadge>
                </h6>
              </td>
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
                <MDBTooltip
                  tag="a"
                  wrapperProps={{ href: "#!" }}
                  title="Remove"
                >
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
            <tr className="fw-normal">
              <th>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                  alt="avatar 3"
                  style={{ width: "45px", height: "auto" }}
                />
                <span className="ms-2">Danny McChain</span>
              </th>
              <td className="align-middle">
                <span>Office rent</span>
              </td>
              <td className="align-middle">
                <h6 className="mb-0">
                  <MDBBadge className="mx-2" color="warning">
                    Middle priority
                  </MDBBadge>
                </h6>
              </td>
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
                <MDBTooltip
                  tag="a"
                  wrapperProps={{ href: "#!" }}
                  title="Remove"
                >
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
            <tr className="fw-normal">
              <th>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                  alt="avatar 4"
                  style={{ width: "45px", height: "auto" }}
                />
                <span className="ms-2">Alexa Chung</span>
              </th>
              <td className="align-middle">
                <span>Office grocery shopping</span>
              </td>
              <td className="align-middle">
                <h6 className="mb-0">
                  <MDBBadge className="mx-2" color="danger">
                    High priority
                  </MDBBadge>
                </h6>
              </td>
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
                <MDBTooltip
                  tag="a"
                  wrapperProps={{ href: "#!" }}
                  title="Remove"
                >
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
            <tr className="fw-normal">
              <th className="border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                  alt="avatar 5"
                  style={{ width: "45px", height: "auto" }}
                />
                <span className="ms-2">Ben Smith</span>
              </th>
              <td className="border-0 align-middle">
                <span>Ask for Lunch to Clients</span>
              </td>
              <td className="border-0 align-middle">
                <h6 className="mb-0">
                  <MDBBadge className="mx-2" color="success">
                    Low priority
                  </MDBBadge>
                </h6>
              </td>
              <td className="border-0 align-middle">
                <MDBTooltip tag="a" wrapperProps={{ href: "#!" }} title="Done">
                  <MDBIcon
                    fas
                    icon="check"
                    color="success"
                    size="lg"
                    className="me-3"
                  />
                </MDBTooltip>
                <MDBTooltip
                  tag="a"
                  wrapperProps={{ href: "#!" }}
                  title="Remove"
                >
                  <MDBIcon
                    fas
                    icon="trash-alt"
                    color="warning"
                    size="lg"
                    className="me-3"
                  />
                </MDBTooltip>
              </td>
            </tr> */}
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </section>
      </MDBCard>
    </MDBCol>
  );
}
