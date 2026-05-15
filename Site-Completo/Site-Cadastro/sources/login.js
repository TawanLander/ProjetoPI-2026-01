async function login() {
    let email = "";
    let senha = "";
    const fetchLogin = await fetch("/enfermeiros/autenticar", {
        "method" : "POST",
        headers: {
            "Content-Type" : "aplication/json",
        },
        body :  JSON.stringify (
            email,
            senha ,
        )
    })



    if (!fetchLogin.ok) return false; 
}