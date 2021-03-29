var hak=2;
export const Card= (ele)=>{
    var id=ele.target.id;
    if(id=="img4"){
      document.getElementById("img1").style.visibility="visible";
      var img1=document.getElementById("img1").src;
     var img2=document.getElementById("img2").style.visibility;
     var img3=document.getElementById("img3").style.visibility;
      if(img1.includes("cat")){
      var html='<p >Kazandınız tebrik ederiz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';
  document.getElementById("text").innerHTML=html;
  document.getElementById("img2").style.visibility="visible";
  document.getElementById("img3").style.visibility="visible";
    }else{
    hak=hak-1;
      if(hak==0){
        var html='<p >Kaybettiniz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';
  document.getElementById("text").innerHTML=html;
  if(img2=="hidden"){
  document.getElementById("img2").style.visibility="visible";
  }else if(img3=="hidden"){
  document.getElementById("img3").style.visibility="visible";
  }
      }
      else{
          var html='<p >1 hakkınız kaldı</p>';
  document.getElementById("text").innerHTML=html;
      }
    }
     }
     if(id=="img5"){
    
      var img2=document.getElementById("img2").src;
      var img1=document.getElementById("img1").style.visibility;
     var img3=document.getElementById("img3").style.visibility;
      document.getElementById("img2").style.visibility="visible";
      if(img2.includes("cat")){
      var html='<p >Kazandınız tebrik ederiz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';
  document.getElementById("text").innerHTML=html;
  document.getElementById("img1").style.visibility="visible";
  document.getElementById("img3").style.visibility="visible";
    }else{
      hak=hak-1;
      if(hak==0){
        var html='<p >Kaybettiniz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';
  document.getElementById("text").innerHTML=html;
  if(img1=="hidden"){
  document.getElementById("img1").style.visibility="visible";
  }else if(img3=="hidden"){
  document.getElementById("img3").style.visibility="visible";
  }
      }else{
          var html='<p >1 hakkınız kaldı</p>';
  document.getElementById("text").innerHTML=html;
      }
    }
      
    } if(id=="img6"){
  
      var img3=document.getElementById("img3").src;
      var img2=document.getElementById("img2").style.visibility;
      var img1=document.getElementById("img1").style.visibility;
      document.getElementById("img3").style.visibility="visible";
      if(img3.includes("cat")){
      var html='<p >Kazandınız tebrik ederiz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';
  document.getElementById("text").innerHTML=html;
  document.getElementById("img2").style.visibility="visible";
  document.getElementById("img1").style.visibility="visible";
    }else{
      hak=hak-1;
      if(hak==0){
        var html='<p >Kaybettiniz yeni oyun oynamak istersen <a href="index.html">buraya</a> tıklayabilirsin</p>';
  document.getElementById("text").innerHTML=html;
  if(img2=="hidden"){
  document.getElementById("img2").style.visibility="visible";
  }else if(img1=="hidden"){
  document.getElementById("img1").style.visibility="visible";
  }
      }
      else{
          var html='<p >1 hakkınız kaldı</p>';
  document.getElementById("text").innerHTML=html;
      }
    }
    }
   }