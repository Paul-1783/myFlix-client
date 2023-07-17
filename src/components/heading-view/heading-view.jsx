import Badge from "react-bootstrap/Badge";

function HeadingView({ marginVar, title }) {
  return (
    <div className={...marginVar }>
      <h1>
        <Badge className="" bg="warning">
          {title}
        </Badge>
      </h1>
    </div>
  );
}

export default HeadingView;
