var button =  document.getElementById('addElem');
var list = document.getElementById('list');
button.addEventListener('click', function(){
  var element = document.createElement('li');
  var itemCount = document.getElementsByTagName('li');
  element.innerHTML = 'item ' + itemCount.length;
  list.appendChild(element);
}
);
