let pessoas = new Array();

// Função para salvar a array no localStorage
function salvarNoLocalStorage() {
  localStorage.setItem('pessoas', JSON.stringify(pessoas));
}

// Função para carregar a array do localStorage
function carregarDoLocalStorage() {
  const pessoasArmazenadas = localStorage.getItem('pessoas');
  if (pessoasArmazenadas) {
    pessoas = JSON.parse(pessoasArmazenadas);
    exibirPessoas(); // Para exibir as pessoas carregadas do localStorage
  }
}

// Chame a função de carregar ao carregar a página
carregarDoLocalStorage();

function exibir() {
  const inNome = document.getElementById('nome').value;
  const inFuncao = document.getElementById('funcao').value;
  const inIdade = document.getElementById('idade').value;
  const inEmpresa = document.getElementById('empresa').value;

  pessoas.push({
    nome: inNome,
    funcao: inFuncao,
    idade: parseInt(inIdade),
    empresa: inEmpresa,
  });

  exibirPessoas(); // Para exibir as pessoas atualizadas
  salvarNoLocalStorage(); // Para salvar as pessoas no localStorage
  limparCampos(); //chamada pra limpar as inputs
}

function exibirPessoas() {
  const tabela = document.getElementById('listaPessoas');

  // Limpa o conteúdo anterior
  tabela.innerHTML = '';

  // Percorra a array de pessoas e adicione cada pessoa como uma nova linha na tabela
  pessoas.forEach((pessoa) => {
    const linha = tabela.insertRow();
    linha.innerHTML = `<td>${pessoa.nome}</td><td>${pessoa.funcao}</td><td>${pessoa.idade}</td><td>${pessoa.empresa}</td>`;
  });
}

//limpa os campos das inputs
function limparCampos() {
  const inNome = document.getElementById('nome');
  const inFuncao = document.getElementById('funcao');
  const inIdade = document.getElementById('idade');
  const inEmpresa = document.getElementById('empresa');
  inNome.value = '';
  inFuncao.value = '';
  inIdade.value = '';
  inEmpresa.value = '';
}

