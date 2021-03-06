const PORT = 8000
const axios = require ('axios')
const cheerio = require ('cheerio')
const express = require ('express')
const url = 'https://www.globo.com'
const app = express()

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        $('.post__link', html).each(function() {

            const postTitle = $(this).attr('title');
            const link = $(this).attr('href');
            console.log(`News Title: ${postTitle}\nLink: ${link}\n\n`)
        });


    }).catch(err => console.error(err))

app.listen (PORT, () =>console.log(`Server running on PORT ${PORT}`))