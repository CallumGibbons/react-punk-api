import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Beer } from "../../assets/Data/types";
import "./BeerProfile.css"

interface BeerProfileProps {
  handleDisplay: (display: boolean) => void;
}

const BeerProfile: React.FC<BeerProfileProps> = ({ handleDisplay }) => {
  const { id } = useParams();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    handleDisplay(false)
    const fetchBeer = async () => {
      try {
        const response = await fetch(`http://localhost:3333/v2/beers/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch beer details");
        }
        const data = await response.json();
        setBeer(data[0]);
      } catch (error) {
        console.error("Error fetching beer details:", error);
      }
    };

    fetchBeer();

    return () => {
      handleDisplay(true);
    };
  }, [id, handleDisplay]);


  if (!beer) {
    return <div>Beer not found</div>;
  }

  return (
    <div className="beer-profile-container">
      <div className="backButton">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className="beerCard-container">
        <img src={beer.image_url} alt={beer.name} />
        <div className="beer-info">
          <p className="name">{beer.name}</p>
          <p className="tagline">{beer.tagline}</p>
          <p className="description">{beer.description}</p>
          <p className="description">{beer.brewers_tips}</p>
          <p className="description">Goes With: {beer.food_pairing.join(", ")}</p>
          <p className="abv">
            {beer.abv}%      
          </p>
          <p className="ph">{beer.ph} ph</p>
        </div>
      </div>
    </div>
  );
};

export default BeerProfile;
