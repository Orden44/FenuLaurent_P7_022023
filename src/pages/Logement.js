import React from "react";
import NoMatch from "./Error";
import { useParams } from 'react-router-dom'
import Logements from '../data/logements.json';
import Collapse from "../components/Collapse";
import Carroussel from "../components/Slideshow";
import Rate from "../components/Rate"
import Tag from "../components/Tag";

const Logement = () => {
    const { logementId } = useParams();
    const oneLogement = Logements.find((logement) => logement.id === logementId);
    if (!oneLogement) {  
      return <NoMatch />
    } else {
      const tags = oneLogement.tags.map((tag, index) => {
        return <Tag key={index} tag={tag} />;
      });
      const equipmentsDescription = oneLogement.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>;
      });
    
      return (
        <div className="logement__page">
          <Carroussel images={oneLogement.pictures} />
          <div className="ficheLogement">
            <div className="ficheLogement__info">
              <span className="ficheLogement__info__title">
                {oneLogement.title}
              </span>
              <span className="ficheLogement__info__location">
                {oneLogement.location}
              </span>
              <div className="tags">{tags}</div>  
            </div>
            <div className="ficheLogement__owner">
              <div className="ficheLogement__owner__info">
                <span className="ownerName">{oneLogement.host.name}</span>
                <img
                  className="profilpicture"
                  src={oneLogement.host.picture}
                  alt="Profil propriétaire"
                />
              </div>
              <div className="stars">
                <Rate rating={oneLogement.rating} />
              </div>  
            </div>
          </div>
          <div className="ficheLogement__description">
            <Collapse
              titre="Description"
              description={oneLogement.description}
            />
            <Collapse
              titre="Équipements"
              description={equipmentsDescription}
            />  
          </div>
        </div>
      ) 
    }
  }  

export default Logement;
