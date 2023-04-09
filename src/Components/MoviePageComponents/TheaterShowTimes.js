import ShowTimeVariant from './ShowTimeVariant';

function TheaterShowTimes ({theaterShowTimes, handleMovieClicked}) {
    let name = theaterShowTimes.name;
    let distance = Math.ceil(theaterShowTimes.distance * 100) / 100;

    return (
        <div className='theaterShowTimes'>
            <div className="theaterShowTimesHeader">
                <p className='theaterShowTimesTitle'>{name}</p>
                <p className='distanceTitle'>{theaterShowTimes.distance === undefined ? '' : (`${distance}mi`)}</p>
                {theaterShowTimes.distance === undefined ?  <i className="fa fa-angle-right toMovie" onClick={() => handleMovieClicked(theaterShowTimes.emsVersionId)}></i> : ""}
            </div>
            {theaterShowTimes.movieVariants.map(variant => {
                return <ShowTimeVariant key={variant.formatId} variant={variant}/>
            })}
        </div>
    );

  }
  
  export default TheaterShowTimes;