import Link from "next/link"
export default function page() {
    return (
        <div>
            <h1 className="text-3xl">This is Setting Page</h1>
            <Link href="/dashboard" className="border-2" >Back to Dashboard</Link>
        </div>
    )
}