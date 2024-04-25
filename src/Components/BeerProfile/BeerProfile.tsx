import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import beers from "../../assets/Data/beers";

interface BeerProfileProps {
  handleDisplay: (display: boolean) => void;
}

const BeerProfile: React.FC<BeerProfileProps> = ({ handleDisplay }) => {
  const { id } = useParams();
  const beerId = parseFloat(id || "0");
  const beer = beers.find((beer) => beer.id === beerId);
  const shortenedDescription = (desc: string) => {
    if (desc.length <= 400) {
      return desc;
    } else {
      return desc.substring(0, desc.lastIndexOf(".", 401)) + "...";
    }
  };

  useEffect(() => {
     handleDisplay(false);
    
     return () => {
      handleDisplay(true);
    };
  }, [handleDisplay]);

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
            {beer.abv} {beer.food_pairing.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeerProfile;