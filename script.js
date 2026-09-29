const questions = [
  {
    q:"하루 일정을 마치고 기숙사 방에 돌아왔다. 가장 먼저 하고 싶은 행동은?",
    a:[
      ["방을 둘러보고 어질러진 곳부터 정리한다.","clean"],
      ["침대에 누워 편하게 쉬면서 나만의 시간을 갖는다.","rest"],
      ["오늘 해야 할 공부나 과제를 확인한다.","growth"],
      ["룸메이트나 친구에게 오늘 뭐 하는지 물어본다.","social"]
    ]
  },
  {
    q:"룸메이트와 생활할 때 내가 가장 중요하게 생각하는 것은?",
    a:[
      ["물건을 제자리에 두고 방을 깨끗하게 사용하는 것","clean"],
      ["서로의 개인시간과 휴식을 방해하지 않는 것","rest"],
      ["각자의 생활 루틴과 해야 할 일을 존중하는 것","growth"],
      ["불편한 일이 생기면 편하게 이야기하고 맞춰가는 것","social"]
    ]
  },
  {
    q:"시험기간이 시작됐다. 나는 가장 먼저 무엇을 할까?",
    a:[
      ["책상과 주변을 정리해서 공부할 환경부터 만든다.","clean"],
      ["편하게 오래 집중할 수 있는 환경을 만든다.","rest"],
      ["공부할 내용을 나누고 계획을 세운다.","growth"],
      ["친구와 함께 공부할 장소나 방법을 찾아본다.","social"]
    ]
  },
  {
    q:"휴일에 기숙사에 혼자 남았다면?",
    a:[
      ["밀린 빨래나 청소를 하면서 방을 정리한다.","clean"],
      ["영화나 드라마를 보면서 푹 쉰다.","rest"],
      ["평소 못 했던 공부나 자기계발을 한다.","growth"],
      ["친구에게 연락해서 같이 시간을 보낼 수 있는지 물어본다.","social"]
    ]
  },
  {
    q:"공용공간을 이용할 때 가장 신경 쓰이는 것은?",
    a:[
      ["사용한 곳을 깨끗하게 정리하고 나오는 것","clean"],
      ["다른 사람에게 방해되지 않게 조용히 사용하는 것","rest"],
      ["정해진 이용방법과 시간을 지키는 것","growth"],
      ["다른 사람과 공간을 편하게 나눠 쓰는 것","social"]
    ]
  },
  {
    q:"기숙사 생활에서 가장 스트레스를 받는 상황은?",
    a:[
      ["방이나 공용공간이 계속 지저분한 상황","clean"],
      ["혼자 쉴 시간이나 조용한 시간이 부족한 상황","rest"],
      ["공부나 해야 할 일에 집중하기 어려운 상황","growth"],
      ["사람들과 어울릴 기회가 너무 적은 상황","social"]
    ]
  },
  {
    q:"내가 생각하는 가장 이상적인 기숙사 방은?",
    a:[
      ["물건이 깔끔하게 정리되어 있는 방","clean"],
      ["침대와 휴식공간이 아늑하고 편안한 방","rest"],
      ["책상과 공부환경이 잘 갖춰진 방","growth"],
      ["친구나 룸메이트와 편하게 이야기할 수 있는 분위기의 방","social"]
    ]
  },
  {
    q:"기숙사 생활을 한마디로 표현한다면 가장 가까운 것은?",
    a:[
      ["내 공간은 내가 관리한다.","clean"],
      ["기숙사는 나의 충전소다.","rest"],
      ["기숙사에서도 나의 루틴은 계속된다.","growth"],
      ["사람들과 함께라서 더 즐겁다.","social"]
    ]
  }
];

const types = {
  clean:{
    tag:"🧹 생활정돈형",
    title:"내 공간은 내가 관리한다!",
    quote:"정돈된 환경에서 편안함을 느끼는 기숙사생",
    one:"방과 공용공간을 깔끔하게 유지하는 것을 중요하게 생각하고, 함께 생활하는 사람까지 배려하며 생활환경을 스스로 관리하는 타입이에요.",
    hashtags:["#정리정돈","#청결중시","#생활관리","#배려"],
    traits:["사용한 물건은 제자리에 두는 편이에요.","방이나 공용공간이 어질러져 있으면 신경 쓰여요.","함께 쓰는 공간은 다음 사람을 생각하며 사용해요.","생활환경이 깔끔하면 일상도 한결 편안해져요."],
    tip:"하루에 5분씩만 정리 시간을 만들어보세요. 완벽하게 정리하기보다 자주 조금씩 관리하면 쾌적한 공간을 오래 유지할 수 있어요.",
    image:"dreambye-clean.png"
  },
  rest:{
    tag:"🛋️ 휴식중심형",
    title:"기숙사는 나만의 충전소!",
    quote:"편안한 공간에서 에너지를 충전하는 기숙사생",
    one:"수업과 일정을 마친 뒤에는 나만의 공간에서 충분히 쉬는 것을 중요하게 생각해요. 혼자만의 시간과 편안한 환경이 생활의 큰 부분을 차지하는 타입이에요.",
    hashtags:["#나만의시간","#휴식중심","#편안함","#개인공간"],
    traits:["혼자 있는 시간이 에너지를 충전하는 시간이 돼요.","방에서는 편안한 휴식과 취미를 즐기는 편이에요.","서로의 개인시간과 공간을 존중하는 것을 중요하게 생각해요.","바쁜 일정 뒤에는 충분한 휴식이 필요해요."],
    tip:"휴식시간을 죄책감 없이 확보해보세요. 대신 해야 할 일과 쉬는 시간을 구분해두면 더 편안하게 쉴 수 있어요.",
    image:"dreambye-rest.png"
  },
  growth:{
    tag:"📚 자기계발형",
    title:"기숙사에서도 내 루틴은 계속된다!",
    quote:"목표를 정하고 꾸준히 생활하는 기숙사생",
    one:"공부와 자기계발, 생활 루틴을 스스로 관리하며 기숙사에서도 목표를 이어가는 타입이에요. 자유시간도 의미 있게 사용하는 편이에요.",
    hashtags:["#목표관리","#공부루틴","#자기관리","#성장"],
    traits:["해야 할 일을 정해두면 마음이 편해요.","시험이나 과제가 있으면 집중해서 마무리하려고 해요.","혼자 집중할 수 있는 환경을 중요하게 생각해요.","자유시간에도 공부나 자기계발을 선택하는 경우가 많아요."],
    tip:"계획을 너무 촘촘하게 세우기보다 충분한 휴식과 여유도 함께 넣어보세요. 꾸준히 이어갈 수 있는 루틴이 가장 좋은 루틴이에요.",
    image:"dreambye-growth.png"
  },
  social:{
    tag:"👫 교류활동형",
    title:"사람들과 함께라서 더 즐겁다!",
    quote:"함께 생활하고 이야기할 때 기숙사가 더 즐거운 기숙사생",
    one:"룸메이트와 친구들과 자연스럽게 소통하며 기숙사에서 좋은 추억을 만드는 것을 좋아해요. 관계와 대화를 공동생활의 중요한 부분으로 생각하는 타입이에요.",
    hashtags:["#소통","#관계중시","#함께하기","#기숙사추억"],
    traits:["룸메이트나 친구들과 이야기하는 것을 좋아해요.","혼자보다 함께할 때 기숙사 생활이 더 즐거워요.","새로운 사람과 친해지는 데 비교적 적극적이에요.","불편한 일이 생겨도 대화를 통해 맞춰가려고 해요."],
    tip:"즐거운 만큼 서로의 생활시간과 개인공간도 존중해 주세요. 작은 배려가 오래 편안한 관계를 만드는 데 도움이 돼요.",
    image:"dreambye-social.png"
  }
};

let current=0;
let answers=Array(questions.length).fill(null);
let resultKey=null;

const screens=[...document.querySelectorAll(".screen")];
function show(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"smooth"});}

function renderQuestion(){
  const item=questions[current];
  const pct=Math.round(((current+1)/questions.length)*100);
  document.getElementById("progressText").textContent=`${current+1} / ${questions.length}`;
  document.getElementById("progressBar").style.width=`${pct}%`;
  document.getElementById("questionNumber").textContent=String(current+1).padStart(2,"0");
  document.getElementById("questionText").textContent=item.q;

  const answersBox=document.getElementById("answers");
  answersBox.innerHTML="";
  item.a.forEach((choice,i)=>{
    const btn=document.createElement("button");
    btn.className="answer";
    btn.dataset.number=String(i+1);
    btn.innerHTML=`${escapeHtml(choice[0])}<span class="num">${i+1}</span>`;
    btn.addEventListener("click",()=>selectAnswer(i));
    answersBox.appendChild(btn);
  });

  const dots=document.getElementById("questionDots");
  dots.className="dots";
  dots.innerHTML=questions.map((_,i)=>`<span class="dot ${i===current?"active":""}"></span>`).join("");
}

function selectAnswer(i){
  answers[current]=i;
  document.querySelectorAll(".answer").forEach((b,n)=>b.classList.toggle("selected",n===i));
  setTimeout(()=>{
    if(current<questions.length-1){current++;renderQuestion();}
    else finish();
  },220);
}

function finish(){
  show("loading");
  setTimeout(showResult,700);
}

function showResult(){
  const score={clean:0,rest:0,growth:0,social:0};
  answers.forEach((ans,qi)=>{
    if(ans!==null) score[questions[qi].a[ans][1]]++;
  });
  const order=["clean","rest","growth","social"];
  resultKey=order.reduce((best,k)=>score[k]>score[best]?k:best,order[0]);
  const t=types[resultKey];

  document.getElementById("resultTag").textContent=t.tag;
  document.getElementById("resultTitle").textContent=t.title;
  document.getElementById("resultQuote").textContent=t.quote;
  document.getElementById("resultOneLiner").textContent=t.one;
  document.getElementById("resultMascot").src=t.image;
  document.getElementById("hashtags").innerHTML=t.hashtags.map(x=>`<span>${x}</span>`).join("");
  document.getElementById("traits").innerHTML=t.traits.map(x=>`<li>${x}</li>`).join("");
  show("result");
}

function resetTest(){
  current=0;
  answers=Array(questions.length).fill(null);
  renderQuestion();
  show("quiz");
}

function escapeHtml(str){
  const div=document.createElement("div");
  div.textContent=str;
  return div.innerHTML;
}

document.getElementById("startBtn").addEventListener("click",resetTest);
document.getElementById("retryBtn").addEventListener("click",resetTest);
document.getElementById("backBtn").addEventListener("click",()=>{
  if(current>0){current--;renderQuestion();}
});
document.getElementById("exitBtn").addEventListener("click",()=>{
  if(confirm("테스트를 처음부터 다시 시작할까요?")) show("start");
});
document.getElementById("copyBtn").addEventListener("click",async()=>{
  const t=types[resultKey];
  const text=`나의 기숙사 유형은 ${t.tag}\n${t.title}\n${t.quote}\n\n${t.one}`;
  try{
    await navigator.clipboard.writeText(text);
    showToast("결과 문구를 복사했어요!");
  }catch(e){
    showToast("복사 기능을 사용할 수 없어요.");
  }
});
function showToast(text){
  const toast=document.getElementById("toast");
  toast.textContent=text;toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1600);
}
