const salario = 1800;
var saldoAtual = salario;

function Comprar() {
  window.localStorage.getItem('saldoAtual', saldoAtual);
  let valor = Number(prompt('Digite o valor da sua compra: '));
  saldoAtual = saldoAtual - valor;
  return window.localStorage.setItem('saldoAtual', saldoAtual);
}

function Pagar() {
  window.localStorage.getItem('saldoAtual', saldoAtual);
  let valor = Number(prompt('Digite o valor que pagou: '));
  saldoAtual = saldoAtual + valor;
  return window.localStorage.setItem('saldoAtual', saldoAtual);
}

function mostrarSaldo() {
  if (localStorage.getItem('saldoAtual')) {
    saldoAtual = localStorage.getItem('saldoAtual');
  }
  alert(
    'O seu saldo atual é de R$ ' +
      Number(saldoAtual).toFixed(2).toString().replace('.', ','),
  );
}

function totalDeGastos() {
  alert(
    'O total de gastos do mês é de R$ ' +
      (salario - saldoAtual).toFixed(2).toString().replace('.', ','),
  );
}
