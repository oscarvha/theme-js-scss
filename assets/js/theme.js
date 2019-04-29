// any CSS you require will output into a single css file (app.css in this case)
import '../scss/theme.scss';

import $ from 'jquery';

// jQuery document.ready common to all pages
$(function () {
  // limit properties list
  const $limitSelectEle = $('#properties_per_page');
  $limitSelectEle.on('change', function(event) {
    const name = $limitSelectEle.attr('name');
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(name, event.target.value);
    window.location.search = urlParams.toString()
  })

});
