
jQuery.extend({
  randomColor: function() {
    return '#' + Math.floor(Math.random()*256*256*256).toString(16);
  }
});

(function(removeClass) {
  jQuery.fn.removeClass = function(value) {
    if(value && typeof value.test === 'function') {
      for(var i = 0; i < this.length; i++) {
        var elem = this[i];
        if( elem.nodeType === 1 && elem.className ) {
          var classNames = elem.className.split(/\s+/);
          for(var n = 0; n < classNames.length; n++) {
            if(value.test(classNames[n])) {
              classNames.splice(n, 1);
            }
          }
          elem.className = jQuery.trim(classNames.join(" "));
        }
      }
    } else {
      removeClass.call(this, value);
    }

    return this
  }
})(jQuery.fn.removeClass);

jQuery(document).ready(function() {
  jQuery('html').removeClass('no-js');
});

jQuery(document).foundation();


(function($) {
  "use strict";
  $(document).ready(function() {

    $('video').each(function() {
      this.muted = true;
    });

    $('.fadeinleft, .fadeinright, .fadein, .popin').appear(function() {
      var delay = $(this).data('delay');
      var that = this;

      setTimeout(function() {
        $(that).addClass('appear');
      }, delay)

    });

    // $('.popin').each(function() {
    //   $(this).addClass('appear');
    // });

    $(window).scroll(function() {

      var scroll = $(window).scrollTop();

      if ( scroll >= 40 ) {
        $('body').addClass('shrink');
      } else {
        $('body').removeClass('shrink');
      }

    });

    $('form#contact_form').validate({
      messages: { },
      submitHandler: function(form) {
        $.ajax({
          type: 'POST',
          url: 'send.php',
          data: $(form).serialize(),
          success: function(data) {
            if(data.match(/success/)) {
              $(form).trigger('reset');
              $('#thanks').show().fadeOut(5000);
            }
          }
        });
        return false;
      }
    });

    if($('.masonry-container').length > 0) {

      $('.masonry-container').each(function() {
        var that = $(this);

        // initialize Masonry after all images have loaded
        $(that).imagesLoaded(function() {

          setTimeout(function() {
            window.msnry = new Masonry($(that)[0], {
              itemSelector: '.mod',
              // columnWidth: '.mod',
              gutter: 30
            });

            // window.msnry.layout();

          }, 10);

        });

      });
    }


    // onepage nav scroll
    if ( $("nav.top-bar.onepage").length > 0 ) {
      $('.top-bar-section a[href=#top]').closest('li').addClass('active');

      var ctx = $("nav.top-bar.onepage");

      // var headerHeight = ctx.height();
      // $(window).scroll(function() {
      //   headerHeight = ctx.height();
      //   console.log(headerHeight);
      // });
      var headerHeight = 59;

      // use to mark whether the scrolling is caused by clicking
      var clickScrolling = false;
      // cache for current anchor id
      var currentAnchorId;

      $('.top-bar-section a', ctx).click(function(event) {
        $('.top-bar-section a', ctx).closest('li').removeClass('active');
        $(this).closest('li').addClass('active');
        clickScrolling = true;
        // console.log($(this).attr('href').offset());
        try {
          if ( $(this).attr('href') == '#top' ) {
            var distance = 0
          } else {
            var distance = $($(this).attr('href')).offset().top - headerHeight + 'px';
          }

          // console.log(distance);

          $('html, body').stop().animate({
            scrollTop: distance
          }, { duration: 1200, easing: "easeInOutExpo", complete: function() { clickScrolling = false; } });
          event.preventDefault();
        } catch(e) {}
      });


      // hightlight nav when scrolling
      var anchors = $('.top-bar-section a', ctx).map(function() {
        var href = $(this).attr('href');
        if ( href.match(/^#/) ) {
          var anchor = $($(this).attr('href'));
          if(anchor.length) { return anchor; }
        }
      });

      $(window).scroll(function() {
        if(clickScrolling) return false;

        var fromTop = $(this).scrollTop();
        var passedAnchors = anchors.map(function() {
          // add 1 to make the current nav change 1px before it should when scrolling top to bottom
          if(fromTop + headerHeight + 1 >= $(this).offset().top)
            return this;
        });
        // get the last anchor in the passedAnchors as the current one
        var currentAnchor = passedAnchors[passedAnchors.length - 1];
        if(currentAnchor) {
          if(currentAnchorId !== currentAnchor.attr('id')) {
            currentAnchorId = currentAnchor.attr('id');
            $('.top-bar-section a', ctx).closest('li').removeClass('active');
            $('.top-bar-section a[href=#'+currentAnchorId+']', ctx).closest('li').addClass('active');
          }
        }

      });


    }


  });
})(jQuery);
(function($) {
  Tc.Module.BarGraph = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;


      $(".bars", $ctx).each(function() {
        $('> li > .highlighted', $(this)).each(function() {
          $(this).appear(function() {
            var percent = $(this).attr("data-percent");
            // $bar.html('<p class="highlighted"><span class="tip">'+percent+'%</span></p>');
            // http://stackoverflow.com/questions/3363035/jquery-animate-forces-style-overflowhidden
            $(this).animate({
              'width': percent + '%'
            }, 1700, function() { $(this).css('overflow', 'visible'); });
          });
        });
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.BlogPost = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      if($ctx.find('img, .images').length == 0) {
        $ctx.addClass('no-media');
      }

      $('.images', $ctx).slick({
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        speed: 1500,
        arrows: false
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.BoxedSlider = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      $('.slides', $ctx).slick({
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        speed: 1500,
        autoplaySpeed: 2000,
        arrows: false
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.BoxedTextSlider = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;


      $('.boxes', $ctx).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.CallToAction = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.Clients = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      var slides_to_show = $ctx.data('slides_to_show');

      $('.clients', $ctx).slick({
        slidesToShow: slides_to_show,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.DefaultSlider = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.sequence-min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      var options = {
        nextButton: true,
        prevButton: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        pauseButton: true,
        cycle: true,
        // preloader: true,
        animateStartingFrameIn: true,
        pagination: true,
        reverseAnimationsWhenNavigatingBackwards: true,
        preventDelayWhenReversingAnimations: true,
        fadeFrameWhenSkipped: false,
        swipeEvents: {
          left: "next",
          right: "prev"
        },
        pauseOnHover: false
      }

      var autostop = $('.sequence', $ctx).data('autostop') == 'on' ? true : false;
      var timeout = $('.sequence', $ctx).data('timeout');

      if ( timeout == '0' ) {
        options.autoPlay = false;
      } else {
        options.autoPlay = true;
        options.autoPlayDelay = parseInt(timeout);
      }

      if ( autostop ) {
        options.autoStop = true;
      } else {
        options.autoStop = false;
      }

      // console.log(options);

      var sequence = $(".sequence", $ctx).sequence(options).data("sequence");
      sequence.beforeCurrentFrameAnimatesOut = function() {
        var sequence = this;
        var removeStatic = function() {
          jQuery(".frame.static").removeClass('static');
          if ( !window.sequenceAutoStarted && sequence.settings.autoPlay ) {
            sequence.startAutoPlay(sequence.settings.autoPlayDelay);
            window.sequenceAutoStarted = true;
          }
        }
        setTimeout(removeStatic, 1000);

        // when the next frame is the last one
        if ( sequence.nextFrameID == sequence.frames.length && options.autoStop ) {
          // console.log(sequence.nextFrameID);
          sequence.stopAutoPlay();
        }

      }


    }
  })
})(Tc.$);
(function($) {
  Tc.Module.FullscreenSlider = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      var fullscreen_slide = function() {
        $('.fullscreen_slideshow', $ctx).width($(window).width());
        if( $ctx.hasClass('force')) {
          $('.fullscreen_slideshow', $ctx).height($(window).height());
        } else {
          $('.fullscreen_slideshow', $ctx).height($(window).height() - $('.top-bar').height());
        }
      }

      fullscreen_slide();

      $(window).on('resize', fullscreen_slide);

      var options = {
        nextButton: true,
        prevButton: true,
        autoPlay: false,
        autoStop: true,
        autoPlayDelay: 3000,
        pauseButton: true,
        cycle: true,
        // preloader: true,
        animateStartingFrameIn: true,
        pagination: true,
        reverseAnimationsWhenNavigatingBackwards: true,
        preventDelayWhenReversingAnimations: true,
        fadeFrameWhenSkipped: false,
        swipeEvents: {
          left: "next",
          right: "prev"
        },
        pauseOnHover: false
      }

      var autostop = jQuery('.fullscreen_slideshow', $ctx).data('autostop') == 'on' ? true : false;
      var timeout = jQuery('.fullscreen_slideshow', $ctx).data('timeout');

      if ( timeout == '0' || !timeout ) {
        options.autoPlay = false;
      } else {
        options.autoPlay = true;
        options.autoPlayDelay = parseInt(timeout);
      }


      if ( autostop ) {
        options.autoStop = true;
      } else {
        options.autoStop = false;
      }

      var fullscreen = jQuery(".fullscreen_slideshow", $ctx).sequence(options).data("sequence");

      fullscreen.beforeCurrentFrameAnimatesOut = function() {
        var sequence = this;
        var removeStatic = function() {
          jQuery(".frame.static").removeClass('static');

          if ( !window.fullSequenceAutoStarted && sequence.settings.autoPlay ) {
            sequence.startAutoPlay(sequence.settings.autoPlayDelay);
            window.fullSequenceAutoStarted = true;
          }
        }
        setTimeout(removeStatic, 1000);
        // when the next frame is the last one
        if ( sequence.nextFrameID == sequence.frames.length && options.autoStop ) {
          sequence.stopAutoPlay();
        }
      }

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.Gallery = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      // $('img', $ctx).each(function() {
      //   $(this).css({
      //     'height': $(this).attr('height'),
      //     'width': $(this).attr('width')
      //   });
      // });

      // function pixelized_dimensions(resize) {
      //   $('.item > a', $ctx).css({
      //     width: '99%',
      //     height: 'auto'
      //   });

      //   if(resize) {
      //     $('.item > a', $ctx).css({
      //       width: Math.floor($('.item > a', $ctx).width()),
      //       height: Math.floor($('.item > a', $ctx).height())
      //     });
      //   }
      // }

      // pixelized_dimensions($.browser.mozilla);

      // if(!$.browser.msie) {
      //   var timer;
      //   $(window).resize(function() {
      //     clearTimeout(timer);
      //     timer = setTimeout(function() {
      //       pixelized_dimensions(true);
      //     }, 100);
      //   });
      // }

      $('.gallery-nav ul li a', $ctx).click(function() {

        $('.gallery-nav ul li').removeClass('current');
        $(this).closest('li').addClass('current');

        var cat = $(this).attr('data-cat');

        var gallery = $('.gallery-nav').closest('.modGallery').find('ul.gallery');

        if (cat === 'all') {
          $('li', gallery).removeClass('hidden');
        } else {
          $('li', gallery).each(function() {
            if ($(this).hasClass(cat)) {
              $(this).removeClass('hidden');
            } else {
              $(this).addClass('hidden');
            }
          });
        }

        return false;

      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.IconText = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.MasonryGallery = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      var items = $('.gallery li', $ctx);
      items.each(function(index, value) {
        $(this).data('masonry-id', index);
      });

      var msnry = new Masonry($('.gallery')[0], { itemSelector: 'li', gutter: 0, isInitLayout: false });

      window.msnry = msnry;

      $('.gallery', $ctx).imagesLoaded( function() {
        // setTimeout(function() {})
        // console.log($('#main').width());
        // console.log($('body').width());
        // console.log($('.gallery').width());
        msnry.layout();
      });

      $('.gallery-nav ul li a', $ctx).click(function() {

        $('.gallery-nav ul li').removeClass('current');
        $(this).closest('li').addClass('current');

        var cat = $(this).attr('data-cat');

        var gallery = $('.gallery-nav').closest('.mod').find('ul.gallery');

        if (cat === 'all') {
          // var masonryItems = [];
          // $('.gallery li').each(function() {
          //   masonryItems.push(msnry.getItem($(this)[0]))
          // });

          // msnry.reveal(masonryItems);
          // TODO:
          // 1. remove all
          // 2. add all
          //

          // $('li', gallery).each(function() {
          //   msnry.remove($(this));
          // });

          var exists = $('.gallery li', $ctx);
          // console.log(exists);
          var elems = [];

          $(items).each(function() {
            var item = this;
            var skip = false;

            exists.each(function() {
              if ($(item).data('masonry-id') == $(this).data('masonry-id')) {
                skip = true;
              }
            });

            if (!skip) {
              ($('.gallery', $ctx)[0]).appendChild($(this)[0]);
              elems.push($(this)[0]);
            }
          });

          msnry.prepended(elems);

        } else {

          $('li', gallery).each(function() {
            if (!$(this).hasClass(cat)) {
              msnry.remove($(this));
            }
          });

          var exists = $('.gallery li', $ctx);
          var elems = [];

          $(items).each(function() {
            var item = this;
            var skip = false;

            exists.each(function() {
              if ($(item).data('masonry-id') == $(this).data('masonry-id')) {
                skip = true;
              }
            })

            if ( $(this).hasClass(cat) && !skip) {
              ($('.gallery', $ctx)[0]).appendChild($(this)[0]);
              elems.push($(this)[0]);
            }
          });

          msnry.appended(elems);

        }

        msnry.layout();

        // console.log(items);

        return false;

      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.Milestone = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.appear.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      $ctx.appear(function() {
        $('strong', $ctx).countTo({
          speed: 1400
        });
      });

    }
  })
})(Tc.$);
(function($) {
  Tc.Module.PriceBox = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.SectionHeader = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.TeamMember = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('jquery.ui.core.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;
    }
  })
})(Tc.$);
(function($) {
  Tc.Module.Testimonials = Tc.Module.extend({
    init: function($ctx, sandbox, modId) {
      this._super($ctx, sandbox, modId);
    },
    dependencies: function() {
      // this.require('slick.min.js', 'plugin', 'onBinding');
    },
    onBinding: function() {
      var $ctx = this.$ctx;

      var show_dots = true;

      if ($ctx.hasClass('simple')) {
        show_dots = false;
      }

      $('.items', $ctx).slick({
        autoplay: true,
        pauseOnHover: false,
        dots: show_dots,
        speed: 1500,
        arrows: false
      });

    }
  })
})(Tc.$);

var options = {
  valueNames: [ 'project', 'subject', 'language' ]
};

var userList = new List('users', options);

jQuery( document ).ready(function() {
  jQuery(".python-item").hover(function() {
      jQuery(this).addClass("list-hover-python");
  }, function() {
      jQuery(this).removeClass("list-hover-python");
  });
  jQuery(".scratch-item").hover(function() {
      jQuery(this).addClass("list-hover-scratch");
  }, function() {
      jQuery(this).removeClass("list-hover-scratch");
  });
});

jQuery(window).load(function(){
  jQuery('.grid').masonry({  
    itemSelector: '.grid-item',
    isFitWidth: true,
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
});

jQuery(document).ready(function($){
  $(window).load(function(){
      $('.container').masonry({
          transitionDuration: 0,
          itemSelector: '.photo-box'
      }).imagesLoaded(function() {
          jQuery('.grid').masonry('reloadItems').masonry();
      });
  });
});

jQuery(document).ready(function($){

  var $ctx = this.$ctx;

  $('.snapshot-nav h3', $ctx).hover(function() {

    var cat = $(this).attr('data-cat');

    var gallery = $('.snapshot-nav').closest('.snapshots-about-me').find('ul.snapshots-images');

    if (cat === 'all') {
      $('li', gallery).removeClass('hidden');
      $('li', gallery).addClass('visible');
    } else {
      $('li', gallery).each(function() {
        if ($(this).hasClass(cat)) {
          $(this).removeClass('hidden');
          $(this).addClass('visible');
        } else {
          $(this).addClass('hidden');
          $(this).removeClass('visible');
        }
      });
    }

    return false;

  }, function(){
    var gallery = $('.snapshot-nav').closest('.snapshots-about-me').find('ul.snapshots-images');
    
    $('li', gallery).removeClass('hidden');
    $('li', gallery).addClass('visible');

  }
  );
});


jQuery(document).ready(function($){

  var  mn = $(".secondary-nav");
  mns = "secondary-nav-scrolled";
  hdr = $('.image-header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr + 40) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });
});

jQuery(document).ready(function($){

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $(".secondary-nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, 750, {
          offset: -117,
        });
    });

    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $(".secondary-nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();
        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in questions
            if (windowPos + 120 >= divPos && windowPos + 120 < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$(".secondary-nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $(".secondary-nav li:last-child a").addClass("nav-active");
            }
        }
    });
});


jQuery(document).ready(function($){

  $(function () {
    count = 0;
    wordsArray = ["an educator.", "a developer.", "a creator.", "a learner."];
    colorArray = ["word-color1", "word-color2", "word-color3"];
    setInterval(function () {
      count++;
      $("#word").fadeOut(400, function () {
        $(this).removeAttr('class');
        $(this).addClass(colorArray[count % colorArray.length]);
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 4000);
  });
});