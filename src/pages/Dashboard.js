import React from "react";
import { withAuthorization } from "../session/index";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <p>The Home Page is accessible by every signed in user</p>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Dashboard);
