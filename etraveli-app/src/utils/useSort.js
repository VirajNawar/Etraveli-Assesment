const useSort = (sortBy,movies) => {
    if(sortBy === 'year'){
        return movies.sort((a,b)=>{
            const year1 = new Date(a.release_date).getFullYear()
            const year2 = new Date(b.release_date).getFullYear()
            return year1 - year2
        })
    }
    else if(sortBy === 'episode'){
        return movies.sort((a,b)=>a.episode_id - b.episode_id)
    }else{
        return movies
    }
}

export default useSort