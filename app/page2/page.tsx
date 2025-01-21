import Link from "next/link"
import Image from "next/image"

function page() {
    return (
        <div>
            <h1 className="text-4xl">Page 2</h1>
            <Image src="/Messi.jpg" alt="Messi" width="400" height="400"></Image>
            <div><Link href="/page1" >Go to page 1</Link></div>
            <div><Link href="/page3" >Go to page 3</Link></div>
        </div>
    );

}

export default page;