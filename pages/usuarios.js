const main = document.querySelector("main")

async function receberMensagemDoBackend() {
    const response = await fetch("https://backend-mu-three-97.vercel.app/").then(response => response.json())

    response.map((person) => {
        main.innerHTML += `
            <section>
                <h2>Nome: ${person.name}</h2>
                <p>E-mail: ${person.email}</p>
            </section>
    `
    })

}

receberMensagemDoBackend()