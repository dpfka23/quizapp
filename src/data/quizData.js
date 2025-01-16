const quizData = {
  categories: ["색채학", "경제", "수학", "넌센스"],
  quizzes: [
    // 색채학 카테고리
    {
      id: 1,
      category: "색채학",
      difficulty: "쉬움",
      question: "색의 3원색은 무엇인가요?",
      choices: ["A. 빨강, 노랑, 파랑", "B. 빨강, 초록, 파랑", "C. 빨강, 보라, 초록", "D. 주황, 파랑, 초록"],
      correct: "B. 빨강, 초록, 파랑"
    },
    {
      id: 2,
      category: "색채학",
      difficulty: "쉬움",
      question: "색의 명도는 무엇을 의미하나요?",
      choices: ["A. 색의 밝고 어두운 정도", "B. 색의 채도", "C. 색의 온도", "D. 색의 대비"],
      correct: "A. 색의 밝고 어두운 정도"
    },
    {
      id: 3,
      category: "색채학",
      difficulty: "쉬움",
      question: "보색 관계에 있는 색은 무엇인가요?",
      choices: ["A. 파랑과 노랑", "B. 빨강과 초록", "C. 파랑과 주황", "D. 빨강과 보라"],
      correct: "C. 파랑과 주황"
    },
    {
      id: 4,
      category: "색채학",
      difficulty: "쉬움",
      question: "색의 채도는 무엇을 나타내나요?",
      choices: ["A. 색의 순수도와 선명함", "B. 색의 온도와 차가운 정도", "C. 색의 밝기", "D. 색의 크기"],
      correct: "A. 색의 순수도와 선명함"
    },
    {
      id: 5,
      category: "색채학",
      difficulty: "쉬움",
      question: "색상환에서 빨강의 보색은 무엇인가요?",
      choices: ["A. 초록", "B. 파랑", "C. 주황", "D. 보라"],
      correct: "C. 주황"
    },


    // 경제 카테고리
    {
      id: 6,
      category: "경제",
      difficulty: "쉬움",
      question: "ETF는 무엇의 약자인가요?",
      choices: [
        "A. Exchange Traded Fund",
        "B. Equity Transfer Fund",
        "C. Economy Trade Fund",
        "d. Exchange Trade Finance"
      ],
      correct: "A. Exchange Traded Fund"
    },
    {
      id: 7,
      category: "경제",
      difficulty: "보통",
      question: "주식 시장에서 종합 주가지수를 나타내는 용어는?",
      choices: ["A. KOSPI", "B. CPI", "C. CD", "D. ETF"],
      correct: "A. KOSPI"
    },
    {
      id: 8,
      category: "경제",
      difficulty: "어려움",
      question: "분산 투자의 주요 목적은 무엇인가요?",
      choices: [
        "A. 수익률 증가",
        "B. 위험 감소",
        "C. 거래 비용 절감",
        "D. 세금 우대 혜택"
      ],
      correct: "B. 위험 감소"
    },
    {
      id: 9,
      category: "경제",
      difficulty: "쉬움",
      question: "미래의 특정 가격에 매매할 수 있는 권리를 제공하는 금융 상품은?",
      choices: ["A. 옵션", "B. 선물", "C. 스왑", "D. 주식"],
      correct: "A. 옵션"
    },
    {
      id: 10,
      category: "경제",
      difficulty: "보통",
      question: "펀드 투자에서 '매니저의 능력'에 크게 의존하는 유형은?",
      choices: ["A. 액티브 펀드", "B. 패시브 펀드", "C. ETF", "D. 리츠(REITs)"],
      correct: "A. 액티브 펀드"
    },

    // 수학 카테고리
    {
      id: 11,
      category: "수학",
      difficulty: "보통",
      question: "2x + 5 = 17일 때, x의 값을 구하세요",
      choices: ["A. 5", "B. 6", "C. 7", "D. 8"],
      correct: "B. 6"
    },
    {
      id: 12,
      category: "수학",
      difficulty: "보통",
      question: "삼각형의 두 각이 각각 40°와 75°일 때, 나머지 한 각의 크기를 구하세요",
      choices: ["A. 55°", "B. 60°", "C. 65°", "D. 70°"],
      correct: "C. 65°"
    },
    {
      id: 13,
      category: "수학",
      difficulty: "보통",
      question: "다음 중 3의 배수가 아닌 수는 무엇인가요?  ",
      choices: ["A. 12", "B. 15", "C. 18", "D. 20"],
      correct: "D. 20"
    },
    {
      id: 14,
      category: "수학",
      difficulty: "보통",
      question: "(3x + 5) - (2x - 4) = 7일 때, x의 값을 구하세요",
      choices: ["A. 2", "B. 3", "C. 4", "D. 5"],
      correct: "A. 2"
    },
    {
      id: 15,
      category: "수학",
      difficulty: "보통",
      question: "(4 + 3) × (6 - 2)일때, 수식의 값은 무엇인가요? ",
      choices: ["A. 12", "B. 23", "C. 40", "D. 28"],
      correct: "D. 28"
    },

    // 넌센스 카테고리
    {
      id: 16,
      category: "넌센스",
      difficulty: "보통",
      question: "어떤 사람은 항상 '어디서나'라는 말을 합니다. 그 사람은 누구일까요?",
      choices: ["A. 거울 속 나", "B. TV 뉴스 앵커", "C. 지도", "D. 구름"],
      correct: "C. 지도"
    },
    {
      id: 17,
      category: "넌센스",
      difficulty: "보통",
      question: "만약 거울이 말을 한다면, 가장 먼저 할 말은 무엇일까요?",
      choices: ["A. 안녕!", "B. 나를 봐!", "C. 왜 울어?", "D. 너를 비추고 있어!"],
      correct: "B. 나를 봐!"
    },
    {
      id: 18,
      category: "넌센스",
      difficulty: "어려움",
      question: "다음 중 한 번도 땅에 떨어지지 않는 것은 무엇인가요?",
      choices: ["A. 별", "B. 공", "C. 거북이", "D. 달"],
      correct: "A. 별"
    },
    {
      id: 19,
      category: "넌센스",
      difficulty: "보통",
      question: "모든 사람은 항상 다가가려고 하는데, 절대 다가갈 수 없는 것은 무엇일까요?",
      choices: ["A. 꿈", "B. 그림자", "C. 구름", "D. 무지개"],
      correct: "D. 무지개"
    },
    {
      id: 20,
      category: "넌센스",
      difficulty: "보통",
      question: "어떤 방에는 문도 창문도 없습니다. 그 방에서 사람은 무엇을 할 수 있을까요?",
      choices: ["A. 나갈 수 있다", "B. 잠을 잘 수 있다", "C. 불을 켤 수 있다", "D. 나갈 수 없다"],
      correct: "B. 잠을 잘 수 있다"
    }
  ]
};

export default quizData;