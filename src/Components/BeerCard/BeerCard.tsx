// All necessary imports
import { Beer } from "../../assets/Data/types";
import { Link } from "react-router-dom";
import "./BeerCard.css";
// Define props interface for BeerCard component
export interface BeerCardProps {
  beer: Beer; // Beer object to display
}
// Function to shorten description for display
const shortenedDescription = (desc: string) => {
  if (desc.length <= 200) {
    // If description length is less than or equal to 200 characters
    return desc; // Return the whole description
  } else {
    // Otherwise, return the substring of the description up to the last period within the first 201 characters followed by ellipsis
    return desc.substring(0, desc.lastIndexOf(".", 201)) + "...";
  }
};
// BeerCard component
function BeerCard({ beer }: BeerCardProps) {
  return (
    <div data-testid="beer-card" className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <Link to={`/beer/${beer.id}`}>{beer.name}</Link>
      <p>{beer.tagline}</p>
      <p>{shortenedDescription(beer.description)}</p>
      <p className="abv">ABV: {beer.abv}%</p>
      <p className="ph">pH: {beer.ph}</p>
    </div>
  );
}

export default BeerCard;
