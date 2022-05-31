'use strict';

{
  // スクロールイベント
  const targets = document.querySelectorAll('.fadeIn');

  let options = {
    threshold: 0.2
  }

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      if (entry.target.classList.contains('titleIn')) {
        const clone = entry.target.cloneNode(true);
        clone.classList.add('clone');
        clone.classList.remove('titleIn');
        entry.target.after(clone);
        entry.target.classList.remove('titleIn');
        entry.target.classList.add('showTitle');
        const remove = () => {
          clone.remove();
        }
        setTimeout(remove, 1400);
      } else if (!entry.target.classList.contains('showTitle') && !entry.target.classList.contains('clone')) {
        if (entry.target.classList.contains('.fadeInImg')) {
          options.threshold = 0;
        }
        entry.target.classList.add('show');
      }
      obs.unobserve(entry.target);
    })
  }

  const observer = new IntersectionObserver(callback, options);
  targets.forEach(target => {
    observer.observe(target);
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