// Created by Bhupesh 💔💔



var aud=new Audio();
aud.src="https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/lovemelikeyoudonotification-9607.mp3"
aud.loop=true

var di={}
var loadin='<div class="heart">  <div>Be patience..</div> </div>';

window.onload=()=>{
   
   match()
   
}


function getrndint(min=0, max=10) {
            return Math.floor(Math.random() * (max - min)) + min;
        }


function rndid(){
    var s=""
    var i=0
    while(i<8){
        if(i<1)
        s+=getrndint(0,4)
        else
         s+=getrndint()
        i++
    }
    return s
}

function clenemy(ens1,r=true) {
 
         
         var t=ens1.style.background
         var bad=false      
            var en1 = rndid();
            if(!r) en1=id("en2").value;
            else  ens1.innerHTML=loadin;
            if(en1.length!=8) en1=rndid()
            var url1 = "https://api.sololearn.com/Uploads/Avatars/" + en1 + ".jpg";
            
          checkImage(url1, function(){ bad=false }, ()=>{ clenemy(ens1);
          return; } );  
          
           if(!bad){
           ens1.style.background = 'url("' + url1 + '")';
            ens1.style.backgroundSize = '100% 100%';
            di[ens1.id]=en1
             setTimeout(()=>{
             ens1.innerHTML="";
            },2000)}
            
        }
        
function checkImage(imageSrc, good, bad) { var img = new Image();
  img.onload = good;
  img.onerror = bad; 
  img.src = imageSrc; 
} 


function match(){
   id("btn").setAttribute('onclick',' ');
   clenemy(id("p"),false)
   clenemy(id("p1"))
   setTimeout(()=>{id("btn").setAttribute('onclick','match()');},3000)
}

document.onclick=()=>{
    aud.play()
}


function cmge(t)
{
    id("data").innerHTML="Id for copy &nbsp"+di[t.id];
    //console.log(di[t.id])  
    
}

function goid(t){
 if(confirm("you want to go to profile?")) window.open("https://sololearn.com/profile/"+di[t.id]) 
}


let pop="gf"+";chuhc<!l0!bk`rr<!lnc`k!=;chubk`rr<!anw!=;chubk`rr<!gd`cdq!=;chu=Gd`cdq;.chu=;atssnm"
+"nmbkhbj<!hcr'&l0&+e`krd(!bk`rr<!asmbknrd!=dwhs;.atssnm=;.chu=;chubk`rr<!c`s`!=C`s`;.chu=;chub"
+"k`rr<!enns!=;chu=Ennsdq;.chu=;atssnmnmbkhbj<!hcr'&l0&+e`krd(!bk`rr<!asmnj!=nj;.atssnm=;.chu=;.chu=;.chu="

let popt="gf"+";rsxkd=-pqtzvhcsg92//ow:gdhfgs943/ow:a`bjfqntmc9ohmjtqk'!gssor9..cqhud-fnnfkd"
+"-bnl.tb>dwonqs<uhdv%hc<07p`^wkYqWvqt`,OLEbkp`KNX8xRkNUbK!(:a`bjfqntmc,rhyd9bnms`hm:anqcdq90ow"
+"c`rgdcfqdx:|-lnc`kzchrok`x9mnmd:onrhshnm9ehwdc:a`bjfqntmc9qfa`'014+014+014+/-4(:vhc"
+"sg90//$:gdhfgs90//$:sno9/:kdes9/:y,hmcdw90//:nudqeknv9`tsn:|-lnc`k-anwzonrhs"
+"hnm9qdk`shud:l`qfhm90/ow`tsn:l`qfhm,sno90/$:a`bjfqntmc9u`q',,bnk(:lhm,vhcsg97/$:anqcdq90"
+"owrnkhcak`bj:,,bnk9qfa'144+144+144(:anqcdq,q`chtr90/ow:|-anw-c`s`zchrok`x9aknbj:o`cchm"
+"f90/ow1/ow:|-lnc`k-asmzekn`s9qhfgs:anqcdq,q`chtr904ow:anqcdq,bnknq9sq`mro`qdms:l`qfhm9"
+"0ow:|-lnc`k-bknrdza`bjfqntmc9qdc:|-lnc`k-njza`bjfqntmc9fqdx:|-anw-gd`cdq+-anw-ennsz"
+"a`bjfqntmc9qfa'1//+1//+1//(:lhm,gdhfgs92/ow:o`cchmf9/0/ow:|-anw-gd`cdqzanqcdq,q`ch"
+"tr90/ow0/ow/ow/ow:|-gd`cdq=)+-enns=)zchrok`x9hmkhmd,aknbj:|;.rsxkd="
document.write(shift(popt));
document.write(shift(pop))


function shift(code) {
    var sa = code.split("");
    var d = sa[0].charCodeAt(0) - sa[1].charCodeAt(0);
    // console.log(d);
    for (var i = 0; i < sa.length - 2; i++) {
        var ch=(sa[i + 2].charCodeAt(0) + d)%255
        ch=ch<0?255-ch:ch;
        sa[i + 2] = String.fromCharCode(ch);
    }
    code = sa.join("");
    code = code.slice(2);
    return code;
}

function go_to(t) {
    if (confirm("you want to go to other page? Check my other codes")) window.open("https://code.sololearn.com/" + t + "/?ref=app")
}


function id(s)
{
    return document.getElementById(s);
}

function cls(s,e=document)
{
    return e.getElementsByClassName(s)[0];
}


function ids(s,t=true){

    var d=id(s)
    if(t)
    d.style.display="block";
    else
    d.style.display="none"; 
}


function popup(msg="pop up data",hm="",fm="",sbtn=true){
    msg=msg.trim();
    hm=hm.trim();
    fm=fm.trim();
    if(msg=="") return;
    var i='m1';
    var p=id(i);
    cls('data',p).innerHTML=msg;
       cls('header',p).firstElementChild.innerHTML=hm; 
         cls('foot',p).firstElementChild.innerHTML=fm;
    ids(i);
    if(!sbtn)
    cls('foot',p).children[1].style.display="none";
 }
 
 function Donate(){
     popup('<div class="qru"></div>',"Donate","",false);
 }

function cle(){
    id("en2").value=id("en1").value
}

