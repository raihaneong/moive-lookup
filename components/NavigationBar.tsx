import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-8 lg:px-6">
      <nav aria-label="Main Nav" className="flex fixed p-14 bottom-0 left-0">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium pr-4"> MENU </span>
            </div>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <nav
            aria-label="Users Nav"
            className="mt-2 flex flex-col space-y-1 px-4 absolute left-8 -top-16"
          >
            <Link
              href="/search"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Search
            </Link>

            <Link
              href="/about"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              About
            </Link>
            <Link
              href="/"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Home
            </Link>
          </nav>
        </details>
      </nav>
    </div>
  );
}
