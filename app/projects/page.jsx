import Heading from "../components/Heading"
import ProjectPostCard from "../components/ProjectPostCard"
const contentful = require("contentful");

export default function projectsPage() {
    const client = contentful.createClient({
        space: process.env.SPACE,
        environment: 'master', // defaults to 'master' if not set
        accessToken: process.env.ACCESS_TOKEN
    })
    
    return (
        <section>
            <div className="text-center my-7">
                <Heading text={"Projects"}></Heading>
            </div>
            <p className="mx-40 text-center text-gray-600 mb-7">Our projects exclusively revolve around system development undertaken by club members, specifically for entrepreneurial activities. These initiatives involve designing, creating, and implementing tech solutions aimed at fostering entrepreneurship within the community, equipping members with practical skills and experience to succeed in innovative ventures.</p>
            <div className="grid grid-cols-2 gap-4 gap-y-10 mx-60">
                { client.getEntries({ content_type: "projects" }).then(entries => (
                    entries.items.map(entry => (
                        <ProjectPostCard key={entry.sys.id} title={entry.fields.title} date={entry.fields.date} image={entry.fields.image.fields.file.url} link={entry.fields.link} description={entry.fields.description}></ProjectPostCard>
                    ))
                )) }
            </div>
        </section>
    )
}