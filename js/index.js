 window.onload = function() {

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->
var toogle_sign_up_register = document.getElementsByClassName('square-button-empty');
let form_connexion = document.getElementById("connexion-form");
let form_inscription = document.getElementById("register-form");
for (var i = 0; i < toogle_sign_up_register.length; i++) {
    toogle_sign_up_register[i].onclick = function(e){
        if(e.target.getAttribute("data-form")==0){
           form_connexion.style.display = "none";
           form_inscription.style.display = "flex";

        } else if(e.target.getAttribute("data-form")==1){
           form_connexion.style.display = "flex";
           form_inscription.style.display = "none";
        }

    }
}
    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)
var submit_form_connexion = document.getElementsByClassName('square-button')[0];
var submit_form_register = document.getElementsByClassName('square-button')[1];
submit_form_connexion.onclick = function(event) {
	let form = document.getElementById('connexion-form');
	let email = form[0].value;
	let password = form[1].value;

}
submit_form_register.onclick = function(event) {
	let form = document.getElementById('register-form');
	let username = form[0].value;
	let email = form[1].value;
	let password = form[2].value;
	let password_confirm = form[3].value;
	let error = true;

	let username_status = checkUsername(username);
	if (username_status != true) {
		showAlert('L\'username doit comporter au moins 5 caracteres')
	    error = true;
}
	let password_status = checkPassword(password);
	if (password_status != true){
		showAlert('Votre mot de passe doit comportrt au moins (1 minuscule, 1 majuscule, 1 chiffre)')
        error = true;
}
	if (password !== password_confirm) {
		showAlert('La confirmation du passe à echouer')
        error = true;


}   if (error == false) {

}

}





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
