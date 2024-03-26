import * as React from 'react'
import { Link } from 'gatsby'

/* == Old Way ==
const AboutPage = () => {
    return (<main>
    <h1>About Me</h1>
    <Link to="/">Home</Link>
    <p>Hello! I am a mathematics student at Brown University.</p>
    </main>)
}
*/

// == New Way ==
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hello! I am a mathematics and computer science student at Brown University.</p>
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage