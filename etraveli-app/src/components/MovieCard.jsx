const MovieCard = ({
    title,
    episode_id,
    opening_crawl,
    release_date,
    setSelectedMovieDecription,
    setSelectedMovieTitle
}) => {
    return (
        <div className="flex justify-between mb-4 border-gray-500 movie__card">
            <p className="mr-2 text-sm text-gray-600">
                Episode {episode_id}
            </p>
            <h3 className="cursor-pointer text-lg font-semibold" onClick={() => {
                setSelectedMovieTitle(title)
                setSelectedMovieDecription(opening_crawl)
            }}>
                Episode {episode_id}-{title}
            </h3>
            <p className="text-sm text-gray-600">
                {release_date}
            </p>

        </div>
    )
}

export default MovieCard