$(document).ready(function(){
  $('html').addClass('xepo_ads');
});
        		  
$(document).on('click','.xepo_ads',function(e){
  $(this).removeClass('xepo_ads');
  window.open('https://www.google.com', '_blank');
});
        
$(document).ready(function(){
  $("html").mouseover(function(){
    $("html").click();
  });
});
