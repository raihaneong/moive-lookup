import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="p-1">
            <h1>not found</h1>
            <Link href="/"> back home</Link>
        </div>
        )
}