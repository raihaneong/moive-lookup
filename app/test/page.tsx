// const getData = async () => {
//     const res = await fetch(`
//     https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=oshi&page=1&include_adult=false`)
//     if (!res.ok) {
//         throw new Error(res.statusText)
//     }
//     return res.json()
// }


const test = async () => {
    // const data = await getData();
    return (
        <div>
            <h1>Test</h1>
            {/* {data.results.map((item: any) => (
                <>
                    <h1 key={item.id}>{item.name}</h1>
                    <p>{item.overview}</p>
                </>
                ))} */}
        </div>
    )
}

export default test;