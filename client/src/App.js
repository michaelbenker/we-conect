import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "./components/Menu";

function App() {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iframeContent, setIframeContent] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch("/api/v1/menu")
      .then((response) => response.json())

      .then((data) => {
        setState(data);
        setLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        setLoading(false);
      });
  }, [setLoading]);

  const changeIframeContent = (e, item) => {
    setIframeContent(`${item.url}`);
    window.history.pushState(
      { html: "", pageTitle: item.title },
      "",
      item.slug
    );
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="App">
      <Container>
        {loading ? (
          <div>Loading...</div>
        ) : hasError ? (
          <div>Error occured.</div>
        ) : (
          <Row>
            <Col xs={12} sm={4}>
              <Menu items={state} changeIframeContent={changeIframeContent} />
            </Col>
            <Col xs={12} sm={8}>
              <div style={{ padding: 20 }}>
                <iframe
                  id="iframe"
                  title="Show Menu Content"
                  src={iframeContent}
                  style={{ width: "100%", height: 400 }}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
