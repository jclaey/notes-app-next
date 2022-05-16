import Link from 'next/link'

const Navbar = () => {
  return (
    <nav  className='flex justify-between mb-4'>
      <div id="main-nav">
        <ul className='flex'>
          <li className='px-2'>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </li>
        </ul>
      </div>
      <div id="right-nav"></div>
    </nav>
  )
}

export default Navbar