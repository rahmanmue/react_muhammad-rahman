import React from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export const Sidebar = () => {
  const links = [
    { link: "#git" },
    { link: "#ui-ux" },
    { link: "#figma" },
    { link: "#html" },
    { link: "#css" },
    { link: "#bootstrap" },
  ];
  return (
    <Col sm={3}>
      <ListGroup>
        {links.map((link, index) => (
          <ListGroup.Item action href={link.link} key={index}>
            <span style={{ textTransform: "uppercase" }}>{link.link} </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};
