import Image from "next/image"
import { FaArrowRight } from "react-icons/fa";

export default function BlogPost() {
    return (
        <a href="#" className="hover:opacity-95">
            <div className="rounded-2xl shadow-xl">
                <Image src={"/images/workshop.jpg"} height={1100} width={1500} className="rounded-t-2xl"></Image>
                <div className="p-3 py-4">
                    <h2 className="text-2xl text-sky-800 font-bold">Blogpost Title</h2>
                    <p className="text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus maiores iste eum impedit dolor unde dolorum labore, nisi laboriosam...</p>
                    <div>
                    <div className="flex justify-end items-center pt-5 ">
                        <div>More&nbsp;</div>
                        <div><FaArrowRight></FaArrowRight></div>
                    </div>
                </div>
                </div>
                
            </div>
        </a>
    )
}