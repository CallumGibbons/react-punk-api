import { Beer } from "../../assets/Data/types";
import { Link } from "react-router-dom";
import "./BeerCard.css";

export interface BeerCardProps {
  beer: Beer;
}
const shortenedDescription = (desc: string) => {
  if (desc.length <= 200) {
    return desc;
  } else {
    return desc.substring(0, desc.lastIndexOf(".", 201)) + "...";
  }
};
function BeerCard({ beer }: BeerCardProps) {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
      <p>{beer.tagline}</p>
      <p>{shortenedDescription(beer.description)}</p>
      <p className="abv">ABV: {beer.abv}%</p>
      <p className="ph">ph: {beer.ph}</p>
    </div>
  );
}

export default BeerCard;
