import { Beer } from "../../assets/Data/types";
import BeerCard from "../BeerCard/BeerCard";
import "./BeerList.css";

interface BeerListProps {
  beers: Beer[];
}

function BeerList({ beers }: BeerListProps) {
  console.log;
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;
