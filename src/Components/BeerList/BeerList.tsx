import { Beer } from '../../assets/Data/types';
import BeerCard from '../BeerCard/BeerCard';



interface BeerListProps {
  beers: Beer[];
}

function BeerList({ beers }: BeerListProps) {
  return (
    <div className="beer-list">
      {beers.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;