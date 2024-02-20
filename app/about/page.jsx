import Heading from "../components/Heading"
import Image from "next/image"

export default function about() {
  return (
    <section className="py-12">
        <div className="px-64 ">
          <div className="flex justify-center animate-fade-down">
            <div className="rounded-2xl border-2 border-sky-300 w-1/2 p-5 ">
              <div className="text-center">
                <Heading text={"Background"}></Heading>
              </div>
              <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam voluptatem error velit alias vel sunt laboriosam fugiat voluptates odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quam vel, mollitia neque similique fuga cupiditate. Enim, delectus mollitia cum eum maiores nesciunt. Ea illum et expedita dolorem aspernatur asperiores dolorum, veritatis aliquam, autem soluta maiores porro quasi cupiditate blanditiis eius iste odio placeat. Fugit veniam harum dignissimos facere fugiat excepturi a provident odit nisi dolores id, ex odio magni optio qui ratione ea laboriosam officia, blanditiis explicabo quod est.</p>
            </div>
          </div>
            <div className="flex justify-center gap-10 mt-10 text-center animate-fade-down animate-delay-200">
              <div className="rounded-2xl border-2 border-sky-300 w-1/2 p-5">
              <div>
                  <Heading text={"Mission"}></Heading>
                  <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam voluptatem error velit alias vel sunt laboriosam fugiat voluptates odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quam vel, mollitia neque similique fuga cupiditate. Enim, delectus mollitia cum eum maiores nesciunt. Ea illum et expedita dolorem aspernatur asperiores dolorum, veritatis aliquam, autem soluta maiores porro quasi cupiditate blanditiis eius iste odio placeat. Fugit veniam harum dignissimos facere fugiat excepturi a provident odit nisi dolores id, ex odio magni optio qui ratione ea laboriosam officia, blanditiis explicabo quod est.</p>
                </div>
                </div>
                <div className="rounded-2xl border-2 border-sky-300 w-1/2 p-5">
                <div>
                  <Heading text={"Vision"}></Heading>
                  <p className="text-wrap mt-3 leading-8 text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam voluptatem error velit alias vel sunt laboriosam fugiat voluptates odio.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quam vel, mollitia neque similique fuga cupiditate. Enim, delectus mollitia cum eum maiores nesciunt. Ea illum et expedita dolorem aspernatur asperiores dolorum, veritatis aliquam, autem soluta maiores porro quasi cupiditate blanditiis eius iste odio placeat. Fugit veniam harum dignissimos facere fugiat excepturi a provident odit nisi dolores id, ex odio magni optio qui ratione ea laboriosam officia, blanditiis explicabo quod est.</p>
                </div>
              </div>
            </div>
        </div>

          <div className="text-center mt-16 bg-gradient-to-br from-sky-300 via-white to-sky-200 w-full py-10">
            <Heading text={"Motion-U Club Members 2023/2024"}></Heading>
            <div className="flex justify-center mt-5">
              <Image src="/images/org_chart.png" width={1200} height={1200} className="rounded-2xl border-4 border-sky-700 shadow-lg"></Image>
            </div>
          </div>
    </section>
  )
}
