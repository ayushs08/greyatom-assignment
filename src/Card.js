import React from "react";
import { oneOfType, arrayOf, node } from "prop-types";

import findByType from "./findByType";

function Header() {
  return null;
}
function Body() {
  return null;
}
function Footer() {
  return null;
}

Header.defaultProps = { type: "Header" };
Body.defaultProps = { type: "Body" };
Footer.defaultProps = { type: "Footer" };

function CardTemplate(props) {
  const { children, className } = props;

  const HEADER = findByType(children, "Header");
  const BODY = findByType(children, "Body");
  const FOOTER = findByType(children, "Footer");

  return (
    <div className={`card ${className || ""}`}>
      {HEADER && (
        <div className={`card-header ${HEADER.props.className || ""}`}>
          {HEADER.props.children}
        </div>
      )}
      {BODY && (
        <div className={`card-body ${BODY.props.className || ""}`}>
          {BODY.props.children}
        </div>
      )}
      {FOOTER && (
        <div className={`card-footer ${FOOTER.props.className || ""}`}>
          {FOOTER.props.children}
        </div>
      )}
    </div>
  );
}

CardTemplate.Header = Header;
CardTemplate.Body = Body;
CardTemplate.Footer = Footer;

export default CardTemplate;

// Header, Body, Footer propTypes
Header.propTypes = Body.propTypes = Footer.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};
