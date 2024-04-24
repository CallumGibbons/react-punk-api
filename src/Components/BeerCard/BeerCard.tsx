import { Beer } from '../../assets/Data/types';

export interface BeerCardProps {
    beer: Beer;
  }

function BeerCard({beer}: BeerCardProps) {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      <p>ABV: {beer.abv}%</p>
    </div>
  );
}

export default BeerCard