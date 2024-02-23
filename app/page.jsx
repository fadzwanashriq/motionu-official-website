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
                <ActivityCard activityDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aliquam?"} activityImage={<FaBullhorn></FaBullhorn>} activityTitle={"Workshop and Talk"}></ActivityCard>
                <ActivityCard activityDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aliquam?"} activityImage={<FaProjectDiagram></FaProjectDiagram>} activityTitle={"Projects"}></ActivityCard>
                <ActivityCard activityDesc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aliquam?"} activityImage={<FaCampground></FaCampground>} activityTitle={"Bootcamp"}></ActivityCard>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
    )
}
