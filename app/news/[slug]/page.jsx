const contentful = require("contentful");
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function News({params}) {
    // console.log(params.slug)
    const client = contentful.createClient({
        space: 'bjecqd91nk6y',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'bWtB0JmR-bFAhX5rmc_i7gj6L_-RzQwkHq5HD9z3iBE'
      })
    
    const document = (await client.getEntry(params.slug)).fields.content;
    const image = await client.getEntry(params.slug).then(entry => )

    return (
        <>
            {documentToReactComponents(document)}
        </>
    )
}