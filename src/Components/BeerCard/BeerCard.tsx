import { Beer } from "../../assets/Data/types";
import { Link } from "react-router-dom";

export interface BeerCardProps {
  beer: Beer;
}

function BeerCard({ beer }: BeerCardProps) {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      <p>ABV: {beer.abv}%</p>
      <p>ph: {beer.ph}</p>
    </div>
  );
}

export default BeerCard;
