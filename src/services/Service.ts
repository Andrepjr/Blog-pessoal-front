import axios from "axios";

const api = axios.create({
baseURL:'https://blogpessoal-1t74.onrender.com'
})

//promessas -  assincrona para o cadastro do usuario
export const cadastrarUsuario = async(url:string, dados: Object, setDados: Function)=>{
    
    const resposta = await api.post(url, dados)
    setDados(resposta.data)

}

//promessa assincrona para o login do usuario
export const login = async(url: string, dados: Object, setDados: Function)=>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}