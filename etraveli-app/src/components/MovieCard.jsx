const MovieCard = ({
    title,
    episode_id,
    opening_crawl,
    release_date,
    setSelectedMovieDecription,
    setSelectedMovieTitle
}) =>{
    return(
        <div className="flex justify-between mb-4 border-gray-500 movie__card">
            <p className="mr-2">
            Episode {episode_id}
            </p>
            <h3 className="cursor-pointer" onClick={() => {
                        setSelectedMovieTitle(title)
                        setSelectedMovieDecription(opening_crawl)
                    }}>
                {title}
            </h3>
            <p>
                {release_date}
            </p>

        </div>
    )
}

export default MovieCard