import Link from "next/link"
import Image from "next/image"

function page() {
    return (
        <div>
            <h1 className="text-4xl text-center">Page 1</h1>
            <Image src="/ronaldo.jpg" alt="ronaldo" width="400" height="400"></Image>
            <h2>66162110262-7</h2>
            <div><Link href="/page2" >Go to page 2</Link></div>
            <div><Link href="/page3" >Go to page 3</Link></div>
        </div>
    );

}

export default page;