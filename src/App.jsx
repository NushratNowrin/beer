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

	// Searchbar
	const [query, setQuery] = useState("");
	// console.log(beers.filter((beer) => beer.name.toLowerCase().includes(query)));
	// console.log(beers);
	return (
		<div className='body bg-blue-900'>
			{/* Search Bar */}
			<div className='py-10 flex flex-col justify-center items-center'>
				<h2 className='text-2xl font-semibold text-center text-white'>
					Search which you need
				</h2>
				<form>
					<div>
						<input
							type='search'
							name='search'
							id='search'
							placeholder='Search here by name'
							className='input input-bordered my-3 px-3 py-2 rounded-lg'
							onChange={(event) => setQuery(event.target.value)}
						/>
					</div>
				</form>
			</div>

			{/* Cards */}
			<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-10 sm:px-10 px-10'>
				{beers
					.filter((beer) => beer.name.toLowerCase().includes(query))
					.map((beer) => (
						<Beer key={beer.id} {...beer}></Beer>
					))}
			</div>
		</div>
	);
}

export default App;
