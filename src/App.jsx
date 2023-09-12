import { useEffect, useState } from "react";
import "./App.css";
import Beer from "./Beer";

function App() {
  // Declaring Stateful variable
	const [beers, setBeers] = useState([]);

  // Fetch data from Punk API
	useEffect(() => {
		fetch("https://api.punkapi.com/v2/beers")
			.then((res) => res.json())
      // set each array into Beers
			.then((data) => setBeers(data));
	}, []);
	console.log(beers);
	return (
		<div className="body bg-blue-900">
    {/* Heading */}
			<div className='py-10'>
				<h1 className='text-2xl font-semibold text-center text-white'>The Beers</h1>
			</div>

      {/* Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-10 sm:px-10 px-2">
      {
        beers.map(beer => 
          <Beer key={beer.id} {...beer}></Beer>)
      }
      </div>
		</div>
	);
}

export default App;
