const Card = () => {
  return (
    <div className="card w-25 text-center">
      <img
        src="https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=400"
        className="card-img img-fluid"
      />
      <div className="card-header">
        <h2 className="card-title">Card title</h2>
      </div>
      <div className="card-body">
        <p className="card-text">
          Lo que realmente queremos lograr con este ejercicio es que aprendas a
          decidir qué componentes vas a crear, ¿Qué crees que deba ser un
          componente? ¿Qué se va a reutilizar?
        </p>
      </div>
      <div className="card-footer mx-auto">
        <button className="btn btn-primary">Find out more !</button>
      </div>
    </div>
  );
};

export default Card;
