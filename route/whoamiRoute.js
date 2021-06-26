const express = require('express')
const router = express.Router()

router.get('/whoami',(req,res)=>{
    const header = req.headers
    const ipaddress = req.ip
    const languages = req.acceptsLanguages().join()
    res.status(200).json({
        ipaddress,
        language : languages,
        software : header['user-agent']
    })
})

module.exports.whoami = router