import React from "react";
import { withRouter } from "react-router-dom";

const ManagementOptions = (props) => {
  return (
    <div className="card-deck">
      <div className="card">
        <div class="card-body">
          <h5 class="card-title text-muted">Edit Menu</h5>
          <p class="card-text">
            Use this feature to edit the menu in any way that meets your needs.
          </p>
          <button className="btn btn-primary mr-5"  onClick={() => {
          props.history.push("/management/add");
          }}>Add To Menu</button>
          <button className="btn btn-secondary" onClick={() => {
          props.history.push("/management/update");
          }}>Update Menu</button>
          <button className="btn btn-danger ml-5 mt-3" onClick={() => {
          props.history.push("/management/delete");
          }}>Delete From Menu</button>
        </div>
      </div>
      <div className="card">
        <div class="card-body">
          <h5 class="card-title text-muted">View Reservations</h5>
          <p class="card-text">
            Use this feature to keep track of current reservations to all of
            your restaurants.
          </p>
          <button className="btn btn-primary">View Reservations</button>
        </div>
      </div>
      <div className="card">
        <div class="card-body">
          <h5 class="card-title text-muted">View Caart</h5>
          <p class="card-text">
            Use this feature to view current oders placed by customers and
            customr details.
          </p>
          <button className="btn btn-primary">View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ManagementOptions);