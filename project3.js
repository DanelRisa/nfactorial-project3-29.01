const articlesFromAPI = [
    {
        id: 0,
        title: "7 Practical CSS Tips",
        summary: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off."
    },
    {
        id: 1,
        title: "7 Practical CSS Tips",
        summary: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."
    },
    {
        id:2,
        title:"7 Practical CSS Tips",
        summary:"Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."
    },
];


const article = `<div class="NewsList">
<div class = "NewsList">
<div class = "News1">
   <div class = "text-info1">
        <div class = "top-row">
        <div class = "img-top">
        <img src="./images3/Img.png">
        </div>
        <div class = "text-top">
        <p>&nbsp;Authors name</p>
        <p><a href>&nbsp;in</a></p>
        <p>&nbsp;Topics Name</p>
        <p><a href = "http://127.0.0.1:5500/project3/NewsList.html">&nbsp;·</a></p>
        <p><a href>&nbsp;7 July</a></p>
        </div>
    </div>
    </div>
    <div id = "articles"></div>
    <div class = "Description">
        <h1 id = "title"></h1>
        <p id = "summary"></p>
</div>
    <div class = "footer">
        <div class = "footer-text">
        <p class = "btn-bot">Java Script</p>
        <p><a href>&nbsp;12 min read</a></p>
        <p><a href>&nbsp;Selected for you</a></p>
    </div>
        <div class = "block-img">
        <div class = "blocks"><img src = "./images3/Actions.png"></div>
    </div>
    </div>
</div>
<div class = "img1">
    <img src = "./images3/1.png">
</div>
</div>`;
const articles = document.getElementById("articles");
const containerjs = document.getElementById("containerjs");
function loadArticles(){
    const promiseArticle = new Promise((resolve, reject) => {
       return setTimeout(resolve(articlesFromAPI),3000)
    });
    promiseArticle.then((result) =>{
        if(result.length>0){
            result.forEach((item)=>{
                let newArticle = article.replace('id = "title">',`id = "title">${item.title}`);
                newArticle = newArticle.replace('id = "summary">',`id = "summary">${item.summary}`);
                newArticle = newArticle.replace('src=""',`src="${item.src}"`);
                console.log(newArticle);
                articles.innerHTML += newArticle;
            });
        }
    });
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(promise =>promise.json())
      .then(todos => console.log(todos))
      .catch(e=>console.log(e))
loadArticles();