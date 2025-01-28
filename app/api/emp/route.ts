export async function GET(req: Request, res: Response) {
    const data = [{ 'name': 'John', 'age': '30', 'salaly': '1000' },
    { 'name': "Jane", 'age': '25', 'salaly': '2000' },
    { 'name': "job", 'age': '38', 'salaly': '1500' }]
    return Response.json(data)

}