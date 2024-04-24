import beers from "../../assets/Data/beers";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const beerProfile = () => {
  const {id} = useParams();
  const beerId = parseFloat(id || "0");
  const beer = beers.find((beer) => beer.id === beerId);
  const shortenedDescription = (desc: string) => {
    if (desc.length <= 400) {
      return desc;
    } else {
      return desc.substring(0, desc.lastIndexOf(".", 401)) + "...";
    }
  };
  if (!beer) {
    return <div>beer not found</div>;
  }

  return (
    <div>
    <div className="backButton">
        <button><Link to="/">Home</Link></button>
    </div>
    <div className="beerCard-container">
      <img src={beer.image_url} alt={beer.name as string} />
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

export default beerProfile;
