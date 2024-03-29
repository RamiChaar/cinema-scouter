function MoviePreview ({moviePreview, handleMovieClicked, list}) {
    let movieTitle = "";
    let posterImgUrl = null;
    let tomatoRating = "";
    let tomatoRatingImgUrl = null;
    let userRating = "";
    let userRatingImgUrl = null;

    if (moviePreview.hasOwnProperty('name')) {
        movieTitle = moviePreview?.name;
    }

    if (moviePreview.hasOwnProperty('posterImageObj')) {
        if(moviePreview?.posterImageObj?.hasOwnProperty('url')){
        posterImgUrl = moviePreview.posterImageObj.url;
        } else {
            return;
        }
    } 

    if (moviePreview.hasOwnProperty('tomatoRatingObj')) {
        if(moviePreview?.tomatoRatingObj?.hasOwnProperty('tomatometer')){
            tomatoRating = moviePreview.tomatoRatingObj.tomatometer.toString();
        }
        if(moviePreview?.tomatoRatingObj?.hasOwnProperty('iconImage')){
            tomatoRatingImgUrl = moviePreview.tomatoRatingObj.iconImage.url;
        }
        if(tomatoRating === undefined || tomatoRating === "" ) {
            tomatoRating = "";
            tomatoRatingImgUrl = null;
        }
    }

    if (moviePreview.hasOwnProperty('userRatingObj')) {
        if(moviePreview?.userRatingObj?.hasOwnProperty('dtlLikedScore')){
            userRating = moviePreview?.userRatingObj?.dtlLikedScore?.toString();
        }
        if(moviePreview?.userRatingObj?.hasOwnProperty('iconImage')){
            userRatingImgUrl = moviePreview.userRatingObj.iconImage.url;
        }
        if(userRating === undefined || userRating === "") {
            userRating = "";
            userRatingImgUrl = null;
        }
    }

    if (tomatoRating === "" && userRating === "") {
        return;
    }

    function movieClicked() {
        handleMovieClicked(moviePreview.id, list);
    }

    return (
        <div className='moviePreviewContainer' onClick={movieClicked}>
          <img className='moviePoster' src={posterImgUrl} alt="n/a"/>
          <div className='ratingDiv'>
            <div className='tomatoRatingDiv'>
              <img className='tomatoRatingIcon' src={tomatoRatingImgUrl} alt=""/>
              <p className="tomatoRating">{tomatoRating}{tomatoRating === "" ? "" : "%"}</p>
            </div>
            <div className='userRatingDiv'>
              <img className='userRatingIcon' src={userRatingImgUrl} alt=""/>
              <p className="userRating">{userRating}{userRating === "" ? "" : "%"}</p>
            </div>
          </div>
          <div className='movieTitleDiv'>
            <h6 className="movieTitle">{movieTitle}</h6>
          </div>
        </div>
    );
  }
  
  export default MoviePreview;