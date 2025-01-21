export default async function Page({params}:{params : {slug : string}}) {
    const slug = (await params).slug;
    console.log('slug = ',slug);
    console.log(params);
    return (
        <div>
            {slug}
        </div>
    );
}