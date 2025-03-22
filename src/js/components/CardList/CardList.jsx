import Card from "../Card/Card.jsx";
const CardList = () => {
  return (
    <div className="mx-auto my-3 row col-10">
      <Card
        imageCard={
          "https://cdn.pixabay.com/photo/2016/11/29/04/54/photographer-1867417_1280.jpg"
        }
        titleCard={"Photography"}
        descritionCard={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae elit."
        }
      />
      <Card
        imageCard={
          "https://images.pexels.com/photos/30970419/pexels-photo-30970419/free-photo-of-noche-lluviosa-en-un-vibrante-callejon-de-tokio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        titleCard={"Photography"}
        descritionCard={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae elit."
        }
      />
      <Card
        imageCard={
          "https://cdn.pixabay.com/photo/2016/11/29/04/54/photographer-1867417_1280.jpg"
        }
        titleCard={"Photography"}
        descritionCard={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae elit."
        }
      />
      <Card
        imageCard={
          "https://images.pexels.com/photos/30970419/pexels-photo-30970419/free-photo-of-noche-lluviosa-en-un-vibrante-callejon-de-tokio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        titleCard={"Photography"}
        descritionCard={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae elit."
        }
      />
    </div>
  );
};

export default CardList;
