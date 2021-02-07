var styles = [
  { style: 'default', name: 'Defecto' },
  { style: 'narrow', name: 'Estrecho' },
  { style: 'large', name: 'Grande' },
];

$(document).ready(function () {
  // CACHE
  let $switcher = $('.switcher');

  // PRIMERO BORRAMOS BOTONES
  $('.switcher button').remove();
  // SEGUNDO CREAMOS BOTONES
  for (let style of styles) {
    $switcher.append(
      `<button data-style="${style.style}">${style.name}</button>`
    );
  }

  // FUNCIONALIDAD PASAR RATON POR ENCIMA
  $switcher.hover(
    function () {
      $(this).addClass('hover');
    },
    function () {
      $(this).removeClass('hover');
    }
  );

  // CLICKAR EN EL SWITCHER (Aparezcan o desaparezcan botones)
  $switcher.on('click', function (event) {
    $('.switcher button').toggleClass('hidden');
  });

  // CUANDO SE PRESIONA UNO DE LOS BOTONES DE CAMBIO DE ESTILO
  $('.switcher button').on('click', function (event) {
    // CAMBIAR EL ESTILO DE LA PÁGINA
    $('main').removeClass().addClass($(event.target).data('style'));

    // ADEMÁS SE ACTUALIZA EL BOTÓN SELECCIONADO
    $('.switcher button').removeClass('selected');
    $(event.target).addClass('selected');

    // EVITA QUE SE ESCONDAN LOS BOTONES
    event.stopPropagation();
  });

  // SIMULAR UN CLICK, así al principio sale colapsado.
  $('.switcher').click();
  $('.switcher button').first().click();
});
