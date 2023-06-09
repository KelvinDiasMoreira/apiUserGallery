
const registerMiddleware = async (req, res, next) => {
    const { login, name, password } = await req.body

    if (login === undefined)  return res.status(400).end()
    if (login.trim() === '') return res.status(400).send({ response: "requisição não pode ficar vazia" })
    if (login.length  < 5) return res.status(400).send({ response: "mínimo de 5 caracteres" })

    if (name === undefined) return res.status(400).end()
    if (name.trim() === '') return res.status(400).send({ response: "requisição não pode ficar vazia" })
    if (name.length  < 5) return res.status(400).send({ response: "mínimo de 5 caracteres" })
    
    if (password === undefined) return res.status(400).end()
    if (password.trim() === '') return res.status(400).send({ response: "requisição não pode ficar vazia" })
    if (password.length < 8) return res.status(400).send({ response: "mínimo de 8 caracteres" })
    

    next()
}

const loginMiddleware = async (req, res, next) => {
    const { login, password } = req.body

    if (login === undefined) return res.status(400).end()
    if (login.trim() === '') return res.status(400).send({ response: "requisição não pode ficar vazia" })
    if (login.length  < 5) return res.status(400).send({ response: "mínimo de 5 caracteres" })
        
    
    if (password === undefined) return res.status(400).end()
    if (password.trim() === '') return res.status(400).send({ response: "requisição não pode ficar vazia" })
    if (password.length  < 8) return res.status(400).send({ response: "mínimo de 8 caracteres" })


    next()
}


module.exports = {
    registerMiddleware,
    loginMiddleware,
}