import Link from 'next/link'

const FirstPost = () => {
    // return <h1>Hello, world</h1>
    return (
        <div>
            <h1>Hello, World</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </div>
    )
}

export default FirstPost