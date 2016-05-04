$(document).ready(function() {
    var i = 1;

while(i < 100.1)
{
  console.log(i);
  $('#while').append(i + ' ');
  i++;
}
});