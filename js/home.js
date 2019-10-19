window.onload = function() {
    readFile('https://raw.githubusercontent.com/promo3Saint-Maur/files/master/articles.json', function(articles) {
        console.log(articles);

        // --------------------- STEP 0 (informations) ---------------------
            // Dans le dossier data ce trouve un fichier 'JSON' qui contient une liste d'article
            // CI-DESSUS la fonction 'readFile' fait une 'requette ajax' pour récuperer le contenue du fichier 'articles.json'
            // Le premier parametre de la fonction est le chemin d'acces au fichier
            // le deuxieme, est une fonction 'callback' qui nous permet d'avoir accès au données sous la forme d'une variables
            // cette variable est un 'array' contenant une plusieurs objet correspondant chacun a un article








        // --------------------- STEP 1 ---------------------
            // 1. FAITE EN SORTE DE POUVOIR INSTANCIER UN OBJET 'Article' A PARTIR DES DONNEES DE LA VARIABLE 'articles'
                // exemple : var article = new Article(articles.title, articles.author, articles.publishedDate, articles.img, articles.content, articles.resumes);

            // 1.2 DEFINIR DES GETTER/SETTER POUR CHAQUE PROPRIETES DE LA CLASS Article
                // exemple : this.SetTitle = function(newTitle) { this.title = newTitle; } <----- ceci est un SETTER
class Article {
	id;
    constructor (id, title, author, publishedDate, img, content, resumes, tags) {
    	this.id = id;
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.img = img;
        this.content = content;
        this.resumes = resumes;
        this.tags = tags; 
    }
   
    //this.SetId = function(newId) {this.id = newId;}
    //this.SetTitle = function(newTitle) {this.title = newTitle; }
    //this.SetAuthor = function(newAuthor) {this.author = newAuthor; }
    //this.SetPublishedDate = function(newPublishedDate) {this.publishedDate = newPublishedDate; }
    //this.SetImg = function(newImg) {this.img = newImg; }
    //this.SetContent = function(newContent) {this.content = newContent; }
    //this.SetTags = function(newTags) {this.tags = newTags; }


};
const section = document.getElementsByTagName('section')[0];
section.style.display = 'block';

for (var i = 0; i < articles.length; i++) {
let article = new Article(articles[i].id, articles[i].title, articles[i].author, articles[i].publishedDate, articles[i].img, articles[i].content, articles[i].tags); 
var articleBloc = document.createElement('article');
articleBloc.setAttribute('data-id', article.id);




var articleTitle = document.createElement('h2');
articleTitle.innerText = article.title;
articleBloc.appendChild(articleTitle);

var articleAuthor = document.createElement('h4');
articleAuthor.innerText = article.author;
articleBloc.appendChild(articleAuthor);

var articlePublishedDate = document.createElement('p');
articlePublishedDate.innerText = article.publishedDate;
articleBloc.appendChild(articlePublishedDate);

var articleImg = document.createElement('img');
articleImg.setAttribute('src', article.img);
articleBloc.appendChild(articleImg);

var articleContent = document.createElement('p');
articleContent.innerText = article.content;
articleBloc.appendChild(articleContent);

var articleResumes = document.createElement('p');
articleResumes.innerText = article.resumes;
articleBloc.appendChild(articleResumes);

var articleTags = document.createElement('p');
articleTags.innerText = article.tags;
articleBloc.appendChild(articleTags);

section.appendChild(articleBloc);

}









        // ------------------- STEP 2 ---------------------
            // AFFICHER DANS LA SECTION DU MAIN DE LA PAGE 'home.html' QUI EST LINK A CE SCRIPT LES ARTICLES

                // exemple structure html pour les articles ------------------------>
                    // <article class="article-preview" data-id="1">
                    //     <h2>Un super article 1</h2>
                    //     <div class="article-preciew-body">
                    //         <div class="article-preview-img">
                    //             <img src="http://fauxsite.com/content/medias/img/article1.jpg" alt="miniature article 1">
                    //         </div>
                    //         <div class="article-preview-content">
                    //             <p>Ceci est un texte taper au pif donc ne jugé pas sur l'orthographe général des documents fournis...</p>
                    //         </div>
                    //         <div class="article-preview-tags">
                    //             <p>tag1 tag2 tagada</p>
                    //         </div>
                    //     </div>
                    // </article>

                // exemple code javascript pour la generation des elements html ----------------->
                     // var articleBloc = document.createElement('article');
                     // articleBloc.ClassList.add('article-preview');
                     // articleBloc.setAttribute('data-id', articles[i].getId()) // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // var articleTitle = document.createElement('h2');
                     // articleTitle.innerText = articles[i].getTitle(); // <---- Dans cette exemple il faut s'imaginer qu'on boucle (for) sur un tableau contenant des 'instances' de la class 'Article'
                     // articleBloc.append(articleTitle);
                     // etc.....





        // ------------------ STEP 3 -----------------------
            // AU CLICK SUR LA PREVIEW D'UN ARTICLE (l'elements html) REDIRIGER VERS LA PAGE 'article.html' --->
                // L'url devras ressembler à celle ci (le chemin d'accès vers le fichier + un parametre de type GET) :
                    // 'file:///C:/Users/brian/Desktop/JavascriptMe/article.html?id=1' <----
                        // --- La valeur du parametre id présent dans l'url doit correspondre a l'article clicker





    });
}

