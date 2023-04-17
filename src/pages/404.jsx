import Link from 'next/link'
import Image from 'next/image'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <Image src="/images/404.jpg" width={200} height={200} alt="404 Error" />
      </div>
      <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Page Not Found</h2>
      <p className="text-xl text-gray-500">The page you're looking for was not found.</p>
      <Link href="/" className="mt-4 text-base font-medium text-blue-600 hover:text-blue-500">
      
          Go back home<span aria-hidden="true"> &rarr;</span>
       
      </Link>
    </div>
  )
}