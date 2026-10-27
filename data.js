/* =====================================================================
   K-Storyteller Library — 데이터 파일 (이 파일 하나만 고치면 돼요)
   =====================================================================

   ■ 새 영상 추가: 아래 VIDEOS에서 그 영상이 들어 있는 유튜브 재생목록 칸을 찾아,
     videos: [ ... ] 안에 한 줄 복사해서 붙이고 고치기 (위에서 아래 순서대로 화면에 나와요)
       { title: "영상 제목", youtube: "https://youtu.be/xxxx", date: "2026-11-01" },
     - title: 유튜브 제목을 그대로 붙여 넣어요. 화면에는 앞뒤 반복 부분("Beginner Korean Shadowing |",
       "| S0001" 등)을 빼고 짧게 보여 주고, 번호(S022, EP1 등)는 작은 회색 글씨로 따로 보여 줘요
     - youtube: 유튜브 공유 링크를 그대로 붙여 넣으면 돼요(주소 모양은 상관없어요)
     - date: 사이트에 새로 올린 날짜. 날짜를 적은 영상·책만 첫 화면 "Just added" 줄에 나와요
       (최근 날짜 순으로 8개). 예전 영상처럼 date가 없으면 그 줄에 안 나와요

   ■ 새 재생목록(칸) 추가: { section: ... } 덩어리 하나를 통째로 복사해서 붙이고 고치기
     - section: "story" = Story Videos / "shadowing" = Shadowing / "hangul" = Hangul
     - playlist: 유튜브 재생목록 이름 그대로. 탭에는 마지막 " | " 뒤 부분만 보여요
       (예: "Korean Shadowing | Beginner 2" → 탭 이름 "Beginner 2")
     - ko: 탭에 영어 아래 작게 보일 한글 이름(예: "초급 2"). 없어도 돼요

   ■ 새 책 에피소드 추가: EPISODES 맨 아래에 아래 덩어리를 복사해서 붙이고 고치기
     {
       book: "책 이름", level: "Beginner 1", episode: 2, title: "에피소드 제목(없어도 됨)",
       date: "2026-11-01",          // 올린 날짜. 14일 동안 "New" 표시가 붙고, 첫 화면 New 줄에도 나와요
       images: ["tina-2.png", "tina-3.png"],   // 1~2장. 첫째는 글 맨 위, 둘째는 이야기 중간
       audio: "https://drive.google.com/file/d/xxxx/view?usp=sharing",   // 드라이브 공유 링크
       text: `
     첫 번째 문단.

     두 번째 문단. 문단 사이는 빈 줄 하나로 나눠요.
     `,
     },
     - 책 레벨: Beginner 1, Beginner 2, Beginner 3, Intermediate 1, Intermediate 2 중 하나
     - 삽화: 그림 원본을 originals 폴더에 넣고 shrink-images.bat을 더블클릭하세요.
       images에는 원본 파일 이름을 그대로 적으면 돼요(예: "tina-2.png").
     - 둘째 그림을 원하는 곳(글 끝도 됨)에 넣고 싶으면 글 안에 [그림] 이라고 한 줄 적어요. 없으면 이야기 중간에 들어가요.
     - 오디오가 유튜브 영상이면: audio: "유튜브 링크", start: "2:15"  (그 시간부터 재생)
     - 오디오가 없으면 audio 줄을 지워요. 그러면 재생 창과 모드 버튼이 숨겨져요.
     - 글 안에 ` (백틱) 글자는 쓰지 마세요.

   ■ 영상이나 책이 하나도 없는 칸(탭)은 화면에 나오지 않아요.
   ===================================================================== */

var VIDEOS = [

  // ==================== Story Videos ====================
  { section: "story", playlist: "Learn Korean Through Stories | Beginner", ko: "초급", videos: [
    { title: "Beginner Korean Story | Peter Hates Bananas? EP1", youtube: "https://youtu.be/tPmjW4tIt5I", date: "2026-10-20" },
    { title: "Beginner Korean Story | A Gorilla Works at Starbucks? EP2", youtube: "https://youtu.be/zlph8Dxw7MM", date: "2026-10-20" },
  ]},

  // ==================== Shadowing ====================
  { section: "shadowing", playlist: "Korean Shadowing | Beginner 1 (old)", ko: "초급 1", videos: [
    { title: "S011-2 제리가 마트에서 키위를 많이 샀어요.", youtube: "https://youtu.be/SnzDwWsADNo" },
    { title: "S000-2 요코도 한국에 있어요?", youtube: "https://youtu.be/0B-YhjdRlWI" },
    { title: "S002-X 제리가 언제 일해요?", youtube: "https://youtu.be/5er8QsD3Fzw" },
    { title: "S002-4 제리가 매일 맥도날드에 가요", youtube: "https://youtu.be/KOGGMMWlXdo" },
    { title: "S003 너 이 버스를  타?", youtube: "https://youtu.be/QvcqGIyoKEw" },
    { title: "S003-1 오늘은 음악을 안 들었어", youtube: "https://youtu.be/0PDhWHAcjoQ" },
    { title: "S000 제리가 한국에 있어요", youtube: "https://youtu.be/j0WrUE7zo6c" },
    { title: "S000-1 제리가 지금 학교에 있어요.", youtube: "https://youtu.be/YEgfIudEQ60" },
    { title: "S001 제리가 사람이에요", youtube: "https://youtu.be/u0ddWsLXtsU" },
    { title: "S001-1 고릴라가 사람이 아니에요", youtube: "https://youtu.be/OHydusXOWWA" },
    { title: "S002-3 요코가 비건이에요", youtube: "https://youtu.be/vaacbII9KK4" },
    { title: "S002 요코가 레이디 가가랑 일요일에 맥도날드에서 일해요", youtube: "https://youtu.be/DfhUcsQuL-E" },
    { title: "S002-1  제리가 버거킹에서 일해요? 맥도날드에서 일해요?", youtube: "https://youtu.be/yOOXFUVmmx0" },
    { title: "S002-2  제리가 버거킹에서 일해요? 공부해요?", youtube: "https://youtu.be/DF56oSKsAf8" },
    { title: "S003-1 내가 매일 아침에 버스에서 음악을 듣잖아", youtube: "https://youtu.be/F0UEYuF6ngw" },
    { title: "수영을 배우고 싶어요", youtube: "https://youtu.be/1Yy8DJlV_4Y" },
    { title: "수고하셨습니다", youtube: "https://youtu.be/tS_TBmRu-ks" },
    { title: "S004 제리가     강아지가  있어요", youtube: "https://youtu.be/c1vUxwRw3m4" },
    { title: "오트밀이 없으면 뭐 먹어요", youtube: "https://youtu.be/Dlf_oYZ-CF4" },
    { title: "요코는 술을 많이 마셔도 다음 날 머리가 안 아파요", youtube: "https://youtu.be/EfVOH1XqaKM" },
    { title: "S004-1 제리가 강아지가 한 마리 있어요.", youtube: "https://youtu.be/tCrsDPc_iFE" },
    { title: "날씨가 좋으면 밖에서 요가를 해요", youtube: "https://youtu.be/gKX3FDtpTXM" },
    { title: "어제 아침에 날씨가 좋아서 제리가 밖에서 요가를 했어요", youtube: "https://youtu.be/DDl_W_waUZc" },
    { title: "민수가 지금 서울에 살아요 전에는 부산에 살았어요", youtube: "https://youtu.be/8FCa-GB_Qc4" },
    { title: "오늘 토요일이에요", youtube: "https://youtu.be/0KBCcjHUjOU" },
    { title: "티나가 고모 집에서 살아요", youtube: "https://youtu.be/Y7-my-X0j-w" },
    { title: "요코가 오늘 아침에 스터디 카페에 시험을 준비하러 갔어요.", youtube: "https://youtu.be/QnVll_ZWJwM" },
    { title: "티나가 몇 시에 일어났어요", youtube: "https://youtu.be/2XZJMZI9C2M" },
    { title: "아, 배 아파", youtube: "https://youtu.be/jede514O3Yg" },
  ]},
  { section: "shadowing", playlist: "Korean Shadowing | Beginner 2", ko: "초급 2", videos: [
    { title: "S018-1 제리는 미국 사람이고 토니는 영국사람이에요", youtube: "https://youtu.be/Y9QlQyF8bWg" },
    { title: "S022 제리는 강아지를 가지고 싶어해요 Audio only", youtube: "https://youtu.be/UC4a4QyhRwk" },
    { title: "S023 제리는 강아지를 사러 갔어요", youtube: "https://youtu.be/zoFsR02O5Yg" },
    { title: "간접화법", youtube: "https://youtu.be/w52HMaNf0b8" },
    { title: "간접화법 3", youtube: "https://youtu.be/puLLAeS_4SI" },
    { title: "간접화법 4", youtube: "https://youtu.be/_gM4JRbBXBA" },
    { title: "S022 제리는 강아지를 가지고 싶어해요 Part 1", youtube: "https://youtu.be/fvXfltW6y6w" },
    { title: "S022 제리는 강아지를 가지고 싶어해요 Part 2", youtube: "https://youtu.be/C1upUISb21Q" },
    { title: "S022 제리는 강아지를 가지고 싶어해요 Part 3", youtube: "https://youtu.be/8HNzPtbpY3k" },
    { title: "S024 제리는 한국말을 할 수 있어요", youtube: "https://youtu.be/8r6AmILfVjQ" },
    { title: "간접화법 5", youtube: "https://youtu.be/SEfQFY4nl90" },
    { title: "벌칙이 손목을 때리는 거 였어", youtube: "https://youtu.be/uRtQ0Xvehog" },
    { title: "벌칙이 손목을 때리는 거 였어요", youtube: "https://youtu.be/zDV5zTmAKBA" },
    { title: "어제 가족들이랑 다 같이 햄버거를 시켜서 먹었는데 엘리스가 또 햄버거를 다 안 먹고 남긴 거야", youtube: "https://youtu.be/yub5cU9E3oI" },
    { title: "오늘 제리가 가족들이랑 다 같이 햄버거를 시켜서 먹었어요", youtube: "https://youtu.be/6fgBL8GjgeQ" },
    { title: "(간접화법 1) 제리가 롯데월드에 가자고 했어요", youtube: "https://youtu.be/-WR5O1aksE8" },
    { title: "어제 나하고 동생들이 엄마한테 쿠키 만들어 달라고 졸랐거든", youtube: "https://youtu.be/EL0FAHmog2s" },
    { title: "(반말) 어제가 생일이라서 강아지들한테 ‘강아지 쿠키’를 만들어 주고 싶었거든", youtube: "https://youtu.be/RELFnmDTdO0" },
    { title: "(존댓말) 어제가 생일이라서 강아지들한테 ‘강아지 쿠키’를 만들어 주고 싶었거든요", youtube: "https://youtu.be/f_zus_HmkDM" },
    { title: "제리가 강아지를 사고 싶어해요", youtube: "https://youtu.be/j8owXkzlmZw" },
    { title: "민수가 오늘 저녁에 부산에 가야 돼요", youtube: "https://youtu.be/ofh9H4HdIzA" },
    { title: "이번에는  100kg 바벨을 들어봤는데 이번에는 너무 무겁더라구", youtube: "https://youtu.be/A3gp6p15oaQ" },
    { title: "먹지 마  그거 상했어", youtube: "https://youtu.be/5QM8y4Kia7M" },
    { title: "S023 new 제리가 강아지를 사러 갔어요", youtube: "https://youtu.be/Xbw441soIzU" },
    { title: "제리가 반바지를 입고 나갔어요", youtube: "https://youtu.be/t8JmTWejN3o", date: "2026-10-26" },
    { title: "돈이 2천원 밖에 없었어요", youtube: "https://youtu.be/0bjJatCxJWM" },
    { title: "민수가 오늘 아침을 조금밖에 안 먹었어요", youtube: "https://youtu.be/2qX2iZCCe1M" },
    { title: "토니가 직업이 의사예요", youtube: "https://youtu.be/8JIhoPqQo_g" },
    { title: "제리 할아버지가 담배를 끊기로 했어요", youtube: "https://youtu.be/X8bAik9LpnE" },
    { title: "제리가  내일 롯데월드에 가자고 했어요", youtube: "https://youtu.be/59w1dyTxdqg" },
    { title: "제리가 오늘 비가 오는데 밖에서 축구를 해서 옷이 다 젖었어요.", youtube: "https://youtu.be/kP6PqxpOmfA" },
    { title: "제리가 제일 좋아하는 음식은 돈까스예요.", youtube: "https://youtu.be/Tt_oNk8LuPk" },
    { title: "미주가 배가 아파서 엄마가 미주를 병원에 데리고 갔어요.", youtube: "https://youtu.be/s3U9-j2fl3s" },
    { title: "뭐 하려고?", youtube: "https://youtu.be/I-8nxp6h2kY" },
    { title: "미주가 강아지를 집에 데리고 왔어요", youtube: "https://youtu.be/ep6u4ypk3N4", date: "2026-10-26" },
    { title: "민수가 공부를 잘 못해요. ( 그렇지만) 서울 대학교에 가고 싶어해요.", youtube: "https://youtu.be/51PYqobRMB4", date: "2026-10-26" },
    { title: "태형이하고 민주가 강아지를 주인한테 데려다 줬어요.", youtube: "https://youtu.be/nS9T5G3mznQ", date: "2026-10-26" },
    { title: "이 사람이 지금 앉아서 물을 마시고 있어요", youtube: "https://youtu.be/YdADhVvJGkg", date: "2026-10-27" },
    { title: "민수가 수영을 할 수 있어요", youtube: "https://youtu.be/APyeZiKEfaM", date: "2026-10-27" },
    { title: "민수가 바벨을 10kg에서 100kg으로 바꿨어요", youtube: "https://youtu.be/4XkidYDgFxQ", date: "2026-10-27" },
    { title: "제리가 보통 안경을 끼고 학교에 가요", youtube: "https://youtu.be/1EX2R9IzAjM", date: "2026-10-27" },
  ]},
  { section: "shadowing", playlist: "Korean Shadowing | Beginner 3", ko: "초급 3", videos: [
    { title: "토니가 배고프다고 빵집에 가자는 거야", youtube: "https://youtu.be/tPYKTtj2vcM" },
    { title: "토니가 배고프다고 빵집에 가자는 거예요", youtube: "https://youtu.be/6C2cyqF93mY" },
    { title: "헤어지자는 말이야", youtube: "https://youtu.be/yrc7Arrtie4" },
    { title: "내가 이제 그만하자고 하니까 무슨 말이냐고 묻는 거야.", youtube: "https://youtu.be/rjdRDbSmaL8" },
    { title: "어머님, 이거 좀 도와주세요", youtube: "https://youtu.be/ARsxQtxl3UU" },
    // ↓ "Long Repetition" 재생목록에서 이 칸으로 옮긴 영상 (재생목록 순서 그대로)
    { title: "S043   내일 일찍 일어나야 돼요", youtube: "https://youtu.be/7gy7KhXBPSw" },
    { title: "S042    맛있는 거 먹는 거 좋아해?", youtube: "https://youtu.be/bVvi0XwCLHo" },
    { title: "S041  이거 니 거야?", youtube: "https://youtu.be/pmNeZp0IpU8" },
    { title: "S040 제리가 앉을 수 있게 아버지가 가방을 뒷자석으로 옮겼어요", youtube: "https://youtu.be/xZN67cYyIQs" },
    { title: "S039  제리는 보통 아침을 먹기 전에 이를 닦아요", youtube: "https://youtu.be/Nf6aZajSBso" },
    { title: "S038 민수야 오늘 비 올지도 모르니까 우산 세 개만 챙겨", youtube: "https://youtu.be/U2Pu4lcsTOU" },
    { title: "S037 배우는 연기를 잘 해야 돼요.", youtube: "https://youtu.be/z17MG6ybAbk" },
    { title: "S036 너 하루에 몇 시간 자?", youtube: "https://youtu.be/jVHxXAHvwM4" },
    { title: "S035 제리가 매일 15번 버스를 타고 학교에 가요", youtube: "https://youtu.be/t4aILpXaFOU" },
    { title: "S034 어제 공원에서 2시간 동안 걸었어요", youtube: "https://youtu.be/TTitkxebJ8k" },
    { title: "S033 제리가 캠핑을 가기로 했어요", youtube: "https://youtu.be/x4dKLKf7Is0" },
    { title: "S031 제리는 오늘 비가 오는데 밖에서 축구를 해서 제리옷이 다 젖었어요", youtube: "https://youtu.be/F9JEuWN_z9s" },
    { title: "S030 티나는 전에 비건이 아니었어요", youtube: "https://youtu.be/j4WAE5YFzm8" },
    { title: "S029 현빈은 주인공이어서 사랑의 불시착에 많이 나와요", youtube: "https://youtu.be/WmLcvubxwP8" },
    { title: "S028 누나, 내가 마시던 우유 못 봤어", youtube: "https://youtu.be/xKY9tm_v1yg" },
    { title: "S027 어렸을 때 자주 가던 식당 이름이 기억이 안나요", youtube: "https://youtu.be/dhf7yD2Z1so" },
    { title: "S026 제가 제일 좋아하는 한국 음식은 떡볶이예요", youtube: "https://youtu.be/CmU6RSyK35A" },
    { title: "S025 삼성 핸드폰이 있어야 삼성 페이를 쓸 수 있어요", youtube: "https://youtu.be/XqqpZi0Ee1c" },
    { title: "간접화법 2 Amended", youtube: "https://youtu.be/KlmRMcPgBco" },
    // ↓ 새로 추가한 영상
    { title: "비가 와서 그런지 파전이 더 맛있었어요", youtube: "https://youtu.be/My0sj9RZ5g4", date: "2026-10-20" },
    { title: "이 집 파전은 좀 비싸기는 한데 맛있어.", youtube: "https://youtu.be/y1BBV_Y5ZUY", date: "2026-10-20" },
    { title: "아니거든, 바삭하거든!", youtube: "https://youtu.be/qIqn167HrEs", date: "2026-10-26" },
  ]},
  { section: "shadowing", playlist: "Korean Shadowing | Intermediate", ko: "중급", videos: [
    { title: "너 요즘에 소개팅녀랑 잘 되가냐?", youtube: "https://youtu.be/momhd8AzhW0" },
    { title: "한 번도 돈을 안 내는 거야", youtube: "https://youtu.be/VvdpMBLnkAI" },
    { title: "나 목요일에 민수랑 모모코랑 영화 보러 다녀왔거든", youtube: "https://youtu.be/IZda9ebomtQ" },
    { title: "키오스크에서 표 사려고 하는데, 좋은 자리는 이미 다 팔렸더라구", youtube: "https://youtu.be/rsnrmAJMlP0" },
    { title: "민수가 젤 좋아하는 영화라고도 말하고 염정아랑 문근영 같은 유명한 배우들도 나온다고도 말해서 좀 기대감이 생겼어", youtube: "https://youtu.be/C0F8A9XZf-0" },
    // ↓ "Long Repetition" 재생목록에서 이 칸으로 옮긴 영상 (재생목록 순서 그대로)
    { title: "서울에 맛집 좀 추천해 주세요.", youtube: "https://youtu.be/Mxh4MnC2mcU" },
    { title: "준호야 오랜만이야", youtube: "https://youtu.be/6JHuBziWL-k" },
    { title: "야, 햄버거가 당기는데땡기는데, 롯데리아 갈래", youtube: "https://youtu.be/WVjU24paufA" },
  ]},
  { section: "shadowing", playlist: "Beginner Korean Shadowing | Series 1", ko: "시리즈 1", videos: [
    { title: "Beginner Korean Shadowing | Where Is Jerry? | S0001", youtube: "https://youtu.be/zUzSxWer1bw", date: "2026-10-20" },
    { title: "Beginner Korean Shadowing | Jerry Is at School | S0002", youtube: "https://youtu.be/I1SaaJyJJL0", date: "2026-10-20" },
    { title: "Beginner Korean Shadowing | Do You Like Coffee? | S0003", youtube: "https://youtu.be/GwCR2M6txvc", date: "2026-10-20" },
    { title: "Beginner Korean Shadowing | Do You Eat Kimchi? | S0004", youtube: "https://youtu.be/OC-3qYe1lhY", date: "2026-10-20" },
  ]},
  { section: "shadowing", playlist: "Korean Shadowing | Sentence Endings", ko: "문장 종결 어미", videos: [
    { title: "F001 먹을래?", youtube: "https://youtu.be/U3QPfe8c-So" },
    { title: "F002 우리 내일 영화 볼까", youtube: "https://youtu.be/bosuXygZUYU" },
    { title: "F003  거든 /  잖아 반말", youtube: "https://youtu.be/VqglPFATXxM" },
    { title: "F004  거든요  잖아요 존댓말", youtube: "https://youtu.be/zsbY6KNjdhg" },
  ]},
  { section: "shadowing", playlist: "Korean Shadowing | Real-Life Situations", ko: "상황별 한국어", videos: [
    { title: "식당 한국어", youtube: "https://youtu.be/c2iIca8ocYs" },
  ]},

  // ==================== Hangul ====================
  { section: "hangul", playlist: "한글 (Korean Alphabet)", videos: [
    { title: "한글 1 (아 야 어 여 가 갸 거 겨 나 냐 너 녀)", youtube: "https://youtu.be/IcHob0k5S8k" },
  ]},
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
    book: "금고", level: "Beginner 3", episode: 1, title: "",
    date: "2026-10-01",
    images: ["safe-1.png", "safe-2.png"],   // 둘째 그림은 결말 장면이라 글 끝([그림])에 둠
    audio: "https://drive.google.com/file/d/14kY8WI1GHgnZHgw9-SSZ0OVvP7bi44eo/view",
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

[그림]
`,
  },

  {
    book: "우리 사이, 괜찮지 않아요", level: "Intermediate 2", episode: 1, title: "최악의 첫 만남",
    date: "2026-10-20",
    images: ["urisai-1.jpeg"],
    audio: "https://youtu.be/Hqq2thiCE38", start: "0:00",
    text: `
지수가 오늘 새 직장에 첫 출근을 했다. 너무 긴장해서 아침을 못 먹었다. 밥을 먹으려고 했는데 입이 안 열렸다. 위장도 꽉 닫혀 있는 것 같았다.

지하철을 타고 가는데 갑자기 배가 고팠다. 긴장할 때는 안 고프다가, 지하철에 앉으니까 갑자기 허기가 몰려왔다. 가방 안에서 아까 편의점에서 산 샌드위치를 꺼냈다. '조금만 먹자. 첫날인데 배고프면 안 되지.'

그 순간 지하철이 흔들렸다.

샌드위치가 손에서 날아갔다. 지수의 시간이 느려졌다. 샌드위치가 공중에서 한 바퀴 돌더니, 옆에 서 있던 남자의 흰색 양복 위에 그대로 떨어졌다.

"아!"

지수가 소리를 질렀다. 남자가 천천히 아래를 내려다봤다. 흰 양복에 샌드위치 자국이 선명하게 남아 있었다. 지수가 가방에서 휴지를 꺼내서 닦으려고 했다. 그런데 닦을수록 더 번졌다.

"죄송합니다. 죄송합니다."

손이 떨렸다. 얼굴이 뜨거워졌다.

남자가 지수를 봤다. 화를 내지 않았다. 소리를 지르지도 않았다. 그냥 조용히 말했다.

"됐어요."

딱 한 마디였다. 그런데 그 한 마디가 화를 내는 것보다 훨씬 무거웠다. 지수는 그 남자의 눈을 똑바로 볼 수가 없었다.

다음 역에서 그 남자가 내렸다. 남자는 한 번도 뒤를 돌아보지 않았다.

지수는 빈 자리에 주저앉았다. 심장이 아직도 두근거렸다. 손에는 반쯤 뭉개진 휴지만 남아 있었다.

'다시는 안 볼 사람이지만 미안하네.' 지수는 그렇게 생각했다.

그 생각이 완전히 틀렸다는 걸 그 때는 몰랐다.
`,
  },

  {
    book: "우리 사이, 괜찮지 않아요", level: "Intermediate 2", episode: 2, title: "그 남자가 사장님이다",
    date: "2026-10-20",
    images: ["urisai-2.jpeg"],
    audio: "https://youtu.be/Hqq2thiCE38", start: "2:37",
    text: `
회사 인사팀 앞에서 기다리는 동안 지수는 심호흡을 세 번 했다. '오늘부터 진짜 시작이다. 잘할 수 있다.' 속으로 계속 생각했지만 가슴이 조금 떨렸다.

그 때 복도에서 발소리가 들렸다. 지수가 고개를 들었다.

심장이 내려앉았다.

아까 지하철에서 만난 그 남자였다. 흰 양복은 이미 다른 옷으로 갈아입었지만, 그 얼굴은 틀림없었다. 차갑고 표정이 없는, 그 얼굴.

남자가 지수 앞에서 멈췄다.

"오늘부터 일하는 신입이에요?"

지수는 입이 안 열렸다. 뭐라고 말해야 할지 몰랐다. 머릿속이 하얘졌다.

옆에서 인사팀 직원이 말했다. "네, 이지수씨예요. 지수씨, 이분이 우리 회사 대표님이에요. 강하준 대표님."

사장님이었다.

지수는 그 자리에서 조용히 죽고 싶었다. 첫날부터, 사장님 양복에 샌드위치를 던진 것이다.

강하준이 지수를 봤다. 딱 한 번 봤다. 그리고 말했다.

"열심히 해요."

그게 다였다. 강하준은 지나갔다. 지수는 그 뒷모습을 보면서 생각했다.

'나 잘릴 수도 있겠다.'
`,
  },

  {
    book: "우리 사이, 괜찮지 않아요", level: "Intermediate 2", episode: 3, title: "무서운 것 같으면서도 안 무서운 대표님",
    date: "2026-10-20",
    images: ["urisai-3.jpeg"],
    audio: "https://youtu.be/Hqq2thiCE38", start: "4:25",
    text: `
일주일이 지났다. 지수는 조금씩 회사에 익숙해졌다. 그러면서 한 가지를 알게 됐다.

대표님은 좀 이상한 사람이었다.

매일 아침 7시에 출근하고 밤 11시에 퇴근했다. 밥은 항상 혼자 먹었다. 웃는 걸 거의 본 적이 없었다. 직원들은 그를 무서워했고, 지수도 처음에는 무서웠다.

그런데 어느 날 밤, 지수가 야근을 하고 있을 때였다. 밤 9시였다. 사무실에 지수 혼자 남아 있었다. 눈이 뻑뻑하고 배가 고팠지만, 일이 아직 끝나지 않았다.

그 때 강하준이 지수 자리 옆을 지나갔다. 그리고 멈췄다.

"저녁 먹었어요?"

지수가 고개를 들었다. 강하준이 자신을 보고 있었다. 지수는 순간 무슨 말인지 못 알아들었다.

"네?"

"밥 먹었냐구요"

"아, 아직요."

강하준이 뭔가를 지수 책상 위에 놓았다. 그리고 아무 말 없이 자기 방으로 들어갔다.

편의점 삼각김밥이었다.

지수는 삼각김밥을 한참 봤다. 그리고 웃음이 나왔다. 저도 모르게 나온 웃음이었다.

'이상한 사람이네.' 지수가 생각했다. 그런데 기분이 나쁘지 않았다. 오히려 배가 고픈 것도 잠깐 잊었다.

*저도 모르게 = 자기도 모르게 without realizing it
`,
  },

  {
    book: "우리 사이, 괜찮지 않아요", level: "Intermediate 2", episode: 4, title: "대표님의 비밀",
    date: "2026-10-20",
    images: ["urisai-4.jpeg"],
    audio: "https://youtu.be/Hqq2thiCE38", start: "6:26",
    text: `
한 달이 지났다. 지수는 강하준이 조금씩 궁금해졌다. 왜 항상 혼자인지, 왜 그렇게 오래 일하는지, 집에는 가는지.

어느 날 지수가 자료를 찾으러 문서 보관실에 들어갔다. 그런데 자료실 한쪽에 그림들이 세워져 있었다. 지수가 가까이 가서 봤다.

숨이 멈출 정도로 아름다운 그림들이었다. 온기가 느껴지는 그림들이었다. 그림 속 사람들이 살아있는 것 같았다.

지수가 그림을 보면서 혼자 중얼거렸다.

'누구 그림이지?'

갑자기 뒤에서 목소리가 들렸다.

"내 그림이에요."

지수가 깜짝 놀라서 뒤를 돌아봤다. 강하준이었다.

"죄송해요! 자료 찾으러 왔다가…"

지수가 다시 그림을 봤다. 그리고 강하준을 봤다. 이 차갑고 말이 없는 사람이, 이렇게 따뜻한 그림을 그렸다는 게 잘 믿기지 않았다.

"이렇게 아름다운 그림들을 왜 여기 숨겨놨어요?"

강하준이 그림들을 바라봤다. 잠시 동안 아무 말도 없었다. 주변이 조용해졌다. 지수는 그 침묵이 어색했다.

"아무한테도 말하지 마요."

그가 나갔다.

지수는 혼자 남아서 그림들을 다시 둘러봤다. 그림 속 여자가 웃고 있었다. 왜 숨겨놨을까. 궁금했다. 그리고 왠지 모르게 신경이 쓰였다.
`,
  },

  {
    book: "우리 사이, 괜찮지 않아요", level: "Intermediate 2", episode: 5, title: "전 남자친구가 나타났다",
    date: "2026-10-20",
    images: ["urisai-5.jpeg"],
    audio: "https://youtu.be/zE4ozICWFpk", start: "0:00",
    text: `
다음 날 아침, 지수가 회사 로비를 지나 엘리베이터를 타려고 할 때였다. 지수보다 먼저 엘리베이터를 기다리고 있던 어떤 남자와 눈이 마주쳤다. 1년 전에 헤어진 전 남자친구 서준이었다. 엘리베이터 문이 열렸는데도 지수는 그 자리에서 꼼짝할 수 없었다. 머릿속이 혼란스러웠다.

어느 날 갑자기 이유도 제대로 말하지 않고 헤어지자고 했던 이 사람을 지수는 지금 어떻게 대해야 할지 몰랐다.

"오랜만이다." 서준이 웃으면서 말했다.

지수는 웃지 않았다.

"어, 오랜만이네. 우리 회사엔 무슨 일로?"

"나 이번에 이 회사에 컨설팅 들어왔어. 한 달 동안 여기서 일해."

한 달. 지수는 속으로 한숨을 쉬었다. 한 달이나 이 사람 얼굴을 봐야 한다는 게 너무 싫었다.

그 때 뒤에서 강하준이 걸어왔다. 서준이 강하준을 보고 먼저 인사를 했다.

"안녕하십니까, 대표님"

"네, 안녕하세요"

강하준의 목소리는 언제나 그렇듯이 차가웠다.

강하준이 지수를 봤다. 지수는 표정 관리를 못 하고 있었다. 눈동자는 불안했고 얼굴은 굳어 있었다. 강하준은 그걸 봤지만 아무 말도 하지 않았다.

그날 지수는 하루 종일 모니터가 눈에 안 들어왔다. 화면을 보면서도 머릿속에는 온통 다른 생각들뿐이었다. 지수는 아직도 서준이 왜 헤어지자고 했는지 모른다. 분명 서로 사랑하고 있다고 생각했고 영원할 거라고 믿었다. 헤어진 후 힘들었던 날이 머릿속에 계속 떠올랐다. 이 남자는 왜 이제 와서 내 앞에 나타난 걸까?
`,
  },

  {
    book: "우리 사이, 괜찮지 않아요", level: "Intermediate 2", episode: 6, title: "옥상에서",
    date: "2026-10-20",
    images: ["urisai-6.jpeg"],
    audio: "https://youtu.be/zE4ozICWFpk", start: "2:20",
    text: `
며칠이 지났다. 공교롭게도 서준은 지수와 같은 층에서 일을 했다. 지수는 서준을 최대한 피하려고 했다. 사무실에서 서준이 말을 걸면 짧게 대답하고 자리를 피했다. 그게 지수가 할 수 있는 최선이었다.

어느 날 점심시간에 지수는 옥상으로 올라갔다. 팀원들이 같이 밥을 먹자고 했지만 지수는 혼자 밥을 먹는 게 좋았다. 가끔은 아무도 없는 곳에서 쉬고 싶었다.

그런데 강하준이 거기 있었다. 혼자 도시락을 먹고 있었다.

'뭐야? 회사 대표가 혼자 옥상에서 도시락을 먹는다고?'

지수는 이 광경이 너무 낯설었다.

두 사람이 서로를 봤다.

"맛있게 드세요. 제가 다른 데로 갈게요." 지수가 말했다.

"여기 넓어요." 강하준이 말했다.

지수는 멀리 떨어져 앉았다. 두 사람이 말없이 밥을 먹었다. 어색했다. 그런데 이상하게, 그 침묵이 불편하지 않았다. 사무실에서 다른 사람들과 억지로 웃으며 대화하는 것보다 오히려 편했다.

"손서준씨 알아요?" 강하준이 갑자기 물었다.

지수가 젓가락질을 멈췄다. "네…아는 사람이에요."

"많이 힘들어 보였어요. 며칠 동안."

지수가 강하준을 봤다. 강하준은 지수를 보지 않고 도시락만 쳐다보면서 먹었다.

"괜찮아요." 지수가 말했다.

"그 말은 괜찮지 않을 때 하는 말이에요." 강하준이 조용히 말했다.

지수는 아무 말도 하지 못했다. 맞는 말이었다. 지수 자신도 알고 있었다. 괜찮지 않다는 걸. 그냥 괜찮다고 말하는 게 편해서 그렇게 말하고 있었다는 걸.

바람이 불었다. 지수는 하늘을 봤다.
`,
  },

  {
    book: "우리 사이, 괜찮지 않아요", level: "Intermediate 2", episode: 7, title: "서준의 과거",
    date: "2026-10-20",
    images: ["urisai-7.jpeg"],
    audio: "https://youtu.be/zE4ozICWFpk", start: "4:45",
    text: `
퇴근 시간에 지수가 엘리베이터를 기다리고 있었다. 그 때 서준이 엘리베이터 쪽으로 걸어왔다. 지수의 표정이 굳어졌다.

"지수야, 우리 얘기 좀 할까? 잠깐이면 돼"

"나 바빠." 지수가 말했다. 물론 바쁘지 않았다. 간신히 지운 과거로 다시 돌아가고 싶지 않았다.

"딱 5분만." 서준이 말했다.

지수가 대답하지 않았다. 서준은 그걸 허락으로 받아들이고 지수 옆에 서서 말했다.

"나 다시 시작하고 싶어."

엘리베이터 문이 열렸다. 지수가 들어갔다. 서준도 따라 들어왔다.

"지수야…"

"됐어. 다 끝난 일이잖아." 지수가 말했다. 지수의 목소리는 차가웠다.

서준은 어떤 말을 하려고 하다가 한숨을 쉬며 입을 닫았다.

문이 열렸다. 지수가 나갔다. 뒤를 돌아보지 않았다.

건물 밖으로 나오니까 11월 밤공기가 차가웠다. 지수가 크게 숨을 들이쉬었다. 기분이 이상했다. 슬프지 않았다. 더 이상 답답하지도 않았다. 오히려 몸이 가벼웠다. 오랫동안 들고 있던 무거운 걸 내려놓은 것 같은 느낌이었다.

── ☆ ──

그 시각, 서준은 회사 근처 작은 술집 구석 자리에 혼자 앉아 있었다. 한 모금도 마시지 않은 맥주잔을 두 손으로 잡고만 있었다.

형이 떠난 건 7년 전이었다.

교통사고였다. 모두에게 너무 갑작스러운 일이었다. 어머니는 한 달 동안 방에서 나오지 않았고, 아버지는 웃지 않았다. 형의 죽음은 서준에게 슬픔보다 압박감을 주었다.

'니 형이 되어줘.'

아무도 서준에게 그 말을 하지 않았다. 그러나 서준은 자기가 무엇을 해야 하는지 알았다.

서준은 원래 건축학과였다. 공간을 설계하는 게 좋았다. 사람들이 살아가는 장소를 만드는 일이 의미 있다고 생각했다. 그런데 형이 죽은 후, 그 꿈이 사치처럼 느껴지기 시작했다.

원래 부모님이 기대했던 건 서준이 아니라, 형이었다. MBA를 따고 막 컨설팅 회사에 들어간 형. 이제 집안을 일으킬 형. 그러나 이제 형은 없다. 서준이 그 자리를 채워야 했다. 그래서 건축을 포기했다. 형처럼 MBA를 땄다. 그리고 형처럼 컨설팅 회사에 들어갔다. 부모님이 조금씩 웃기 시작했다. 이제 부모님은 서준에게 기대를 하기 시작했다.

지수를 만난 건 그 즈음이었다.

서준은 지수랑 있을 때만 숨이 쉬어졌다. 지수는 서준에게 형 얘기도, 집안 얘기도 묻지 않았다. 그냥 옆에 있었다. 그게 좋았다. 그런데 어느 순간부터 그 편안함이 두려워졌다. 내가 다른 사람에게 이렇게 기대도 되나. 이렇게 행복해도 되나. 나는 성공해야 되는데.

결국 서준은 도망쳤다.

이유도 말하지 않고. 변명도 없이. 그냥 헤어지자고 했다. 이해할 수 없다는 지수의 표정을 지금도 기억한다.

서준이 맥주잔을 들었다. 한 모금 마셨다. 맥주가 더 이상 차갑지 않았다.

늦었다는 걸 알고 있었다. 알면서도 지수 옆에 있고 싶었다. 서준은 자기가 지수한테 돌아가고 싶은 건지, 아니면 그 편안함으로 돌아가고 싶은 건지 혼란스러웠다.

잔을 내려놓았다. 11월의 밤은 너무 쓸쓸했다.
`,
  },
];

/* ---------- 화면에서 뺀 예전 자료 (지우지 않고 기록만 해 둠) ----------
   게임 "나라 엄마의 하루": games/nara-mom-in-law/  (주소로 따로 열 수 있어요)
   웹소설 PDF "우리 사이, 괜찮지 않아요": https://drive.google.com/drive/folders/1eUwuxVoUNl5gUFaVCn-5IqinXiaXorbH?usp=drive_link
   오디오북 "우리 사이, 괜찮지 않아요" 1-4장: https://youtu.be/Hqq2thiCE38 / 5-7장: https://youtu.be/zE4ozICWFpk  (지금은 책 에피소드 오디오로 씀)
   레슨 리뷰 오디오 기초 1: https://drive.google.com/drive/folders/1rQNVgdOKLVMe5pOksyTLEEgtmIG7-XON
   레슨 리뷰 오디오 기초 2: https://drive.google.com/drive/folders/12UYoJGjggJyKbAPMrz4PCRcWZrNqsPqV
   레슨 리뷰 오디오 기초 3: https://drive.google.com/drive/folders/1mDTCa9TtBxeBsAvivEKrPmmCCwRETL9c
   레슨 리뷰 오디오 중급 1: https://drive.google.com/drive/folders/1PmCNCc4K0_6IFxRznyMuSqqlYgjpxdXX
   레슨 리뷰 오디오 중급 2: https://drive.google.com/drive/folders/17VhGEVK3hzBdrzqfLyuGZSkqekOJ7F6k
*/
