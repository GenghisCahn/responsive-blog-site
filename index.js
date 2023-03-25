import {blogPosts} from './data.js'

const blogContainer = document.getElementById('blog-container')

function renderBlogPosts() {
    let blogHtml = ""
    
    for ( let blog of blogPosts){
        blogHtml += `
        <div class="blog">
            <img class="blog-img" src=${blog.image}>
            <p class="caps">${blog.date}</p>
            <h2>${blog.title}</h2>
            <p>${blog.paragraph}</p>
        </div>`
    }
    blogContainer.innerHTML = blogHtml
}

renderBlogPosts()

