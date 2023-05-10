import SeachBar from "@/components/SearchBar"


export default function layoutSearch({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex container mx-auto px-4">
        <aside className="m-4">
            <SeachBar />
        </aside>
        <section>
            {children}
        </section>
        </main>
    )
 }