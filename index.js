import {blogPosts} from './data.js'

const blogContainer = document.getElementById('blog-container')
const blogPageContainer = document.getElementById('blog-page-container')

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
    
    const blogPage = document.getElementsByClassName('blog')
    
    for (let i = 0; i < blogPage.length; i++){
        blogPage[i].addEventListener('click', function (){
            renderBlogPage(blogPosts[i])
        })
    }   
}

renderBlogPosts()

function renderBlogPage(blog) {
    document.getElementById('hero-img').classList.add('hidden')
    document.getElementById('hero-text').classList.add('hidden')
    
   blogPageContainer.innerHTML = `
    <div class="blog-header">
        <h1>${blog.title}</h1>
        <p>${blog.paragraph}</p>
    </div>
    <img class="blog-page-img" src="${blog.image}">
    <div class="blog-body">
        <h3>${blog.subHeadingOne}</h3>
        <p>${blog.bodyOne}</p>
    </div>
    <div class="blog-body">
        <h3>${blog.subHeadingTwo}</h3>
        <p>${blog.bodyTwo}</p>
    </div>`
}