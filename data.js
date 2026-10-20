/* =====================================================================
   한국어 월드 자료실 — 데이터 파일 (이 파일 하나만 고치면 돼요)
   =====================================================================

   ■ 새 영상 추가: VIDEOS 맨 아래에 한 줄 복사해서 붙이고 고치기
     { type: "story", level: "Beginner 1", title: "영상 제목", youtube: "https://youtu.be/xxxx" },
     - type: "story" = Story Videos / "repeat" = Repeat Videos
     - level: Beginner 1, Beginner 2, Beginner 3, Intermediate 1, Intermediate 2 중 하나
     - youtube: 유튜브 공유 링크를 그대로 붙여 넣으면 돼요(주소 모양은 상관없어요)

   ■ 새 책 에피소드 추가: EPISODES 맨 아래에 아래 덩어리를 복사해서 붙이고 고치기
     {
       book: "책 이름", level: "Beginner 1", episode: 2, title: "에피소드 제목(없어도 됨)",
       date: "2026-11-01",          // 올린 날짜. 14일 동안 "New" 표시가 붙어요
       images: ["tina-2.png", "tina-3.png"],   // 1~2장. 첫째는 글 맨 위, 둘째는 이야기 중간
       audio: "https://drive.google.com/file/d/xxxx/view?usp=sharing",   // 드라이브 공유 링크
       text: `
     첫 번째 문단.

     두 번째 문단. 문단 사이는 빈 줄 하나로 나눠요.
     `,
     },
     - 삽화: 그림 원본을 originals 폴더에 넣고 shrink-images.bat을 더블클릭하세요.
       images에는 원본 파일 이름을 그대로 적으면 돼요(예: "tina-2.png").
     - 둘째 그림을 원하는 곳에 넣고 싶으면 글 안에 [그림] 이라고 한 줄 적어요. 없으면 이야기 중간에 들어가요.
     - 오디오가 유튜브 영상이면: audio: "유튜브 링크", start: "2:15"  (그 시간부터 재생)
     - 오디오가 없으면 audio 줄을 지워요. 그러면 재생 창과 Listen only 버튼이 숨겨져요.
     - 글 안에 ` (백틱) 글자는 쓰지 마세요.

   ■ 레벨 칸은 항목이 하나라도 있을 때만 화면에 나와요.
   ===================================================================== */

var VIDEOS = [
  // ---------- Story Videos ----------
  { type: "story", level: "Beginner 1", title: "Peter Hates Bananas? EP1", youtube: "https://youtu.be/tPmjW4tIt5I" }, // 레벨 임시

  // ---------- Repeat Videos (새 채널 K-Storyteller) ----------
  { type: "repeat", level: "Beginner 1", title: "S0001 Where Is Jerry?", youtube: "https://youtu.be/zUzSxWer1bw" },      // 레벨 임시
  { type: "repeat", level: "Beginner 1", title: "S0002 Jerry Is at School", youtube: "https://youtu.be/I1SaaJyJJL0" },   // 레벨 임시
  { type: "repeat", level: "Beginner 1", title: "S0003 Do You Like Coffee?", youtube: "https://youtu.be/GwCR2M6txvc" },  // 레벨 임시
  { type: "repeat", level: "Beginner 1", title: "S0004 Do You Eat Kimchi?", youtube: "https://youtu.be/OC-3qYe1lhY" },   // 레벨 임시

  // ---------- Repeat Videos (섀도잉 문장구조, 예전 사이트에서 옮김) ----------
  { type: "repeat", level: "Beginner 1", title: "S000 제리가 한국에 있어요.", youtube: "https://youtu.be/j0WrUE7zo6c" },
  { type: "repeat", level: "Beginner 1", title: "S000-1 제리가 지금 학교에 있어요.", youtube: "https://youtu.be/YEgfIudEQ60" },
  { type: "repeat", level: "Beginner 1", title: "S000-2 요코도 한국에 있어요?", youtube: "https://youtu.be/0B-YhjdRlWI" },
  { type: "repeat", level: "Beginner 1", title: "S001 제리가 사람이에요", youtube: "https://youtu.be/u0ddWsLXtsU" },
  { type: "repeat", level: "Beginner 1", title: "S001-1 고릴라가 사람이 아니에요", youtube: "https://youtu.be/OHydusXOWWA" },
  { type: "repeat", level: "Beginner 1", title: "S002 제리가 매일 맥도날드에 가요", youtube: "https://youtu.be/KOGGMMWlXdo" },
  { type: "repeat", level: "Beginner 1", title: "S002-1 토요일에 일해요", youtube: "https://youtu.be/5er8QsD3Fzw" },

  { type: "repeat", level: "Beginner 2", title: "벌칙이 손목을 때리는 거였어", youtube: "https://youtu.be/uRtQ0Xvehog" },
  { type: "repeat", level: "Beginner 2", title: "벌칙이 손목을 때리는 거였어요", youtube: "https://youtu.be/zDV5zTmAKBA" },
  { type: "repeat", level: "Beginner 2", title: "가족들이랑 다 같이 햄버거를 시켜서 먹었어요", youtube: "https://youtu.be/6fgBL8GjgeQ" },
  { type: "repeat", level: "Beginner 2", title: "가족들이랑 다 같이 햄버거를 시켜서 먹었는데 엘리스가 또 햄버거를 다 안 먹고 남긴 거야", youtube: "https://youtu.be/yub5cU9E3oI" },
  { type: "repeat", level: "Beginner 2", title: "(간접화법 1) 제리가 롯데월드에 가자고 했어요", youtube: "https://youtu.be/-WR5O1aksE8" },

  { type: "repeat", level: "Beginner 3", title: "토니가 배고프다고 빵집에 가자는 거야", youtube: "https://youtu.be/tPYKTtj2vcM" },
  { type: "repeat", level: "Beginner 3", title: "토니가 배고프다고 빵집에 가자는 거예요", youtube: "https://youtu.be/6C2cyqF93mY" },

  { type: "repeat", level: "Intermediate 1", title: "S000 너 요즘에 소개팅녀랑 잘 되가냐?", youtube: "https://youtu.be/momhd8AzhW0" },

  // ---------- 레벨이 정해지지 않아 화면에 안 보이게 해 둔 영상 ----------
  // 레벨이 정해지면 맨 앞의 // 를 지우고 level을 채우세요.
  // { type: "repeat", level: "", title: "F001 먹을래?", youtube: "https://youtu.be/U3QPfe8c-So" },
  // { type: "repeat", level: "", title: "F002 우리 내일 영화 볼까", youtube: "https://youtu.be/bosuXygZUYU" },
  // { type: "repeat", level: "", title: "F003 거든 / 잖아", youtube: "https://youtu.be/VqglPFATXxM" },
  // { type: "repeat", level: "", title: "F004 거든요 잖아요", youtube: "https://youtu.be/zsbY6KNjdhg" },
  // { type: "repeat", level: "", title: "식당 한국어", youtube: "https://youtu.be/c2iIca8ocYs" },
];

var EPISODES = [
  {
    book: "티나 이야기", level: "Beginner 1", episode: 1, title: "티나가 배가 아파요.",
    date: "2026-09-07",
    images: ["tina-1.png"],
    audio: "https://drive.google.com/file/d/1MNvgjT1EupnOzarGHiNsj5AQRl6KRkpI/view?usp=drive_link",
    text: `
티나가 미국 사람이에요. 그런데 지금 미국에 안 살아요. 한국에 살아요. 아빠하고 엄마는 지금 미국에 있어요.

티나가 고모 집에서 살아요. 고모 집이 수원에 있어요. 티나가 BTS를 좋아해요. BTS 회사 빌딩이 서울에 있어요. 그래서 자주 서울에 가요. 매주 일요일에 서울에 가요. 버스로 서울에 가요.

오늘 일요일이에요. 티나가 아침 다섯 시에 일어났어요. "어? 다섯 시네." 너무 일찍 일어났어요. 그래서 다시 잤어요. 그리고 일곱 시에 다시 일어났어요. "티나야, 밥 먹어!" 고모가 토스트를 만들었어요. 티나가 토스트를 좋아해요. 그래서 토스트를 다섯 개 먹었어요. 많이 먹었어요. 티나가 콜라도 좋아해요. 그래서 콜라도 마셨어요. 그런데 티나가 다이어트를 해요. 그래서 제로 콜라를 마셨어요. 제로 콜라를 다섯 캔 마셨어요.

"아, 배 아파." 티나가 배가 아팠어요. 그래서 화장실에 갔어요. 그런데 배가 또 아팠어요. 그래서 또 화장실에 갔어요. 그런데 배가 또 아팠어요. 그래서 또 화장실에 갔어요. 티나가 오늘 아침에 화장실에 세 번 갔어요. 티나가 계속 배가 아팠어요. 그래서 오늘 서울에 안 갔어요.
`,
  },

  {
    book: "금고", level: "Intermediate 1", episode: 1, title: "",
    date: "",
    images: ["safe-1.png", "safe-2.png"],
    // 오디오: 블로그 글에 오디오 링크가 없어요. 생기면 audio 줄을 추가하세요.
    text: `
"너 지나 분식이라고 알아?" 민수가 물었다.

"어, 알아."

"거기 내 중학교 때 친구가 하는 가게인데, 이 동네에서 장사가 제일 잘되는 식당이야."

"동창 누구? 지훈이?"

"어. 걔네 은근히 부자야."

"근데 그게 왜?"

"재미있는 게 말이야… 걔네 집은 금고가 가게에 있어. 집이 아니고."

민수와 태호는 백수였다. 얼마 전에 두 사람은 회사에서 잘렸다. 그동안 모은 돈은 카지노에서 다 잃었다. 빚도 있었다. 민수는 2천만 원, 태호는 천만 원이었다. 두 사람은 지금 당장 돈이 필요했다.

"돈이 다 가게 금고에 있을 거야." 민수가 말했다.

"왜 은행이 아니고 가게에 있어?"

"걔네 부모님이 이상하게 은행을 싫어해."

"금고에 돈이 많아?"

"많을 거야. 지훈이 엄마 가게도 잘되고, 지훈이 아빠도 사업이 잘되거든."

"가게를 털자고?"

"응."

중학교 때 민수와 지훈이는 진짜 친했다. 민수는 그 가게에서 매일 김밥을 먹었다. 부엌 안에 있는 작은 금고도 그때 봤다.

태호가 잠깐 생각했다.

"근데 걔네 집, 가게 바로 위 아니야?"

지훈이네 집은 2층집이었다. 1층은 가게고, 2층은 지훈이네가 사는 집이었다.

"맞아."

"그럼 안 되지. 밤에도 같은 건물에 있을 거 아냐."

"그래서 다음 주에 털 생각이야."

"왜? 다음 주에는 집에 사람이 없어?"

"어, 다음 주에 지훈이네가 시골 할머니 집에 가."

"니가 어떻게 알아?"

"지난주에 지훈이를 만났어. 다 같이 할머니 집에 간다고 했어."

"다 가? 지훈이 부모님도?"

"응, 다 가. 다음 주에는 지훈이네 집에 아무도 없을 거야."

태호가 씩 웃었다. "좋아. 그럼 니가 가서 금고 한번 보고 와."

"알았어."

아직 8시 30분이라 지훈이네 가게가 영업 중이었다.

"어머, 민수야! 이게 얼마 만이야?"

아주머니가 웃으면서 나왔다. 민수도 어색하게 웃었다. 자연스러운 척하려고 했지만 쉽지 않았다.

"안녕하세요, 어머니."

"너희 엄마는 잘 계셔?"

"네. 엄마는 요즘 좀 바쁘세요."

"동생은?"

"고3이라서 요즘에 공부 열심히 해요. 지금도 학교에서 공부하고 있을 거예요."

"그래? 우리 지훈이도 지금 회사에서 일하고 있을 거야. 요즘에 야근을 많이 해. 너는 어때? 많이 바쁘지?"

민수는 웃으면서 "네"라고 했다. 사람들은 민수가 회사에서 잘린 걸 몰랐다.

"아버님은요?"

"지훈이 아빠는 사업 때문에 일본에 가. 지금쯤 공항에 도착했을 거야."

"아… 네…"

민수는 대화를 하는 척하면서 가게 안을 구석구석 봤다. 부엌 안에 그 금고가 아직 있었다. '돈이 다 저 금고 안에 있을 거야.' 민수가 속으로 생각했다.
`,
  },
];

/* ---------- 화면에서 뺀 예전 자료 (지우지 않고 기록만 해 둠) ----------
   게임 "나라 엄마의 하루": games/nara-mom-in-law/  (주소로 따로 열 수 있어요)
   웹소설 PDF "우리 사이, 괜찮지 않아요": https://drive.google.com/drive/folders/1eUwuxVoUNl5gUFaVCn-5IqinXiaXorbH?usp=drive_link
   오디오북 "우리 사이, 괜찮지 않아요" 1-4장: https://youtu.be/Hqq2thiCE38 / 5-7장: https://youtu.be/zE4ozICWFpk
   레슨 리뷰 오디오 기초 1: https://drive.google.com/drive/folders/1rQNVgdOKLVMe5pOksyTLEEgtmIG7-XON
   레슨 리뷰 오디오 기초 2: https://drive.google.com/drive/folders/12UYoJGjggJyKbAPMrz4PCRcWZrNqsPqV
   레슨 리뷰 오디오 기초 3: https://drive.google.com/drive/folders/1mDTCa9TtBxeBsAvivEKrPmmCCwRETL9c
   레슨 리뷰 오디오 중급 1: https://drive.google.com/drive/folders/1PmCNCc4K0_6IFxRznyMuSqqlYgjpxdXX
   레슨 리뷰 오디오 중급 2: https://drive.google.com/drive/folders/17VhGEVK3hzBdrzqfLyuGZSkqekOJ7F6k
*/
