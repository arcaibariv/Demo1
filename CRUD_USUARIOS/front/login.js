const nombreUsuario = document.getElementById('nombreUsuario');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
console.log('pruebas')

function getFormData(formId){
  let formValues = {};
  var form1Inputs = document.forms[formId].getElementsByTagName("input");
  for(let i=0; i<form1Inputs.length; i++){
        formValues[form1Inputs[i].name]=form1Inputs[i].value;
  }
  console.log(formValues);
}