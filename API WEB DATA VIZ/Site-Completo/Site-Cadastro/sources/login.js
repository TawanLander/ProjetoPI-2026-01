async function login() {
    let email = document.getElementById('ipt_email').value;
    let senha = document.getElementById('input_senha').value;
    const fetchLogin = await fetch("/enfermeiros/autenticar", {
        "method": "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            senha,
        })
    });

    if (!fetchLogin.ok) {
        document.getElementById('mensagem').innerHTML = "Email ou senha incorretos!";
        return false;
    }
    
    // Não precisa de else por causa do return acima;
    let dados = await fetchLogin.json();
    sessionStorage.setItem('enfermeiro', JSON.stringify(dados));
    window.location.href = '../Site-Pacientes/pacientes.html';

}