(() => {
  const screens = {
    start: document.getElementById("start"),
    quiz: document.getElementById("quiz"),
    loading: document.getElementById("loading"),
    result: document.getElementById("result")
  };

  const questions = [
    {
      text: "기숙사 방이 조금 어질러져 있다면 나는?",
      answers: [
        ["보이는 곳부터 바로 정리한다.", { tidy: 3, self: 1 }],
        ["조금 쉬었다가 한 번에 정리한다.", { heal: 2, tidy: 1 }],
        ["해야 할 일이 먼저라서 나중에 정리한다.", { self: 2 }],
        ["룸메이트와 같이 정리하면 더 빨리 끝날 것 같다.", { social: 2, tidy: 1 }]
      ]
    },
    {
      text: "시험 기간, 내 방에서 가장 자주 볼 수 있는 모습은?",
      answers: [
        ["책상 위가 깔끔하게 정리되어 있다.", { tidy: 2, self: 1 }],
        ["공부하다가 잠깐씩 쉬면서 충전한다.", { heal: 3 }],
        ["계획표를 세워 차근차근 공부한다.", { self: 3 }],
        ["친구들과 서로 문제를 내며 공부한다.", { social: 3 }]
      ]
    },
    {
      text: "기숙사에서 혼자 있는 시간이 생기면?",
      answers: [
        ["방을 정리하거나 필요한 일을 처리한다.", { tidy: 2, self: 1 }],
        ["침대에서 영상이나 음악을 즐긴다.", { heal: 3 }],
        ["밀린 과제나 자기계발을 한다.", { self: 3 }],
        ["친구에게 연락해서 같이 시간을 보낸다.", { social: 3 }]
      ]
    },
    {
      text: "공용공간을 사용할 때 나는?",
      answers: [
        ["사용한 뒤 원래 상태로 깔끔하게 정리한다.", { tidy: 3 }],
        ["편하게 이용하고 다른 사람에게 방해가 되지 않게 한다.", { heal: 2 }],
        ["필요한 것만 빠르게 하고 내 할 일을 이어간다.", { self: 2 }],
        ["다른 사람들과 자연스럽게 이야기를 나눈다.", { social: 3 }]
      ]
    },
    {
      text: "하루를 마무리할 때 가장 중요하게 생각하는 것은?",
      answers: [
        ["내일을 위해 주변을 정돈해 두는 것", { tidy: 3, self: 1 }],
        ["편안하게 쉬면서 피로를 푸는 것", { heal: 3 }],
        ["오늘 할 일을 끝내고 내일 계획을 세우는 것", { self: 3 }],
        ["친구들과 오늘 있었던 일을 이야기하는 것", { social: 3 }]
      ]
    },
    {
      text: "갑자기 시간이 비었다면 나는?",
      answers: [
        ["미뤄둔 정리나 생활 관리를 한다.", { tidy: 3 }],
        ["아무것도 하지 않고 푹 쉰다.", { heal: 3 }],
        ["공부나 운동처럼 나에게 도움이 되는 일을 한다.", { self: 3 }],
        ["친구에게 연락해서 만나자고 한다.", { social: 3 }]
      ]
    },
    {
      text: "룸메이트와 생활할 때 내가 가장 중요하게 생각하는 것은?",
      answers: [
        ["공간을 깨끗하고 정돈된 상태로 유지하는 것", { tidy: 3 }],
        ["서로 편하게 쉴 수 있는 분위기", { heal: 3 }],
        ["각자의 생활 패턴과 시간을 존중하는 것", { self: 2, heal: 1 }],
        ["편하게 대화하고 함께 지내는 것", { social: 3 }]
      ]
    },
    {
      text: "나에게 가장 잘 맞는 기숙사 생활은?",
      answers: [
        ["깔끔하게 정돈된 공간에서 안정적으로 생활하기", { tidy: 3 }],
        ["내 공간에서 편하게 쉬며 여유롭게 생활하기", { heal: 3 }],
        ["규칙적인 루틴으로 공부와 생활을 균형 있게 관리하기", { self: 3 }],
        ["친구들과 어울리며 즐거운 추억 많이 만들기", { social: 3 }]
      ]
    }
  ];

  const types = {
    tidy: {
      tag: "정리·생활관리형",
      title: "깔끔한 정돈러",
      quote: "정돈된 공간에서 편안함을 느끼는 당신!",
      one: "작은 생활 습관도 꼼꼼하게 챙기며 쾌적한 기숙사 생활을 만들어가는 타입이에요.",
      traits: ["정리정돈된 공간을 좋아해요.", "생활 속 불편한 부분을 그냥 지나치지 않아요.", "함께 쓰는 공간도 깔끔하게 유지하려고 해요."],
      mascot: "dreambye-clean.png",
      hashtags: "#깔끔한생활 #정리정돈 #기숙사생활"
    },
    heal: {
      tag: "휴식·편안함형",
      title: "느긋한 힐링러",
      quote: "나만의 편안한 시간이 꼭 필요한 당신!",
      one: "바쁜 대학생활 속에서도 충분히 쉬고 충전하는 시간을 중요하게 생각하는 타입이에요.",
      traits: ["혼자만의 편안한 시간을 좋아해요.", "무리하지 않고 내 페이스를 지키는 편이에요.", "편안하고 아늑한 공간을 선호해요."],
      mascot: "dreambye-rest.png",
      hashtags: "#나만의시간 #힐링 #편안한기숙사"
    },
    self: {
      tag: "루틴·자기관리형",
      title: "알찬 자기관리러",
      quote: "기숙사에서도 나만의 루틴을 지키는 당신!",
      one: "공부와 생활을 스스로 관리하며 시간을 알차게 활용하는 타입이에요.",
      traits: ["해야 할 일을 계획적으로 처리해요.", "규칙적인 생활을 중요하게 생각해요.", "혼자서도 목표를 세우고 꾸준히 실천해요."],
      mascot: "dreambye-growth.png",
      hashtags: "#자기관리 #루틴 #알찬생활"
    },
    social: {
      tag: "교류·소통형",
      title: "활발한 소통러",
      quote: "함께할 때 기숙사 생활이 더 즐거운 당신!",
      one: "사람들과 자연스럽게 어울리고 함께하는 경험에서 즐거움을 찾는 타입이에요.",
      traits: ["친구들과 함께하는 시간을 좋아해요.", "대화와 소통을 중요하게 생각해요.", "기숙사에서 다양한 추억을 만드는 걸 즐겨요."],
      mascot: "dreambye-social.png",
      hashtags: "#친구와함께 #소통 #즐거운기숙사"
    }
  };

  let current = 0;
  let answers = [];

  function show(name) {
    Object.values(screens).forEach(s => s && s.classList.remove("active"));
    if (screens[name]) screens[name].classList.add("active");
    window.scrollTo(0, 0);
  }

  function renderQuestion() {
    const q = questions[current];
    document.getElementById("progressText").textContent = `${current + 1} / ${questions.length}`;
    document.getElementById("questionNumber").textContent = String(current + 1).padStart(2, "0");
    document.getElementById("progressBar").style.width = `${((current + 1) / questions.length) * 100}%`;
    document.getElementById("questionText").textContent = q.text;

    const box = document.getElementById("answers");
    box.innerHTML = "";

    q.answers.forEach((item, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.dataset.number = String(i + 1);
      btn.innerHTML = `<span class="answer-text">${item[0]}</span>`;
      btn.addEventListener("click", () => {
        answers[current] = item[1];
        btn.classList.add("selected");
        setTimeout(() => {
          if (current < questions.length - 1) {
            current++;
            renderQuestion();
          } else {
            showResult();
          }
        }, 180);
      });
      box.appendChild(btn);
    });
  }

  function calculateType() {
    const totals = { tidy: 0, heal: 0, self: 0, social: 0 };
    answers.forEach(score => {
      if (!score) return;
      Object.keys(totals).forEach(key => totals[key] += score[key] || 0);
    });

    // 가장 높은 유형을 선택. 동점이면 앞선 질문들에서 더 많이 선택된 유형을 우선.
    const order = ["tidy", "heal", "self", "social"];
    let best = order[0];
    order.forEach(key => {
      if (totals[key] > totals[best]) best = key;
    });
    return best;
  }

  function showResult() {
    show("loading");
    setTimeout(() => {
      const key = calculateType();
      const t = types[key];

      document.getElementById("resultTag").textContent = t.tag;
      document.getElementById("resultTitle").textContent = t.title;
      document.getElementById("resultQuote").textContent = t.quote;
      document.getElementById("resultOneLiner").textContent = t.one;
      document.getElementById("hashtags").textContent = t.hashtags;
      document.getElementById("resultMascot").src = t.mascot;

      const list = document.getElementById("traits");
      list.innerHTML = "";
      t.traits.forEach(x => {
        const li = document.createElement("li");
        li.textContent = x;
        list.appendChild(li);
      });

      show("result");
    }, 700);
  }

  document.getElementById("startBtn")?.addEventListener("click", () => {
    current = 0;
    answers = [];
    show("quiz");
    renderQuestion();
  });

  document.getElementById("retryBtn")?.addEventListener("click", () => {
    current = 0;
    answers = [];
    show("quiz");
    renderQuestion();
  });

  document.getElementById("backBtn")?.addEventListener("click", () => {
    if (current > 0) {
      current--;
      renderQuestion();
    } else {
      show("start");
    }
  });

  document.getElementById("exitBtn")?.addEventListener("click", () => {
    show("start");
  });

  document.getElementById("copyBtn")?.addEventListener("click", async () => {
    const title = document.getElementById("resultTitle")?.textContent || "";
    try {
      await navigator.clipboard.writeText(`나의 기숙사 유형은 '${title}'!`);
      const toast = document.getElementById("toast");
      if (toast) {
        toast.textContent = "결과 문구를 복사했어요!";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 1400);
      }
    } catch {}
  });
})();