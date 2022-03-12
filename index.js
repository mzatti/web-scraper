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

            //const author = $(element).find('.gs_ri').text().replace(/\s\s+/g, '')
            //const blogTitle = $(element).find('.crayons-story__title');
            //const a = $(element).find('a').attr('href');
            const postTitle = $(this).attr('title');
            const link = $(this).attr('href');
            //const joinedBlogLink = `${dev}` + `${blogLink}`;
            //write(`Author: ${author}\n`);
            console.log(`News Title: ${postTitle}\nLink: ${link}\n\n`)
        });


    }).catch(err => console.error(err))

app.listen (PORT, () =>console.log(`Server running on PORT ${PORT}`))