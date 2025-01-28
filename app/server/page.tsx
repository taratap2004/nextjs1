export  function page() {
    async function createEmail(formData: FormData) {
        'use server'
        console.log('hello from server')
        const email = formData.get('email')
        console.log(email)
    }

    return (
        <div>
            <form action={createEmail}>
                <input type="email" name="email"/>
                <button>Submit</button>
            </form>
        </div>
    )
}   