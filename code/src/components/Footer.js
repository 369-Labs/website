import Link from 'next/link'



const Footer = ({}) => {
  return (
    <footer className="pb-4">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
     
      <div className="flex flex-row justify-between pt-3 pb-1 border-t lg:flex-row bg-top border-gray-600 dark:border-gray-300">
        <ul className="flex flex-row space-y-0 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link href="/privacyPolicy">
              <a className="text-xs p-1 text-gray-600 hover:text-cyan transition-colors duration-300 hover:text-deep-purple-accent-400 dark:text-gray-200">
                Privacy
              </a>
            </Link>
          </li>
          <li>
            <Link href="/cookiesPolicy">
            <a className="text-xs p-1 text-gray-600 hover:text-cyan transition-colors duration-300 hover:text-deep-purple-accent-400 dark:text-gray-200">
              Cookies
            </a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row space-y-0 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <a
            href="/"
            className="text-xs p-1 text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 tracking-tight dark:text-gray-200"
          >
            © 2022 369 Technologies Inc.
          </a>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
