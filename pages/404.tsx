import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
      <div className="pt-6 pb-8 space-x-2 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Oops! That page can't be found
        </p>
        <p className="mb-8">Don't worry though, we are still AWESOME!</p>

        <p className="text-lg leading-7">
          Take me back{' '}
          <Link
            href="/"
            className="inline-flex flex-row items-center gap-2 font-bold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
          >
            HOME
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
            </svg>
          </Link>
        </p>
      </div>
    </div>
  )
}
