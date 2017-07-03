$( document ).ready(function() {
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });

  $('a.tweet').click(function(e){

    //We tell our browser not to follow that link
    e.preventDefault();

    //We get the URL of the link
    var loc = $(this).attr('href');

    //We get the title of the link
    var title  = encodeURIComponent($(this).attr('title'));

    //We trigger a new window with the Twitter dialog, in the middle of the page
    window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

  });

});