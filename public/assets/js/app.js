$(document).ready(() => {
  $('#btn-first').click(showFirstPage);
  $('#btn-second').click(showSecondPage);
  $('#btn-third').click(showThirdPage);
  $('#btn-fourth').click(showFourthPage);
});

// Primer llamado ajax
function showFirstPage() {
  $.ajax({
    url: window.location.href + 'assets/js/demo.json',
    type: 'GET',
    datatype: 'json'
  }).done(function(response) {
    showFirstInfo(response);
  }).fail(function(error) {
    console.log('Error al cargar la página');
  });
}

// Primera página
function showFirstInfo(info) {
  $('#contenido').empty();
  let data = info.contenido[0];
  $('#contenido').append(`<div>
    <h4>${data.title}</h4>
    <p>${data.text}</p>
    <img src="${data.img}" class="nyan"/>
    <p>${data.section}</p>
    </div>`);
}

// Segundo llamado ajax
function showSecondPage() {
  $.ajax({
    url: window.location.href + 'assets/js/demo.json',
    type: 'GET',
    datatype: 'json'
  }).done(function(response) {
    showSecondInfo(response);
  }).fail(function(error) {
    console.log('Error al cargar la página');
  });
}

// Segunda página
function showSecondInfo(info) {
  $('#contenido').empty();
  let data = info.contenido[1];
  $('#contenido').append(`<div>
    <h4>${data.title}</h4>
    <p>${data.second}</p>
    <img src="${data.img}" class="nyan"/>
    <p>${data.section}</p>
    </div>`);
}

// Tercer llamado ajax
function showThirdPage() {
  $.ajax({
    url: window.location.href + 'assets/js/demo.json',
    type: 'GET',
    datatype: 'json'
  }).done(function(response) {
    showThirdInfo(response);
  }).fail(function(error) {
    console.log('Error al cargar la página');
  });
}

// Tercera página
function showThirdInfo(info) {
  $('#contenido').empty();
  let data = info.contenido[2];
  $('#contenido').append(`<div>
    <h4>${data.title}</h4>
    <p>${data.text}</p>
    <img src="${data.img}" class="nyan"/>
    <p>${data.section}</p>
    </div>`);
}

// Cuardo llamado ajax
function showFourthPage() {
  $.ajax({
    url: window.location.href + 'assets/js/demo.json',
    type: 'GET',
    datatype: 'json'
  }).done(function(response) {
    showFourthInfo(response);
  }).fail(function(error) {
    console.log('Error al cargar la página');
  })
}

// Cuarta página
function showFourthInfo(info) {
  $('#contenido').empty();
  let data = info.contenido[3];
  $('#contenido').append(`<div>
    <h4>${data.title}</h4>
    <p>${data.text}</p>
    <img src="${data.img}" class="nyan"/>
    <p>${data.section}</p>
    </div>`);
}