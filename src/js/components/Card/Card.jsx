import "./Card.css";

const Card = ({ imageCard, titleCard, descritionCard }) => {
  return (
    <div className="col-lg-3 my-3">
      <div className="card text-center">
        <img
          src={imageCard}
          className="card-img img-fluid"
          width={"30rem"}
          height={"30rem"}
        />
        <div className="card-header">
          <h2 className="card-title">{titleCard}</h2>
        </div>
        <div className="card-body">
          <p className="card-text textoCard">{descritionCard}</p>
        </div>
        <div className="card-footer mx-auto">
          <button className="btn btn-primary">Find out more !</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
