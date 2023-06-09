import Link from 'next/link'

export default function Title() {
  return (
    <header aria-label="Page Header">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-white-900 sm:text-3xl">
              <Link href="/">Moive Lookup</Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
