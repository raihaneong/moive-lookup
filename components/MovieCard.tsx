'use client'
import Image from "next/image";

import { useMovieStore } from "@/lib/searchTerm";
export default function MovieCard() {

  const search = useMovieStore(state => state.search);
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/3 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              width={500}
              height={300}
            />
          </div>
          <h1>{search}</h1>
        </div>
      </div>
    </div>
  );
}
