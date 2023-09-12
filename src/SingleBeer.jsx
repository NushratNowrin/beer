
import { useLoaderData } from 'react-router-dom';

const SingleBeer = () => {
    const singleBeer = useLoaderData();
    console.log(singleBeer);
    const {name, tagline, first_brewed, description, image_url, abv, ph, attenuation_level, brewers_tips, contributed_by} = singleBeer;
    // const quantity = volume.value;
    return (
        <div className='flex justify-center items-center'>
            <div>
                <img src={image_url} alt="" />
            </div>
            <div>
                <h2>Name: {name}</h2>
                <p>Tag: {tagline}</p>
                <p>Description: {description}</p>
                {/* <p>Quantity: {quantity} litter</p> */}
                <p>PH Level: {ph}</p>
                <p>Attention Level: {attenuation_level}</p>
                <p>ABV: {abv}</p>
                <p>First Brewed: {first_brewed}</p>
                <p>Brewers Tips: {brewers_tips}</p>
                <p>Contributed By: {contributed_by}</p>
            </div>
        </div>
    );
};

export default SingleBeer;