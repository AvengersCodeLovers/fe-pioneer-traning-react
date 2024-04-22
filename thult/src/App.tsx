import Header from './components/Header'
import Article from './components/Article'
import sampleData from './data';

function App() {
    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Training react</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                    rel="stylesheet"
                />
            </head>
            <body>
                <Header />
                <div className="container">
                    <div className="list-article">
                        {sampleData.map((data) => (
                            <Article
                                key={data.id}
                                avatar={data.avatar}
                                username={data.username}
                                publishedAt={data.publishedAt}
                                title={data.title}
                                tags={data.tags}
                                reactions={data.reactions}
                                comments={data.comments}
                            />
                        ))}
                    </div>
                </div>
            </body>
        </>
    )
}

export default App
