var numSquares=6;
var colors = pickRandomColors(numSquares);


var pickedcolor=pickColor();

var squ=document.querySelectorAll(".square");
var messagedisplay=document.querySelector("#message");
var finalc=document.querySelector("#finalc");
var h1=document.querySelector("h1");
var btn1=document.querySelector("#btn1");
var btn2=document.querySelector("#btn2")
var btn3=document.querySelector("#btn3");
finalc.textContent=pickedcolor;
for(var i=0;i<squ.length;i++)
{
	squ[i].style.background=colors[i];
	squ[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor)
		{
			messagedisplay.textContent="correct";
			changeColors(clickedcolor);
			h1.style.background=clickedcolor;
			btn1.textContent="play again?";
		}
		else{
			messagedisplay.textContent="try again";
			this.style.background="#232323";
		}

	});
}
function changeColors(color)
{
	for(var i=0;i<squ.length;i++)
	{
		squ[i].style.background= color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function pickRandomColors(num){
 
var arr=[];
 for(var i=0;i<num;i++)

 {
 	arr[i]=randomcolor();
 }
 return arr;
}
function randomcolor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	//"rgb(r, g, b)"
   return "rgb("+r+", "+g+", "+b+")";
}
btn1.addEventListener("click",function(){
	btn1.textContent="New Colors";
	messagedisplay.textContent=" ";
 colors=pickRandomColors(numSquares);
 pickedcolor=pickColor();
 finalc.textContent=pickedcolor;
 h1.style.background="steelblue";
 for(var i=0;i<squ.length;i++)
 {
 	squ[i].style.background=colors[i];
 }
});


btn2.addEventListener("click",function()
{
btn2.classList.add("selected");
btn3.classList.remove("selected");
numSquares=3;
colors=pickRandomColors(numSquares);
pickedcolor=pickColor();
finalc.textContent=pickedcolor; 
for(var i=0;i<squ.length;i++)
{
	if(colors[i])
	{
		squ[i].style.background=colors[i];
	}
	else
	{
		squ[i].style.display="none";
	}
}

});
btn3.addEventListener("click",function()
{
btn3.classList.add("selected");
btn2.classList.remove("selected");
numSquares=6;
colors=pickRandomColors(numSquares);
pickedcolor=pickColor();
finalc.textContent=pickedcolor; 
for(var i=0;i<squ.length;i++)
{
	squ[i].style.background=colors[i];
	squ[i].style.display="block";
	
}

});