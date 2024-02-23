import Heading from "../components/Heading"
import BlogPost from "../components/NewsPost"

export default function projectsPage() {
    return (
        <section>
            <div className="text-center my-7">
                <Heading text={"Projects"}></Heading>
            </div>
            <p className="mx-40 text-center text-gray-600 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat iure ipsum corrupti quod saepe earum quasi. Error maiores sint odit rem eos inventore exercitationem natus at consequuntur! Illum, maxime!</p>
            <div className="grid grid-cols-2 gap-4 gap-y-10 mx-60">
                <BlogPost></BlogPost>
                <BlogPost></BlogPost>
                <BlogPost></BlogPost>
                <BlogPost></BlogPost>
            </div>
        </section>
    )
}