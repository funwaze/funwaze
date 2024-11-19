
//location.reload();
let myZIP;
const zip1 = document.getElementById("zip");
const sbutton = document.getElementById("sbutton");
const out1 = document.getElementById("demo2");

let found = false;
  let foundLocation;

	
let targetZipcode = 29622;

document.getElementById("mainr").style.visibility = "Hidden";
document.getElementById("mainr").style.display = "none";

document.getElementById("filterb").style.visibility = "Hidden";



function getZip(founda, foundb, foundc, foundd) {
  targetZipcode = zip1.value;
  var zzz = parseInt(targetZipcode) * parseInt(4);
  out1.innerHTML = (zzz);

  let found = false;
  let foundLocation;
  founda = false;
  foundb = false;
  foundc = false;
  foundd = false;
  let myZIP = targetZipcode;
  
	 
		 

  for (let i = 0; i < locationa.length; i++) {
    if (locationa[i][0] == targetZipcode) {
      foundLocation = locationa[i][3];
      found = true;
	  founda = true;
      break; // Exit loop once a match is found
    }
  }
  if (founda == false) {
	  for (let i = 0; i < locationb.length; i++) {
    if (locationb[i][0] == targetZipcode) {
      foundLocation = locationb[i][3];
      found = true;
	  foundb = true;
      break; // Exit loop once a match is found
    }
  }
  }
  
  if (founda == false && foundb ===false) {
	  for (let i = 0; i < locationc.length; i++) {
    if (locationc[i][0] == targetZipcode) {
      foundLocation = locationc[i][3];
      found = true;
	  foundc = true;
      break; // Exit loop once a match is found
    }
  }
  }
  if (founda == false && foundb === false && foundc === false) {
	  for (let i = 0; i < locationd.length; i++) {
    if (locationd[i][0] == targetZipcode) {
      foundLocation = locationd[i][3];
      found = true;
	  foundd = true;
      break; // Exit loop once a match is found
    }
  }
  }
  
  document.getElementById("but1").style.visibility = "hidden";
  document.getElementById("but1").style.display = "none";
  document.getElementById("but2").style.visibility = "hidden";
  document.getElementById("but2").style.display = "none";
  document.getElementById("but3").style.visibility = "hidden";
  document.getElementById("but3").style.display = "none";
  document.getElementById("but4").style.visibility = "hidden";
  document.getElementById("but4").style.display = "none";
  document.getElementById("but5").style.visibility = "hidden";
  document.getElementById("but5").style.display = "none";
  document.getElementById("but6").style.visibility = "hidden";
  document.getElementById("but6").style.display = "none";
  document.getElementById("but7").style.visibility = "hidden";
  document.getElementById("but7").style.display = "none";
  document.getElementById("but8").style.visibility = "hidden";
  document.getElementById("but8").style.display = "none";
  document.getElementById("but9").style.visibility = "hidden";
  document.getElementById("but9").style.display = "none";
  document.getElementById("but10").style.visibility = "hidden";
  document.getElementById("but10").style.display = "none";
  document.getElementById("but11").style.visibility = "hidden";
  document.getElementById("but11").style.display = "none";
  document.getElementById("but12").style.visibility = "hidden";
  document.getElementById("but12").style.display = "none";
  document.getElementById("but13").style.visibility = "hidden";
  document.getElementById("but13").style.display = "none";
  document.getElementById("but14").style.visibility = "hidden";
  document.getElementById("but14").style.display = "none";
  document.getElementById("but15").style.visibility = "hidden";
  document.getElementById("but15").style.display = "none";
  document.getElementById("but16").style.visibility = "hidden";
  document.getElementById("but16").style.display = "none";
  document.getElementById("but17").style.visibility = "hidden";
  document.getElementById("but17").style.display = "none";
  document.getElementById("but18").style.visibility = "hidden";
  document.getElementById("but18").style.display = "none";
  document.getElementById("but19").style.visibility = "hidden";
  document.getElementById("but19").style.display = "none";
  document.getElementById("but20").style.visibility = "hidden";
  document.getElementById("but20").style.display = "none";
  document.getElementById("but21").style.visibility = "hidden";
  document.getElementById("but21").style.display = "none";
  document.getElementById("but22").style.visibility = "hidden";
  document.getElementById("but22").style.display = "none";
  document.getElementById("but23").style.visibility = "hidden";
  document.getElementById("but23").style.display = "none";
  document.getElementById("but24").style.visibility = "hidden";
  document.getElementById("but24").style.display = "none";
  document.getElementById("but25").style.visibility = "hidden";
 document.getElementById("but25").style.display = "none";

  if (found) {
    console.log("Found location:", foundLocation);
  } else {
    console.log("Zipcode", targetZipcode, "not found in location1 array.");
  }
if (founda == true) {
findAndCalculateQuadranta(locationa, myZIP);
  let x = 0;

  for (let j = 0; j < 25; j++) {
  for (let i = 0; i < active1.length; i++) {

	   
   if (active1[i][6] == locationa[j][0]) {
	   x++;
	 
	   if (x == 1) {
		  document.getElementById("but1").innerHTML = active1[i][1]; 
		  	document.getElementById("state1").innerHTML = active1[i][0];
		   document.getElementById("type1").innerHTML = active1[i][2];
		   document.getElementById("act1").innerHTML = active1[i][3];
		  document.getElementById("street1").innerHTML = active1[i][4];
		  document.getElementById("city1").innerHTML = active1[i][5];
		  document.getElementById("zip1").innerHTML = active1[i][6];
		  document.getElementById("description1").innerHTML = active1[i][7];
		  document.getElementById("free1").innerHTML = active1[i][8];
		  document.getElementById("pet1").innerHTML = active1[i][9];
		  document.getElementById("kids1").innerHTML = active1[i][10];
		 document.getElementById("inorout1").innerHTML = active1[i][11];
		  document.getElementById("hours1").innerHTML = active1[i][12];
		  document.getElementById("food1").innerHTML = active1[i][14];
		  document.getElementById("keyword1").innerHTML = active1[i][15];
	
		  document.getElementById("but1").style.visibility = "visible";
		  document.getElementById("but1").style.display = "block";
		 
		  
		  activity2.push([active1[i]]);
		  
	   }
	   if (x == 2) {
		  document.getElementById("but2").innerHTML = active1[i][1]; 
		  	document.getElementById("state2").innerHTML = active1[i][0];
		   document.getElementById("type2").innerHTML = active1[i][2];
		   document.getElementById("act2").innerHTML = active1[i][3];
		  document.getElementById("street2").innerHTML = active1[i][4];
		  document.getElementById("city2").innerHTML = active1[i][5];
		  document.getElementById("zip2").innerHTML = active1[i][6];
		  document.getElementById("description2").innerHTML = active1[i][7];
		  document.getElementById("free2").innerHTML = active1[i][8];
		  document.getElementById("pet2").innerHTML = active1[i][9];
		  document.getElementById("kids2").innerHTML = active1[i][10];
		 document.getElementById("inorout2").innerHTML = active1[i][11];
		  document.getElementById("hours2").innerHTML = active1[i][12];
		  document.getElementById("food2").innerHTML = active1[i][14];
		  document.getElementById("keyword2").innerHTML = active1[i][15];
		 
		   document.getElementById("but2").style.visibility = "visible";
		   document.getElementById("but2").style.display = "block";
		    activity2.push([active1[i]]);
			
	   }
	   if (x == 3) {
		  document.getElementById("but3").innerHTML = active1[i][1]; 
		   	document.getElementById("state3").innerHTML = active1[i][0];
		   document.getElementById("type3").innerHTML = active1[i][2];
		   document.getElementById("act3").innerHTML = active1[i][3];
		  document.getElementById("street3").innerHTML = active1[i][4];
		  document.getElementById("city3").innerHTML = active1[i][5];
		  document.getElementById("zip3").innerHTML = active1[i][6];
		  document.getElementById("description3").innerHTML = active1[i][7];
		  document.getElementById("free3").innerHTML = active1[i][8];
		  document.getElementById("pet3").innerHTML = active1[i][9];
		  document.getElementById("kids3").innerHTML = active1[i][10];
		 document.getElementById("inorout3").innerHTML = active1[i][11];
		  document.getElementById("hours3").innerHTML = active1[i][12];
		  document.getElementById("food3").innerHTML = active1[i][14];
		  document.getElementById("keyword3").innerHTML = active1[i][15];
		   document.getElementById("but3").style.visibility = "visible";
		   document.getElementById("but3").style.display = "block";
		     activity2.push([active1[i]]);
	   }
	    if (x == 4) {
		  document.getElementById("but4").innerHTML = active1[i][1]; 
		   	document.getElementById("state4").innerHTML = active1[i][0];
		   document.getElementById("type4").innerHTML = active1[i][2];
		   document.getElementById("act4").innerHTML = active1[i][3];
		  document.getElementById("street4").innerHTML = active1[i][4];
		  document.getElementById("city4").innerHTML = active1[i][5];
		  document.getElementById("zip4").innerHTML = active1[i][6];
		  document.getElementById("description4").innerHTML = active1[i][7];
		  document.getElementById("free4").innerHTML = active1[i][8];
		  document.getElementById("pet4").innerHTML = active1[i][9];
		  document.getElementById("kids4").innerHTML = active1[i][10];
		 document.getElementById("inorout4").innerHTML = active1[i][11];
		  document.getElementById("hours4").innerHTML = active1[i][12];
		  document.getElementById("food4").innerHTML = active1[i][14];
		  document.getElementById("keyword4").innerHTML = active1[i][15];
		   document.getElementById("but4").style.visibility = "visible";
		   document.getElementById("but4").style.display = "block";
		     activity2.push([active1[i]]);
	   }
	   if (x == 5) {
		  document.getElementById("but5").innerHTML = active1[i][1]; 
		   	document.getElementById("state5").innerHTML = active1[i][0];
		   document.getElementById("type5").innerHTML = active1[i][2];
		   document.getElementById("act5").innerHTML = active1[i][3];
		  document.getElementById("street5").innerHTML = active1[i][4];
		  document.getElementById("city5").innerHTML = active1[i][5];
		  document.getElementById("zip5").innerHTML = active1[i][6];
		  document.getElementById("description5").innerHTML = active1[i][7];
		  document.getElementById("free5").innerHTML = active1[i][8];
		  document.getElementById("pet5").innerHTML = active1[i][9];
		  document.getElementById("kids5").innerHTML = active1[i][10];
		 document.getElementById("inorout5").innerHTML = active1[i][11];
		  document.getElementById("hours5").innerHTML = active1[i][12];
		  document.getElementById("food5").innerHTML = active1[i][14];
		  document.getElementById("keyword5").innerHTML = active1[i][15];
		   document.getElementById("but5").style.visibility = "visible";
		   document.getElementById("but5").style.display = "block";
		     activity2.push([active1[i]]);
	   }
	   if (x == 6) {
		  document.getElementById("but6").innerHTML = active1[i][1]; 
		   	document.getElementById("state6").innerHTML = active1[i][0];
		   document.getElementById("type6").innerHTML = active1[i][2];
		   document.getElementById("act6").innerHTML = active1[i][3];
		  document.getElementById("street6").innerHTML = active1[i][4];
		  document.getElementById("city6").innerHTML = active1[i][5];
		  document.getElementById("zip6").innerHTML = active1[i][6];
		  document.getElementById("description6").innerHTML = active1[i][7];
		  document.getElementById("free6").innerHTML = active1[i][8];
		  document.getElementById("pet6").innerHTML = active1[i][9];
		  document.getElementById("kids6").innerHTML = active1[i][10];
		 document.getElementById("inorout6").innerHTML = active1[i][11];
		  document.getElementById("hours6").innerHTML = active1[i][12];
		  document.getElementById("food6").innerHTML = active1[i][14];
		  document.getElementById("keyword6").innerHTML = active1[i][15];
		   document.getElementById("but6").style.visibility = "visible";
		   document.getElementById("but6").style.display = "block";
		     activity2.push([active1[i]]);
	   }
	   if (x == 7) {
		  document.getElementById("but7").innerHTML = active1[i][1]; 
		   	document.getElementById("state7").innerHTML = active1[i][0];
		   document.getElementById("type7").innerHTML = active1[i][2];
		   document.getElementById("act7").innerHTML = active1[i][3];
		  document.getElementById("street7").innerHTML = active1[i][4];
		  document.getElementById("city7").innerHTML = active1[i][5];
		  document.getElementById("zip7").innerHTML = active1[i][6];
		  document.getElementById("description7").innerHTML = active1[i][7];
		  document.getElementById("free7").innerHTML = active1[i][8];
		  document.getElementById("pet7").innerHTML = active1[i][9];
		  document.getElementById("kids7").innerHTML = active1[i][10];
		 document.getElementById("inorout7").innerHTML = active1[i][11];
		  document.getElementById("hours7").innerHTML = active1[i][12];
		  document.getElementById("food7").innerHTML = active1[i][14];
		  document.getElementById("keyword7").innerHTML = active1[i][15];
		   document.getElementById("but7").style.visibility = "visible";
		   document.getElementById("but7").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   if (x == 8) {
		  document.getElementById("but8").innerHTML = active1[i][1]; 
		   	document.getElementById("state8").innerHTML = active1[i][0];
		   document.getElementById("type8").innerHTML = active1[i][2];
		   document.getElementById("act8").innerHTML = active1[i][3];
		  document.getElementById("street8").innerHTML = active1[i][4];
		  document.getElementById("city8").innerHTML = active1[i][5];
		  document.getElementById("zip8").innerHTML = active1[i][6];
		  document.getElementById("description8").innerHTML = active1[i][7];
		  document.getElementById("free8").innerHTML = active1[i][8];
		  document.getElementById("pet8").innerHTML = active1[i][9];
		  document.getElementById("kids8").innerHTML = active1[i][10];
		 document.getElementById("inorout8").innerHTML = active1[i][11];
		  document.getElementById("hours8").innerHTML = active1[i][12];
		  document.getElementById("food8").innerHTML = active1[i][14];
		  document.getElementById("keyword8").innerHTML = active1[i][15];
		   document.getElementById("but8").style.visibility = "visible";
		   document.getElementById("but8").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   if (x == 9) {
		  document.getElementById("but9").innerHTML = active1[i][1]; 
		   	document.getElementById("state9").innerHTML = active1[i][0];
		   document.getElementById("type9").innerHTML = active1[i][2];
		   document.getElementById("act9").innerHTML = active1[i][3];
		  document.getElementById("street9").innerHTML = active1[i][4];
		  document.getElementById("city9").innerHTML = active1[i][5];
		  document.getElementById("zip9").innerHTML = active1[i][6];
		  document.getElementById("description9").innerHTML = active1[i][7];
		  document.getElementById("free9").innerHTML = active1[i][8];
		  document.getElementById("pet9").innerHTML = active1[i][9];
		  document.getElementById("kids9").innerHTML = active1[i][10];
		 document.getElementById("inorout9").innerHTML = active1[i][11];
		  document.getElementById("hours9").innerHTML = active1[i][12];
		  document.getElementById("food9").innerHTML = active1[i][14];
		  document.getElementById("keyword9").innerHTML = active1[i][15];
		   document.getElementById("but9").style.visibility = "visible";
		   document.getElementById("but9").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	    if (x == 10) {
		  document.getElementById("but10").innerHTML = active1[i][1]; 
		   	document.getElementById("state10").innerHTML = active1[i][0];
		   document.getElementById("type10").innerHTML = active1[i][2];
		   document.getElementById("act10").innerHTML = active1[i][3];
		  document.getElementById("street10").innerHTML = active1[i][4];
		  document.getElementById("city10").innerHTML = active1[i][5];
		  document.getElementById("zip10").innerHTML = active1[i][6];
		  document.getElementById("description10").innerHTML = active1[i][7];
		  document.getElementById("free10").innerHTML = active1[i][8];
		  document.getElementById("pet10").innerHTML = active1[i][9];
		  document.getElementById("kids10").innerHTML = active1[i][10];
		 document.getElementById("inorout10").innerHTML = active1[i][11];
		  document.getElementById("hours10").innerHTML = active1[i][12];
		  document.getElementById("food10").innerHTML = active1[i][14];
		  document.getElementById("keyword10").innerHTML = active1[i][15];
		   document.getElementById("but10").style.visibility = "visible";
		   document.getElementById("but10").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   if (x == 11) {
		  document.getElementById("but11").innerHTML = active1[i][1]; 
		   	document.getElementById("state11").innerHTML = active1[i][0];
		   document.getElementById("type11").innerHTML = active1[i][2];
		   document.getElementById("act11").innerHTML = active1[i][3];
		  document.getElementById("street11").innerHTML = active1[i][4];
		  document.getElementById("city11").innerHTML = active1[i][5];
		  document.getElementById("zip11").innerHTML = active1[i][6];
		  document.getElementById("description11").innerHTML = active1[i][7];
		  document.getElementById("free11").innerHTML = active1[i][8];
		  document.getElementById("pet11").innerHTML = active1[i][9];
		  document.getElementById("kids11").innerHTML = active1[i][10];
		 document.getElementById("inorout11").innerHTML = active1[i][11];
		  document.getElementById("hours11").innerHTML = active1[i][12];
		  document.getElementById("food11").innerHTML = active1[i][14];
		  document.getElementById("keyword11").innerHTML = active1[i][15];
		   document.getElementById("but11").style.visibility = "visible";
		   document.getElementById("but11").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   if (x == 12) {
		  document.getElementById("but12").innerHTML = active1[i][1]; 
		   	document.getElementById("state12").innerHTML = active1[i][0];
		   document.getElementById("type12").innerHTML = active1[i][2];
		   document.getElementById("act12").innerHTML = active1[i][3];
		  document.getElementById("street12").innerHTML = active1[i][4];
		  document.getElementById("city12").innerHTML = active1[i][5];
		  document.getElementById("zip12").innerHTML = active1[i][6];
		  document.getElementById("description12").innerHTML = active1[i][7];
		  document.getElementById("free12").innerHTML = active1[i][8];
		  document.getElementById("pet12").innerHTML = active1[i][9];
		  document.getElementById("kids12").innerHTML = active1[i][10];
		 document.getElementById("inorout12").innerHTML = active1[i][11];
		  document.getElementById("hours12").innerHTML = active1[i][12];
		  document.getElementById("food12").innerHTML = active1[i][14];
		  document.getElementById("keyword12").innerHTML = active1[i][15];
		   document.getElementById("but12").style.visibility = "visible";
		   document.getElementById("but12").style.display = "block";
		    activity2.push([active1[i]]);
	   } //here
     	   if (x == 13) {
		  document.getElementById("but13").innerHTML = active1[i][1]; 
		   	document.getElementById("state13").innerHTML = active1[i][0];
		   document.getElementById("type13").innerHTML = active1[i][2];
		   document.getElementById("act13").innerHTML = active1[i][3];
		  document.getElementById("street13").innerHTML = active1[i][4];
		  document.getElementById("city13").innerHTML = active1[i][5];
		  document.getElementById("zip13").innerHTML = active1[i][6];
		  document.getElementById("description13").innerHTML = active1[i][7];
		  document.getElementById("free13").innerHTML = active1[i][8];
		  document.getElementById("pet13").innerHTML = active1[i][9];
		  document.getElementById("kids13").innerHTML = active1[i][10];
		 document.getElementById("inorout13").innerHTML = active1[i][11];
		  document.getElementById("hours13").innerHTML = active1[i][12];
		  document.getElementById("food13").innerHTML = active1[i][14];
		  document.getElementById("keyword13").innerHTML = active1[i][15];
		   document.getElementById("but13").style.visibility = "visible";
		   document.getElementById("but13").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 14) {
		  document.getElementById("but14").innerHTML = active1[i][1]; 
		   	document.getElementById("state14").innerHTML = active1[i][0];
		   document.getElementById("type14").innerHTML = active1[i][2];
		   document.getElementById("act14").innerHTML = active1[i][3];
		  document.getElementById("street14").innerHTML = active1[i][4];
		  document.getElementById("city14").innerHTML = active1[i][5];
		  document.getElementById("zip14").innerHTML = active1[i][6];
		  document.getElementById("description14").innerHTML = active1[i][7];
		  document.getElementById("free14").innerHTML = active1[i][8];
		  document.getElementById("pet14").innerHTML = active1[i][9];
		  document.getElementById("kids14").innerHTML = active1[i][10];
		 document.getElementById("inorout14").innerHTML = active1[i][11];
		  document.getElementById("hours14").innerHTML = active1[i][12];
		  document.getElementById("food14").innerHTML = active1[i][14];
		  document.getElementById("keyword14").innerHTML = active1[i][15];
		   document.getElementById("but14").style.visibility = "visible";
		   document.getElementById("but14").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 15) {
		  document.getElementById("but15").innerHTML = active1[i][1]; 
		   	document.getElementById("state15").innerHTML = active1[i][0];
		   document.getElementById("type15").innerHTML = active1[i][2];
		   document.getElementById("act15").innerHTML = active1[i][3];
		  document.getElementById("street15").innerHTML = active1[i][4];
		  document.getElementById("city15").innerHTML = active1[i][5];
		  document.getElementById("zip15").innerHTML = active1[i][6];
		  document.getElementById("description15").innerHTML = active1[i][7];
		  document.getElementById("free15").innerHTML = active1[i][8];
		  document.getElementById("pet15").innerHTML = active1[i][9];
		  document.getElementById("kids15").innerHTML = active1[i][10];
		 document.getElementById("inorout15").innerHTML = active1[i][11];
		  document.getElementById("hours15").innerHTML = active1[i][12];
		  document.getElementById("food15").innerHTML = active1[i][14];
		  document.getElementById("keyword15").innerHTML = active1[i][15];
		   document.getElementById("but15").style.visibility = "visible";
		   document.getElementById("but15").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 16) {
		  document.getElementById("but16").innerHTML = active1[i][1]; 
		   	document.getElementById("state16").innerHTML = active1[i][0];
		   document.getElementById("type16").innerHTML = active1[i][2];
		   document.getElementById("act16").innerHTML = active1[i][3];
		  document.getElementById("street16").innerHTML = active1[i][4];
		  document.getElementById("city16").innerHTML = active1[i][5];
		  document.getElementById("zip16").innerHTML = active1[i][6];
		  document.getElementById("description16").innerHTML = active1[i][7];
		  document.getElementById("free16").innerHTML = active1[i][8];
		  document.getElementById("pet16").innerHTML = active1[i][9];
		  document.getElementById("kids16").innerHTML = active1[i][10];
		 document.getElementById("inorout16").innerHTML = active1[i][11];
		  document.getElementById("hours16").innerHTML = active1[i][12];
		  document.getElementById("food16").innerHTML = active1[i][14];
		  document.getElementById("keyword16").innerHTML = active1[i][15];
		   document.getElementById("but16").style.visibility = "visible";
		   document.getElementById("but16").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 17) {
		  document.getElementById("but17").innerHTML = active1[i][1]; 
		   	document.getElementById("state17").innerHTML = active1[i][0];
		   document.getElementById("type17").innerHTML = active1[i][2];
		   document.getElementById("act17").innerHTML = active1[i][3];
		  document.getElementById("street17").innerHTML = active1[i][4];
		  document.getElementById("city17").innerHTML = active1[i][5];
		  document.getElementById("zip17").innerHTML = active1[i][6];
		  document.getElementById("description17").innerHTML = active1[i][7];
		  document.getElementById("free17").innerHTML = active1[i][8];
		  document.getElementById("pet17").innerHTML = active1[i][9];
		  document.getElementById("kids17").innerHTML = active1[i][10];
		 document.getElementById("inorout17").innerHTML = active1[i][11];
		  document.getElementById("hours17").innerHTML = active1[i][12];
		  document.getElementById("food17").innerHTML = active1[i][14];
		  document.getElementById("keyword17").innerHTML = active1[i][15];
		   document.getElementById("but17").style.visibility = "visible";
		   document.getElementById("but17").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 18) {
		  document.getElementById("but18").innerHTML = active1[i][1]; 
		   	document.getElementById("state18").innerHTML = active1[i][0];
		   document.getElementById("type18").innerHTML = active1[i][2];
		   document.getElementById("act18").innerHTML = active1[i][3];
		  document.getElementById("street18").innerHTML = active1[i][4];
		  document.getElementById("city18").innerHTML = active1[i][5];
		  document.getElementById("zip18").innerHTML = active1[i][6];
		  document.getElementById("description18").innerHTML = active1[i][7];
		  document.getElementById("free18").innerHTML = active1[i][8];
		  document.getElementById("pet18").innerHTML = active1[i][9];
		  document.getElementById("kids18").innerHTML = active1[i][10];
		 document.getElementById("inorout18").innerHTML = active1[i][11];
		  document.getElementById("hours18").innerHTML = active1[i][12];
		  document.getElementById("food18").innerHTML = active1[i][14];
		  document.getElementById("keyword18").innerHTML = active1[i][15];
		   document.getElementById("but18").style.visibility = "visible";
		   document.getElementById("but18").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 19) {
		  document.getElementById("but19").innerHTML = active1[i][1]; 
		   	document.getElementById("state19").innerHTML = active1[i][0];
		   document.getElementById("type19").innerHTML = active1[i][2];
		   document.getElementById("act19").innerHTML = active1[i][3];
		  document.getElementById("street19").innerHTML = active1[i][4];
		  document.getElementById("city19").innerHTML = active1[i][5];
		  document.getElementById("zip19").innerHTML = active1[i][6];
		  document.getElementById("description19").innerHTML = active1[i][7];
		  document.getElementById("free19").innerHTML = active1[i][8];
		  document.getElementById("pet19").innerHTML = active1[i][9];
		  document.getElementById("kids19").innerHTML = active1[i][10];
		 document.getElementById("inorout19").innerHTML = active1[i][11];
		  document.getElementById("hours19").innerHTML = active1[i][12];
		  document.getElementById("food19").innerHTML = active1[i][14];
		  document.getElementById("keyword19").innerHTML = active1[i][15];
		   document.getElementById("but19").style.visibility = "visible";
		   document.getElementById("but19").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 20) {
		  document.getElementById("but20").innerHTML = active1[i][1]; 
		   	document.getElementById("state20").innerHTML = active1[i][0];
		   document.getElementById("type20").innerHTML = active1[i][2];
		   document.getElementById("act20").innerHTML = active1[i][3];
		  document.getElementById("street20").innerHTML = active1[i][4];
		  document.getElementById("city20").innerHTML = active1[i][5];
		  document.getElementById("zip20").innerHTML = active1[i][6];
		  document.getElementById("description20").innerHTML = active1[i][7];
		  document.getElementById("free20").innerHTML = active1[i][8];
		  document.getElementById("pet20").innerHTML = active1[i][9];
		  document.getElementById("kids20").innerHTML = active1[i][10];
		 document.getElementById("inorout20").innerHTML = active1[i][11];
		  document.getElementById("hours20").innerHTML = active1[i][12];
		  document.getElementById("food20").innerHTML = active1[i][14];
		  document.getElementById("keyword20").innerHTML = active1[i][15];
		   document.getElementById("but20").style.visibility = "visible";
		   document.getElementById("but20").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 21) {
		  document.getElementById("but21").innerHTML = active1[i][1]; 
		   	document.getElementById("state21").innerHTML = active1[i][0];
		   document.getElementById("type21").innerHTML = active1[i][2];
		   document.getElementById("act21").innerHTML = active1[i][3];
		  document.getElementById("street21").innerHTML = active1[i][4];
		  document.getElementById("city21").innerHTML = active1[i][5];
		  document.getElementById("zip21").innerHTML = active1[i][6];
		  document.getElementById("description21").innerHTML = active1[i][7];
		  document.getElementById("free21").innerHTML = active1[i][8];
		  document.getElementById("pet21").innerHTML = active1[i][9];
		  document.getElementById("kids21").innerHTML = active1[i][10];
		 document.getElementById("inorout21").innerHTML = active1[i][11];
		  document.getElementById("hours21").innerHTML = active1[i][12];
		  document.getElementById("food21").innerHTML = active1[i][14];
		  document.getElementById("keyword21").innerHTML = active1[i][15];
		   document.getElementById("but21").style.visibility = "visible";
		   document.getElementById("but21").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 22) {
		  document.getElementById("but22").innerHTML = active1[i][1]; 
		   	document.getElementById("state22").innerHTML = active1[i][0];
		   document.getElementById("type22").innerHTML = active1[i][2];
		   document.getElementById("act22").innerHTML = active1[i][3];
		  document.getElementById("street22").innerHTML = active1[i][4];
		  document.getElementById("city22").innerHTML = active1[i][5];
		  document.getElementById("zip22").innerHTML = active1[i][6];
		  document.getElementById("description22").innerHTML = active1[i][7];
		  document.getElementById("free22").innerHTML = active1[i][8];
		  document.getElementById("pet22").innerHTML = active1[i][9];
		  document.getElementById("kids22").innerHTML = active1[i][10];
		 document.getElementById("inorout22").innerHTML = active1[i][11];
		  document.getElementById("hours22").innerHTML = active1[i][12];
		  document.getElementById("food22").innerHTML = active1[i][14];
		  document.getElementById("keyword22").innerHTML = active1[i][15];
		   document.getElementById("but22").style.visibility = "visible";
		   document.getElementById("but22").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 23) {
		  document.getElementById("but23").innerHTML = active1[i][1]; 
		   	document.getElementById("state23").innerHTML = active1[i][0];
		   document.getElementById("type23").innerHTML = active1[i][2];
		   document.getElementById("act23").innerHTML = active1[i][3];
		  document.getElementById("street23").innerHTML = active1[i][4];
		  document.getElementById("city23").innerHTML = active1[i][5];
		  document.getElementById("zip23").innerHTML = active1[i][6];
		  document.getElementById("description23").innerHTML = active1[i][7];
		  document.getElementById("free23").innerHTML = active1[i][8];
		  document.getElementById("pet23").innerHTML = active1[i][9];
		  document.getElementById("kids23").innerHTML = active1[i][10];
		 document.getElementById("inorout23").innerHTML = active1[i][11];
		  document.getElementById("hours23").innerHTML = active1[i][12];
		  document.getElementById("food23").innerHTML = active1[i][14];
		  document.getElementById("keyword23").innerHTML = active1[i][15];
		   document.getElementById("but23").style.visibility = "visible";
		   document.getElementById("but23").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 24) {
		  document.getElementById("but24").innerHTML = active1[i][1]; 
		   	document.getElementById("state24").innerHTML = active1[i][0];
		   document.getElementById("type24").innerHTML = active1[i][2];
		   document.getElementById("act24").innerHTML = active1[i][3];
		  document.getElementById("street24").innerHTML = active1[i][4];
		  document.getElementById("city24").innerHTML = active1[i][5];
		  document.getElementById("zip24").innerHTML = active1[i][6];
		  document.getElementById("description24").innerHTML = active1[i][7];
		  document.getElementById("free24").innerHTML = active1[i][8];
		  document.getElementById("pet24").innerHTML = active1[i][9];
		  document.getElementById("kids24").innerHTML = active1[i][10];
		 document.getElementById("inorout24").innerHTML = active1[i][11];
		  document.getElementById("hours24").innerHTML = active1[i][12];
		  document.getElementById("food24").innerHTML = active1[i][14];
		  document.getElementById("keyword24").innerHTML = active1[i][15];
		   document.getElementById("but24").style.visibility = "visible";
		   document.getElementById("but24").style.display = "block";
		    activity2.push([active1[i]]);
	   }
	   	   if (x == 25) {
		  document.getElementById("but25").innerHTML = active1[i][1]; 
		   	document.getElementById("state25").innerHTML = active1[i][0];
		   document.getElementById("type25").innerHTML = active1[i][2];
		   document.getElementById("act25").innerHTML = active1[i][3];
		  document.getElementById("street25").innerHTML = active1[i][4];
		  document.getElementById("city25").innerHTML = active1[i][5];
		  document.getElementById("zip25").innerHTML = active1[i][6];
		  document.getElementById("description25").innerHTML = active1[i][7];
		  document.getElementById("free25").innerHTML = active1[i][8];
		  document.getElementById("pet25").innerHTML = active1[i][9];
		  document.getElementById("kids25").innerHTML = active1[i][10];
		 document.getElementById("inorout25").innerHTML = active1[i][11];
		  document.getElementById("hours25").innerHTML = active1[i][12];
		  document.getElementById("food25").innerHTML = active1[i][14];
		  document.getElementById("keyword25").innerHTML = active1[i][15];
		   document.getElementById("but25").style.visibility = "visible";
		   document.getElementById("but25").style.display = "block";
		    activity2.push([active1[i]]);
	   }
		 
    }
  }
  }


 
  document.getElementById("mainr").style.visibility = "visible";
  document.getElementById("mainr").style.display = "block";
  document.getElementById("filterb").style.visibility = "visible";
  
    document.getElementById("results3").innerHTML = locationa[4];
	
	
}
if (foundb == true) {
findAndCalculateQuadrantb(locationb, myZIP);
  document.getElementById("but1").innerHTML =  locationb[1][3] + ', '+ locationb[1][5];
    document.getElementById("but2").innerHTML = locationb[2][3];
	document.getElementById("but3").innerHTML =  locationb[3][3];
    document.getElementById("but4").innerHTML = locationb[4][3];
	 document.getElementById("but5").innerHTML =  locationb[5][3];
    document.getElementById("but6").innerHTML = locationb[6][3];
	document.getElementById("but7").innerHTML =  locationb[7][3];
    document.getElementById("but8").innerHTML = locationb[8][3];
	document.getElementById("but9").innerHTML =  locationb[9][3];
    document.getElementById("but10").innerHTML = locationb[10][3];
	document.getElementById("but11").innerHTML =  locationb[11][3];
    document.getElementById("but12").innerHTML = locationb[12][3];
	 document.getElementById("but13").innerHTML =  locationb[13][3];
    document.getElementById("but14").innerHTML = locationb[14][3];
	document.getElementById("but15").innerHTML =  locationb[15][3];
    document.getElementById("but16").innerHTML = locationb[16][3];
  document.getElementById("results1").innerHTML = locationb[1];
  document.getElementById("results2").innerHTML = "Five Six Seven Eight";
  document.getElementById("results3").innerHTML = "Nine Ten Eleven Twelve";
  document.getElementById("mainr").style.visibility = "visible";
  document.getElementById("filterb").style.visibility = "visible";
  
    document.getElementById("results3").innerHTML = locationb[4];
}
if (foundc == true) {
findAndCalculateQuadrantc(locationc, myZIP);
  document.getElementById("but1").innerHTML =  locationc[1][3] + ', '+ locationc[1][5];
    document.getElementById("but2").innerHTML = locationc[2][3];
	document.getElementById("but3").innerHTML =  locationc[3][3];
    document.getElementById("but4").innerHTML = locationc[4][3];
	 document.getElementById("but5").innerHTML =  locationc[5][3];
    document.getElementById("but6").innerHTML = locationc[6][3];
	document.getElementById("but7").innerHTML =  locationc[7][3];
    document.getElementById("but8").innerHTML = locationc[8][3];
	document.getElementById("but9").innerHTML =  locationc[9][3];
    document.getElementById("but10").innerHTML = locationc[10][3];
	document.getElementById("but11").innerHTML =  locationc[11][3];
    document.getElementById("but12").innerHTML = locationc[12][3];
	 document.getElementById("but13").innerHTML =  locationc[13][3];
    document.getElementById("but14").innerHTML = locationc[14][3];
	document.getElementById("but15").innerHTML =  locationc[15][3];
    document.getElementById("but16").innerHTML = locationc[16][3];
  document.getElementById("results1").innerHTML = locationc[1];
  document.getElementById("results2").innerHTML = "Five Six Seven Eight";
  document.getElementById("results3").innerHTML = "Nine Ten Eleven Twelve";
  document.getElementById("mainr").style.visibility = "visible";
  document.getElementById("filterb").style.visibility = "visible";
  
    document.getElementById("results3").innerHTML = locationc[4];
}
if (foundd == true) {
findAndCalculateQuadrantd(locationd, myZIP);
  document.getElementById("but1").innerHTML =  locationd[1][3] + ', '+ locationd[1][5];
    document.getElementById("but2").innerHTML = locationd[2][3];
	document.getElementById("but3").innerHTML =  locationd[3][3];
    document.getElementById("but4").innerHTML = locationd[4][3];
	 document.getElementById("but5").innerHTML =  locationd[5][3];
    document.getElementById("but6").innerHTML = locationd[6][3];
	document.getElementById("but7").innerHTML =  locationd[7][3];
    document.getElementById("but8").innerHTML = locationd[8][3];
	document.getElementById("but9").innerHTML =  locationd[9][3];
    document.getElementById("but10").innerHTML = locationd[10][3];
	document.getElementById("but11").innerHTML =  locationd[11][3];
    document.getElementById("but12").innerHTML = locationd[12][3];
	 document.getElementById("but13").innerHTML =  locationd[13][3];
    document.getElementById("but14").innerHTML = locationd[14][3];
	document.getElementById("but15").innerHTML =  locationd[15][3];
    document.getElementById("but16").innerHTML = locationd[16][3];
  document.getElementById("results1").innerHTML = locationd[1];
  document.getElementById("results2").innerHTML = "Five Six Seven Eight";
  document.getElementById("results3").innerHTML = "Nine Ten Eleven Twelve";
  document.getElementById("mainr").style.visibility = "visible";
  document.getElementById("filterb").style.visibility = "visible";
  
    document.getElementById("results3").innerHTML = locationd[4];
}
//return founda, foundb, foundc, foundd;
}

//alert(filterKeyword);
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids1');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but1.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids2');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but2.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids3');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but3.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids4');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but4.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids5');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but5.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids6');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but6.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids7');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but7.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids8');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but8.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids9');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but9.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids10');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but10.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids11');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but11.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids12');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but12.style.display = "none";
	}

	
});filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids13');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but13.style.display = "none";
	}

	
});

filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids14');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but14.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids15');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but15.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids16');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but16.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids17');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but17.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids18');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but18.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids19');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but19.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids20');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but20.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids21');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but21.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids22');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but22.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids23');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but23.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids24');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but24.style.display = "none";
	}

	
});
filter1.addEventListener("click", function(){
	filtKids = document.getElementById('kids25');
	const filterKids = filtKids.textContent;
	if (filterKids == 'No'){
	but25.style.display = "none";
	}

	
});


filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet1');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but1.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet2');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but2.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet3');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but3.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet4');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but4.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet5');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but5.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet6');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but6.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet7');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but7.style.display = "none";
	}
	
});filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet8');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but8.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet9');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but9.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet10');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but10.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet11');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but11.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet12');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but12.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet13');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but13.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet14');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but14.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet15');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but15.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet16');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but16.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet17');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but17.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet18');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but18.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet19');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but19.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet20');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but20.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet21');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but21.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet22');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but22.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet23');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but23.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet24');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but24.style.display = "none";
	}
	
});
filter2.addEventListener("click", function(){
	filtPet = document.getElementById('pet25');
	const filterPet = filtPet.textContent;
	if (filterPet == 'No'){
	but25.style.display = "none";
	}
	
});



filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free1');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but1.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free2');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but2.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free3');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but3.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free4');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but4.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free5');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but5.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free6');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but6.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free7');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but7.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free8');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but8.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free9');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but9.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free10');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but10.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free11');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but11.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free12');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but12.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free13');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but13.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free14');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but14.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free15');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but15.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free16');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but16.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free17');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but17.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free18');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but18.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free19');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but19.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free20');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but20.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free21');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but21.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free22');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but22.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free23');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but23.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free24');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but24.style.display = "none";
	}


});
filter3.addEventListener("click", function(){
	filtFree = document.getElementById('free25');
	const filterFree = filtFree.textContent;
	if (filterFree == 'No'){
	but25.style.display = "none";
	}


});




filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout1'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but1.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout2'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but2.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout3'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but3.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout4'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but4.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout5'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but5.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout6'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but6.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout7'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but7.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout8'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but8.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout9'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but9.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout10'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but10.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout11'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but11.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout12'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but12.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout13'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but13.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout14'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but14.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout15'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but15.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout16'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but16.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout17'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but17.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout18'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but18.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout19'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but19.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout20'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but20.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout21'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but21.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout22'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but22.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout23'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but23.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout24'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but24.style.display = "none";
	}
		
});
filter4.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout25'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Indoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but25.style.display = "none";
	}
		
});




filter5.addEventListener("click", function(){
	
	filtInorout = document.getElementById('inorout1'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but1.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout2'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but2.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout3'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but3.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout4'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but4.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout5'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but5.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout6'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but6.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout7'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but7.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout8'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but8.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout9'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but9.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout10'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but10.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout11'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but11.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout12'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but12.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout13'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but13.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout14'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but14.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout15'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but15.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout16'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but16.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout17'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but17.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout18'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but18.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout19'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but19.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout20'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but20.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout21'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but21.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout22'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but22.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout23'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but23.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout24'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but24.style.display = "none";
	}
		
});
filter5.addEventListener("click", function(){
		filtInorout = document.getElementById('inorout25'); //???
	const filterInorout = filtInorout.textContent;
	if ((filterInorout !== 'Outdoors') & (filterInorout !== 'Outdoors/Indoors')) {
	but25.style.display = "none";
	}
		
});


sButton.addEventListener("click", getZip);
//const targetZipcode = "29622"; // Replace with your desired zipcode
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        //panel.style.display = "none";
      } else {
       // panel.style.display = "block";
      }
	  
    });
  }
  //const filterId = event.target.id;
//	 alert(filterId);
  
  


//gemini search starts here
function drillDown(){
	
	const buttonId = event.target.id; // Get the ID of the clicked button
	var disPlay = '';
	//var disPlay3 = '';
	if (buttonId == 'but1'){
	disPlay = document.getElementById('but1');
	disPlay2 = document.getElementById('results1');
	dispDescription = document.getElementById('description1');
	dispStreet = document.getElementById('street1');
	dispCity = document.getElementById('city1');
	dispState = document.getElementById('state1');
	dispZip = document.getElementById('zip1');
	dispFree = document.getElementById('free1');
	dispKids = document.getElementById('kids1');
	dispPet = document.getElementById('pet1');
	dispInorout = document.getElementById('inorout1');
	dispHours = document.getElementById('hours1');
	dispFood = document.getElementById('food1');
	filtKeyword = document.getElementById('keyword1');
	
	}
	if (buttonId == 'but2'){
	disPlay = document.getElementById('but2');
	disPlay2 = document.getElementById('results2');
	dispDescription = document.getElementById('description2');
	dispStreet = document.getElementById('street2');
	dispCity = document.getElementById('city2');
	dispState = document.getElementById('state2');
	dispZip = document.getElementById('zip2');
	dispFree = document.getElementById('free2');
	dispKids = document.getElementById('kids2');
	dispPet = document.getElementById('pet2');
	dispInorout = document.getElementById('inorout2');
	dispHours = document.getElementById('hours2');
	dispFood = document.getElementById('food2');
	filtKeyword = document.getElementById('keyword2');
	}
		if (buttonId == 'but3'){
	disPlay = document.getElementById('but3');
	disPlay2 = document.getElementById('results3');
	dispDescription = document.getElementById('description3');
	dispStreet = document.getElementById('street3');
	dispCity = document.getElementById('city3');
	dispState = document.getElementById('state3');
	dispZip = document.getElementById('zip3');
	dispFree = document.getElementById('free3');
	dispKids = document.getElementById('kids3');
	dispPet = document.getElementById('pet3');
	dispInorout = document.getElementById('inorout3');
	dispHours = document.getElementById('hours3');
	dispFood = document.getElementById('food3');
	filtKeyword = document.getElementById('keyword3');
	}
			if (buttonId == 'but4'){
	disPlay = document.getElementById('but4');
	disPlay2 = document.getElementById('results4');
	dispDescription = document.getElementById('description4');
	dispStreet = document.getElementById('street4');
	dispCity = document.getElementById('city4');
	dispState = document.getElementById('state4');
	dispZip = document.getElementById('zip4');
	dispFree = document.getElementById('free4');
	dispKids = document.getElementById('kids4');
	dispPet = document.getElementById('pet4');
	dispInorout = document.getElementById('inorout4');
	dispHours = document.getElementById('hours4');
	dispFood = document.getElementById('food4');
	filtKeyword = document.getElementById('keyword4');
	}
			if (buttonId == 'but5'){
	disPlay = document.getElementById('but5');
	disPlay2 = document.getElementById('results5');
	dispDescription = document.getElementById('description5');
	dispStreet = document.getElementById('street5');
	dispCity = document.getElementById('city5');
	dispState = document.getElementById('state5');
	dispZip = document.getElementById('zip5');
	dispFree = document.getElementById('free5');
	dispKids = document.getElementById('kids5');
	dispPet = document.getElementById('pet5');
	dispInorout = document.getElementById('inorout5');
	dispHours = document.getElementById('hours5');
	dispFood = document.getElementById('food5');
	filtKeyword = document.getElementById('keyword5');
	}
			if (buttonId == 'but6'){
	disPlay = document.getElementById('but6');
	disPlay2 = document.getElementById('results6');
	dispDescription = document.getElementById('description6');
	dispStreet = document.getElementById('street6');
	dispCity = document.getElementById('city6');
	dispState = document.getElementById('state6');
	dispZip = document.getElementById('zip6');
	dispFree = document.getElementById('free6');
	dispKids = document.getElementById('kids6');
	dispPet = document.getElementById('pet6');
	dispInorout = document.getElementById('inorout6');
	dispHours = document.getElementById('hours6');
	dispFood = document.getElementById('food6');
	filtKeyword = document.getElementById('keyword6');
	}
			if (buttonId == 'but7'){
	disPlay = document.getElementById('but7');
	disPlay2 = document.getElementById('results7');
	dispDescription = document.getElementById('description7');
	dispStreet = document.getElementById('street7');
	dispCity = document.getElementById('city7');
	dispState = document.getElementById('state7');
	dispZip = document.getElementById('zip7');
	dispFree = document.getElementById('free7');
	dispKids = document.getElementById('kids7');
	dispPet = document.getElementById('pet7');
	dispInorout = document.getElementById('inorout7');
	dispHours = document.getElementById('hours7');
	dispFood = document.getElementById('food7');
	filtKeyword = document.getElementById('keyword7');
	}
			if (buttonId == 'but8'){
	disPlay = document.getElementById('but8');
	disPlay2 = document.getElementById('results8');
	dispDescription = document.getElementById('description8');
	dispStreet = document.getElementById('street8');
	dispCity = document.getElementById('city8');
	dispState = document.getElementById('state8');
	dispZip = document.getElementById('zip8');
	dispFree = document.getElementById('free8');
	dispKids = document.getElementById('kids8');
	dispPet = document.getElementById('pet8');
	dispInorout = document.getElementById('inorout8');
	dispHours = document.getElementById('hours8');
	dispFood = document.getElementById('food8');
	filtKeyword = document.getElementById('keyword8');
	}
			if (buttonId == 'but9'){
	disPlay = document.getElementById('but9');
	disPlay2 = document.getElementById('results9');
	dispDescription = document.getElementById('description9');
	dispStreet = document.getElementById('street9');
	dispCity = document.getElementById('city9');
	dispState = document.getElementById('state9');
	dispZip = document.getElementById('zip9');
	dispFree = document.getElementById('free9');
	dispKids = document.getElementById('kids9');
	dispPet = document.getElementById('pet9');
	dispInorout = document.getElementById('inorout9');
	dispHours = document.getElementById('hours9');
	dispFood = document.getElementById('food9');
	filtKeyword = document.getElementById('keyword9');
	}
			if (buttonId == 'but10'){
	disPlay = document.getElementById('but10');
	disPlay2 = document.getElementById('results10');
	dispDescription = document.getElementById('description10');
	dispStreet = document.getElementById('street10');
	dispCity = document.getElementById('city10');
	dispState = document.getElementById('state10');
	dispZip = document.getElementById('zip10');
	dispFree = document.getElementById('free10');
	dispKids = document.getElementById('kids10');
	dispPet = document.getElementById('pet10');
	dispInorout = document.getElementById('inorout10');
	dispHours = document.getElementById('hours10');
	dispFood = document.getElementById('food10');
	filtKeyword = document.getElementById('keyword10');
	}
			if (buttonId == 'but11'){
	disPlay = document.getElementById('but11');
	disPlay2 = document.getElementById('results11');
	dispDescription = document.getElementById('description11');
	dispStreet = document.getElementById('street11');
	dispCity = document.getElementById('city11');
	dispState = document.getElementById('state11');
	dispZip = document.getElementById('zip11');
	dispFree = document.getElementById('free11');
	dispKids = document.getElementById('kids11');
	dispPet = document.getElementById('pet11');
	dispInorout = document.getElementById('inorout11');
	dispHours = document.getElementById('hours11');
	dispFood = document.getElementById('food11');
	filtKeyword = document.getElementById('keyword11');
	}
			if (buttonId == 'but12'){
	disPlay = document.getElementById('but12');
	disPlay2 = document.getElementById('results12');
	dispDescription = document.getElementById('description12');
	dispStreet = document.getElementById('street12');
	dispCity = document.getElementById('city12');
	dispState = document.getElementById('state12');
	dispZip = document.getElementById('zip12');
	dispFree = document.getElementById('free12');
	dispKids = document.getElementById('kids12');
	dispPet = document.getElementById('pet12');
	dispInorout = document.getElementById('inorout12');
	dispHours = document.getElementById('hours12');
	dispFood = document.getElementById('food12');
	filtKeyword = document.getElementById('keyword12');
	}
			if (buttonId == 'but13'){
	disPlay = document.getElementById('but13');
	disPlay2 = document.getElementById('results13');
	dispDescription = document.getElementById('description13');
	dispStreet = document.getElementById('street13');
	dispCity = document.getElementById('city13');
	dispState = document.getElementById('state13');
	dispZip = document.getElementById('zip13');
	dispFree = document.getElementById('free13');
	dispKids = document.getElementById('kids13');
	dispPet = document.getElementById('pet13');
	dispInorout = document.getElementById('inorout13');
	dispHours = document.getElementById('hours13');
	dispFood = document.getElementById('food13');
	filtKeyword = document.getElementById('keyword13');
	}
			if (buttonId == 'but14'){
	disPlay = document.getElementById('but14');
	disPlay2 = document.getElementById('results14');
	dispDescription = document.getElementById('description14');
	dispStreet = document.getElementById('street14');
	dispCity = document.getElementById('city14');
	dispState = document.getElementById('state14');
	dispZip = document.getElementById('zip14');
	dispFree = document.getElementById('free14');
	dispKids = document.getElementById('kids14');
	dispPet = document.getElementById('pet14');
	dispInorout = document.getElementById('inorout14');
	dispHours = document.getElementById('hours14');
	dispFood = document.getElementById('food14');
	filtKeyword = document.getElementById('keyword14');
	}
			if (buttonId == 'but15'){
	disPlay = document.getElementById('but15');
	disPlay2 = document.getElementById('results15');
	dispDescription = document.getElementById('description15');
	dispStreet = document.getElementById('street15');
	dispCity = document.getElementById('city15');
	dispState = document.getElementById('state15');
	dispZip = document.getElementById('zip15');
	dispFree = document.getElementById('free15');
	dispKids = document.getElementById('kids15');
	dispPet = document.getElementById('pet15');
	dispInorout = document.getElementById('inorout15');
	dispHours = document.getElementById('hours15');
	dispFood = document.getElementById('food15');
	filtKeyword = document.getElementById('keyword15');
	}
			if (buttonId == 'but16'){
	disPlay = document.getElementById('but16');
	disPlay2 = document.getElementById('results16');
	dispDescription = document.getElementById('description16');
	dispStreet = document.getElementById('street16');
	dispCity = document.getElementById('city16');
	dispState = document.getElementById('state16');
	dispZip = document.getElementById('zip16');
	dispFree = document.getElementById('free16');
	dispKids = document.getElementById('kids16');
	dispPet = document.getElementById('pet16');
	dispInorout = document.getElementById('inorout16');
	dispHours = document.getElementById('hours16');
	dispFood = document.getElementById('food16');
	filtKeyword = document.getElementById('keyword16');
	}
			if (buttonId == 'but17'){
	disPlay = document.getElementById('but17');
	disPlay2 = document.getElementById('results17');
	dispDescription = document.getElementById('description17');
	dispStreet = document.getElementById('street17');
	dispCity = document.getElementById('city17');
	dispState = document.getElementById('state17');
	dispZip = document.getElementById('zip17');
	dispFree = document.getElementById('free17');
	dispKids = document.getElementById('kids17');
	dispPet = document.getElementById('pet17');
	dispInorout = document.getElementById('inorout17');
	dispHours = document.getElementById('hours17');
	dispFood = document.getElementById('food17');
	filtKeyword = document.getElementById('keyword17');
	}
			if (buttonId == 'but18'){
	disPlay = document.getElementById('but18');
	disPlay2 = document.getElementById('results18');
	dispDescription = document.getElementById('description18');
	dispStreet = document.getElementById('street18');
	dispCity = document.getElementById('city18');
	dispState = document.getElementById('state18');
	dispZip = document.getElementById('zip18');
	dispFree = document.getElementById('free18');
	dispKids = document.getElementById('kids18');
	dispPet = document.getElementById('pet18');
	dispInorout = document.getElementById('inorout18');
	dispHours = document.getElementById('hours18');
	dispFood = document.getElementById('food18');
	filtKeyword = document.getElementById('keyword18');
	}
			if (buttonId == 'but19'){
	disPlay = document.getElementById('but19');
	disPlay2 = document.getElementById('results19');
	dispDescription = document.getElementById('description19');
	dispStreet = document.getElementById('street19');
	dispCity = document.getElementById('city19');
	dispState = document.getElementById('state19');
	dispZip = document.getElementById('zip19');
	dispFree = document.getElementById('free19');
	dispKids = document.getElementById('kids19');
	dispPet = document.getElementById('pet19');
	dispInorout = document.getElementById('inorout19');
	dispHours = document.getElementById('hours19');
	dispFood = document.getElementById('food19');
	filtKeyword = document.getElementById('keyword19');
	}
			if (buttonId == 'but20'){
	disPlay = document.getElementById('but20');
	disPlay2 = document.getElementById('results20');
	dispDescription = document.getElementById('description20');
	dispStreet = document.getElementById('street20');
	dispCity = document.getElementById('city20');
	dispState = document.getElementById('state20');
	dispZip = document.getElementById('zip20');
	dispFree = document.getElementById('free20');
	dispKids = document.getElementById('kids20');
	dispPet = document.getElementById('pet20');
	dispInorout = document.getElementById('inorout20');
	dispHours = document.getElementById('hours20');
	dispFood = document.getElementById('food20');
	filtKeyword = document.getElementById('keyword20');
	}
			if (buttonId == 'but21'){
	disPlay = document.getElementById('but21');
	disPlay2 = document.getElementById('results21');
	dispDescription = document.getElementById('description21');
	dispStreet = document.getElementById('street21');
	dispCity = document.getElementById('city21');
	dispState = document.getElementById('state21');
	dispZip = document.getElementById('zip21');
	dispFree = document.getElementById('free21');
	dispKids = document.getElementById('kids21');
	dispPet = document.getElementById('pet21');
	dispInorout = document.getElementById('inorout21');
	dispHours = document.getElementById('hours21');
	dispFood = document.getElementById('food21');
	filtKeyword = document.getElementById('keyword21');
	}
			if (buttonId == 'but22'){
	disPlay = document.getElementById('but22');
	disPlay2 = document.getElementById('results22');
	dispDescription = document.getElementById('description22');
	dispStreet = document.getElementById('street22');
	dispCity = document.getElementById('city22');
	dispState = document.getElementById('state22');
	dispZip = document.getElementById('zip22');
	dispFree = document.getElementById('free22');
	dispKids = document.getElementById('kids22');
	dispPet = document.getElementById('pet22');
	dispInorout = document.getElementById('inorout22');
	dispHours = document.getElementById('hours22');
	dispFood = document.getElementById('food22');
	filtKeyword = document.getElementById('keyword22');
	}
			if (buttonId == 'but23'){
	disPlay = document.getElementById('but23');
	disPlay2 = document.getElementById('results23');
	dispDescription = document.getElementById('description23');
	dispStreet = document.getElementById('street23');
	dispCity = document.getElementById('city23');
	dispState = document.getElementById('state23');
	dispZip = document.getElementById('zip23');
	dispFree = document.getElementById('free23');
	dispKids = document.getElementById('kids23');
	dispPet = document.getElementById('pet23');
	dispInorout = document.getElementById('inorout23');
	dispHours = document.getElementById('hours23');
	dispFood = document.getElementById('food23');
	filtKeyword = document.getElementById('keyword23');
	}
			if (buttonId == 'but24'){
	disPlay = document.getElementById('but24');
	disPlay2 = document.getElementById('results24');
	dispDescription = document.getElementById('description24');
	dispStreet = document.getElementById('street24');
	dispCity = document.getElementById('city24');
	dispState = document.getElementById('state24');
	dispZip = document.getElementById('zip24');
	dispFree = document.getElementById('free24');
	dispKids = document.getElementById('kids24');
	dispPet = document.getElementById('pet24');
	dispInorout = document.getElementById('inorout24');
	dispHours = document.getElementById('hours24');
	dispFood = document.getElementById('food24');
	filtKeyword = document.getElementById('keyword24');
	}
			if (buttonId == 'but25'){
	disPlay = document.getElementById('but25');
	disPlay2 = document.getElementById('results25');
	dispDescription = document.getElementById('description25');
	dispStreet = document.getElementById('street25');
	dispCity = document.getElementById('city25');
	dispState = document.getElementById('state25');
	dispZip = document.getElementById('zip25');
	dispFree = document.getElementById('free25');
	dispKids = document.getElementById('kids25');
	dispPet = document.getElementById('pet25');
	dispInorout = document.getElementById('inorout25');
	dispHours = document.getElementById('hours25');
	dispFood = document.getElementById('food25');
	filtKeyword = document.getElementById('keyword25');
	}
	//dmc start here 
	
	//alert(dispDescription.textContent);
	const displayText = disPlay.textContent;
	const displayText2 = disPlay2.textContent;
	const displayDescription = dispDescription.textContent;
	const displayStreet = dispStreet.textContent;
	const displayCity = dispCity.textContent;
	const displayState = dispState.textContent;
	const displayZip = dispZip.textContent;
	const displayFree = dispFree.textContent;
	const displayKids = dispKids.textContent;
	const displayPet = dispPet.textContent;
	const displayInorout = dispInorout.textContent;
	const displayFood = dispFood.textContent;
	const displayHours = dispHours.textContent;
	const filterKeyword = filtKeyword.textContent;
	displayState2 = displayState.slice(0,2);
	//alert(filterKeyword);	
	
		
    console.log(`Button clicked: ${buttonId}`);
	
	document.getElementById("mTitle").innerHTML = displayText;'<br />' + displayStreet
	document.getElementById("mBody").innerHTML = displayDescription + '<br /> <br/>' + 
	'<b>Location: </b>' + 	displayStreet + '<br />' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + displayCity + ', ' + displayState2 + '  ' + displayZip + '<br /> <br/>' +
	'<b>Free: </b>' + displayFree + '<b>\xa0\xa0\xa0\xa0Kid Friendly: </b>'  + displayKids +  '<b>\xa0\xa0\xa0\xa0 Pet Friendly: </b>'  + displayPet + '<b>\xa0\xa0\xa0\xa0 Food Available: </b>'  + displayFood + '<br /> <br/>' +
	'<b>Indoors/Outdoors: </b>' + displayInorout + '<b>\xa0\xa0\xa0\xa0Hours Open: </b>'  + displayHours + '<br/> <br/>' + '<b> Website: </b>';
	openModal();
	
}


const overlay = document.getElementById('overlay');

function openModal(){
	
	modal.classList.add('active');
	overlay.classList.add('active');
	
}

function closeModal(){
	
	modal.classList.remove('active');
	overlay.classList.remove('active');
	
	
}



// Function to handle button click events
function handleButtonClick(event) {
    const buttonId = event.target.id; // Get the ID of the clicked button
    console.log(`Button clicked: ${buttonId}`);
}

function findAndCalculateQuadranta(locationa, myZIP) {
  // Find the index of the matching zip code
  const matchingIndex = locationa.findIndex(row => row[0] == myZIP);

  if (matchingIndex == -1) {
    console.log("ZIP code", myZIP, "not found in the data");
    return;
  }
 if (matchingIndex !== -1) {
    console.log("ZIP code", myZIP, "found in the data");
    console.log(matchingIndex);
    console.log(locationa[matchingIndex][3]);
//    return;
  }

  // Extract latitude and longitude of the matching zip code
  const myLat = locationa[matchingIndex][1];
  const myLong = locationa[matchingIndex][2];

  // Loop through all locations and calculate distance (Haversine formula)
  for (let i = 0; i < locationa.length; i++) {
    //if (i == matchingIndex) continue; // Skip the matching zip code itself

    const lat2 = locationa[i][1];
    const long2 = locationa[i][2];

    const distance = calculateDistance(myLat, myLong, lat2, long2);
	//const rnddistance = Math.round(distance) ;
	let rnddistance = distance.toFixed(3);
    //dmc display sentence console.log(`Distance from ${locationa[matchingIndex][3]} to ${locationa[i][3]}: ${distance} miles`);
	locationa[i][6] = rnddistance;
	
  }
  //dmc sort array
	locationa.sort((a, b) => a[6] - b[6]);
    //List first 25 closest locations
	
for (i = 0; i <= 25; i++) {
console.log(locationa[i]);
}
}
function findAndCalculateQuadrantb(locationb, myZIP) {
  // Find the index of the matching zip code
  const matchingIndex = locationb.findIndex(row => row[0] == myZIP);

  if (matchingIndex == -1) {
    console.log("ZIP code", myZIP, "not found in the data");
    return;
  }
 if (matchingIndex !== -1) {
    console.log("ZIP code", myZIP, "found in the data");
    console.log(matchingIndex);
    console.log(locationb[matchingIndex][3]);
//    return;
  }

  // Extract latitude and longitude of the matching zip code
  const myLat = locationb[matchingIndex][1];
  const myLong = locationb[matchingIndex][2];

  // Loop through all locations and calculate distance (Haversine formula)
  for (let i = 0; i < locationb.length; i++) {
    //if (i == matchingIndex) continue; // Skip the matching zip code itself

    const lat2 = locationb[i][1];
    const long2 = locationb[i][2];

    const distance = calculateDistance(myLat, myLong, lat2, long2);
	//const rnddistance = Math.round(distance) ;
	let rnddistance = distance.toFixed(3);
    //dmc display sentence console.log(`Distance from ${locationb[matchingIndex][3]} to ${locationb[i][3]}: ${distance} miles`);
	locationb[i][6] = rnddistance;
	
  }
  //dmc sort array
	locationb.sort((a, b) => a[6] - b[6]);
    //List first 25 closest locations
	
for (i = 0; i <= 25; i++) {
console.log(locationb[i]);
}
}

function findAndCalculateQuadrantc(locationc, myZIP) {
  // Find the index of the matching zip code
  const matchingIndex = locationc.findIndex(row => row[0] == myZIP);

  if (matchingIndex == -1) {
    console.log("ZIP code", myZIP, "not found in the data");
    return;
  }
 if (matchingIndex !== -1) {
    console.log("ZIP code", myZIP, "found in the data");
    console.log(matchingIndex);
    console.log(locationc[matchingIndex][3]);
//    return;
  }

  // Extract latitude and longitude of the matching zip code
  const myLat = locationc[matchingIndex][1];
  const myLong = locationc[matchingIndex][2];

  // Loop through all locations and calculate distance (Haversine formula)
  for (let i = 0; i < locationc.length; i++) {
    //if (i == matchingIndex) continue; // Skip the matching zip code itself

    const lat2 = locationc[i][1];
    const long2 = locationc[i][2];

    const distance = calculateDistance(myLat, myLong, lat2, long2);
	//const rnddistance = Math.round(distance) ;
	let rnddistance = distance.toFixed(3);
    //dmc display sentence console.log(`Distance from ${locationc[matchingIndex][3]} to ${locationc[i][3]}: ${distance} miles`);
	locationc[i][6] = rnddistance;
	
  }
  //dmc sort array
	locationc.sort((a, b) => a[6] - b[6]);
    //List first 25 closest locations
	
for (i = 0; i <= 25; i++) {
console.log(locationc[i]);
}
}

function findAndCalculateQuadrantd(locationd, myZIP) {
  // Find the index of the matching zip code
  const matchingIndex = locationd.findIndex(row => row[0] == myZIP);

  if (matchingIndex == -1) {
    console.log("ZIP code", myZIP, "not found in the data");
    return;
  }
 if (matchingIndex !== -1) {
    console.log("ZIP code", myZIP, "found in the data");
    console.log(matchingIndex);
    console.log(locationd[matchingIndex][3]);
//    return;
  }

  // Extract latitude and longitude of the matching zip code
  const myLat = locationd[matchingIndex][1];
  const myLong = locationd[matchingIndex][2];

  // Loop through all locations and calculate distance (Haversine formula)
  for (let i = 0; i < locationd.length; i++) {
    //if (i == matchingIndex) continue; // Skip the matching zip code itself

    const lat2 = locationd[i][1];
    const long2 = locationd[i][2];

    const distance = calculateDistance(myLat, myLong, lat2, long2);
	//const rnddistance = Math.round(distance) ;
	let rnddistance = distance.toFixed(3);
    //dmc display sentence console.log(`Distance from ${locationd[matchingIndex][3]} to ${locationd[i][3]}: ${distance} miles`);
	locationd[i][6] = rnddistance;
	
  }
  //dmc sort array
	locationd.sort((a, b) => a[6] - b[6]);
    //List first 25 closest locations
	
for (i = 0; i <= 25; i++) {
console.log(locationd[i]);
// findMatch function here
}
}



// Haversine formula to calculate distance (replace with your preferred unit conversion)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers (or convert to your desired unit)
  const dLat = radians(lat2 - lat1);
  const dLon = radians(lon2 - lon1);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(radians(lat1)) * Math.cos(radians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c)/ 1.609344;
  //return (R * c)/ 1.609;
}

// Helper function to convert degrees to radians
function radians(degrees) {
  return degrees * Math.PI / 180;
}


  // Your array data with zip code in the second column, latitude in the third, and longitude in the fourth




