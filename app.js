/*
===============================================================

Hi! Welcome to my little playground!

My name is Tobias Bogliolo. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona. 

Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want 
but I would appreciate an attribution from my work. I hope you enjoy it.

===============================================================
*/
//Global:
var survey = []; //Bidimensional array: [ [1,3], [2,4] ]
var list=["q1: ","q2: ","q3: ","q4: ","q5: "];
var name;

//Switcher function:
$(".rb-tab").click(function(){
  //Spot switcher:
  $(this).parent().find(".rb-tab").removeClass("rb-tab-active");
  $(this).addClass("rb-tab-active");
});

//Save data:
$(".trigger").click(function(){
  //Empty array:
  survey = [];
  //Push data:
  for (i=1; i<=$(".rb").length; i++) {
    var rb = "rb" + i;
    var rbValue = parseInt($("#rb-"+i).find(".rb-tab-active").attr("data-value"));
    //Bidimensional array push:
    survey.push([i, rbValue]); //Bidimensional array: [ [1,3], [2,4] ]
  };
  //Debug:
  debug();
});

//Debug:
function debug(){
  var debug = "";
  for (i=0; i<survey.length; i++) {
	debug += survey[i][0] + " = " + survey[i][1] + "\n";
	list[i]+=survey[i][1];
  };
  name = document.getElementById('name').value;
  console.log(name)
  const data = {
	  list,
	  name
  }
  console.log(name)
  fetch("http://localhost:3000/",
  {
	  method: 'POST',
	  body: JSON.stringify(data),
	  
	  headers: { "Content-Type": "application/json" },
  })
  .then(res => res.json())
  .then(data => alert( JSON.stringify(data)))
};
