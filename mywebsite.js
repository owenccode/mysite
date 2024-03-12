document.addEventListener('DOMContentLoaded', () => {

    const addClickListener = (selector, targetClass) => {
      document.querySelectorAll(selector).forEach(trigger => {
        trigger.addEventListener('click', function () {
          document.querySelectorAll(targetClass).forEach(target => target.classList.add('up'));
          ['window-weddings', 'window-photography', 'window-videos', 'window-animation', 'window-inquire']
            .filter(cls => cls !== targetClass.slice(1))
            .forEach(target => document.querySelectorAll(target).forEach(target => target.classList.remove('up')));
        });
      });
    };
  
    addClickListener('.tab-weddingpage-unselected', '.window-weddings');
    addClickListener('.tab-video-unselected', '.window-videos');
    addClickListener('.tab-photo-unselected', '.window-photography');
    addClickListener('.tab-animation-unselected', '.window-animation');
    addClickListener('.tab-inquire-unselected', '.window-inquire');
  
    addClickListener('.window-weddings', '.window-weddings');
    addClickListener('.window-videos', '.window-videos');
    addClickListener('.window-photography', '.window-photography');
    addClickListener('.window-animation', '.window-animation');
    addClickListener('.window-inquire', '.window-inquire');
  
    addClickListener('.start-wedding', '.window-weddings');
    addClickListener('.start-video', '.window-videos');
    addClickListener('.start-photography', '.window-photography');
    addClickListener('.start-animation', '.window-animation');
    addClickListener('.start-inquire', '.window-inquire');
  
    document.querySelectorAll('.toggletest').forEach(trigger => {
      trigger.addEventListener('click', function () {
        this.x = ((this.x || 0) + 1) % 2;
        const classesToRemove = this.x ? ['full'] : ['half'];
        const classesToAdd = this.x ? ['half'] : ['full'];
        document.querySelectorAll('.toggletest').forEach(target => target.classList.remove(...classesToRemove));
        document.querySelectorAll('.toggletest').forEach(target => target.classList.add(...classesToAdd));
      });
    });
  
    // Add more event listeners as needed
  
  });