import React from 'react';

let Beers  = function Beers(props) {
    const {clickToLike, beers} = props
    return (
        //implicit return 
        <ul className="beerbox">
            {beers.map((beer, index)=> (
                <li className="beerbottle">
                    <div>
                        <img src={beer.image_url} alt={beer.name}/>
                    </div>
                    <div>
                        <p>{beer.name}</p>
                        
                        <p>Tagline: {beer.tagline}</p>
                        <p>Description: {beer.description}</p>
                        <p>IBU: {beer.ibu}</p>
                        <button  style={{fontSize: "100px"}} onClick={() => {clickToLike(index)}}>Like</button>
                    </div>
                    
                </li>
            ))}
        </ul>
    )
}

export default Beers