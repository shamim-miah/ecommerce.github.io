
  function g() {
    document.getElementById("select_make").disabled = document.getElementById('select_year').options[document.getElementById('select_year').selectedIndex].value== '01';
}
function h(){
  document.getElementById("select_model").disabled = document.getElementById('select_make').options[document.getElementById('select_make').selectedIndex].value== '01';
}
function i(){
  document.getElementById("select_part").disabled = document.getElementById('select_model').options[document.getElementById('select_model').selectedIndex].value== '01';
}
function j(){
  document.getElementById("select_engine").disabled = document.getElementById('select_part').options[document.getElementById('select_part').selectedIndex].value== '01';
}
/*function k(){
  document.getElementById("select_part_section").disabled = document.getElementById('select_engine').options[document.getElementById('select_engine').selectedIndex].value== '01';
}
function l(){
  var k=document.getElementById('select_engine').options[document.getElementById('select_engine').selectedIndex].value== '01';
  if(k==true){
    document.getElementById('select_part_section').disabled=true;
  }
}*/