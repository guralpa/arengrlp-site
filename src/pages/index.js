import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1>
        Welcome to my Gatsby site!
      </h1>
      <Link to="/about">About</Link>
      <p>
        This is also my first webdev experience.
      </p>
    </main>
  )
}

export const Head = () => {<title>Home Page</title>}

export default IndexPage