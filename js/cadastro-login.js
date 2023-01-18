const addUser = () => {

    let dados = new FormData($('#form-cadastros')[0])

    const result = fetch('backend/addUser.php', {
        method: 'POST',
        body: dados
    })
        .then((response) => response.json())
        .then((result) => {

            Swal.fire({
                title: 'Atenção',
                text: result.mensagem,
                icon: result.retorno == 'ok' ? 'success'  : 'error'
            })

            result.retorno == 'ok' ? window.location.replace("http://localhost/miiihlu/index.html") : ''
        })

}

const validaLogin = () =>{

    let dados = new FormData($('.form-login')[0])

    const result = fetch('backend/login.php', {
        method: 'POST',
        body: dados
    })
        .then((response) => response.json())
        .then((result) => {

             
        Swal.fire({
            icon: result.retorno != 'ok' ? 'error' : '',
            title: result.retorno != 'ok' ? 'Falha ao logar!' : '',
            text: result.retorno != 'ok' ? result.mensagem : '',
            
        })

            result.retorno == 'ok' ? window.location.replace("http://localhost/miiihlu/pages/destaques.html") : ''

        })
    
}