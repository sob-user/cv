 window.onload = function() {

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->
var buttons = document.getElementsByClassName('square-button-empty');
var one = document.getElementById("connexion-form");
var two = document.getElementById("register-form");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e){
        if(e.target.getAttribute("data-form")==0){
           one.style.display = "none";
           two.style.display = "flex";

        } else if(e.target.getAttribute("data-form")==1){
           one.style.display = "flex";
           two.style.display = "none";
        }

    }
};
    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)
var buttons_deux = document.getElementsByClassName("square-button");
var three = document.getElementsByClassName("form-control");
function isolement(buttons_deux, three){
for (var i = 0; i < buttons_deux.length; i++) {
    buttons_deux[i].onclick = function(f){
for (var i = 0; i <three.length; i++) {
    var four = three[i].datatype("username");
    var five = three[i].datatype("password");
    var reg1 = new RegExp("[a-z0,9]{5}", "gi");
    var reg2 = new RegExp("[a-zA-Z0,9] {1,1,1}");
    if (reg1.test(four)==true && reg2.test(five)==true){
          if(true){
                return isolement;
          } if(true && false){
                 alert("password contient minimum 8 caractères, 1 majuscule, 1 minuscule et 1 chiffre")
          } if (false && true) {
                 alert("username contient minimum 5 caractères")
          } else {
                 alert("veuillez entrée une saisie")
          }
    }
}   
        }
}
};









    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'





    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'


}
