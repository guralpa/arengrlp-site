import * as React from 'react'
import { Link } from 'gatsby'

/* == Old way ==
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
*/

// == New Way ==
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my first webdev experience.</p>
    </Layout>
  )
}
export const Head = () => {<title>Home Page</title>}

export default IndexPage