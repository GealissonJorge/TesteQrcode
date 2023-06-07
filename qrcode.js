const express = require('express')
const app = express()
const qr= require('qr-image')

app.set('view engine', 'ejs')

app.get("/qrcode", (req, res) => {
    const url = "https://www.google.com"
    const code = qr.image(url, { type: 'svg' })
    res.type('svg')
    code.pipe(res)
})
app.get("/", (req, res) => {
    res.render("leitor")
})  


app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})