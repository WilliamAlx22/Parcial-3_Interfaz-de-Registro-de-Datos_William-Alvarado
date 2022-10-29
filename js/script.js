function guadar_localStorage() {
  var categoria = document.getElementById("categoria").value;
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var passwd = document.getElementById("passwd").value;
  var info = document.getElementById("info").checked;
  var terminos = document.getElementById("terminos").checked;

  const registro_uusario = {
    categoria:categoria,
    name: name,
    lastname: lastname,
    email: email,
    passwd: passwd,
    info: info,
    terminos: terminos,
  };

  if (
    window.localStorage.getItem('r-' + email) !== undefined &&
    window.localStorage.getItem('r-' + email)
  ) {

    Swal.fire({
      icon: "error",
      title: "Usuario ya registrado",
      showConfirmButton: false,
      timer: 1500,
    });

  } else {

    if (name == "" || lastname == "" || email == "" || passwd == "" || terminos != true) {
      Swal.fire({
        icon: "error",
        title: "Datos Solicitados",
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
        setTimeout(function () {
          if (document.getElementById('name')) {
            document.getElementById('name').focus();
          }
        }, 1);
      });

    } else {
      localStorage.setItem('r-' + email, JSON.stringify(registro_uusario));
      categoria = document.getElementById("categoria").tabIndex = 0;
      name = document.getElementById("name").value = "";
      lastname = document.getElementById("lastname").value = "";
      email = document.getElementById("email").value = "";
      passwd = document.getElementById("passwd").value = "";
      info = document.getElementById("info").checked = false;
      terminos = document.getElementById("terminos").checked = false;

      Swal.fire({
        icon: "success",
        title: "Almacenado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });

    }
  }
}


function listar() {

  document.getElementById('listarclave').innerHTML = "";

  for (x = 0, len = localStorage.length; x < len; x++) {
    clave = localStorage.key(x);
    if (clave.startsWith('r-')) {
      value = localStorage[clave];
      var data = JSON.parse(value);

      var ele = document.getElementById('listarclave');
      var tr = document.createElement('tr');
      ele.appendChild(tr);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(data.categoria);
      td.appendChild(txt);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(data.name);
      td.appendChild(txt);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(data.lastname);
      td.appendChild(txt);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(data.email);
      td.appendChild(txt);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(data.passwd);
      td.appendChild(txt);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(data.info);
      td.appendChild(txt);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(data.terminos);
      td.appendChild(txt);



      var td = document.createElement('td');
      tr.appendChild(td);
      var a = document.createElement('a')
      td.appendChild(a);
      var linktext = document.createTextNode("🗑️");
      a.appendChild(linktext);
      a.title = "Eliminar";
      a.href = "javascript:eliminar(" + "'" + clave + "'" + ");";
      a.id = "Eliminar";
    }
  }
}

function eliminar(keyeliminar) {

  Swal.fire({
    title: 'Desea eliminar este registró?',
    text: "Este registro será eliminado permanentemente!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminarlo!'
  }).then((result) => {
    if (result.isConfirmed) {
      window.localStorage.removeItem(keyeliminar);
      listar();
      Swal.fire(
        'Eliminado!',
        'Registro fue eliminado con éxito.',
        'success'
      )
    }
  })

}


function guadar_localStorage2() {
  var name = document.getElementById("name").value;
  var emails = document.getElementById("emails").value;

  if (
    window.localStorage.getItem('s-' + emails) !== undefined &&
    window.localStorage.getItem('s-' + emails)
  ) {

    Swal.fire({
      icon: "error",
      title: "Usuario ya registrado",
      showConfirmButton: false,
      timer: 1500,
    });

  } else {

    if (name == "" || emails == "") {
      Swal.fire({
        icon: "error",
        title: "Datos Solicitados",
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
        setTimeout(function () {
          if (document.getElementById('name')) {
            document.getElementById('name').focus();
          }
        }, 1);
      });

    } else {
      localStorage.setItem('s-' + emails, name);
      document.getElementById("name").value = "";
      document.getElementById("emails").value = "";

      Swal.fire({
        icon: "success",
        title: "Almacenado Correctamente",
        showConfirmButton: false,
        timer: 1500,
      });

    }
  }
}

function listar2() {

  document.getElementById('listarclave2').innerHTML = "";

  for (x = 0, len = localStorage.length; x < len; x++) {
    clave = localStorage.key(x);
    if (clave.startsWith('s-')) {
      value = localStorage[clave];

      var ele = document.getElementById('listarclave2');
      var tr = document.createElement('tr');
      ele.appendChild(tr);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(value);
      td.appendChild(txt);

      var td = document.createElement('td');
      tr.appendChild(td);
      var txt = document.createTextNode(clave.replace('s-', ''));
      td.appendChild(txt);

      var td = document.createElement('td');
      tr.appendChild(td);
      var a = document.createElement('a')
      td.appendChild(a);
      var linktext = document.createTextNode("🗑️");
      a.appendChild(linktext);
      a.title = "Eliminar2";
      a.href = "javascript:eliminar2(" + "'" + clave + "'" + ");";
      a.id = "Eliminar2";
    }
  }

}


function eliminar2(keyeliminar) {

  Swal.fire({
    title: 'Desea eliminar este registró?',
    text: "Este registro será eliminado permanentemente!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminarlo!'
  }).then((result) => {
    if (result.isConfirmed) {
      window.localStorage.removeItem(keyeliminar);
      listar2();
      Swal.fire(
        'Eliminado!',
        'Registro fue eliminado con éxito.',
        'success'
      )
    }
  })

}
