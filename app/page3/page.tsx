import Link from "next/link"
import Image from "next/image"
function page() {
    return (
        <div>
            <h1 className="text-4xl text-center">Page 3</h1>
            <Image src="/mbappe.png" alt="mbappe" width="400" height="400"></Image>
            <h2 className="text-3xl">66162110262-7</h2>
            <div><Link href="/page1" >Go to page 1</Link></div>
            <div><Link href="/page2" >Go to page 2</Link></div>
        </div>
    );

}

export default page;