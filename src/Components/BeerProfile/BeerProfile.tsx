import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Beer } from "../../assets/Data/types";

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

  const shortenedDescription = (desc: string) => {
    if (desc.length <= 400) {
      return desc;
    } else {
      return desc.substring(0, desc.lastIndexOf(".", 401)) + "...";
    }
  };

  if (!beer) {
    return <div>Beer not found</div>;
  }

  return (
    <div>
      <div className="backButton">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className="beerCard-container">
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <p>{beer.name}</p>
          <p>{beer.tagline}</p>
          <p>{shortenedDescription(beer.description)}</p>
          <p>
            {beer.abv}% {beer.food_pairing.join(", ")}
          </p>
          <p>{beer.ph}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerProfile;
