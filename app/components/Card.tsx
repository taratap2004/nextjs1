import Image from "next/image"
import Link from "next/link"

export default function Card({src, title}:{src : string, title : string}) {
    return (
        <div>
            <Image src={src}  width="100" height="100" alt="Image" className="rounded-full"/>
            <div>{title}</div>
            <div><Link href="/#" >Click</Link></div>
        </div>

    )
}