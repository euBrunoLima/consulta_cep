let button = document.getElementById('button').addEventListener("click", () =>{


    let log =  document.querySelector('#logradouro > span')
    let bairro = document.querySelector('#bairro > span')
    let uf =  document.querySelector('#uf > span')
    let estado =  document.querySelector('#estado > span')
    let regiao =  document.querySelector('#regiao > span')
    let cepp =  document.querySelector('#cepp > span')


    let cep = document.getElementById('cep').value
    let url = "https://viacep.com.br/ws/01001000/json/"
    let partes = url.split("/")
    partes[4] = cep
    let nova_url = partes.join("/")


    document.getElementById('cep').value = ""

    fetch(nova_url)
    .then(response => response.json())
    .then(data => {

        log.textContent = data.logradouro || "";
        bairro.textContent = data.bairro || "";
        uf.textContent = data.uf || "";
        estado.textContent = data.estado || "";
        regiao.textContent = data.regiao || "";
        cepp.textContent = data.cep || "";
    })

    .catch(error => {
        console.error(error)
        alert("Ocorreu um erro inesperado.")
    })

})