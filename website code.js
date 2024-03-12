document.addEventListener('DOMContentLoaded', () => {
  const handleTabClick = (selector, targets) => {
    document.querySelectorAll(selector).forEach(trigger => {
      trigger.addEventListener('click', function () {
        targets.forEach(target => target.classList.add('up'));
        document.querySelectorAll('.window-weddings, .window-photography, .window-videos, .window-animation, .window-inquire')
          .filter(target => !targets.includes(target))
          .forEach(target => target.classList.remove('up'));
      });
    });
  };

  handleTabClick('.tab-weddingpage-unselected', document.querySelectorAll('.window-weddings'));
  handleTabClick('.tab-video-unselected', document.querySelectorAll('.window-videos'));
  handleTabClick('.tab-photo-unselected', document.querySelectorAll('.window-photography'));
  handleTabClick('.tab-animation-unselected', document.querySelectorAll('.window-animation'));
  handleTabClick('.tab-inquire-unselected', document.querySelectorAll('.window-inquire'));

  handleTabClick('.window-weddings', document.querySelectorAll('.window-weddings'));
  handleTabClick('.window-videos', document.querySelectorAll('.window-videos'));
  handleTabClick('.window-photography', document.querySelectorAll('.window-photography'));
  handleTabClick('.window-animation', document.querySelectorAll('.window-animation'));
  handleTabClick('.window-inquire', document.querySelectorAll('.window-inquire'));

  handleTabClick('.start-wedding', document.querySelectorAll('.window-weddings'));
  handleTabClick('.start-video', document.querySelectorAll('.window-videos'));
  handleTabClick('.start-photography', document.querySelectorAll('.window-photography'));
  handleTabClick('.start-animation', document.querySelectorAll('.window-animation'));
  handleTabClick('.start-inquire', document.querySelectorAll('.window-inquire'));

  document.querySelectorAll('.toggletest').forEach(trigger => {
    trigger.addEventListener('click', function () {
      this.x = ((this.x || 0) + 1) % 2;
      const toggleClass = this.x ? ['full', 'half'] : ['half', 'full'];
      document.querySelectorAll('.toggletest').forEach(target => target.classList.remove(...toggleClass));
      document.querySelectorAll('.toggletest').forEach(target => target.classList.add(...toggleClass));
    });
  });

  // Add additional event listeners as needed
});
document.querySelectorAll('.toggletest').forEach(trigger => {
  trigger.addEventListener('click', function () {
    this.x = ((this.x || 0) + 1) % 2;
    const toggleClass = this.x ? ['full', 'half'] : ['half', 'full'];

    // Remove the classes only from the clicked element
    this.classList.remove(...toggleClass);
    // Add the classes only to the clicked element
    this.classList.add(...toggleClass);

    // If you want to apply the same classes to other elements, you can remove the lines above
    // and uncomment the lines below:
    // document.querySelectorAll('.toggletest').forEach(target => target.classList.remove(...toggleClass));
    // document.querySelectorAll('.toggletest').forEach(target => target.classList.add(...toggleClass));
  });
});
