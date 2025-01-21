import Link from "next/link";

// const menus = [
//     {name: "Home", path: "/#"},
//     {name: "About us", path: "/#"},
//     {name: "page1", path: "/page1"},
//     {name: "page2", path: "/page2"},
//     {name: "page3", path: "/page3"},
//     {name: "Fruit", path: "/furit"},
// ]
export default function Navbar() {
    return (
        <div className="w-full sticky top-0 flex justify-between bg-blue-800" >
            <div>Logo</div>
            {/* <div>
                <ul className="flex gap-x-6">
                    {menus.map((menu, index) => (
                        <li key={index}><Link href={menu.path}>{menu.name}</Link></li>
                    ))}
                </ul>
            </div> */}
            <div className="flex justify-between">
                <ul className="flex gap-x-6 hover:bg-blue-900">
                    <li><Link href="/#">Home</Link></li>
                    <li><Link href="/#">About</Link></li>
                    <li><Link href="/page1">Page 1</Link></li>
                    <li><Link href="/page2">Page 2</Link></li>
                    <li><Link href="/page3">Page 3</Link></li>
                    <li><Link href="/fruit">Fruit</Link></li>
                </ul>
            </div>

        </div>
    )
}