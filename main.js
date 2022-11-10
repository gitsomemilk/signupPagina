console.log("hij doet het!")
// sla de referentie op naar de input velden
const usernameInput = document.getElementById('username-field');
const passwordInput = document.getElementById('password-field');


// sla de referentie op naar de warnings messages
const warningUserName = document.getElementById('warningUsername');
const warningPassword = document.getElementById('warningPassword');

// voeg event listeners toe op de input velden
usernameInput.addEventListener('keyup', checkUsername);
passwordInput.addEventListener('keyup', checkPassWord);

// een functie maken om de username input te controleren op de aanwezigheid van een @

function checkUsername(e) {
    // dit wil ik zien op het moment dat ik een @ intyp
    if (e.target.value.includes('@')) {
        warningUserName.textContent = 'Gebruikersnaam mag geen @ bevatten';
    } else {
        // dit wil ik ten alle tijden zien en dat is niks
        warningUserName.textContent = '';
    }
}
// een functie maken om het password te controleren op minimaal 6 charakters

function checkPassWord (e){
    // dit wil ik zien als het invoer veld leeg is of meer dan 6 charakters heeft
    if (e.target.value === '' || e.target.value.length > 6) {
        warningPassword.textContent= '';
    } else{
        // dit wil ik zien als het invoer veld 1 of minder dan 6 charakters heeft
        warningPassword.textContent= 'Wachtwoord is te kort, gebruik minimaal 6 tekens';
    }
}

