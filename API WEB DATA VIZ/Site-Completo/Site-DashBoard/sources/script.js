// window.onload = function () {

//     if (!sessionStorage.ID_USUARIO) {
//         window.location.href = "../../Site-Cadastro/login.html";
//         return;
//     }
// }

const parametros = new URLSearchParams(window.location.search);

const idPaciente = parametros.get("id");
const Info = document.getElementById('info');
const TempAlta = document.getElementById('tempalta');
const TempBaixa = document.getElementById('tempbaixa');
const TempAtual = document.getElementById('tempatual');
const Estabilidade = document.getElementById('estabilidade');
const Dashboard = document.getElementById('dashboard');


function procurar() {
    let sala = document.getElementsByClassName('lista');
    let ipt = document.getElementById('ipt-procurar').value;

    let leng = sala.length;
    let log = 0;

    while (log < leng) {
        console.log(sala[log++])
    }
}
var sensorDigital = new Chart(document.getElementById('dashboard').getContext('2d'), {
    type: 'line',
    data: {
        datasets: [{
            label: 'Temperatura',
            borderColor: '#ff0000',
            backgroundColor: '#ff0000'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: false,
            },
            y: {
                title: {
                    display: true,
                    text: 'Graus Celcius'
                },
                type: 'linear',
                min: 10,
            },
        }
    }
});

var paginacao = {};
var tempo = {};

async function obterDados(grafico, idSensor) {
    // fetch('http://localhost:3300/sensores/' + endpoint)
    try {
        const resposta = await fetch(`http://localhost:3000/pacientes/obterTemp/${idSensor}`);
            
            let valores = await resposta.json();
                if (paginacao[idSensor] == null) {
                    paginacao[idSensor] = 0;
                }
                if (tempo[idSensor] == null) {
                    tempo[idSensor] = 0;
                }
    
                var ultimaPaginacao = paginacao[idSensor];
                paginacao[idSensor] = valores.length;
                valores = valores.slice(ultimaPaginacao);
    
                valores.forEach((temp) => {
                    document.getElementById('nome_bd').innerHTML = temp.nome;
                    if (grafico.data.labels.length == 10 && grafico.data.datasets[0].data.length == 10) {
                        grafico.data.labels.shift();
                        grafico.data.datasets[0].data.shift();
                    }
    
                    grafico.data.labels.push(tempo[idSensor]++);
                    grafico.data.datasets[0].data.push(parseFloat(temp.temperatura));
                    grafico.update();
                });
            }
            catch (error) { console.error('Erro ao obter dados:', error)};
        
}

setInterval(() => {
    obterDados(sensorDigital, idPaciente);
}, 1000);