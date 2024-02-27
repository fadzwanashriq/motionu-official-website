import HeroText from "./components/HeroText"
import Heading from "./components/Heading"
import ActivityCard from "./components/ActivityCard"
import { FaCampground } from "react-icons/fa"
import { FaBullhorn } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";


export default function page() {
  return (
    <section>
      <main>
        <section className="h-screen flex justify-center items-center pb-20 bg-gradient-to-br	from-sky-300 via-white to-sky-300">
          <HeroText></HeroText>
        </section>
        <div className="px-64">
          <section className="py-24">
            <div className="text-center">
              <Heading text={"Activities"}></Heading>
              <div className="flex justify-center gap-10 mt-10">
                <ActivityCard activityDesc={"Engage in discussions, learn strategies, and gain insights into tech entrepreneurship through informative sessions and interactive workshops"} activityImage={<FaBullhorn></FaBullhorn>} activityTitle={"Workshop and Talk"}></ActivityCard>
                <ActivityCard activityDesc={"Collaborate, innovate, and develop real-world solutions while applying entrepreneurial principles in exciting technopreneurial projects"} activityImage={<FaProjectDiagram></FaProjectDiagram>} activityTitle={"Projects"}></ActivityCard>
                <ActivityCard activityDesc={"Dive into immersive training sessions, hone skills, and build networks with like-minded individuals in intensive technopreneurship bootcamps"} activityImage={<FaCampground></FaCampground>} activityTitle={"Bootcamp"}></ActivityCard>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
    )
}
