import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './DualButton.css';

type NavData = {
  text: string;
  url: string;
};

type Props = {
  left: NavData;
  right: NavData;
};

const DualNav: React.FC<Props> = ({ left, right }): JSX.Element => {
  const location = useLocation();
  return (
    <div className="dualBtn">
      <Nav.Link
        as={Link}
        to={left.url}
        href={left.url}
        active={left.url === location.pathname}
        className="customBtn bold"
      >
        {left.text}
      </Nav.Link>
      |
      <Nav.Link
        as={Link}
        to={right.url}
        href={right.url}
        active={right.url === location.pathname}
        className="customBtn bold"
      >
        {right.text}
      </Nav.Link>
    </div>
  );
};

export default DualNav;
