import 'bootstrap';
import 'moment/moment';
import '../styles/style.scss';
import '@fortawesome/fontawesome-free/js/all';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function () {
  /* Block scroll when menu open */
  $('#menuToggle').on('click', function () {
    if ($('input[name="openMenu"]').is(':checked')) {
      $('body').addClass('stop-scrolling');
    } else {
      $('body').removeClass('stop-scrolling');
    }
  });

  /* If input filled >= 3 */
  $('.input').blur(function () {
    if ($(this).val().length >= 3) {
      $(this).css('border-bottom', '1px solid #1AA0ED');
    }
  });

  /* If hover - show link  */
  // $(".portfolio-list__link").hide();
  // $('.grayscale-hover').hover(function () {
  //   $('.portfolio-list__link').fadeToggle('slow');
  // })
});
