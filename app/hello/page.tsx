import Card  from "../components/Card";
export default function page() {
    return (
        <div >
            <h1 className="text-3xl bg-red-700 text-center">
                Hello World
            </h1>
            <Card src="/ronaldo.jpg" title="Ronaldo"/>
        </div>
    )
}