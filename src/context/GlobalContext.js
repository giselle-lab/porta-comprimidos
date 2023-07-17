import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export function InfoProvider({ children }) {
    var [tela, setTela] = useState("Home")
    var [nome, setNome] = useState("-")
    var [code,setCode] = useState("")
    var [token,setToken] = useState("") 
    var [progresso, setProgresso] = useState("50")

    const [informacoes, setInformacoes] = useState({})
    const [situacao, setSituacao] = useState("-")

    /** Cards */

    /**recebe as respostas de cada pergunta do NPS
    */
    const [resposta1, setResposta1 ] = useState("none")
    const [resposta2, setResposta2 ] = useState("none")
    const [resposta3, setResposta3 ] = useState("none")    
    const [resposta4, setResposta4 ] = useState("none")
    const [resposta5, setResposta5 ] = useState("none")
    console.log(resposta1)
    console.log(resposta2)

    
    return (
        <GlobalContext.Provider value={{
            code,
            setCode,
            token,
            setToken,
            nome,
            tela,
            informacoes,
            situacao,
            progresso,
            resposta1,
            resposta2,
            resposta3,
            resposta4,
            resposta5,
            setNome,
            setInformacoes,
            setSituacao,
            setProgresso,
            setResposta1,
            setResposta2,
            setResposta3,
            setResposta4,
            setResposta5,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}