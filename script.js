//Adding close button to each list 
var todoList=document.getElementsByTagName("LI");

for(var i=0; i<=todoList.length-1; i++){
  var span=document.createElement("SPAN");
  var txt=document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(txt);
  console.log(todoList[i]);
  todoList[i].appendChild(span);
  console.log(todoList[i]);
}


//removing a list item when close sign is clicked
var close=document.getElementsByClassName("close");
var i;
for(i=0; i<=close.length-1; i++){
    close[i].onclick=function(){
    var div=this.parentElement;
    div.style.display="none";
    }
}


//adding check mark when list is clicked
var listCont=document.querySelector('ul');

listCont.addEventListener('click', function(ev){
  if(ev.target.tagName ==='LI'){
    ev.target.classList.toggle('checked');
  }
},false);

//adding a new list item when add button is clicked
function newListElement(){
  var li=document.createElement('li');
  var myInputVal=document.getElementById("myInput").value;
  //console.log(myInputVal);
  var txtNode=document.createTextNode(myInputVal);
  li.appendChild(txtNode);
  
  if(myInputVal ===''){
    alert("You must enter something");
  }else{
    document.getElementById("myList").appendChild(li);
  }
  
    document.getElementById("myInput").value="";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    //console.log(todoList[i]);
    
    for(i=0; i<=close.length-1; i++){
      close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display='none';
      }
    }
}

var saveBtn=document.getElementById('saveList');
console.log(saveBtn);
saveBtn.addEventListener('click', function(){
  //alert('clicked');
  var todoListArray=[];
  
  
  
  
});