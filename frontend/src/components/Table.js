import React from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";
import axios from "axios";
import gear from "../assests/img/gear.png";
import cross from "../assests/img/cross.png";

const Michael =
  "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";
const Wilson =
  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600";
const Mary =
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww";
const martin =
  "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600";
const somer =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600";

const Table = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("/api/v1/logout");
      localStorage.removeItem("User");
      alert(data.message);
      navigate("/");
    } catch (error) {
      if (error.response) alert(error.response.data.error);
    }
  };

  return (
    <>
      <button className="logout-btn" onClick={logoutHandler}>
        Logout
      </button>
      <div className="main-content">
        <div className="container mt-4">
          <div className="row mt-5">
            <div className="col">
              <div className="card bg-default shadow">
                <div className="card-header  border-0">
                  <h3 className="text-black mb-0">Card tables</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table-flush">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Role</th>
                        <th scope="col">Status</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img src={Michael} alt="img1" />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">Michael Holz</span>
                            </div>
                          </div>
                        </th>
                        <td>04/10/2013</td>

                        <td>
                          <div className="avatar-group">
                            <span className="mb-0 text-sm">Admin</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-success"></i> Active
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">60%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "60%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="rounded-circle ">
                              <img src={gear} alt="img1" />
                            </span>
                            <span className="rounded-circle ">
                              <img src={cross} alt="img1" />
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img6" src={Wilson} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Anotnio Wilson
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>05/08/2014</td>

                        <td>
                          <div className="avatar-group">
                            <span className="mb-0 text-sm">Publisher</span>
                          </div>
                        </td>

                        <td>
                          <span className="badge badge-dot">
                            <i className="bg-success"></i> Active
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="rounded-circle ">
                              <img src={gear} alt="img1" />
                            </span>
                            <span className="rounded-circle ">
                              <img src={cross} alt="img1" />
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img8" src={Mary} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">Mary Moreno</span>
                            </div>
                          </div>
                        </th>
                        <td>11/05/2015</td>

                        <td>
                          <div className="avatar-group">
                            <span className="mb-0 text-sm">Publisher</span>
                          </div>
                        </td>

                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-danger"></i> Suspended
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">72%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  aria-valuenow="72"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "72%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="rounded-circle ">
                              <img src={gear} alt="img1" />
                            </span>
                            <span className="rounded-circle ">
                              <img src={cross} alt="img1" />
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img9" src={martin} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">Mary Saveley</span>
                            </div>
                          </div>
                        </th>
                        <td>06/09/2016</td>

                        <td>
                          <div className="avatar-group">
                            <span className="mb-0 text-sm">Reviewer</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-dot">
                            <i className="bg-success"></i> Active
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">90%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "90%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="rounded-circle ">
                              <img src={gear} alt="img1" />
                            </span>
                            <span className="rounded-circle ">
                              <img src={cross} alt="img1" />
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img src={somer} alt="img9" />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Martin Sommer
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>12/08/2017</td>

                        <td>
                          <div className="avatar-group">
                            <span className="mb-0 text-sm">Moderator</span>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning"></i> Inactive
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="rounded-circle ">
                              <img src={gear} alt="img1" />
                            </span>
                            <span className="rounded-circle ">
                              <img src={cross} alt="img1" />
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
