import {getApolloClient} from '@/lib/appolo-client'
import {gql} from '@apollo/client'

type Post = {
    node: {
        authorId: string,
        excerpt: string,
        id: string,
        link: string,
        featuredImage: {
            node: {
                link: string
            }
        }
    }
}

type WpData = {
    data: {
        posts: {
            edges: Post[]
        }
    }
}

const query = gql`
    query getPosts($language: LanguageCodeFilterEnum!) {
        posts(first: 10, where: {language: $language}) {
            edges {
                node {
                    authorId
                    excerpt
                    id
                    link
                    featuredImage {
                        node {
                            link
                        }
                    }
                }
            }
        }
    }
`

const getPosts = async (locale: string) => {
    const graphql = getApolloClient()
    const language = locale.toUpperCase()

    try {
        return await graphql.query({
            query: query,
            variables: {
                language
            }
        })
    } catch (e) {
        console.log(e)
        return null
    }
}

export async function getStaticProps({locale}: {locale: string}) {
    const data: WpData = await getPosts(locale)

    const posts: Post[] = data?.data.posts.edges

    return {
        props: { posts }
    }
}

const Feed = ({ posts }) => {


    return (
        <div>

        </div>
    )
}

export default Feed