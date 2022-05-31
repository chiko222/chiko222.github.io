'use strict';

{
  // スクロールイベント
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const showTargets = document.querySelectorAll( '.fadeIn');
    showTargets.forEach(showTarget => {
      const rect = showTarget.getBoundingClientRect().top;
      const offset = rect + scroll;
      if (scroll > offset - windowHeight + 50) {
        if (showTarget.classList.contains('titleIn')) {
          const clone = showTarget.cloneNode(true);
          clone.classList.add('clone');
          clone.classList.remove('titleIn');
          showTarget.classList.remove('titleIn');
          showTarget.after(clone);
          showTarget.classList.add('showTitle');
          const remove = () => {
            clone.remove();
          };
          setTimeout(remove, 1400);
        } else if (!showTarget.classList.contains('showTitle') && !showTarget.classList.contains('clone')) {
          showTarget.classList.add('show');
        }
      }
    }) ;
  });

  // h1のアニメーション
  var Obj = {
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 100,
    autoStart: true,
    in: {
      effect: 'fadeInUp',
      delayScale: 1,
      delay: 100,
      sync: false,
      shuffle: true
    },
    out: {
    }
  }
  var element
  function RandomInit() {
    element = $(".randomAnime");
    $(element[0]).textillate(Obj);
  };
  function RandomAnimeControl() {
		var elemPos = $(element[1]).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();

		if (scroll >= elemPos - windowHeight) {
			$(element[1]).textillate(Obj);
		}
  }
  $(window).on('load', function() {
    RandomInit();
    RandomAnimeControl();
  })
}