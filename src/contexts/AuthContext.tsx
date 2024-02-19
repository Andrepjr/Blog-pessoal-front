import { ReactNode, createContext, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";

interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children }: AuthProviderProps){
    const[usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        senha: "",
        usuario: "",
        foto: "",
        token: ""

    })

    const [isLoading, setIsLoading] = useState(false) 
    
    async function  handleLogin(userLogin: UsuarioLogin){
        setIsLoading(true)
        try{
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Usuario Logado com sucesso")
            setIsLoading(false)

        }catch (erro){
            console.log(erro)
            alert("Não é possivel validar o seu usuario, verifique o seu e-mail e senha!")
            setIsLoading(false)

        }

    }
    function handleLogout(){
        setUsuario({
            id: 0,
            nome: "",
            senha: "",
            usuario: "",
            foto: "",
            token: ""
    
        })
    }

    return(
        <AuthContext.Provider value={{usuario, handleLogin, handleLogout, isLoading}}>
            {children}

        </AuthContext.Provider>
    )
}