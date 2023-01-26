import React from "react";
import { Link } from "react-router-dom";

function Dashbord() {
  var el = document.getElementById("wrapper");
  var toggleButton = document.getElementById("menu-toggle");

  toggleButton.onclick = function () {
    el.classList.toggle("toggled");
  };
  return (
    // <div className="continer">
    //   <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark pmd-navbar pmd-z-depth">
    //     <a
    //       href="javascript:void(0);"
    //       data-target="leftsidebar"
    //       data-placement="left"
    //       is-open="true"
    //       is-open-width="1000"
    //       class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pmd-sidebar-toggle"
    //     >
    //       <i class="material-icons md-light">menu</i>
    //     </a>
    //     <a class="navbar-brand" href="#">
    //       Brand
    //     </a>

    //     <div class="pmd-navbar-right-icon ml-auto">
    //       <a
    //         href="javascript:void(0);"
    //         class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect"
    //       >
    //         <i class="material-icons pmd-sm md-light">search</i>
    //       </a>
    //       <a
    //         href="javascript:void(0);"
    //         data-target="rightsidebar"
    //         data-placement="right"
    //         data-position="fixed"
    //         is-open="true"
    //         is-open-width="1000"
    //         class="btn btn-sm pmd-btn-fab pmd-btn-flat pmd-ripple-effect pmd-sidebar-toggle"
    //       >
    //         <i class="material-icons md-light">more_horiz</i>
    //       </a>
    //     </div>
    //   </nav>

    //   <aside
    //     id="leftsidebar"
    //     class="pmd-sidebar bg-light pmd-z-depth"
    //     role="navigation"
    //   >
    //     <ul class="nav flex-column pmd-sidebar-nav">
    //       <li class="nav-item pmd-user-info">
    //         <a
    //           data-toggle="collapse"
    //           href="#collapseExample"
    //           class="nav-link btn-user media align-items-center"
    //         >
    //           <img
    //             class="mr-3"
    //             src="https://pro.propeller.in/assets/images/avatar-icon-40x40.png"
    //             width="40"
    //             height="40"
    //             alt="avatar"
    //           />
    //           <div class="media-body">User</div>
    //           <i class="material-icons md-light ml-2 pmd-sm">more_vert</i>
    //         </a>
    //         <ul
    //           class="collapse"
    //           id="collapseExample"
    //           data-parent="#basicSidebar"
    //         >
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               <i class="material-icons pmd-list-icon pmd-sm">delete</i>
    //               <span class="media-body">View Profile</span>
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               <i class="material-icons pmd-list-icon pmd-sm">delete</i>
    //               <span class="media-body">Settings</span>
    //             </a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link" href="#">
    //               <i class="material-icons pmd-list-icon pmd-sm">delete</i>
    //               <span class="media-body">Logout</span>
    //             </a>
    //           </li>
    //         </ul>
    //       </li>

    //       <li class="nav-item">
    //         <a class="nav-link active" href="#">
    //           <i class="material-icons pmd-list-icon pmd-sm">star</i>
    //           <span class="media-body">Stared</span>
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           <i class="material-icons pmd-list-icon pmd-sm">send</i>
    //           <span class="media-body">Sent Email</span>
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           <i class="material-icons pmd-list-icon pmd-sm">drafts</i>
    //           <span class="media-body">Drafts</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </aside>

    //   <div class="pmd-content custom-pmd-content" id="content">
    //     <h2 class="headline">Sidebar Constructor</h2>
    //     <p>
    //       This structure shows a permanent app bar with a floating action
    //       button. The app bar absorbs elements from the tablet and mobile bottom
    //       bars.
    //     </p>
    //   </div>

    //   <aside
    //     id="rightsidebar"
    //     class="pmd-sidebar bg-light pmd-z-depth"
    //     role="navigation"
    //   >
    //     <ul class="nav flex-column pmd-sidebar-nav">
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           <i class="material-icons pmd-list-icon pmd-sm">delete</i>
    //           <span class="media-body">View Profile</span>
    //         </a>
    //       </li>
    //       <div class="pmd-nav-item-divider"></div>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           <i class="material-icons pmd-list-icon pmd-sm">delete</i>
    //           <span class="media-body">Settings</span>
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           <i class="material-icons pmd-list-icon pmd-sm">delete</i>
    //           <span class="media-body">Logout</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </aside>

    //   <div class="pmd-sidebar-overlay pmd-sidebar-overlay-active"></div>
    // </div>
    <>
      <div class="d-flex" id="wrapper">
        <div class="bg-white" id="sidebar-wrapper">
          <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i class="fas fa-user-secret me-2"></i>Codersbite
          </div>
          <div class="list-group list-group-flush my-3">
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text active"
            >
              <i class="fas fa-tachometer-alt me-2"></i>Dashboard
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-project-diagram me-2"></i>Projects
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-chart-line me-2"></i>Analytics
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-paperclip me-2"></i>Reports
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-shopping-cart me-2"></i>Store Mng
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-gift me-2"></i>Products
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-comment-dots me-2"></i>Chat
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i class="fas fa-map-marker-alt me-2"></i>Outlet
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
            >
              <i class="fas fa-power-off me-2"></i>Logout
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div class="d-flex align-items-center">
              <i
                class="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
              ></i>
              <h2 class="fs-2 m-0">Dashboard</h2>
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle second-text fw-bold"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fas fa-user me-2"></i>John Doe
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          {/* <div class="container-fluid px-4">
            <div class="row g-3 my-2">
              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">720</h3>
                    <p class="fs-5">Products</p>
                  </div>
                  <i class="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">4920</h3>
                    <p class="fs-5">Sales</p>
                  </div>
                  <i class="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">3899</h3>
                    <p class="fs-5">Delivery</p>
                  </div>
                  <i class="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>

              <div class="col-md-3">
                <div class="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 class="fs-2">%25</h3>
                    <p class="fs-5">Increase</p>
                  </div>
                  <i class="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
            </div>

            <div class="row my-5">
              <h3 class="fs-4 mb-3">Recent Orders</h3>
              <div class="col">
                <table class="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width="50">
                        #
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Television</td>
                      <td>Jonny</td>
                      <td>$1200</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Laptop</td>
                      <td>Kenny</td>
                      <td>$750</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell Phone</td>
                      <td>Jenny</td>
                      <td>$600</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Fridge</td>
                      <td>Killy</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Books</td>
                      <td>Filly</td>
                      <td>$120</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Gold</td>
                      <td>Bumbo</td>
                      <td>$1800</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Pen</td>
                      <td>Bilbo</td>
                      <td>$75</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Notebook</td>
                      <td>Frodo</td>
                      <td>$36</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Dress</td>
                      <td>Kimo</td>
                      <td>$255</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Paint</td>
                      <td>Zico</td>
                      <td>$434</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Carpet</td>
                      <td>Jeco</td>
                      <td>$1236</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Food</td>
                      <td>Haso</td>
                      <td>$422</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Dashbord;
