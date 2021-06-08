const addLinkToNav = function (content) {
    const parent = document.querySelector('.nav');

    const a =  `<a class="p-2 text-muted" href="#">${content}</a>`;

    parent.innerHTML += a;
}
addLinkToNav("new Link");


const changeTitle = function(){
    const title = document.querySelector('.jumbotron h1')
    title.style.color='coral';
}
changeTitle();

const changeJumbotronBg = function(){
    const jumbotron = document.querySelector('.jumbotron')
    jumbotron.classList.remove('bg-dark');
    jumbotron.classList.remove('text-white')
}
changeJumbotronBg();

const removeLiFromElswehre = function(){
    const li = document.querySelector(
        '.blog-sidebar > div:last-of-type ol');
        li.innerHTML = "";
}
removeLiFromElswehre();

const changeColSize = function() {
    const cols = document.querySelectorAll('.jumbotron + div .col-md-6');
    cols.forEach((col) =>{
      col.className = "col-md-4";
    });
}

const removeSearch = function(){
    
    const div = document.querySelector(
        '.blog-header .row div:last-of-type');

    div.children[0].remove();
}
removeSearch();