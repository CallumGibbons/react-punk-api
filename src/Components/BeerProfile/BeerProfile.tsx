import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Beer } from "../../assets/Data/types";
import "./BeerProfile.css";

// Define props interface for BeerProfile component
interface BeerProfileProps {
  handleDisplay: (display: boolean) => void; // Function to handle display state
}
// Define BeerProfile component as a functional component
const BeerProfile: React.FC<BeerProfileProps> = ({ handleDisplay }) => {
  const { id } = useParams();
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    // When the component mounts or when the id or handleDisplay function changes
    handleDisplay(false); // Set the display state to false to hide the beer profile
    const fetchBeer = async () => {
      // Function to fetch beer details from the API
      try {
        const response = await fetch(`http://localhost:3333/v2/beers/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch beer details");
        }
        const data = await response.json();
        // Update the beer state with the fetched beer details
        setBeer(data[0]);
      } catch (error) {
        console.error("Error fetching beer details:", error); // Log an error message if fetching fails
      }
    };

    fetchBeer(); // Invoke the fetchBeer function immediately
    // Cleanup function that is called when the component unmounts or when dependencies change
    return () => {
      handleDisplay(true); // Set the display state back to true to show the beer profile
    };
  }, [id, handleDisplay]); // Dependency array: id and handleDisplay function

  if (!beer) {
    // If beer details are not available, return a message indicating the beer is not found
    return <div>Beer not found</div>;
  }

  return (
    <div data-testid="beer-profile" className="beer-profile-container">
      <div className="backButton">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <div className="beerCard-container">
        <img src={beer.image_url} alt={beer.name} />
        <div className="beer-info">
          <p className="name">{beer.name}</p>
          <p className="tagline">{beer.tagline}</p>
          <p className="description">{beer.description}</p>
          <p className="description">{beer.brewers_tips}</p>
          <p className="description">
            Goes With: {beer.food_pairing.join(", ")}
          </p>
          <p className="abv">{beer.abv}% ABV</p>
          <p className="ph">{beer.ph} ph</p>
        </div>
      </div>
    </div>
  );
};

export default BeerProfile;
