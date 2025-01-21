import Link from "next/link"
export default function page() {
    return (
        <div>
            Dashboard
            <Link href="/dashboard/setting" >Go to Setting</Link>
        </div>
    )
}