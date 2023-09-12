import { useLoaderData } from "react-router-dom";

const SingleBeer = () => {
	const singleBeer = useLoaderData();
	const {
		name,
		tagline,
		first_brewed,
		description,
		image_url,
		abv,
		ph,
		attenuation_level,
		volume,
		brewers_tips,
		contributed_by,
	} = singleBeer[0];

	const quantity = volume.value;
	return (
		<div>
            <h2 className='font-semibold text-3xl text-center py-10 text-white bg-blue-900 tracking-widest uppercase'>{name}</h2>
			<div className='flex sm:flex-row flex-col justify-center items-center md:p-20 p-5 gap-20 bg-blue-200'>
				<div>
					<img src={image_url} alt='' className="sm:w-60 sm:h-auto h-60"/>
				</div>
				<div className='flex flex-col gap-3 text-sm'>
					<p>
						<span className='font-bold'>Tag: </span>
						{tagline}
					</p>
					<p>
						<span className='font-bold'>Description: </span>
						{description}
					</p>
					<p>
						<span className='font-bold'>Quantity: </span>
						{quantity} litter
					</p>
					<p>
						<span className='font-bold'>PH Level: </span>
						{ph}
					</p>
					<p>
						<span className='font-bold'>Attention Level: </span>
						{attenuation_level}
					</p>
					<p>
						<span className='font-bold'>ABV: </span>
						{abv}
					</p>
					<p>
						<span className='font-bold'>First Brewed: </span>
						{first_brewed}
					</p>
					<p>
						<span className='font-bold'>Brewers Tips: </span>
						{brewers_tips}
					</p>
					<p>
						<span className='font-bold'>Contributed By: </span>
						{contributed_by}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleBeer;
