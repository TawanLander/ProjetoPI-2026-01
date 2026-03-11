let faturamento = 0;
let lucro = 0;
let prejuizo = 0;
let prejuizoTotal = 0;
let roi = 0;
let economia = 0;
let calculadora_atual = 'producao';

// producao
let sacasProduzidas = 60;
let precoSaca = 120;
let pctgmPerdas = 18;
let custoMedio = 6000
// implementacao
let distanciaSensor = 10;
// Valores padrão
let vpQtdComprimentoTalhao = '';
let vpQtdLarguratalhao = '';
let vpQtdTalhao = '';

function calculo_implementacao(){ // Função mudar calculadora para Implementação
    calculadora_atual = 'implementacao';
    div_mudarValores.innerHTML = ''; // Resentando a div de mudarValores para não dar conflito
    // Alterando o innerHTML da Calculadora
    div_calculadoras.innerHTML = `
       <h1 class="Titulo Linha">Calculo de Implementação</h1> <!--Título da Div-->
        • Quantos metros de largura tem seus talhões? <br>
        <input type="number" id="ipt_qtdMetrosLargura" placeholder="Metros de Largura" class="Input" value="${vpQtdLarguratalhao}"> <br>
        • Quantos metros de comprimento tem seus talhões? <br>
        <input type="number" id="ipt_qtdMetrosComprimento" placeholder="Metros de Comprimento" class="Input" value="${vpQtdComprimentoTalhao}"> <br>
        • Quantos talhões você tem? <br>
        <input type="number" id="ipt_qtdTalhoes" placeholder="Quantidade de Talhões" class="Input" value="${vpQtdTalhao}"> <br>
    
        <div class="Informacao"> <!--Div box de informações fixas-->
            <h3 class="SubTitulo Linha" style="margin:0;margin-bottom: 10px;">Informações Base</h3>
            <span id='span_salvar'> <!--Span para mudar os valores BASE CASO ALTERADOS-->
            • Distância ideal de cada sensor: ${distanciaSensor} metros
        </div> <!--Final da div box de Informações-->
        <br>
        <button onclick="calc_implementacao()" class="Button">Calcular</button>
        <div class="Resultado" style="border-color: navy;"> <!--Div box de resultados-->
            <h3 class="SubTitulo" style="color:navy; margin: 0;margin-bottom: 5px;">Custo de implementação:</h3>
            <span id="resultadoProducao">R$0</span>
        </div> <!--Final da div box de resultados-->`;
    // Alterando o innerHTML das ABAS
    div_escolherCalculadoras.innerHTML = `
        <h1 class="Titulo Linha">Abas</h1> <!--Título da div-->
        <button onclick="calculo_producao()" class="Button ButCalculadoras">Calculo de Produção</button> <br> <!--Botão Calculadora Produção-->
        <button onclick="bibliografia()" class="Button ButCalculadoras">Bibliografia</button>`;
    // Alterando a div de insatisfação (Precisa setar de novo caso venha da aba de Bibliografia)
    div_insatisfacao.innerHTML = `
        <div class="BordaVerde"> <!--Div para MUDAR os valores BASE-->
            <h1 class="Titulo" style="margin:0;">Insatisfeito com</h1>
            <h1 class="Titulo Linha" style="margin: 0;margin-bottom: 15px;">os valores base?</h1>
            <button onclick="mudar_valores()" class="Button ButCalculadoras">Mudar valores base</button>
        </div> <!--Fim da div para mudar os valores base-->`;
    // Alterando a div de baixo do site (Resultados e ROI entre as duas calculadoras)
    div_filho2.innerHTML = `
    <div class="BordaVerde" style="flex-basis: 390px;">
        <h1 class="Titulo Linha">Retorno sobre investimento</h1>
        <h3 class="Subtitulo">• Perdas Atuais •</h3>
            <div id="div_perdasAtuais" style="color: darkred;font-weight: bold">R$${prejuizo}</div>    
        <h3 class="Subtitulo">• Economia Total •</h3>
            <div id="div_economiaTotal" style="color: darkgreen;font-weight: bold">R$${economia}</div>
        <h3 class="Subtitulo">• Possível retorno sobre investimento •</h3>
            <div id="div_possivelRetorno" style="color: navy;font-weight: bold">R$${roi}</div>
    </div>`
}
function calculo_producao(){ // Função mudar calculadora para Produção
    calculadora_atual = 'producao';
    div_mudarValores.innerHTML = ''; // Resentando a div de mudarValores para não dar conflito
// Alterando o innerHTML da Calculadora
    div_calculadoras.innerHTML = `
        <h1 class="Titulo Linha">Cálculo de Produção</h1> <!--Título da Div-->
        • Quantos metros de largura tem seus talhões? <br>
        <input type="number" id="ipt_qtdMetrosLargura" placeholder="Metros de Largura" class="Input" value="${vpQtdLarguratalhao}"> <br>
        • Quantos metros de comprimento tem seus talhões? <br>
        <input type="number" id="ipt_qtdMetrosComprimento" placeholder="Metros de Comprimento" class="Input" value="${vpQtdComprimentoTalhao}"> <br>
        • Quantos talhões você tem? <br>
        <input type="number" id="ipt_qtdTalhoes" placeholder="Quantidade de Talhões" class="Input" value="${vpQtdTalhao}"> <br>
        <div class="Informacao"> <!--Div dentro da Produção (box de informaçoes fixas)-->
            <h3 class="SubTitulo Linha" style="margin:0;margin-bottom: 10px;">Informações Base</h3>
            <span id='span_salvar'> <!--Span para mudar os valores BASE CASO ALTERADOS-->
            • Sacas produzidas por hectare plantado: ${sacasProduzidas} sacas <br>
            • Preço de venda da saca de soja: R$${precoSaca} <br>
            • Porcentagem de perdas devido quebra de safra: ${pctgmPerdas}% <br>
            • Custo médio da safra por hectare: R$${custoMedio} <br></span>
        </div> <!--Final da div box de infos-->
        <br>
        <button onclick="calc_producao()" class="Button">Calcular</button>
        <div class="Resultado"> <!--Div box de resultado-->
            <h3 class="SubTitulo" style="color:darkred; margin: 0;margin-bottom: 5px;">Perdas Atuais:</h3>
            <span id="resultadoProducao">R$0</span>
        </div> <!--Div box de resultado-->`;
    // Alterando o innerHTML das ABAS
    div_escolherCalculadoras.innerHTML = `
        <h1 class="Titulo Linha">Abas</h1> <!--Título da div-->
        <button onclick="calculo_implementacao()" class="Button ButCalculadoras">Calculo de Implementação</button> <br> <!--Botão Calculadora Implantação-->
        <button onclick="bibliografia()" class="Button ButCalculadoras">Bibliografia</button>`;
    // Alterando a div de insatisfação (Precisa setar de novo caso venha da aba de Bibliografia)
    div_insatisfacao.innerHTML = `
        <div class="BordaVerde"> <!--Div para MUDAR os valores BASE-->
            <h1 class="Titulo" style="margin:0;">Insatisfeito com</h1>
            <h1 class="Titulo Linha" style="margin: 0;margin-bottom: 15px;">os valores base?</h1>
            <button onclick="mudar_valores()" class="Button ButCalculadoras">Mudar valores base</button>
        </div> <!--Fim da div para mudar os valores base-->`;
    // Alterando a div de baixo do site (Resultados e ROI entre as duas calculadoras)
    div_filho2.innerHTML = `
    <div class="BordaVerde">            
        <h1 class="Titulo Linha">Resultados</h1>
        <h3 class="Subtitulo">• Faturamento •</h3>
            <div id="div_faturamento" style="color:rgb(31, 57, 136);font-weight: bold;">R$${faturamento}</div>
        <h3 class="Subtitulo">• Lucro •</h3>
            <div id="div_lucro" style="color: darkgreen;font-weight: bold">R$${lucro}</div>
        <h3 class="Subtitulo">• Gastos Atuais •</h3>
            <div id="div_prejuizo" style="color: darkred;font-weight: bold">R$${prejuizoTotal}</div>
    </div>`;
}
function bibliografia(){ //Função de mudar a calculadora para a bibliografia
    // Alterando o innerHTML da div Calculadora
    div_calculadoras.innerHTML = `
        <h1 class="Titulo Linha">Bibliografia</h1> <!--Título da Div-->
        <h3 class="SubTitulo"><a href="https://www.agrolink.com.br/cotacoes/graos/soja">Saca de Soja a 60Kg e Preço médio</a> <br></h3>
        <h3 class="SubTitulo"><a href="https://aegro.com.br/blog/quebra-de-safra-2024/">Taxa de desperdício base da plantação</a> <br></h3>
        <h3 class="SubTitulo"><a href="https://www.agrolink.com.br/noticias/custo-da-safra-de-soja-chega-a-r--5-998-24-por-ha_495348.html#:~:text=Custo%20da%20safra%20de%20soja,24%20por%20ha%20em%20MS">Custo médio da safra</a> <br></h3>
        `;
    // Alterando o innerHTML das ABAS
     div_escolherCalculadoras.innerHTML = `
        <h1 class="Titulo Linha">Abas</h1> <!--Título da div-->
        <button onclick="calculo_producao()" class="Button ButCalculadoras">Calculo de Produção</button> <br> <!--Botão Calculadora Produção-->
        <button onclick="calculo_implementacao()" class="Button ButCalculadoras">Calculo de Implementação</button> <!--Botão Calculadora Implantação-->`;
    // Divs nulas porque bibliografia não precisa de insatisfação nem de mudança de valores DUH
    div_insatisfacao.innerHTML = ''
    div_mudarValores.innerHTML = ''
    div_filho2.innerHTML = ''
}
function mudar_valores(){
    if(calculadora_atual == 'producao'){ // Calculadora ESTÁ EM PRODUÇÃO
        div_mudarValores.innerHTML = `
        <div class="BordaVerde">
            <h1 class="Titulo Linha">Editar Valores</h1>
            Quantidade de sacas produzidas: <br>
            <input class="Input" type="number" id="ipt_qtdSacasProduzidas" placeholder="Quantidade de Sacas Produzidas" value="60"> <br>
            Qual o preço médio da sua safra? <br>
            <input class="Input" type="number" id="ipt_precoSacas" placeholder="Preço das Sacas" value="120"> <br>
            Qual a porcentagem de perdas devido quebras de safra? <br>
            <input class="Input" type="number" id="ipt_pctgmPerdas" placeholder="Porcentagem de Perdas" value="18"> <br>
            Qual o custo médio da sua produção de soja por hectare?
            <input class="Input" type="number" id="ipt_valorMedio" placeholder="Valor Médio da Safra" value="6000"> <br>
            <button onclick="salvar()" class="Button">Salvar informações</button> <br>
            <button onclick="fechar()" class="Button" style="border-color: darkred;margin-top: 5px;">Fechar</button>
        </div>`;
    }
    if(calculadora_atual == 'implementacao'){ //Calculadora ESTÁ EM IMPLANTAÇÃO
        div_mudarValores.innerHTML = `
        <div class="BordaVerde">
            <h1 class="Titulo Linha">Editar Valores</h1>
            Distância de cada sensor: <br>
            <input class="Input" type="number" id="ipt_distanciaSensor" placeholder="Distância de cada sensor" value="10"> <br>
            <button onclick="salvar()" class="Button">Salvar informações</button> <br>
            <button onclick="fechar()" class="Button" style="border-color: darkred;margin-top: 5px;">Fechar</button>
        </div>`;
    }
}
function fechar(){
    div_mudarValores.innerHTML = ''
}
function salvar(){ // Salva os valores vindos da DIV DE INSATISFAÇÃO nas variáveis atuais
    if(calculadora_atual == 'producao'){ // Salvando nas variaveis de produção
        if(Number(ipt_qtdSacasProduzidas.value) > 0){
        sacasProduzidas = Number(ipt_qtdSacasProduzidas.value)} else return alert("O valor da quantidade de sacas deve ser maior que 0");

        if(Number(ipt_precoSacas.value) > 0){
        precoSaca = Number(ipt_precoSacas.value)} else return alert("O preço das sacas deve ser maior que 0");
        
        if(Number(ipt_pctgmPerdas.value) > 0){
        pctgmPerdas = Number(ipt_pctgmPerdas.value)} else return alert("A porcentagem de perdas deve ser maior que 0"); 

        if(Number(ipt_valorMedio.value) > 0){
        custoMedio = Number(ipt_valorMedio.value)} else return alert("A porcentagem de perdas deve ser maior que 0"); 
        // Alterando o span novamente para os valores salvos
        span_salvar.innerHTML = `
        • Sacas produzidas por hectare plantado: ${sacasProduzidas} sacas <br>
        • Preço de venda da saca de soja: R$${precoSaca} <br>
        • Porcentagem de perdas devido quebra de safra: ${pctgmPerdas}% <br>
        • Custo médio da safra por hectare: R$${custoMedio}`;
    }
    if(calculadora_atual == 'implementacao'){ // Salvando na variável de implementação
        distanciaSensor = Number(ipt_distanciaSensor.value);
        // Alterando o span novamente para os valores salvos
        span_salvar.innerHTML = `• Distância ideal de cada sensor: ${distanciaSensor} metros`
    }
}

function calc_producao(){
    let qtdComprimentoTalhao = Number(ipt_qtdMetrosComprimento.value);
    let qtdLarguraTalhao = Number(ipt_qtdMetrosLargura.value);
    let qtdTalhoes = Number(ipt_qtdTalhoes.value);
    if(qtdComprimentoTalhao == 0) return alert("Valores a serem informados");
    if(qtdLarguraTalhao == 0) return alert("Valores a serem informados");
    if(qtdTalhoes == 0) return alert("Valores a serem informados");
    
    let qtd_hectaresPlantados = (qtdComprimentoTalhao * qtdLarguraTalhao * qtdTalhoes) / 10000
    let fatur = qtd_hectaresPlantados * sacasProduzidas * precoSaca;
    let preju = qtd_hectaresPlantados * sacasProduzidas * precoSaca * (pctgmPerdas/100);
    let luc = fatur - preju;
    resultadoProducao.innerHTML = `R$${preju}`
    
    faturamento += fatur;
    lucro += luc;
    prejuizo += preju
    prejuizoTotal += preju + custoMedio
    economia = prejuizo * 0.2;

    div_faturamento.innerHTML = `R$${faturamento}`;
    div_lucro.innerHTML = `R$${lucro}`;
    div_prejuizo.innerHTML = `R$${prejuizoTotal}`;

    // Setando as inputs automáticas para quando mudar de calculadora
    vpQtdComprimentoTalhao = qtdComprimentoTalhao;
    vpQtdLarguratalhao = qtdLarguraTalhao;
    vpQtdTalhao = qtdTalhoes;   
}
function calc_implementacao(){ // Definição das variáveis
    let qtdComprimentoTalhao = Number(ipt_qtdMetrosComprimento.value);
    let qtdLarguraTalhao = Number(ipt_qtdMetrosLargura.value);
    let qtdTalhoes = Number(ipt_qtdTalhoes.value);
    if(qtdComprimentoTalhao == 0) return alert("Valores a serem informados");
    if(qtdLarguraTalhao == 0) return alert("Valores a serem informados");
    if(qtdTalhoes == 0) return alert("Valores a serem informados");
    // Valores Base (Cliente não altera esses pois são do nosso custo)
    let valorSensor = 45
    let pctgmDeLucro = 1.1
    let totalPreco = valorSensor * pctgmDeLucro
    // Calculos
    let metros = qtdTalhoes * qtdComprimentoTalhao * qtdLarguraTalhao;
    let qtdSensores = metros / (distanciaSensor * 10);

    let totalFinal = qtdSensores * totalPreco;
    // Mostra na div o custo de implementação
    resultadoProducao.innerHTML = `R$${totalFinal}`;

    let mes = totalFinal / economia;

    div_possivelRetorno.innerHTML = `O possível retorno será em ${mes} meses. Aproximadamente ${Math.ceil(mes/12)} anos`
    
    
    
    vpQtdComprimentoTalhao = qtdComprimentoTalhao;
    vpQtdLarguratalhao = qtdLarguraTalhao;
    vpQtdTalhao = qtdTalhoes;   
}