
$('addServer').on('submit', function(e) {
  //FORM IS VALID 
  //stop default form submission so you can do stuff
  console.log('form 1');
  e.preventDefault();
  console.log('form 2');
  //do stuff
  //submit form if desired
  this.submit();
  console.log('form 3');
});

function searchF() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('gameList');
    filter = input.value.toUpperCase();
    ul = document.getElementById("gList");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("div")[0];
      txtValue = a.id;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }