const BiologySelection = [{
    id: 1,
    question: "껍질이 두껍고 의주치와 측치가 발달했나요?",
    answers: [
        { text: "네", value: "2"},
        { text: "아니오",value: "7" },
    ],
},{
    id: 2,
    question: "패각의 크기는 중형이고 교판이 좁은가요?",
    answers: [
        { text: "네",value: "Unioninae"},
        { text: "아니오 넓고 강합니다.", value: "AmbleMinae" },
    ],
},{
    id: 3,
    question: "패각과 측치의 형태가 어떤가요?",
    answers: [
        { text: "패각은 둥글고 측치는 둥글게 휘어있다.", isCorrect: true, value:"Coreana" },
        { text: "패각은 긴 타원형이고 측치는 직선형이다.", isCorrect: false, value:"Leai" },
    ],
},{
    id: 4,
    question: "패각은 대형이고 오로지 측지만 발달했나요?",
    answers: [
        { text: "네", isCorrect: true,value: "Hyriopsinae" },
        { text: "아니오 중형이고 교치가 없습니다.", isCorrect: false, value: "Anodontinae" },
    ],
},
{
    id: 5,
    question: "패각은 중형이고 각정은 비교적 패각 등면의 위치하고 등면은 배면과 평행한가요?",
    answers: [
        { text: "네", value:"5" },
        { text: "아니오", value:"5N"},
    ],
},
{
    id: 6,
    question: "각고가 낮고 배면 가장자리는 직선적이며 등면 가장자리와 평행을 이루나요?",
    answers: [
        { text: "네", value:"Arcaeformis" },
        { text: "아니오", value:"Arcaeformis_flavotincta"},
    ],
},{
    id: 7,
    question: "패각은 중형에서 대형이고 등면은 사선으로 기울며 뒤쪽 등면에 판상의 돌출물이 나타나나요?",
    answers: [
        { text: "네",value: "Woodina" },
        { text: "아니오", value: "Unde" },
    ],
},
];

export {BiologySelection};

