import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

export function MoviePagePlaceholder() {
  return (
    <Card className="bg-dark text-white" style={{ width: "32rem" }}>
      <Card.Body
        style={{
          width: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
        <div className="d-flex gap-3">
          <div
            className="placeholder-glow"
            style={{
              width: "360px",
              height: "540px",
              backgroundColor: "#a09f9f3a",
            }}>
            <Placeholder xs={12} style={{ height: "100%" }} />
          </div>
          <div
            style={{
              width: "280px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={10} bg="secondary" />
            </Placeholder>

            <div className="d-flex flex-column gap-2">
              {[...Array(7)].map((_, i) => (
                <Placeholder key={i} as="div" animation="glow" className="w-80">
                  <Placeholder xs={12} bg="secondary" />
                </Placeholder>
              ))}
            </div>
          </div>
        </div>

        <div className="d-flex flex-column">
          {[...Array(3)].map((_, i) => (
            <Placeholder
              key={i}
              as={Card.Text}
              animation="glow"
              className="m-0">
              <Placeholder xs={12} bg="secondary" />
            </Placeholder>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
