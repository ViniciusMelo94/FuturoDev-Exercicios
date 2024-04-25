function salvarUsuarioNoLocalStorage() {
    const nome = prompt('Digite o seu nome:');
    const idade = prompt('Digite a sua idade:');
    const email = prompt('Digite o seu email:');

    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    const usuarioJSON = JSON.stringify(usuario);

    localStorage.setItem('user', usuarioJSON);

    console.log('Objeto usuário salvo no localStorage.');
}

salvarUsuarioNoLocalStorage();