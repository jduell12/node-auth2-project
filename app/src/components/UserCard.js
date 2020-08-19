import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const UserCard = (props) => {
  const { username, department } = props.userInfo;
  return (
    <CardBody>
      <Card body inverse color="primary">
        <CardTitle>Username: {username}</CardTitle>
        <CardText>Department: {department}</CardText>
      </Card>
    </CardBody>
  );
};

export default UserCard;
