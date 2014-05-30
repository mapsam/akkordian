var akkordian = (function(){
  function play(config) {
    var aks = $('.akkord').length;
    var per = 100/aks;
    $('.akkord').css('width', per+'%');
    $('.akkord').on('mouseover', function(){
      $('.akkord').css('width', (100-per*2)/((aks-1))+'%');
      $(this).css('width', per*2+'%');
    });
    $('.akkord').on('mouseout', function(){
      $('.akkord').css('width', per+'%');
    }); 
  } 

  function alertMessage(message){
    alert(message);
  }

  return {
    'play': play,
    'alertMessage': alertMessage
  };
})();