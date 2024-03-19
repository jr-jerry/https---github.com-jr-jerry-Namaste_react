const Contact=()=>{
    return (
        <>
            <h1 className="font-bold text-2xl mx-auto my-1 w-1/2 border-2 rounded-lg text-center">Contact Page</h1>
            <form className="mx-auto my-1 w-1/2 border-2 rounded-lg">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Problem"/>
                <button type="submit" className="block px-2 rounded-lg bg-slate-100">Submit</button>

            </form>
        </>
    )
}
export default Contact;