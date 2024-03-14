import Image from "next/image";

export default function CollaboratorLogo({ image }) {
  return (
    <Image
              src={image}
              width={100}
              height={100}
              className="rounded-full transition ease-in-out hover:scale-150"
            ></Image>
  );
}

