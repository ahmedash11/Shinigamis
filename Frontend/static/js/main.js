(function(a){skel.breakpoints({xlarge:'(max-width: 1680px)',large:'(max-width: 1280px)',medium:'(max-width: 980px)',small:'(max-width: 736px)',xsmall:'(max-width: 480px)'}),a(function(){var b=a(window),c=a('body');c.addClass('is-loading'),b.on('load',function(){window.setTimeout(function(){c.removeClass('is-loading')},0)}),skel.vars.mobile&&c.addClass('is-touch'),a('form').placeholder(),skel.on('+medium -medium',function(){a.prioritize('.important\\28 medium\\29',skel.breakpoint('medium').active)}),a('.scrolly').scrolly({speed:2e3}),a('#nav > ul').dropotron({alignment:'right',hideDelay:350}),a('<div id="titleBar"><a href="#navPanel" class="toggle"></a><span class="title">'+a('#logo').html()+'</span></div>').appendTo(c),a('<div id="navPanel"><nav>'+a('#nav').navList()+'</nav></div>').appendTo(c).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:'left',target:c,visibleClass:'navPanel-visible'}),'wp'==skel.vars.os&&10>skel.vars.osVersion&&a('#titleBar, #navPanel, #page-wrapper').css('transition','none'),'ie'==skel.vars.browser||skel.vars.mobile?a.fn._parallax=function(){return a(this)}:(a.fn._parallax=function(){return a(this).each(function(){var h,i,g=a(this);h=function(){g.css('background-position','center 0px'),b.on('scroll._parallax',function(){var j=parseInt(b.scrollTop())-parseInt(g.position().top);g.css('background-position','center '+-0.15*j+'px')})},i=function(){g.css('background-position',''),b.off('scroll._parallax')},skel.on('change',function(){skel.breakpoint('medium').active?i():h()})}),a(this)},b.on('load resize',function(){b.trigger('scroll')}));var d=a('.spotlight');d._parallax().each(function(){var h,i,g=a(this);h=function(){if(g.css('background-image','url("'+g.find('.image.main > img').attr('src')+'")'),skel.canUse('transition')){var j,k,l;g.hasClass('top')?(l='top',j='-20%',k=0):g.hasClass('bottom')?(l='bottom-only',j=0,k='20%'):(l='middle',j=0,k=0),g.scrollex({mode:l,top:j,bottom:k,initialize:function(){g.addClass('inactive')},terminate:function(){g.removeClass('inactive')},enter:function(){g.removeClass('inactive')}})}},i=function(){g.css('background-image',''),skel.canUse('transition')&&g.unscrollex()},skel.on('change',function(){skel.breakpoint('medium').active?i():h()})});var e=a('.wrapper');e.each(function(){var h,i,g=a(this);h=function(){skel.canUse('transition')&&g.scrollex({top:250,bottom:0,initialize:function(){g.addClass('inactive')},terminate:function(){g.removeClass('inactive')},enter:function(){g.removeClass('inactive')}})},i=function(){skel.canUse('transition')&&g.unscrollex()},skel.on('change',function(){skel.breakpoint('medium').active?i():h()})});var f=a('#banner');f._parallax()})})(jQuery);
