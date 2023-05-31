document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.tab-weddingpage-unselected').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });


  document.querySelectorAll('.tab-video-unselected').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-videos').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.tab-photo-unselected').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-photography').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.tab-animation-unselected').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-animation').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.tab-inquire-unselected').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
    });
  });
});







document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.window-weddings').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.window-videos').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-videos').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.window-photography').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-photography').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.window-animation').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-animation').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.window-inquire').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.start-wedding').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.start-video').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-videos').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.start-photography').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-photography').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.start-animation').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-animation').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.start-inquire').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
    });
  });
});