# korean-story-world — 리딩 이야기 페이지 형식 (2026-11-15)

새 리딩 이야기(Books + Audio)는 금고·골목 국밥집처럼 **아래 전부**를 갖춰서 만든다. 주오가 말하지 않아도 같은 구성으로.
기본 사용법은 `data.js` 맨 위 주석과 README.md.

1. **data.js `EPISODES`**: book, level, episode, date, images, audio(또는 `audioSoon: true`), repeatVideos, target, text.
   - 본문은 받은 글을 글자 그대로 넣는다. 대사 이름표("수진:")는 평범한 글자로(순두부·중국집 방식).
   - target(Target structure 상자): 문형, 설명, 본문에 실제로 있는 예문 2개.
2. **그림**: 맨 위 큰 그림 1장 + 장면이 바뀌는 곳마다 `[그림]` 줄로 중간 그림(보통 5~6장, 최대 8장).
   원본은 `originals\`에 ASCII 이름(`이름-1.jpg`…)으로 넣고 `shrink-images.bat` → `img\`에 webp 150KB 이하. 그림은 원래 비율 그대로(잘라내지 않음, 얼굴 안 잘림).
3. **reading.js** `"책이름 번호"` 항목(이게 있어야 아래가 나온다):
   - `s`: 문장별 [한국어, 영어(대사는 "Sujin: …"처럼 말한 사람), (직역)]. 본문 순서·글자와 같아야 번호가 붙는다(전부 매칭되는지 확인).
   - `p`: Key expressions(표현 + 본문 예문). Practice video가 없으면 coming soon. `"r": 1`이면 그 이야기의 반복 영상 1번(data.js `repeatVideos`)을 그대로 씀 → 링크는 `repeatVideos`에 한 번만 넣는다.
   - `w`: Word list [단어, 뜻].
4. **반복 영상 버튼**: `repeatVideos: ["링크", …]`. 빈 따옴표는 버튼이 안 보임. Practice video(표현별)와는 역할이 달라 둘 다 둔다(전자는 이야기 전체, 후자는 그 표현이 나오는 영상).
5. **오디오**: 드라이브 speakthatkorean 계정의 레벨 폴더(I1 등)에 올리고 "링크 있는 누구나 보기"로 공유한 링크를 `audio`에. 올리기 전에는 `audioSoon: true`.
6. 확인: 로컬 서버로 열어 금고 페이지와 나란히 비교(그림, Target 상자, Key expressions, 접힌 Word list·English translation, 문장 번호 개수). commit까지만 하고 push는 주오가 말할 때.
