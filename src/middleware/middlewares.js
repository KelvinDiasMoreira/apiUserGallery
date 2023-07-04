
const registerMiddleware = async(req , res, next) =>{
    const { login, name, password } = req.body

    if(login === undefined || password === ''){
        return res.status(400).end()
    }
    if(name === undefined || password === ''){
        return res.status(400).end()
    }
    if(password === undefined || password === ''){
        return res.status(400).end()
    }

    else next()
}

const loginMiddleware = async(req , res, next) =>{
    const { login, password } =  req.body

    if(login === undefined || password === ''){
        return res.status(400).end()
    }
    if(password === undefined || password === ''){
        return res.status(400).end()
    }

    else next()
}


module.exports={
    registerMiddleware,
    loginMiddleware,
}