let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector('.navigation')
menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
}
);


function catalogItemCounter(field){
			
  var fieldCount = function(el) {

    var 
      // Мин. значение
      min = el.data('min') || false,

      // Макс. значение
      max = el.data('max') || false, 

      // Кнопка уменьшения кол-ва
      dec = el.prev('.dec'), 

      // Кнопка увеличения кол-ва
      inc = el.next('.inc');

    function init(el) {
      if(!el.attr('disabled')){
        dec.on('click', decrement);
        inc.on('click', increment);
      }

      // Уменьшим значение
      function decrement() {
        var value = parseInt(el[0].value);
        value--;

        if(!min || value >= min) {
          el[0].value = value;
        }
      };

      // Увеличим значение
      function increment() {
        var value = parseInt(el[0].value);
          
        value++;

        if(!max || value <= max) {
          el[0].value = value++;
        }
      };
      
    }

    el.each(function() {
      init($(this));
    });
  };

  $(field).each(function(){
    fieldCount($(this));
  });
}

catalogItemCounter('.fieldCount');




$('.field').on('input', function() {
  $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});