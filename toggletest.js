document.addEventListener('DOMContentLoaded', () => {
 document.querySelectorAll('.toggletest').forEach(trigger => {
  trigger.addEventListener('click', function(){ 
    this.x = ((this.x || 0) + 1)%2; 
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
