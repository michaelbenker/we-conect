import { Nav } from "react-bootstrap";

export function MenuItem({ menuData, subMenuItem = false, ...props }) {
  return (
    <Nav.Link
      {...props}
      id={menuData.slug}
      key={menuData.slug}
      href={menuData.url}
      // target="_blank"
      style={{ marginLeft: subMenuItem ? 15 : 0 }}
    >
      {menuData.title}
    </Nav.Link>
  );
}
