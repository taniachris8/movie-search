import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

export function MoviePlaceholder() {
  return (
    <>
      <Card style={{ width: "300px" }} bg="dark">
        <div
          style={{
            height: "440px",
            width: "300px",
            backgroundColor: "#a09f9f3a",
          }}
          className="placeholder-glow">
          <Placeholder xs={12} style={{ height: "100%" }} />
        </div>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={8} bg="secondary" />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={10} bg="secondary" />
            <Placeholder xs={10} bg="secondary" />
          </Placeholder>
        </Card.Body>
      </Card>
    </>
  );
}
