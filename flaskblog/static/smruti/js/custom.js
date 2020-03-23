{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> */}

function sum_values(){
var the_sum = 0;
for (questions in answers){
    the_sum = the_sum + parseInt(answers[question])

return the_sum
}
}

function laden(value){
$(function() 
{
  alert(value)
$.ajax({                    
  url: 'http://127.0.0.1:5000/getData',     
  type: 'POST', // performing a POST request
  data : {"test":[1,3,4]},
  dataType: 'json',                   
  success: function(data)         
  {
    alert("Soumya")
  } 
});
})
};
   var fin = [];
  function nextq(clicked) {
  var lab = clicked.nextElementSibling.innerHTML;
  //alert(lab)
  var parentDiv = clicked.parentNode;
  //var id = parentDiv.getAttribute("id");

  var id = $(clicked).closest('div[id]').attr('id');

  var b = parseInt(id);
  b= b+1
  var n = b.toString();
  
  var r="r"+id
  var b="b"+id

  var e = document.getElementById(n)
  //alert(e)
       document.getElementById(b).style.display = "block";
       document.getElementById(r).innerHTML = lab;

       setTimeout(function(){
    document.getElementById(n).style.display = "block";
      }, 2000);
              
       
    if(e == null){
    var sum = 0;
    var arr = [];
    var check;
    $("#myForm").find("input[type='radio']:checked").each(function (i, e){sum+=parseInt($(e).val());});
    if(sum<25)
      check='You tend to be Stress Free. Live your Life like this only. Be cheerful,happy and always Satisfied with your life'
    else if(sum>25 & sum<35)
      check='You tend to be Anxious. Be happy and always live positive attitude. "Worry is the Silent Killer'
    else 
      check='You might have severe anxiety'
    
    
    alert("On the basis of the Survey :"+check);

    $("#myForm").find("input[type='radio']:checked").each(function (i, e){arr.push(parseInt($(e).val()));});
 

    
    for(var i in (1,7)) { 
      var total=0;
      total += arr[i]; 
      fin.push(total);
    }
    for(var i in (8,15)) { 
      var total=0;
      total += arr[i]; 
      fin.push(total);
    }
    for(var i in (15,22)) { 
      var total=0;
      total += arr[i]; 
      fin.push(total);
    }
    anything(fin)
  }

}

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

  

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Type', 'Value'],
    ['Anxiety', 12],
    ['Stress', 15 ],
    ['Bipolar disorder', 7],

  ]);

  var options = {
    title: 'My Analysis'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

 function anything(data){
  chart.draw(data, options);
  }
}