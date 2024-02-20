import PrettyButton from "./PrettyButton"

export default function HeroText() {
  return (
    <div className="text-center animate-fade-up  animate-ease-out">
        <h1 className="text-9xl font-extrabold text-sky-700 text-nowrap">Motion-U Club</h1>
        <p className="text-2xl text-sky-500 font-semibold my-5">Learn, create, share</p>
        <PrettyButton text={"More about us"} link="/about"></PrettyButton>
    </div>
  )
}
