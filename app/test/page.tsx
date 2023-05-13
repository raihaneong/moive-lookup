import Image from "next/image";

const getData = async () => {
  const res = await fetch(`
    https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY}&language=en-US&query=oshi&page=1&include_adult=false`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

const test = async () => {
  const data = await getData();
  return (
    <div>
      <h1>Test</h1>
      {data.results.map((item: any) => (
        <div key={item.id} className="flex">
          <Image
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.name || item.title}
            width={200}
            height={300}
          />
          <div className="flex flex-col">
            <h1 key={item.id}>{item.name || item.title}</h1>
            <p>{item.overview || "no information available"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default test;
