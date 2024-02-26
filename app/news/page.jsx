import BlogPostCard from "../components/BlogPostCard"
import Heading from "../components/Heading"
const contentful = require('contentful')


export default function page() {

  const client = contentful.createClient({
    space: 'bjecqd91nk6y',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'bWtB0JmR-bFAhX5rmc_i7gj6L_-RzQwkHq5HD9z3iBE'
  })
  
  return (
    <section>
      <div className="text-center my-7">
        <Heading text={"News"}></Heading>
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-10 mx-60">
        { client.getEntries({ content_type: "news" }).then( entries => (
          entries.items.map(entry => (
            <BlogPostCard key={entry.sys.id} title={entry.fields.title} date={entry.fields.date} desc={entry.fields.description} image={""} keyId={entry.sys.id}></BlogPostCard>
          ))
        )) }
      </div>
    </section>
  )
}
