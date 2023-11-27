$(function () {
  $('.call-btn').click( function(event){
    event.preventDefault();
      var product = $(this).data("product");
      var productType = $(this).data("type");
      var productAmount = $(this).data("amount");
      var productBeef = $(this).data("beef");
      var productVolume = $(this).data("volume");
      var productService = $(this).data("service");
      var productCost = $(this).data("cost");
      var productOrder = product + "; " + productType + "; " + productAmount + "; " + productBeef + "; " + productVolume + "; " + productService + "; " + productCost; 
      $('#final_cost').text(productCost); 
      $('#final_order').text(productOrder);      
    $('#myOverlay').fadeIn(0, function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 200);
      $('.additional').css('display', 'none');
    }); 
  });
  $('#myModal__close, #myOverlay').click( function(event){
    $('#myModal').animate({opacity: 0}, 100, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(1);
      $('.additional').css('display', 'flex');
    });
  });
  $('.language').click( function(event){
    event.preventDefault();
   $('#myOverlay').fadeIn(0, function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 200);
      $('#myOverlay').css('background', '#3E4183');
      $('#myOverlay').css('opacity', 0);
      $('#popup').css('display', 'none');
      $('.language_box').css('background', '#fff');
      $('.language_text').css('color', '#000');
      $('.language_selector').toggleClass('hidden');
      $('.language_selector_active').toggleClass('hidden');

    });
  });
  $('.additional, #myOverlay').click( function(event){
    $('#myModal').animate({opacity: 0}, 100, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(1);
      $('#popup').css('display', 'block');
      $('.language_box').css('background', '#3E4183');
      $('.language_text').css('color', '#fff');
      $('.language_selector').toggleClass('hidden');
      $('.language_selector_active').toggleClass('hidden');

    });
  });
  $('#select_next').click( function(event){
    event.preventDefault();
    $('#select_one') 
      .css('display', 'none')
      .animate({opacity: 1}, 200);
      $('#select_two') 
      .css('display', 'block')
      .animate({opacity: 1}, 200);
    });
  $('#select_prev').click( function(event){
    event.preventDefault();
    $('#select_one') 
      .css('display', 'block')
      .animate({opacity: 1}, 200);
      $('#select_two') 
      .css('display', 'none')
      .animate({opacity: 1}, 200);
    });
    $('#kazan_next').click( function(event){
    event.preventDefault();
    $('#kazan_one') 
      .css('display', 'none')
      .animate({opacity: 1}, 200);
      $('#kazan_two') 
      .css('display', 'flex')
      .animate({opacity: 1}, 200);
    });
  $('#kazan_prev').click( function(event){
    event.preventDefault();
    $('#kazan_one') 
      .css('display', 'flex')
      .animate({opacity: 1}, 200);
      $('#kazan_two') 
      .css('display', 'none')
      .animate({opacity: 1}, 200);
    });
    $('#plov_kazan_celebr').click( function(event){
    event.preventDefault();
    $('.select_kazan_right').removeClass('select_kazan_right_choise');
    $('#plov_kazan_celebr').addClass('select_kazan_right_choise');
    $('#select_one_order').data('type','Праздничный');
    });
    $('#plov_kazan_chaikhana').click( function(event){
    event.preventDefault();
    $('.select_kazan_right').removeClass('select_kazan_right_choise');
    $('#plov_kazan_chaikhana').addClass('select_kazan_right_choise');
    $('#select_one_order').data('type','Чайханский');
    });
    $('#plov_kazan_beef').click( function(event){
    event.preventDefault();
    $('.plov_type').removeClass('select_choise');
    $('#plov_kazan_beef').addClass('select_choise');
    $('#select_one_order').data('beef','Говядина');
    });
    $('#plov_kazan_lamb').click( function(event){
    event.preventDefault();
    $('.plov_type').removeClass('select_choise');
    $('#plov_kazan_lamb').addClass('select_choise');
    $('#select_one_order').data('beef','Баранина');
    });
    $('#plov_kazan_12').click( function(event){
    event.preventDefault();
    $('.plov_volume').removeClass('select_choise');
    $('#plov_kazan_12').addClass('select_choise');
    $('#select_one_order').data('volume','12 порций');
    });
    $('#plov_kazan_24').click( function(event){
    event.preventDefault();
    $('.plov_volume').removeClass('select_choise');
    $('#plov_kazan_24').addClass('select_choise');
    $('#select_one_order').data('volume','24 порций');
    });
    $('#plov_kazan_cooking').click( function(event){
    event.preventDefault();
    $('.select_cooking_img').toggleClass('hidden');
    $('.select_cooking_img_on').toggleClass('hidden');
    switch ($('#select_one_order').data('service')) {
      case 'Выезд':
        $('#select_one_order').data('service', 'Доставка');
        break;
      case 'Доставка':
        $('#select_one_order').data('service', 'Выезд');
      break;
    }; 
    });
    $( "#select_right_two_volume_value" ).bind('mousemove touchmove',function() {
      $( "#select_right_two_value" ).text(this.value);
      $( "#select_right_two_cost" ).text(this.value*20)
      $('#select_two_order').data('volume',this.value + ' порций');
      $('#select_two_order').data('cost',this.value*20); 
    });
    $( "#manty_kazan_volume_value" ).bind('mousemove touchmove',function() {
      $( "#manty_kazan_value" ).text(this.value);
      $( "#manty_cost" ).text(this.value*20);
      $('#manty_order').data('volume',this.value + ' порций');
      $('#manty_order').data('cost',this.value*20); 
    });
    $( "#kabob_kazan_volume_value" ).bind('mousemove touchmove',function() {
      $( "#kabob_kazan_value" ).text(this.value);
      $( "#kazan_right_cost" ).text(this.value*20);
      $('#kabob_one_order').data('volume',this.value + ' порций');
      $('#kabob_one_order').data('cost',this.value*20);
    });
    $('#manty_portion_beef').click( function(event){
      event.preventDefault();
      $('.manty_type').removeClass('select_choise');
      $('#manty_portion_beef').addClass('select_choise');
      $('#manty_order').data('beef','Говядина');
    });
    $('#manty_portion_lamb').click( function(event){
      event.preventDefault();
      $('.manty_type').removeClass('select_choise');
      $('#manty_portion_lamb').addClass('select_choise');
      $('#manty_order').data('beef','Баранина');
    });
    $('#manty_portion_hot').click( function(event){
      event.preventDefault();
      $('.manty_kind').removeClass('select_choise');
      $('#manty_portion_hot').addClass('select_choise');
      $('#manty_order').data('type','Приготовленные');
    });
    $('#manty_portion_frozen').click( function(event){
      event.preventDefault();
      $('.manty_kind').removeClass('select_choise');
      $('#manty_portion_frozen').addClass('select_choise');
      $('#manty_order').data('type','Замороженные');
    });
    $('#kabob_kazan_beef').click( function(event){
      event.preventDefault();
      $('.kabob_kazan_type').removeClass('select_choise');
      $('#kabob_kazan_beef').addClass('select_choise');
      $('#kabob_one_order').data('beef','Говядина');
    });
    $('#kabob_kazan_lamb').click( function(event){
      event.preventDefault();
      $('.kabob_kazan_type').removeClass('select_choise');
      $('#kabob_kazan_lamb').addClass('select_choise');
      $('#kabob_one_order').data('beef','Баранина');
    });
    $('#kabob_kazan_chicken').click( function(event){
      event.preventDefault();
      $('.kabob_kazan_type').removeClass('select_choise');
      $('#kabob_kazan_chicken').addClass('select_choise');
      $('#kabob_one_order').data('beef','Курица');
    });
    $('#kabob_portion_beef').click( function(event){
      event.preventDefault();
      $('.kabob_portion_type').removeClass('select_choise');
      $('#kabob_portion_beef').addClass('select_choise');
      $('#kabob_two_order').data('beef','Говядина');
    });
    $('#kabob_portion_lamb').click( function(event){
      event.preventDefault();
      $('.kabob_portion_type').removeClass('select_choise');
      $('#kabob_portion_lamb').addClass('select_choise');
      $('#kabob_two_order').data('beef','Баранина');
    });
    $('#kabob_portion_chicken').click( function(event){
      event.preventDefault();
      $('.kabob_portion_type').removeClass('select_choise');
      $('#kabob_portion_chicken').addClass('select_choise');
      $('#kabob_two_order').data('beef','Курица');
    });
    $('#kabob_portion_2').click( function(event){
      event.preventDefault();
      $('.kabob_portion_number').removeClass('select_choise');
      $('#kabob_portion_2').addClass('select_choise');
      $('#kabob_two_order').data('volume','2.5 кг');
    });
    $('#kabob_portion_5').click( function(event){
      event.preventDefault();
      $('.kabob_portion_number').removeClass('select_choise');
      $('#kabob_portion_5').addClass('select_choise');
      $('#kabob_two_order').data('volume','5 кг');
    });
    $('#kabob_portion_cooking').click( function(event){
      event.preventDefault();
      $('.kabob_cooking_img').toggleClass('hidden');
      $('.kabob_cooking_img_on').toggleClass('hidden');
      switch ($('#kabob_two_order').data('service')) {
        case 'Выезд':
          $('#kabob_two_order').data('service', 'Доставка');
          break;
        case 'Доставка':
          $('#kabob_two_order').data('service', 'Выезд');
        break;
      }; 
    });
    
    $('.plov_volume, .select_right_cooking').click( function(event){
      event.preventDefault();
      var element = $('.select_right_volume .select_choise');
      var elementValue = Number(element.data("value"));
      if (elementValue == 24) kazanValue = 250
        else kazanValue = 150; 
      if ($('.select_cooking_img').hasClass("hidden")) cookingValue = 100
        else cookingValue = 0;
      currentCost = kazanValue + cookingValue;  
      $( "#select_right_cost" ).text(currentCost);
      $('#select_one_order').data('cost', currentCost);
    });
    $('.kabob_portion_number, .kazan_right_cooking').click( function(event){
      event.preventDefault();
      var element = $('.kazan_right_volume_wrap .select_choise');
      var elementValue = Number(element.data("value"));
      /*if (elementValue == 24) kazanValue = 250
        else kazanValue = 150;*/ 
      if ($('.kabob_cooking_img').hasClass("hidden")) cookingValue = 100
        else cookingValue = 0;
      currentCost = 100 + cookingValue;  
      $( "#kabob_right_cost" ).text(currentCost);
      $('#kabob_two_order').data('cost', currentCost);
    });

})
