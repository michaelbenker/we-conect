import { Navbar, Nav } from "react-bootstrap";
import { MenuItem } from "./MenuItem";

export function Menu({ items, changeIframeContent, expand = "sm" }) {
  return (
    <Navbar expand={expand}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          {items.map((item, index) => (
            <div key={index}>
              <MenuItem
                menuData={item}
                key={item.slug}
                onClick={(e) => changeIframeContent(e, item)}
              />
              {item.children
                ? item.children.map((child) => (
                    <MenuItem
                      menuData={child}
                      subMenuItem={true}
                      key={child.slug}
                      onClick={(e) => changeIframeContent(e, child)}
                    />
                  ))
                : null}
            </div>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
