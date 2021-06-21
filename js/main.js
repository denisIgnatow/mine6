$('.navicon').on('click', function() {
  $('body').toggleClass('active-menu')
})

$('.main__down').on('click', function(e) {
  $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top - 70}, 1000)
  
  e.preventDefault()
})

$('.faq__item').on('click', function() {
  $(this).toggleClass('active')

  const answer = $(this).find('.faq__bottom')
  if ($(answer).css('display') == 'none') $(answer).show(300)
  else $(answer).hide(300)
})