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

//funcao pra adicionar uma nova pessoa
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

//funcao para exibir pessoas
function exibirPessoas() {
  const tabela = document.getElementById('listaPessoas');

  // Limpa o conteúdo anterior
  tabela.innerHTML = '';

  // Percorra a array de pessoas e adicione cada pessoa como uma nova linha na tabela
  pessoas.forEach((pessoa, index) => {
    const linha = tabela.insertRow();
    linha.innerHTML = `<td>${pessoa.nome}</td><td>${pessoa.funcao}</td><td>${pessoa.idade}</td><td>${pessoa.empresa}</td><td><button class="btn-editar" onclick="editar(${index})">+</button></td><td><button class="btn-remover" onclick="remover(${index})">-</button></td>`;

    //um ternario para colocar classe em cada linha de nome par ou impar
    linha.className = index % 2 === 0 ? 'linha-par' : 'linha-impar';
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

// função pra editar os dados de uma pessoa
function editar(index) {
  const pessoa = pessoas[index];
  const novoNome = prompt('Novo nome:', pessoa.nome);
  const novaFuncao = prompt('Nova função:', pessoa.funcao);
  const novaIdade = prompt('Nova idade:', pessoa.idade);
  const novaEmpresa = prompt('Nova empresa:', pessoa.empresa);

  // Atualiza os dados da pessoa
  pessoa.nome = novoNome || pessoa.nome;
  pessoa.funcao = novaFuncao || pessoa.funcao;
  pessoa.idade = parseInt(novaIdade) || pessoa.idade;
  pessoa.empresa = novaEmpresa || pessoa.empresa;

  exibirPessoas(); // Para exibir as pessoas atualizadas na tabela
  salvarNoLocalStorage(); // Para salvar as pessoas atualizadas no localStorage
}

// funcao pra excluir dados
function remover(index) {
  pessoas.splice(index, 1); // Remove o item do array pelo índice
  exibirPessoas();
  salvarNoLocalStorage();
}
