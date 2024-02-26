import Heading from "../components/Heading"
import ProjectPostCard from "../components/ProjectPostCard"
const contentful = require("contentful");

export default function projectsPage() {
    const client = contentful.createClient({
        space: 'bjecqd91nk6y',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'bWtB0JmR-bFAhX5rmc_i7gj6L_-RzQwkHq5HD9z3iBE'
    })
    
    return (
        <section>
            <div className="text-center my-7">
                <Heading text={"Projects"}></Heading>
            </div>
            <p className="mx-40 text-center text-gray-600 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat iure ipsum corrupti quod saepe earum quasi. Error maiores sint odit rem eos inventore exercitationem natus at consequuntur! Illum, maxime!</p>
            <div className="grid grid-cols-2 gap-4 gap-y-10 mx-60">
                { client.getEntries({ content_type: "projects" }).then(entries => (
                    entries.items.map(entry => (
                        <ProjectPostCard key={entry.sys.id} title={entry.fields.title} date={entry.fields.date} image={entry.fields.image} link={entry.fields.link} description={entry.fields.description}></ProjectPostCard>
                    ))
                )) }
            </div>
        </section>
    )
}