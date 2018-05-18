/* v0
 *
 *= require _lib/bootstrap/bootstrap
 *= require _lib/touch/jquery.ui.touch-punch.min
 *= require _lib/jquery.sidenotes/jquery.sidenotes
 *= require _lib/ajaxchimp/jquery.ajaxchimp
 *= require _lib/ajaxchimp/jquery.ajaxchimp.langs
 *= require _lib/jquery.finger/jquery.finger
 *= require _lib/hypher/hypher
 *= require _lib/hypher/en-us
 *
*/

!function($) {
  var pageLoaded = false;

  var randomizePosition = function(selector) {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var objHeight = $(selector).outerHeight();
    var objWidth = $(selector).outerWidth();
    var navHeight = $('.nav').outerHeight();
    var top = Math.ceil(Math.random() * (55));
    var left = Math.ceil(Math.random() * (55));
    // var offsetY = 'calc(' + top + 'vh - ' + objHeight + 'px)';
    // var offsetX = 'calc(' + left + 'vh - ' + objWidth + 'px)';
    // console.log('navHeight:' + navHeight);
    // console.log('top:' + top);
    // console.log('left:' + left);
    // console.log('windowHeight:' + windowHeight);
    // console.log('windowWidth:' + windowWidth);
    // console.log('objHeight:' + objHeight);
    // console.log('objWidth:' + objWidth);
    // console.log('offsetY:' + offsetY);

    if (top < navHeight) {
      top = navHeight;
    }

    $(selector).css('position','absolute');

    $(selector).css({
      'top': top + 'vh',
      'left': left + 'vw'
    });

  }

  var setupSideNotes = function() {
    if ($('.js-footnoted').length) {
      var placement = 'before';
      if ($(window).width() < 1024) { placement = 'after' }
      $('.js-footnoted').sidenotes({ sidenotePlacement: placement });
      if ($(window).width() < 1024) { $('.js-footnoted').sidenotes('hide') } else { $('.js-footnoted').sidenotes('show') }
    }
  }

  var getTopModal = function() {
    var topModal = null;
    var topZIndex = 0;
    $('.modal.in').each(function() {
      var zIndex = parseInt($(this).css('z-index'));
      if (zIndex > topZIndex) {
        topZIndex = zIndex;
        topModal = this;
      }
    });

    return topModal;
  }

  var moveModalToFront = function(modal) {
    var topModal = getTopModal();
    $(modal).css('z-index', parseInt($(topModal).css('z-index')) + 1);
  }

  if ($('.modal').length) {
    // Hide top modal when click off
    $('.js-body').click(function(event){
      if (!$(event.originalEvent.srcElement).is('a')) {
        var topModal = getTopModal();
        console.log('topModal: ' + topModal);
        var id = $(topModal).attr('id');
        console.log('id: ' + id);
        $('#' + id).modal('hide');
      }
    });

    $('.modal').on('flick', function(event) {
      var left = parseInt($(this).css('left'));
      var top = parseInt($(this).css('top'));
      if (event.orientation === 'horizontal') {
        if (event.direction > 0) {
          // Flick to right
          left += 10000;
        } else {
          // Flick to left
          left -= 10000;
        }
      } else {
        if (event.direction > 0) {
          // Flick to bottom
          top += 10000;
        } else {
          // Flick to top
          top -= 10000;
        }
      }
      $(this).animate({
        left: left,
        top: top
      },400, 'easeInOutQuad');
    });

    // Make modals draggable
    // Bring modal to front when they are dragged
    $('.modal').draggable({
      drag: function(event, ui) {
        moveModalToFront(event.target);
      }
    });

    // Bring modal to front when they are clicked
    $('.modal').click(function(event) {
      event.stopPropagation();
      moveModalToFront(this);
    });

    // Reset
    $('.js-reset').click(function(event) {
      event.preventDefault();
      $('.modal').modal('hide');
      //$('body').animate({ scrollTop: 0 }, 0);
    });

    // Modal show to prevent close event
    $(document).on('click', ".js-toggle-modal", function(event) {
      event.preventDefault();
      event.stopPropagation();
      var target = $(this).attr('href');
      $(target).modal('show');
    });

    // Position modal when it opens
    $('.modal').on('shown.bs.modal', function () {
      if (pageLoaded) {
        moveModalToFront(this);
        var $modal = $(this);
        var content = $modal.find('.modal-dialog');
        randomizePosition(content);
      }
    });

    // Position modal when it opens
    $('.modal').on('hidden.bs.modal', function () {
      if ($('.modal.in').length) {
        $('body').addClass('modal-open');
      }
    });

    $('.js-modal-close').click(function(event){
      event.preventDefault();
      event.stopPropagation();
      var target = $(this).parents('.modal');
      var id = $(target).attr('id');
      $('#' + id).modal('hide');
    });

    // Check if you should load a modal
    var hash = window.location.hash;
    if (window.location.hash != "") {
      $(hash).modal('show');
    }
  }

  // Customise your sign up form validation messages
  $.ajaxChimp.translations.xxix_custom = {
    'submit': ' ',
    0: 'We have sent you a confirmation email',
    1: 'Please enter a value',
    2: 'An email address must contain a single @',
    3: 'The domain portion of the email address is invalid (the portion after the @: )',
    4: 'The username portion of the email address is invalid (the portion before the @: )',
    5: 'This email address looks fake or invalid. Please enter a real email address'
  }

  $('#mc-form').ajaxChimp({
    language: 'xxix_custom',
  });

  $('.js-hypher p').hyphenate('en-us');

  // Show modals
  pageLoaded = true;
  $('#span-rotator, #aida-web, #aida-print, #antfood-web-home, #dropbox-web, #xxxi-studio-exterior, #ronan-menu, #ibm-01, #antfood-web, #xxxi-store').modal('show');
  pageLoaded = false;
  $('#contact, #info, #project-index, #client-list').modal('show');

  setupSideNotes();
  $(window).on('resize', function() {
    if ($('.js-footnoted').length) {
      $('.js-footnoted').sidenotes('destroy');
      setupSideNotes();
    }
  });

  $(window).load(function() {
    pageLoaded = true;
    $("body").scrollTop(0);
    $("body").removeClass("preload");
  });

  // All Projects module
  $.each(projectInfo, function (key, value) {

    // console.log(key + ": " + value.length);

    var container = $('.project-index-list');
    //$('body').append(container);

    $.each(value, function (index, field) {

      container.append(
        '<div class="project-index-item ' + field.status + '"><a href="/projects/' + field.permalink + '"><div class="col-xs-7 col-sm-3 u-sm-pln"><p>' + field.name + '</p></div><div class="col-sm-8 hidden-xs"><p>' + field.short_description + '</p></div><div class="col-sm-1"><p class="permalink">&rarr;</p></div><div class="clearfix"></div></a><img src="' + field.thumbnail_url + '"></div>'

        // <div class="col-sm-2 hidden-xs"><p> ' + field.credits + '</p></div>
        // </div><div class="col-xs-2 col-sm-1 col-sm-offset-1"><p>' + field.year + '</p></div>

        // remove tags
        // <p>' + field.tags.join(', ') + '</p>
      );
    });
  });

  // prevent inactive projects from clicking through
  $(".project-index-item.inactive").click(function(){
    event.preventDefault();
  });

  // Client List module
  $.each(projectInfo, function (key, value) {

    var container = $('.js-client-list');

    $.each(value, function (index, field) {

      container.append(
        field.name + ', '
      );

    });
  });

  // offset positioning of images in All Projects module
  var randomizeProjectThumbPosition = function(selector) {
    $(this).load(function() { // get image sizes
      $(selector).each(function(){
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var objHeight = $(this).height();
        var objWidth = $(this).width();
        var top = Math.ceil(Math.random() * 10);
        var left = Math.ceil(Math.random() * 30) + 20;

        // console.log('objWidth ' + objWidth);
        // console.log('objHeight ' + objHeight);
        // console.log('top '+ top);
        // console.log('left '+ left);

        $(this).css('position','absolute');

        $(this).css({
          'top': top
        });

        $(this).css({
          'left': left + '%'
        });

      });
    });
  }
  randomizeProjectThumbPosition('.project-index-item img, .js-randomize-position');

  //blog
  $('.sv-blog-article-content p img, .sv-blog-article-content p blockquote').unwrap();

  $('.sv-blog-articles-article-title').prepend('<div class="article-count"></div>');
  $('.article-count').each(function(i){
    var count = 1 + i++;
    $(this).append('<span>' + count + '</span>');
  });

}(window.jQuery);

$(window).load(function(){

  $('iframe').each(function(){

    var iframe = $(this);
    if (iframe.length) {
      var src = $(iframe).attr('data-iframe-src');
      $(iframe).attr('src', src);
    }

  });

});

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
