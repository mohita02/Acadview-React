var btns = document.querySelectorAll('#movie-list .delete');
btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
  });
});

  function hideme (h,t) {
  var a = (t.checked) ? "none" : "block";
  document.getElementById(h).style.display = a;
}



var f= document.forms['add-movie'];

f.addEventListener('submit',function(event)
{
	event.preventDefault();
	var data = f.querySelector('input[type="text"]').value;
	var node = document.createElement("li");
	var s_node1 = document.createElement("span");
	var s_node2 = document.createElement("span");
	node.appendChild(s_node1);
	node.appendChild(s_node2);
	document.getElementById("un_l").appendChild(node);
	s_node1.textContent = data;
	s_node2.textContent = "Delete";
	s_node1.classList.add('name');
	s_node2.classList.add('delete');
	

});


function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("s1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("un_l");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
