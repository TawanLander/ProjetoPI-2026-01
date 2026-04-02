const Info = document.getElementById('info');
const TempAlta = document.getElementById('tempalta');
const TempBaixa = document.getElementById('tempbaixa');
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
                max: 40
            }
        }
    }
});

var paginacao = {};
var tempo = {};

function obterDados(grafico, endpoint) {
    fetch('http://localhost:3300/sensores/' + endpoint)
        .then(response => response.json())
        .then(valores => {
            if (paginacao[endpoint] == null) {
                paginacao[endpoint] = 0;
            }
            if (tempo[endpoint] == null) {
                tempo[endpoint] = 0;
            }

            var ultimaPaginacao = paginacao[endpoint];
            paginacao[endpoint] = valores.length;
            valores = valores.slice(ultimaPaginacao);

            valores.forEach((valor) => {
                if (grafico.data.labels.length == 10 && grafico.data.datasets[0].data.length == 10) {
                    grafico.data.labels.shift();
                    grafico.data.datasets[0].data.shift();
                }

                grafico.data.labels.push(tempo[endpoint]++);
                grafico.data.datasets[0].data.push(parseFloat(valor));
                grafico.update();
            });
        })
        .catch(error => console.error('Erro ao obter dados:', error));
}

setInterval(() => {
    obterDados(sensorDigital, 'digital');
}, 1000);
