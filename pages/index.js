import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li><Link href='/a'><a>a</a></Link></li>
    <li><Link href='/b'><a>b</a></Link></li>
    <li>
      <Link
        prefetch
        href={{pathname: '/posts', query: { id: '2' }}}
        as='/posts/2'
      >
        <a>post #2</a>
      </Link>
    </li>
  </ul>
)
