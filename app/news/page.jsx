import BlogPost from "../components/NewsPost"
import Heading from "../components/Heading"

export default function page() {
  return (
    <section>
      <div className="text-center my-7">
        <Heading text={"News"}></Heading>
      </div>
      <div className="grid grid-cols-2 gap-4 gap-y-10 mx-60">
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
      </div>
    </section>
  )
}
