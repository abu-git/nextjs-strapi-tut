import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link href="/">
            <a>Devistry</a>
        </Link>

        <ul>
            <li>
                <Link href="/posts">
                    <a>All posts</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar