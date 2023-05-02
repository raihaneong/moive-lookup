import Link from "next/link"

import SeachBar from "@/components/SearchBar"



export default function Search() { 
    return (
        <div>
            <Link href="/"> back home</Link>
            <h1>ini search page</h1>
            <SeachBar />
        </div>
    )
}