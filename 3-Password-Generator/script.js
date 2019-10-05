var lowerCase;
var upperCase;
var numberTrue;
var specialChar; 
var checkPasswordTypes

function passwordType(){
    lowerCase = confirm("Would you like lower case?");
    upperCase = confirm("Would you like upper case?");
    numberTrue = confirm('How about numbers?')
    checkPasswordTypes = confirm("It will have\nLower Case: " + lowerCase + "\nUpper Case: " + upperCase + '\nNumbers: ' +  numberTrue + "Special Characters: ")
}