import TheaterShowTimes from './TheaterShowTimes';

function ShowTimesList ({showTimesList, date, handleMovieClicked}) {
    return (
      <div className='showTimesList'>
        <p className='showTimesListDate'>{date}</p>
        {showTimesList[0].id ?  <p className='showTimesListTitle'>ShowTimes Near You: ({showTimesList.length} Locations)</p> : <p className='showTimesListTitle'></p>}
        {showTimesList.map( theaterShowTimes => {
            return <TheaterShowTimes key={theaterShowTimes.id === undefined ? theaterShowTimes.emsVersionId : theaterShowTimes.id} theaterShowTimes={theaterShowTimes} handleMovieClicked={handleMovieClicked}/>
        })}
      </div>
    );
}

export default ShowTimesList;