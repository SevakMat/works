var id_ofx = 0;

class stats {
  constructor(g = 0, a = 0, t = 0) {
      this.goals = g;
      this.app = a;
      this.tac = t;
  }
}

var obj_list = new Array(
    Juve = new stats(270,90,61),
    CR7 = new stats(40,70,71),
    Bonucci = new stats(18,70, 44),
    Millan = new stats(257,79,58),
    Donnarumma = new stats(0,70,69),
    Piatek = new stats(36,70,65),
    Liverpool = new stats(260,75,54),
    Salah = new stats(36,68,68),
    Firmino = new stats(30,64,54),
    Tottenham_Hotspur = new stats(247,70,43),
    Son_Heung_min = new stats(27,69,48),
    Dele_Alli = new stats(31,67,59),
);

var players =  ["x2","x3","x5","x6","x8","x9","x11","x12"];
var teams = ["x1","x4","x7","x10"];

var obj_id=["x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12"];
var big_list = new Array(obj_id, obj_list);

var l = 0;
var r = 0;
var id_left = 0;
var id_right = 0;

var left_goals = 0, left_app = 0, left_tac = 0;
var right_goals = 0, right_app = 0, right_tac = 0;


function allowDrop(ev) {
  if((l != 1 && ev.target.id == "small_left") || (r != 1 && ev.target.id == "small_right"))
    ev.preventDefault();
}

function drag(ev) {
  document.getElementById(ev.target.id).setAttribute('draggable', false);

  
  ev.dataTransfer.setData("text", ev.target.id);

  id_ofx = ev.target.id;
 
}

function drop(ev ) {
  

  if (ev.target.id =="small_left") {
    id_left = id_ofx;
    l++;
  }
  else {
    id_right = id_ofx;
    r++;
  }

  ev.preventDefault(); // navsyakii hamar

  let data=ev.dataTransfer.getData("text/html");
 
  let nodeCopy = document.getElementById(id_ofx).cloneNode(true);
  console.log(nodeCopy)

  // karmi guyni pahy
  if (players.includes(id_ofx)) {
    for(let i = 0; i < 4; i++) {
      // document.getElementById(teams[i]).ondragstart = function() { return false; };
      
      document.getElementById(teams[i]).style.color = "red";
    }
  }
  else {
    for(let i = 0 ; i < 8 ; i++) {
      // document.getElementById(players[i]).ondragstart = function() { return false; };
      document.getElementById(players[i]).style.color = "red";
    }
  }

  // css i ktor
  nodeCopy.id = "newId";
  console.log()
  ev.target.appendChild(nodeCopy);
  // document.getElementById(id_ofx).ondragstart = function() { return false; }; // copyi pahna
  document.getElementById(id_ofx).className = "taken"; // css hamar sarqum a seri guyn

  for (let i = 0; i < 12; i++) {
    if(id_ofx == big_list[0][i]) {
      let node1 = document.createElement("div");
      let node2 = document.createElement("div");
      let node3 = document.createElement("div");

      console.log(node1)
      console.log(node2)
      console.log(node3)



      let textnode = document.createTextNode("Goals: ");
      node1.appendChild(textnode);
      textnode = document.createTextNode("Appearances: ");
      node2.appendChild(textnode);
      textnode = document.createTextNode("Tackle: " );
      node3.appendChild(textnode);

      let node1_num = document.createElement("span");
      let node2_num = document.createElement("span");
      let node3_num = document.createElement("span");

      node1_num.innerHTML = big_list[1][i].goals;
      node2_num.innerHTML = big_list[1][i].app;
      node3_num.innerHTML = big_list[1][i].tac;

      node1.appendChild(node1_num);
      node2.appendChild(node2_num);
      node3.appendChild(node3_num);

      // node1_num_l.innerHTML = big_list[1][i].goals;
      // node2_num_l.innerHTML = big_list[1][i].app;
      // node3_num_l.innerHTML = big_list[1][i].tac;

      document.getElementById(ev.target.id).appendChild(node1);
      document.getElementById(ev.target.id).appendChild(node2);
      document.getElementById(ev.target.id).appendChild(node3);

 
      if (ev.target.id == "small_left") {
       left_goals = node1_num;
       left_app = node2_num;
       left_tac = node3_num;
      }
      else {
        right_goals = node1_num;
        right_app = node2_num;
        right_tac = node3_num;
      }

     
    }
  }

  if(l >= 1 && r >= 1) {
    for(let i = 0; i < 12; i++) {
      if(big_list[0][i] == id_left)
        val_left = big_list[1][i];
      if(big_list[0][i] == id_right)
        val_right = big_list[1][i];
    }

    if(val_left.goals > val_right.goals) {
      left_goals.style.color = "green";
      right_goals.style.color = "red";
    }
    else if(val_left.goals == val_right.goals) {
      left_goals.style.color = "yellow";
      right_goals.style.color = "yellow";
    }
    else {
      left_goals.style.color = "red";
      right_goals.style.color = "green";
    }

    if(val_left.app > val_right.app) {
      left_app.style.color = "green";
      right_app.style.color = "red";
    }
    else if(val_left.app == val_right.app) {
      left_app.style.color = "yellow";
      right_app.style.color = "yellow";
    }
    else {
      left_app.style.color = "red";
      right_app.style.color = "green";
    }

    if(val_left.tac > val_right.tac) {
      left_tac.style.color = "green";
      right_tac.style.color = "red";
    }
    else if(val_left.tac == val_right.tac) {
      left_tac.style.color = "yellow";
      right_tac.style.color = "yellow";
    }
    else {
      left_tac.style.color = "red";
      right_tac.style.color = "green";
    }
  }
}

function delbtn(e) {
  
  let target_class = "." + e.target.className;
  let target_query = document.querySelector(target_class);
  let parent_id = target_query.parentNode.id;
  document.getElementById(parent_id).innerHTML = " ";


  let x = document.createElement("div"); // div a sarqvum
  document.getElementById(parent_id).appendChild(x); //jnjvac x i tex@ taza x a dnum



  if(parent_id == "small_left") {
    l = 0;
    document.getElementById(id_left).setAttribute('draggable', true);

    
    document.getElementById(id_left).setAttribute("class", "x"); // bac toxeluc heto apahovuma kanach guyn@

    
    x.setAttribute("class", "cls1"); // x i aj koxmum linelu pahna

    right_goals.style.color = "black"
    right_app.style.color = "black"
    right_tac.style.color = "black"


    
  }
  if(parent_id == "small_right") {
    r = 0;
    // document.getElementById(id_right).ondragstart = function() { return true; };
    document.getElementById(id_right).setAttribute('draggable', true);

    document.getElementById(id_right).setAttribute("class", "x");
    x.setAttribute("class", "cls2");

    
    left_goals.style.color = "black"
    left_app.style.color = "black"
    left_tac.style.color = "black"
    
   
  }




  x.innerHTML = "X"; // grum a x
  x.onclick = function() { delbtn(event); }; // jnjac onclick i tex@ dnuma nuynic

  if (l == 0 && r == 0) {
    for (let i = 0; i < 8; i++) {
     
      document.getElementById(players[i]).removeAttribute("style");
      document.getElementById(players[i]).setAttribute('draggable', true);

    }
    for (let i = 0; i < 4; i++) {
      
      document.getElementById(teams[i]).removeAttribute("style");
      document.getElementById(teams[i]).setAttribute('draggable', true);

    }
  }
}

