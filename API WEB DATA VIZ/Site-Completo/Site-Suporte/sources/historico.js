window.onload = function () {

    const enfermeiro = sessionStorage.getItem("enfermeiro");

    if (!enfermeiro) {
        window.location.href = "../../Site-Cadastro/login.html";
        return;
    }
}

async function buscar() {
    const res = await fetch('/ia/pegarRespostas');

    if(!res.ok) return;

    const resultado = await res.json()

    plotar(resultado)
}

function plotar(array){
    const div = document.querySelector('.historico');
    let msg = '';
    array.sort((a, b) => new Date(b.dthr) - new Date(a.dthr));

    for(let i = 0; i < array.length; ++i){
        let atual = array[i];
        let data = new Date(atual.dthr);

        let d = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} às ${data.getHours()}:${data.getMinutes()}`
        msg += `
        <div class="linha">
            <div>
            <h3>
                <span>Data: ${d}</span>
            </h3>
                <p>Resposta gerada: ${atual.resposta}</p>
            </div>
            <span class="status-finalizado">ID: ${atual.id} </span>
        </div>
        `
    }

    div.innerHTML = msg;
}   