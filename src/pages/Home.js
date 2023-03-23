import React from "react";
import Banner from "../components/Banner"
import Card from "../components/Card";
import Logements from "../data/logements.json";
import image from "../assets/img/banner.png";

const title = "Chez vous, partout et ailleurs";

const Home = () => {
  return (
    <div className="home__page">
      <section className="home__page__section1">
        <Banner cover={image} title={title} />
      </section>
      <section className="home__page__section2">
        <div className="home__page__section2__display">
          {Logements.map((logement, index) => {
            return (
              <Card
                key={index}
                picture={logement.cover}
                title={logement.title}
                link={logement.id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home