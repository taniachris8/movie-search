import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <>
      <div style={{ margin: "50px" }}>
        <p style={{ color: "white", marginBottom: "10px" }}>
          Страница не найдена
        </p>
        <Link to="/" className="back-home-link">
          На главную
        </Link>
      </div>
    </>
  );
}
