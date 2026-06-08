// window.onload = function () {

//     if (!sessionStorage.ID_USUARIO) {
//         window.location.href = "../../Site-Cadastro/login.html";
//         return;
//     }
// }

const parametros = new URLSearchParams(window.location.search);

const idPaciente = parametros.get("id");
const Info = document.getElementById("info");
const TempAlta = document.getElementById("tempalta");
const TempBaixa = document.getElementById("tempbaixa");
const TempAtual = document.getElementById("tempatual");
const Estabilidade = document.getElementById("estabilidade");
const Dashboard = document.getElementById("dashboard");

function procurar() {
  let sala = document.getElementsByClassName("lista");
  let ipt = document.getElementById("ipt-procurar").value;

  let leng = sala.length;
  let log = 0;

  while (log < leng) {
    console.log(sala[log++]);
  }
}
var sensorDigital = new Chart(
  document.getElementById("dashboard").getContext("2d"),
  {
    type: "line",
    data: {
      datasets: [
        {
          label: "Temperatura",
          borderColor: "#ff0000",
          backgroundColor: "#ff0000",
        },
      ],
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
            text: "Graus Celcius",
          },
          type: "linear",
          min: 10,
        },
      },
    },
  },
);

var paginacao = {};
var tempo = {};

async function obterDados(grafico, idSensor) {
  try {
    const resposta = await fetch(
      `http://127.0.0.1:3333/pacientes/obterTemp/${idSensor}`,
    );

    let valores = await resposta.json();

    const ultimaTemp = valores[valores.length - 1];
    let alertas = 0;

    for (let i = 0; i < valores.length; i++) {
      const temperatura = parseFloat(valores[i].temperatura);
      if (temperatura < 35 || temperatura > 36.9) {
        alertas++;
      }
    }

    document.getElementById("alertas").innerHTML = alertas;

    if (ultimaTemp) {
      const temperaturaAtual = parseFloat(ultimaTemp.temperatura);

      document.getElementById("tempatual").innerHTML = `${temperaturaAtual}°`;

      document.getElementById("tempalta").innerHTML = `${ultimaTemp.tempMax}°`;

      document.getElementById("tempbaixa").innerHTML = `${ultimaTemp.tempMin}°`;

      const estado = document.getElementById("estado");

      const divEstado = document.getElementById("div_tempAtual");

      if (temperaturaAtual < 35) {
        estado.innerHTML = "Hipotermia";

        divEstado.style.backgroundColor = "#3b5bff";
      } else if (temperaturaAtual > 36.9) {
        estado.innerHTML = "Febre";

        divEstado.style.backgroundColor = "#ff3b3b";
      } else {
        estado.innerHTML = "Estável";

        divEstado.style.backgroundColor = "#39d400";
      }
    }

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
      document.getElementById("nome_bd").innerHTML = temp.nome;
      document.getElementById("sexo_bd").innerHTML = temp.sexo;
      document.getElementById("idade_bd").innerHTML = temp.idade;
      if (
        grafico.data.labels.length == 10 &&
        grafico.data.datasets[0].data.length == 10
      ) {
        grafico.data.labels.shift();
        grafico.data.datasets[0].data.shift();
      }

      grafico.data.labels.push(temp.horaRegistro);
      grafico.data.datasets[0].data.push(parseFloat(temp.temperatura));
      grafico.update();
    });
  } catch (error) {
    console.error("Erro ao obter dados:", error);
  }
}

obterDados(sensorDigital, idPaciente);

setInterval(() => {
  obterDados(sensorDigital, idPaciente);
}, 5000);
