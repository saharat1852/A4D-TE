// ===== ใส่ชื่อคนที่คุณขอที่นี่ =====
const loverName = "";

// แสดงชื่อในคำถาม
document.getElementById("question").innerHTML =
`เรามีอะไรจะบอก ${loverName} 💌<br><br>
👉 เป็นแฟนกับเราไหม? 👈`;

// เล่นเสียงเมื่อมีการกด
function playSound(){
  document.getElementById("heartbeat").play();
}

let noCount = 0;

function answerYes(){
  playSound();
  document.getElementById("result").innerHTML =
  "เย้ 💖 ต่อไปนี้เราเป็นแฟนกันแล้วนะ 🥰";

  yayExplosion();
  heartExplosion();
  startHearts();
}

function answerNo(){
  playSound();
  noCount++;

  const msgs=[
    "แน่ใจนะ 😢",
    "แน่ใจจริงๆเหรอ 🥺",
    "คิดดีแล้วใช่ไหม 😭",
    "ขออ้อนอีกครั้งนะ 💞"
  ];

  if(noCount<=4){
    document.getElementById("result").innerHTML=msgs[noCount-1];
  }else{
    document.getElementById("result").innerHTML=
      "55555 ล้อเล่นปุ่มนี้กดไม่ได้ 😍 ยอมแล้ว เป็นแฟนกันแล้วนะ 💖";

    // ซ่อนปุ่มไม่ตกลง
    document.getElementById("noBtn").style.display="none";

    yayExplosion();
    heartExplosion();
    startHearts();
  }
}


// ===== หัวใจลอย =====
function startHearts(){

  // ยิงหัวใจชุดใหญ่ทันที
  for(let i=0;i<80;i++){
    createHeart();
  }

  // ยิงต่อเนื่องรัวๆ
  setInterval(()=>{
    for(let i=0;i<15;i++){
      createHeart();
    }
  },200);
}

function createHeart(){
  const heart=document.createElement("div");
  heart.className="heart";

  const hearts=["💖","💘","💝","💗","💓","💞"];
  heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(20+Math.random()*60)+"px";

  // ความเร็วต่างกัน
  heart.style.animationDuration=(2+Math.random()*3)+"s";

  document.body.appendChild(heart);

  setTimeout(()=>heart.remove(),5000);
}


function heartExplosion(){
  const box=document.createElement("div");
  box.className="explosion";
  document.body.appendChild(box);

  const hearts=["💖","💘","💝","💗","💓","💞"];

  for(let i=0;i<40;i++){
    const h=document.createElement("div");
    h.className="boomHeart";
    h.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    // ทิศกระจาย
    const x=(Math.random()-0.5)*600+"px";
    const y=(Math.random()-0.5)*600+"px";
    h.style.setProperty("--x",x);
    h.style.setProperty("--y",y);

    box.appendChild(h);
  }

  setTimeout(()=>box.remove(),1200);
}

function yayExplosion(){

  for(let i=0;i<25;i++){ // จำนวน "เย่"
    
    const yay=document.createElement("div");
    yay.className="yayText";
    yay.innerHTML="เย่ ";

    // สุ่มตำแหน่งทั่วจอ
    yay.style.left=Math.random()*100+"vw";
    yay.style.top=Math.random()*100+"vh";

    // สุ่มขนาด
    yay.style.fontSize=(60+Math.random()*80)+"px";

    document.body.appendChild(yay);

    setTimeout(()=>{
      yay.remove();
    },1500);
  }
}

