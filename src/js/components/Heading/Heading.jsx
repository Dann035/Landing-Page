import "./Heading.css";
const Heading = () => {
  return (
    <div className="mx-5 my-3 row col-9 mx-auto">
      <div className="alert bg-green-light">
        <h1>A Warm Welcome</h1>
        <p>
          Nota: las tarjetas tienen contenido diferente, piensa en DRY (Don't
          Repeat Yourself), que significa: "No Te Repitas" y declara solo un
          componente , luego usa props para manejar contenido diferente. Nota:
          las tarjetas tienen contenido diferente, piensa en DRY (Don't Repeat
          Yourself), que significa: "No Te Repitas" y declara solo un componente
          , luego usa props para manejar contenido diferente.
        </p>
        <button className="btn btn-primary">Call to action !</button>
      </div>
    </div>
  );
};

export default Heading;
