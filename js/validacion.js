function validateForm() {
    let nombre = document.forms["formContacto"]["nombre"].value;
    if (nombre == "") {
      alert("El nombre no puede ser vacío");
      return false;
    }

    let email = document.forms["formContacto"]["email"].value;
    if (email == "") {
      alert("El e-mail no puede ser vacío");
      return false;
    }

    let mensaje = document.forms["formContacto"]["mensaje"].value;
    if (mensaje == "") {
      alert("El mensaje no puede ser vacío");
      return false;
    }
  }