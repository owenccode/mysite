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

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.icon-weddings').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.icon-video').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-videos').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.icon-photo').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-photography').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-animation').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.icon-animation').forEach(trigger => {
    trigger.addEventListener('click', function () {
      document.querySelectorAll('.window-animation').forEach(target => target.classList.add('up'));
      document.querySelectorAll('.window-inquire').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-weddings').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-videos').forEach(target => target.classList.remove('up'));
      document.querySelectorAll('.window-photography').forEach(target => target.classList.remove('up'));
    });
  });

  document.querySelectorAll('.icon-inquire').forEach(trigger => {
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
 document.querySelectorAll('.toggletest').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 1) + 1)%2; 
    if(this.x){ 
      document.querySelectorAll('.toggletest').forEach(target => target.classList.remove('full'));
      document.querySelectorAll('.toggletest').forEach(target => target.classList.add('half'));
      }
      else{ 
      document.querySelectorAll('.toggletest').forEach(target => target.classList.remove('half'));
      document.querySelectorAll('.toggletest').forEach(target => target.classList.add('full'));
      } 
    });
 });

 document.querySelectorAll('').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
 
    });
 });
});
