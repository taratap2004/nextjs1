import Link from "next/link"
import Image from "next/image"
function page() {
    return (
        <div>
            <h1 className="text-4xl">Page 3</h1>
            <Image src="/mbappe.png" alt="mbappe" width="400" height="400"></Image>
            <div><Link href="/page1" >Go to page 1</Link></div>
            <div><Link href="/page2" >Go to page 2</Link></div>
        </div>
    );

}

export default page;