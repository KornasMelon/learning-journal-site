
// make hamburger navigation. 
// make notes everywhere

function renderHeader() {
    const headerCode = `<img src="images/image17.png" alt="icon image">
            <h4>My sausage journal</h4>
            <a href="index.html" class="header-link-one">HOME</a>
            <a 
                href="my-story.html" 
                class="header-link-two">MY STORY<br>
            </a>
            <a href="about-me.html" class="header-link-two">ABOUT ME</a>`

    document.getElementById('header').innerHTML = headerCode
}

renderHeader()

function renderFooter() {
    const footerCode = `
        <h4>My Learning Journal</h4>
        <p>Copyright ©2022</p>`
    
    document.getElementById('footer').innerHTML = footerCode
}

renderFooter()


function renderBlogs() {
    const renderBlogsDiv = document.getElementById('render-blogs-div')
    let blogsCode = ``
    
    if (renderBlogsDiv.classList.contains('main-blogs-div')) {
        blogsCode = `
            <div class="blogs-grid">
                <div>
                    <img src="images/blog-image-01.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog one</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>

                <div>
                    <img src="images/blog-image-02.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog two</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>

                <div>
                    <img src="images/blog-image-03.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog three</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
                
                <div>
                    <img src="images/blog-image-04.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog four</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
                
                <div>
                    <img src="images/blog-image-05.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog five</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
                
                <div>
                    <img src="images/blog-image-06.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog six</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
                
                <h4 onclick="renderAdditionalBlogs()" class="view-more">view more</h4>
                
                <div class="blogs1 hide">
                    <img src="images/blog-image-07.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog seven</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
                
                <div class="blogs2 hide">
                    <img src="images/blog-image-08.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog eight</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
                
                <div class="blogs3 hide">
                    <img src="images/blog-image-09.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog nine</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
            </div>
            
            <h4 onclick="renderAdditionalBlogs()" class="view-less hide">view less</h4>`
    } 
    
    else {
        blogsCode = `
            <div class="blogs-grid">
                <div>
                    <img src="images/blog-image-01.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog one</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>

                <div>
                    <img src="images/blog-image-02.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog two</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>

                <div>
                    <img src="images/blog-image-03.png">
                    <p class="main-date">JULY 23, 2022</p>
                    <h2>Blog three</h2>
                    <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </div>
            </div>`
    }
            
            renderBlogsDiv.innerHTML = blogsCode
}

renderBlogs()

// fires when view more button is clicked
function renderAdditionalBlogs() {
    document.querySelector('.blogs1').classList.toggle('hide')
    document.querySelector('.blogs2').classList.toggle('hide')
    document.querySelector('.blogs3').classList.toggle('hide')
    document.querySelector('.view-more').classList.toggle('hide')
    document.querySelector('.view-less').classList.toggle('hide')
}