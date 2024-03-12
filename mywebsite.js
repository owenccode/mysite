document.addEventListener('DOMContentLoaded', () => {
  
  const addClickListener = (selector, targetClass) => {
    document.querySelectorAll(selector).forEach(trigger => {
      trigger.addEventListener('click', () => {
        document.querySelectorAll('.window').forEach(target => target.classList.remove('up'));
        document.querySelectorAll(targetClass).forEach(target => target.classList.add('up'));
      });
    });
  };

  ['tab-weddingpage-unselected', 'tab-video-unselected', 'tab-photo-unselected', 'tab-animation-unselected', 'tab-inquire-unselected'].forEach(tab => 
    addClickListener(`.${tab}`, `.${tab.replace('tab', 'window')}`)
  );

  ['window-weddings', 'window-videos', 'window-photography', 'window-animation', 'window-inquire'].forEach(window => 
    addClickListener(`.${window}`, `.${window}`)
  );

  ['start-wedding', 'start-video', 'start-photography', 'start-animation', 'start-inquire'].forEach(start => 
    addClickListener(`.${start}`, `.${start.replace('start', 'window')}`)
  );

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
