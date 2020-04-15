const axios = require('axios')
const data = require('./data')

const dataPath = './data.json'
const apiurl = 'https://auxilio.caixa.gov.br/api/cadastro'

axios({
        method: 'POST',
        url: apiurl,
        data: data
    })
    .then(res => {
        console.log('\n ANÁLISE CONCLUÍDA!')
        console.log(`\n Sexo: ${res.data.sexo}`)
        console.log(`\n Situação: ${res.data.situacao}`)
        console.log(`\n Banco: ${res.data.banco}`)
        console.log(`\n Motivo: ${res.data.motivo}`)
        console.log(`\n Bolsa Família: ${res.data.bolsa_familia}`)
        console.log(`\n Mensagem: ${res.data.mensagem}`)
    })
    .catch(err => {
        if(err.response.status === 404) {
            console.error('\n ERRO! Verifique se preencheu os dados corretamente.')
            console.error(`\n Mensagem: ${err.response.data.mensagem}\n`)
            return;
        }
        console.error('\n AINDA EM ANÁLISE!')
        console.error(`\n Mensagem: ${err.response.data.mensagem}\n`)
    })
