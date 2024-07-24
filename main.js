const formulario = document.getElementById('contatoForm');
const corpoTabela = document.getElementById('tabelaCorpo');
const botaoCadastrar = document.getElementById('cadastrarBtn');
const listaNumerosCadastrados = [];

botaoCadastrar.addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('contato').value;

    if (nome === '' || telefone === '') {
        alert('Preencha todos os campos!');
        return;
    }
    const nomeValido = nome.split(' ');
    if (nomeValido.length < 2) {
        alert('Por favor, insira seu nome completo.');
        return;
    }

    if (listaNumerosCadastrados.includes(telefone)) {
        alert('Este número já foi cadastrado. Por favor, insira um novo número.');
        return;
    }

    const novaLinha = document.createElement('tr');

    const celulaNome = document.createElement('td');
    celulaNome.textContent = nome;

    const celulaTelefone = document.createElement('td');
    celulaTelefone.textContent = telefone;

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaTelefone);

    corpoTabela.appendChild(novaLinha);

    listaNumerosCadastrados.push(telefone);

    document.getElementById('nome').value = '';
    document.getElementById('contato').value = '';
});

