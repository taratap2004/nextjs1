import Link from "next/link"
import Image from "next/image"

function page() {
    return (
        <div>
            <h1 className="text-4xl text-center">Page 2</h1>
            <Image src="/Messi.jpg" alt="Messi" width="400" height="400"></Image>
            <h2>66162110262-7</h2>
            <div><Link href="/page1" >Go to page 1</Link></div>
            <div><Link href="/page3" >Go to page 3</Link></div>
        </div>
    );

}

export default page;