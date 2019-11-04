// menu- responsive
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// dropdown - rsp
$('.add').each(function(){
  $(this).click(function(event){
    if($(this).hasClass('fa-plus')){
      $(this).removeClass('fa-plus');
      $(this).addClass('fa-minus');
      $(this).siblings('.drop-down-1').slideDown();
    }else{
      $(this).removeClass('fa-minus');
      $(this).addClass('fa-plus');
      $(this).siblings('.drop-down-1').slideUp();
    }
  })
});