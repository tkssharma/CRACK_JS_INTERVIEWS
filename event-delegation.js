document.addEventListener('DOMContentLoaded', function() {

  let app = document.getElementById('todo-app');

  // attach event listener to whole container
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
      let item = e.target;
      alert('you clicked on item: ' + item.innerHTML);
    }
  });

});
