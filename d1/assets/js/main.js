import * as formUtils from "./utils/form.js";
import * as validationUtils from "./utils/validation.js";

document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();


  const valFirstName = document.getElementById("firstName").value;
  const errFirstName = validationUtils.isRequired(valFirstName) || validationUtils.isAlpha(valFirstName)
  formUtils.setInputError("firstName", errFirstName);

  const valLastName = document.getElementById("lastName").value;
  const errLastName = validationUtils.isRequired(valLastName) || validationUtils.isAlpha(valLastName)
  formUtils.setInputError("lastName", errLastName);

  const valBirthDate = document.getElementById("birthDate").value;
  const errBirthDate = validationUtils.isRequired(valBirthDate);
  formUtils.setInputError("birthDate", errBirthDate);

  const valPhone = document.getElementById("phone").value;
  const errPhone = validationUtils.isRequired(valPhone) || validationUtils.isPhoneNumber(valPhone)
  formUtils.setInputError("phone", errPhone);

  const valEmail = document.getElementById("email").value;
  const errEmail = validationUtils.isRequired(valEmail) || validationUtils.isEmail(valEmail)
  formUtils.setInputError("email", errEmail);

  const valPassword = document.getElementById("password").value;
  const errPassword = validationUtils.isRequired(valPassword) || validationUtils.isStrongPassword(valPassword)
  formUtils.setInputError("password", errPassword);

  if (!errPassword) {
    const valPasswordRep = document.getElementById("passwordRep").value;
    const errPasswordRep = validationUtils.isRequired(valPasswordRep) || validationUtils.isMatching(valPasswordRep, valPassword);
    formUtils.setInputError("passwordRep", errPasswordRep);
  }
});