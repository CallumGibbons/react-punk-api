// All necessary imports

import { Beer } from "../../assets/Data/types";
import BeerCard from "../BeerCard/BeerCard";
import "./BeerList.css";
// Define props interface for BeerList component
interface BeerListProps {
  beers: Beer[];
}
// BeerList component
function BeerList({ beers }: BeerListProps) {
  return (
    <div className="beer-list">
      {beers.map(
        (
          beer /* Mapping over the array of beers and rendering BeerCard component for each beer */
        ) => (
          <BeerCard
            key={beer.id}
            beer={beer}
          /> /* BeerCard component with unique key and beer object */
        )
      )}
    </div>
  );
}

export default BeerList;
