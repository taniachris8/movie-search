import Alert from "react-bootstrap/Alert";

type ErrorProps = {
  error: string;
};

export function ErrorAlert({ error }: ErrorProps) {
  return <Alert variant="danger">{error}</Alert>;
}
