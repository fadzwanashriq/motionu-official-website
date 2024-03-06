import HeroText from "./components/HeroText";
import Heading from "./components/Heading";
import ActivityCard from "./components/ActivityCard";
import { FaCampground } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import Image from "next/image";
import MembershipPerkCard from "./components/MembershipPerkCard";

export default function page() {
  return (
    <section>
      <main>
        <section className="h-screen flex justify-center items-center pb-20 bg-gradient-to-br	from-sky-300 via-white to-sky-300">
          <HeroText></HeroText>
        </section>
        <div className="lg:px-100 white-background">
          <section className="py-10 ">
            <div className="text-center">
              <Heading text={"Activities"}></Heading>
              <div className="flex flex-col items-center justify-center lg:flex-row gap-10 mt-10">
                <ActivityCard
                  activityDesc={
                    "Engage in discussions, learn strategies, and gain insights into tech entrepreneurship through informative sessions and interactive workshops"
                  }
                  activityImage={<FaBullhorn></FaBullhorn>}
                  activityTitle={"Workshop and Talk"}
                ></ActivityCard>
                <ActivityCard
                  activityDesc={
                    "Collaborate, innovate, and develop real-world solutions while applying entrepreneurial principles in exciting technopreneurial projects"
                  }
                  activityImage={<FaProjectDiagram></FaProjectDiagram>}
                  activityTitle={"Projects"}
                ></ActivityCard>
                <ActivityCard
                  activityDesc={
                    "Dive into immersive training sessions, hone skills, and build networks with like-minded individuals in intensive technopreneurship bootcamps"
                  }
                  activityImage={<FaCampground></FaCampground>}
                  activityTitle={"Bootcamp"}
                ></ActivityCard>
              </div>
            </div>
          </section>
        </div>
        <section className="bg-sky-400 py-10">
          <div className="mb-5 text-center">
            <Heading text={"Membership perks"} lightFont={true}></Heading>
          </div>
          <div className=" lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:px-80 lg:px-32">
            <MembershipPerkCard
              title={"Participate in our workshops"}
              description={
                "Sharpen your skills with exclusive workshops tailored to your interests and career goals. Learn from industry experts and gain hands-on experience to excel in your field."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Participate in our DevTalks"}
              description={
                "Get inspired by thought-provoking discussions with industry leaders and innovators. Stay ahead of trends and expand your network with engaging talks and presentations."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Become a program committee member"}
              description={
                "Shape the future of Motion-U by joining our committee. Contribute your ideas and leadership skills to drive impactful events and programs for our community."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Compete for mainboard position"}
              description={
                "Compete for a prestigious mainboard position and lead our organization towards excellence. Showcase your vision and dedication to make a lasting impact on Motion-U."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Join AGM and AGD"}
              description={
                "Participate in our Annual General Meetings and Discussions to have your voice heard and influence the direction of Motion-U. Gain insights into our performance and contribute to our strategic decisions."
              }
            ></MembershipPerkCard>
            <MembershipPerkCard
              title={"Monthly Meetups"}
              description={
                "Connect with like-minded members at our monthly meetups. Share experiences, collaborate on projects, and build lasting relationships in a supportive environment."
              }
            ></MembershipPerkCard>
          </div>
        </section>
        <section className="p-10 white-background">
          <h2 className="text-3xl text-sky-700 font-bold text-center pb-8">
            Our collaborators
          </h2>
          <div className="grid grid-cols-2 lg:flex justify-center gap-9">
            <Image
              src={"/images/iium.png"}
              width={100}
              height={100}
              className="rounded-full"
            ></Image>
            <Image
              src={"/images/kict.png"}
              width={100}
              height={100}
              className="rounded-full"
            ></Image>
            <Image
              src={"/images/cita.png"}
              width={120}
              height={100}
              className="rounded-full"
            ></Image>
            <Image
              src={"/images/mulhaq.png"}
              width={100}
              height={100}
              className="rounded-full"
            ></Image>
            <Image
              src={"/images/ictss_logo.jpg"}
              width={100}
              height={100}
              className="rounded-full"
            ></Image>
          </div>
        </section>
      </main>
    </section>
  );
}
