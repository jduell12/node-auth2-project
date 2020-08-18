import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const UserCard = (props) => {
  const { username, department } = props.userInfo;
  return (
    <div>
      <Card body inverse color="primary">
        <CardTitle>Username: {username}</CardTitle>
        <CardText>Department: {department}</CardText>
      </Card>
    </div>
  );
};

export default UserCard;
