const Info = document.getElementById('info');
const TempAlta = document.getElementById('tempalta');
const TempBaixa = document.getElementById('tempbaixa');
const Estabilidade = document.getElementById('estabilidade');
const Dashboard = document.getElementById('dashboard');

new Chart(Dashboard, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Temperatura Média',
            data: [22, 24, 27, 23, 20, 18],
            borderWidth: 0,
            backgroundColor: 'rgba(255, 100, 100, .8)',
            borderColor: 'rgba(255, 100, 100, .8)'
        },
        {
            label: 'Umidade Média',
            data: [90, 89, 93, 87, 88, 82],
            borderWidth: 0,
            backgroundColor: 'rgba(100, 100, 255, .8)',
            borderColor: 'rgba(100, 100, 255, .8)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});