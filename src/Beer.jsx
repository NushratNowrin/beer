
const Beer = (beer) => {
	const { id, name, image_url } = beer;

	return (
		<div className='card-box flex flex-col items-center justify-center py-8 px-5 rounded-xl shadow-lg bg-white bg-opacity-30'>
			<div className='h-40 pb-5'>
				<img src={image_url} alt='' className='h-full' />
			</div>
			<div className='h-16'>
				<h2 className='font-semibold text-center text-white'>{name}</h2>
			</div>
			<div className='flex flex-col justify-end'>
				<div className="shadowButton inline-block text-blue-200 text-sm font-semibold py-2 px-4 border border-blue-200  rounded-xl hover:text-black"><a href={`/${id}`} >View Details</a></div>
			</div>
		</div>
	);
};

export default Beer;
