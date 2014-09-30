$(document).ready(function(){

  $('.meimage').on('mouseover', function(e){
    e.preventDefault()
    $(this).css({'width': '30%', 'border-radius': '210px'});
  })

  $('.meimage').on('mouseleave', function(e){
    e.preventDefault()
    $(this).css({'width': '15%'});
  })

  $('a').on('mouseover', function(e){
    e.preventDefault()
    $(this).css({'font-size': '+=5px'});
  })

  $('a').on('mouseleave', function(e){
    e.preventDefault()
    $(this).css({'font-size': '-=5px'});
  })
})