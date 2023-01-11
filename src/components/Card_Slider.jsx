import React from "react";
// import img1 from "../Assets/images/card_slide1.jpg";
// import img2 from "../Assets/images/card_slider2.jpg";
// import img3 from "../Assets/images/card_slider3.jpg";
// import img4 from "../Assets/images/card_slider4.jpg";
// import img5 from "../Assets/images/card_slider5.jpg";
// import img6 from "../Assets/images/card_slider6.jpg";
import "../style/Card_Slider.css";
const Card = (props) => (
  <div className="card_slider">
    <img className="img_slider" src={props.imgUrl} alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const CardContainer = (props) => (
  <div className="cards-container_slider">
    {props.cards.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </div>
);
const Card_Slider = () => {
  const cardsData = [
    {
      id: 1,
      title: "CARD 1",
      content: "Clark Kent",
      imgUrl: "https://unsplash.it/200/200",
    },
    {
      id: 2,
      title: "CARD 2",
      content: "Bruce Wayne",
      imgUrl: "https://unsplash.it/201/200",
    },
    {
      id: 3,
      title: "CARD 3",
      content: "Peter Parker",
      imgUrl: "https://unsplash.it/200/201",
    },
    {
      id: 4,
      title: "CARD 4",
      content: "Tony Stark",
      imgUrl: "https://unsplash.it/201/201",
    },
    {
      id: 5,
      title: "CARD 5",
      content: "Reed Richards",
      imgUrl: "https://unsplash.it/202/200",
    },
    {
      id: 6,
      title: "CARD 6",
      content: "Wade Wilson",
      imgUrl: "https://unsplash.it/200/199",
    },
    {
      id: 7,
      title: "CARD 7",
      content: "Peter Quill",
      imgUrl: "https://unsplash.it/199/199",
    },
    {
      id: 8,
      title: "CARD 8",
      content: "Steven Rogers",
      imgUrl: "https://unsplash.it/199/200",
    },
    {
      id: 9,
      title: "CARD 9",
      content: "Bruce Banner",
      imgUrl: "https://unsplash.it/200/198",
    },
    {
      id: 10,
      title: "CARD 10",
      content: "Vincent Strange",
      imgUrl: "https://unsplash.it/198/199",
    },
  ];
  return (
    <>
      <div className="container mx-auto  my-3">
        <h1 className="text-center text-3xl font-bold text-gray-800 mt-20">
          Card Slider
        </h1>
      </div>
      <div className="container new">
        <h1 style={{ "text-align": "center" }}></h1>

        <CardContainer cards={cardsData} />
      </div>
    </>
  );
};

export default Card_Slider;
