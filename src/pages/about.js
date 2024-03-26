import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (<main>
    <h1>About Me</h1>
    <Link to="/">Home</Link>
    <p>Hello! I am a mathematics student at Brown University.</p>
    </main>)
}

export const Head = () => <title>About Me</title>

export default AboutPage