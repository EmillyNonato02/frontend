function.init() {
    const navul = document.querySelector("nav ul")

    //pega o usuário salvo na sessionStorage e converter para objeto
    const user = JSON.parse (sessionStorage.getItem("user"))

    //user.id = recupera o id do usuário
    //user.name = recupera o nome do usuário

    //verifica se existe um usuário logado e mostra o nome e o botão de sair
    if(user){
        navul.innerHTML += `
            <li><h2>Usuario: ${user.name}</h2></li>
            <li><button>Sair</button></li>
            <li>
                <a href="./pages/jogar.html">Jogar</a>
            </li>
        `
        return
    }

    //só vai aparecer se não tiver usuário logado
    navul.innerHTML += ` 
        <li>
            <a href="./pages/login.html">Login</a>
        </li>
    `

}