function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                nome: "Vinícius",
                idade: 29,
                Email: "viniciusmelo886@gmail.com"
            };
            resolve(user);
        }, 2000);
    })
}

async function exibirInfo() {
    let userInfo = await getUserInfo()
    console.log(`Informações do Usuário:`, userInfo)
}

exibirInfo()