/* 이야기 페이지의 핵심 표현(연습 영상), 단어 목록, 번역. 이야기 본문은 data.js에 있어요.
   p: e 표현, s 타겟 문장, v 영상 id, t 영상 제목, ev 그 영상 대본의 증거 문장(화면에는 안 나와요). v가 없으면 빈 칸.
   w: [단어, 뜻], s: [한국어, Natural, Literal(있을 때만)] */
var READING = {
"티나 이야기 1": {
"s": [
[
"티나가 미국 사람이에요.",
"Tina is American."
],
[
"그런데 지금 미국에 안 살아요.",
"But she doesn't live in America now."
],
[
"한국에 살아요.",
"She lives in Korea."
],
[
"아빠하고 엄마는 지금 미국에 있어요.",
"Her dad and mom are in America now."
],
[
"티나가 고모 집에서 살아요.",
"Tina lives at her aunt's house."
],
[
"고모 집이 수원에 있어요.",
"Her aunt's house is in Suwon."
],
[
"티나가 BTS를 좋아해요.",
"Tina likes BTS."
],
[
"BTS 회사 빌딩이 서울에 있어요.",
"The BTS company building is in Seoul."
],
[
"그래서 자주 서울에 가요.",
"So she often goes to Seoul."
],
[
"매주 일요일에 서울에 가요.",
"She goes to Seoul every Sunday."
],
[
"버스로 서울에 가요.",
"She goes to Seoul by bus."
],
[
"오늘 일요일이에요.",
"Today is Sunday."
],
[
"티나가 아침 다섯 시에 일어났어요.",
"Tina woke up at five in the morning."
],
[
"\"어? 다섯 시네.\"",
"\"Huh? It's five.\"",
"\"Huh? It's five o'clock, I see.\""
],
[
"너무 일찍 일어났어요.",
"She woke up too early."
],
[
"그래서 다시 잤어요.",
"So she went back to sleep."
],
[
"그리고 일곱 시에 다시 일어났어요.",
"Then she woke up again at seven."
],
[
"\"티나야, 밥 먹어!\"",
"\"Tina, come eat!\"",
"\"Tina, eat your meal!\""
],
[
"고모가 토스트를 만들었어요.",
"Her aunt made toast."
],
[
"티나가 토스트를 좋아해요.",
"Tina likes toast."
],
[
"그래서 토스트를 다섯 개 먹었어요.",
"So she ate five pieces of toast.",
"So she ate toast, five pieces."
],
[
"많이 먹었어요.",
"She ate a lot."
],
[
"티나가 콜라도 좋아해요.",
"Tina likes cola too."
],
[
"그래서 콜라도 마셨어요.",
"So she drank cola too."
],
[
"그런데 티나가 다이어트를 해요.",
"But Tina is on a diet."
],
[
"그래서 제로 콜라를 마셨어요.",
"So she drank Coke Zero."
],
[
"제로 콜라를 다섯 캔 마셨어요.",
"She drank five cans of Coke Zero.",
"She drank Coke Zero, five cans."
],
[
"\"아, 배 아파.\"",
"\"Ugh, my stomach hurts.\""
],
[
"티나가 배가 아팠어요.",
"Tina had a stomachache.",
"Tina, her stomach hurt."
],
[
"그래서 화장실에 갔어요.",
"So she went to the bathroom."
],
[
"그런데 배가 또 아팠어요.",
"But her stomach hurt again."
],
[
"그래서 또 화장실에 갔어요.",
"So she went to the bathroom again."
],
[
"그런데 배가 또 아팠어요.",
"But her stomach hurt again."
],
[
"그래서 또 화장실에 갔어요.",
"So she went to the bathroom again."
],
[
"티나가 오늘 아침에 화장실에 세 번 갔어요.",
"Tina went to the bathroom three times this morning."
],
[
"티나가 계속 배가 아팠어요.",
"Her stomach kept hurting."
],
[
"그래서 오늘 서울에 안 갔어요.",
"So she didn't go to Seoul today."
]
],
"w": [
[
"미국 사람",
"American (person)"
],
[
"그런데",
"but"
],
[
"살아요",
"live"
],
[
"아빠 / 엄마",
"dad / mom"
],
[
"고모",
"aunt (dad's sister)"
],
[
"집",
"house, home"
],
[
"좋아해요",
"like"
],
[
"회사",
"company"
],
[
"그래서",
"so"
],
[
"자주",
"often"
],
[
"매주",
"every week"
],
[
"일요일",
"Sunday"
],
[
"버스로",
"by bus"
],
[
"아침",
"morning"
],
[
"다섯 시 / 일곱 시",
"5 o'clock / 7 o'clock"
],
[
"일어났어요",
"woke up"
],
[
"너무 일찍",
"too early"
],
[
"다시",
"again"
],
[
"잤어요",
"slept"
],
[
"밥 먹어!",
"Come eat!"
],
[
"만들었어요",
"made"
],
[
"다섯 개",
"five (pieces)"
],
[
"많이",
"a lot"
],
[
"마셨어요",
"drank"
],
[
"다이어트를 해요",
"is on a diet"
],
[
"캔",
"can"
],
[
"배가 아팠어요",
"(her) stomach hurt"
],
[
"화장실",
"bathroom"
],
[
"또",
"again, once more"
],
[
"세 번",
"three times"
],
[
"계속",
"kept (~ing)"
],
[
"안 갔어요",
"didn't go"
]
],
"p": [
{
"e": "가요 / 갔어요",
"s": "매주 일요일에 서울에 가요.",
"v": "Y7-my-X0j-w",
"t": "티나가 고모 집에서 살아요",
"ev": "그래서 자주 서울에 가요. 매주 일요일에 버스로 서울에 가요."
},
{
"e": "아파요 / 아팠어요",
"s": "티나가 배가 아팠어요.",
"v": "jede514O3Yg",
"t": "아, 배 아파",
"ev": "티나가 배가 아팠어요."
},
{
"e": "좋아해요 / 좋아했어요",
"s": "티나가 BTS를 좋아해요.",
"v": "Y7-my-X0j-w",
"t": "티나가 고모 집에서 살아요",
"ev": "티나가 BTS를 좋아해요. BTS 회사 빌딩이 서울에 있어요."
},
{
"e": "마셔요 / 마셨어요",
"s": "제로 콜라를 다섯 캔 마셨어요.",
"v": "2XZJMZI9C2M",
"t": "티나가 몇 시에 일어났어요",
"ev": "티나가 다이어트를 해요. 그래서 제로 콜라를 마셨어요."
},
{
"e": "먹어요 / 먹었어요",
"s": "그래서 토스트를 다섯 개 먹었어요.",
"v": "2XZJMZI9C2M",
"t": "티나가 몇 시에 일어났어요",
"ev": "티나가 토스트를 다섯 개 먹었어요. 많이 먹었어요."
},
{
"e": "살아요 / 살았어요",
"s": "티나가 고모 집에서 살아요.",
"v": "Y7-my-X0j-w",
"t": "티나가 고모 집에서 살아요",
"ev": "티나가 고모 집에서 살아요"
}
]
},
"우리 사이, 괜찮지 않아요 1": {
"s": [
[
"지수가 오늘 새 직장에 첫 출근을 했다.",
"Today was Jisu's first day at her new job.",
"Today Jisu did her first going-to-work at a new workplace."
],
[
"너무 긴장해서 아침을 못 먹었다.",
"She was so nervous that she couldn't eat breakfast.",
"Being too nervous, she could not eat breakfast."
],
[
"밥을 먹으려고 했는데 입이 안 열렸다.",
"She tried to eat, but she couldn't get her mouth to open.",
"She tried to eat a meal, but her mouth did not open."
],
[
"위장도 꽉 닫혀 있는 것 같았다.",
"Even her stomach felt shut tight."
],
[
"지하철을 타고 가는데 갑자기 배가 고팠다.",
"On the subway, she suddenly got hungry.",
"While she was riding the subway, suddenly her stomach was hungry."
],
[
"긴장할 때는 안 고프다가, 지하철에 앉으니까 갑자기 허기가 몰려왔다.",
"She hadn't been hungry while she was nervous, but once she sat down on the subway, hunger suddenly hit her.",
"When she was nervous she was not hungry, and then, because she sat down on the subway, hunger suddenly rushed in."
],
[
"가방 안에서 아까 편의점에서 산 샌드위치를 꺼냈다.",
"She took out of her bag the sandwich she had bought earlier at a convenience store."
],
[
"'조금만 먹자. 첫날인데 배고프면 안 되지.'",
"'I'll just have a little. I can't be hungry on my first day.'",
"'Let's eat just a little. It's the first day, so being hungry won't do.'"
],
[
"그 순간 지하철이 흔들렸다.",
"At that moment, the subway shook."
],
[
"샌드위치가 손에서 날아갔다.",
"The sandwich flew out of her hand."
],
[
"지수의 시간이 느려졌다.",
"Time slowed down for Jisu.",
"Jisu's time became slow."
],
[
"샌드위치가 공중에서 한 바퀴 돌더니, 옆에 서 있던 남자의 흰색 양복 위에 그대로 떨어졌다.",
"The sandwich spun once in the air, then landed right on the white suit of the man standing next to her.",
"The sandwich turned one circle in the air, and then fell just as it was onto the white suit of the man who had been standing beside her."
],
[
"\"아!\"",
"\"Ah!\""
],
[
"지수가 소리를 질렀다.",
"Jisu cried out."
],
[
"남자가 천천히 아래를 내려다봤다.",
"The man slowly looked down."
],
[
"흰 양복에 샌드위치 자국이 선명하게 남아 있었다.",
"A sandwich stain stood out clearly on his white suit."
],
[
"지수가 가방에서 휴지를 꺼내서 닦으려고 했다.",
"Jisu took a tissue from her bag and tried to wipe it off."
],
[
"그런데 닦을수록 더 번졌다.",
"But the more she wiped, the more it spread."
],
[
"\"죄송합니다. 죄송합니다.\"",
"\"I'm sorry. I'm sorry.\""
],
[
"손이 떨렸다.",
"Her hands shook."
],
[
"얼굴이 뜨거워졌다.",
"Her face became hot."
],
[
"남자가 지수를 봤다.",
"The man looked at Jisu."
],
[
"화를 내지 않았다.",
"He didn't get angry.",
"He did not let out anger."
],
[
"소리를 지르지도 않았다.",
"He didn't yell either."
],
[
"그냥 조용히 말했다.",
"He just said quietly:"
],
[
"\"됐어요.\"",
"\"Never mind.\"",
"\"It's done.\""
],
[
"딱 한 마디였다.",
"It was just one word."
],
[
"그런데 그 한 마디가 화를 내는 것보다 훨씬 무거웠다.",
"But that one word felt much heavier than anger."
],
[
"지수는 그 남자의 눈을 똑바로 볼 수가 없었다.",
"Jisu couldn't look him in the eye."
],
[
"다음 역에서 그 남자가 내렸다.",
"The man got off at the next station."
],
[
"남자는 한 번도 뒤를 돌아보지 않았다.",
"He didn't look back even once."
],
[
"지수는 빈 자리에 주저앉았다.",
"Jisu sank into an empty seat."
],
[
"심장이 아직도 두근거렸다.",
"Her heart was still pounding."
],
[
"손에는 반쯤 뭉개진 휴지만 남아 있었다.",
"All that was left in her hand was a half-crushed tissue.",
"Only a half-crushed tissue remained in her hand."
],
[
"'다시는 안 볼 사람이지만 미안하네.'",
"'I'll never see him again, but I still feel bad.'",
"'He is a person I won't see again, but I feel sorry.'"
],
[
"지수는 그렇게 생각했다.",
"That's what Jisu thought."
],
[
"그 생각이 완전히 틀렸다는 걸 그 때는 몰랐다.",
"She had no idea then how wrong she was.",
"She did not know at that time that this thought was completely wrong."
]
],
"w": [
[
"직장",
"workplace"
],
[
"첫 출근",
"first day at work"
],
[
"긴장하다",
"to be nervous"
],
[
"위장",
"stomach"
],
[
"꽉",
"tightly"
],
[
"허기",
"hunger"
],
[
"몰려오다",
"to rush in"
],
[
"편의점",
"convenience store"
],
[
"꺼내다",
"to take out"
],
[
"흔들리다",
"to shake"
],
[
"날아가다",
"to fly away"
],
[
"공중",
"the air"
],
[
"양복",
"suit"
],
[
"소리를 지르다",
"to shout"
],
[
"내려다보다",
"to look down"
],
[
"자국",
"stain, mark"
],
[
"선명하게",
"clearly"
],
[
"휴지",
"tissue"
],
[
"닦다",
"to wipe"
],
[
"번지다",
"to spread"
],
[
"떨리다",
"to shake, to tremble"
],
[
"화를 내다",
"to get angry"
],
[
"한 마디",
"one word"
],
[
"무겁다",
"to be heavy"
],
[
"똑바로",
"straight"
],
[
"돌아보다",
"to look back"
],
[
"주저앉다",
"to sink down"
],
[
"두근거리다",
"to pound (heart)"
],
[
"뭉개지다",
"to be crushed"
],
[
"틀리다",
"to be wrong"
]
],
"p": [
{
"e": "-(으)려고 했는데",
"s": "밥을 먹으려고 했는데 입이 안 열렸다.",
"v": "0bjJatCxJWM",
"t": "돈이 2천원 밖에 없었어요",
"ev": "김치김밥을 사려고 했는데, (김치김밥이) 2500원이었어요."
},
{
"e": "-(으)ㄹ수록",
"s": "그런데 닦을수록 더 번졌다."
},
{
"e": "-(으)ㄹ 수가 없다",
"s": "지수는 그 남자의 눈을 똑바로 볼 수가 없었다."
}
]
},
"금고 1": {
"s": [
[
"\"너 지나 분식이라고 알아?\" 민수가 물었다.",
"\"Do you know Jina Bunsik?\" Minsu asked.",
"\"You, do you know a place called Jina Bunsik?\" Minsu asked."
],
[
"\"어, 알아.\"",
"\"Yeah, I know it.\""
],
[
"\"거기 내 중학교 때 친구가 하는 가게인데, 이 동네에서 장사가 제일 잘되는 식당이야.\"",
"\"It's run by a friend of mine from middle school, and it's the most successful restaurant in this neighborhood.\"",
"\"That place is a shop my friend from middle school runs, and it's the restaurant where business goes best in this neighborhood.\""
],
[
"\"동창 누구? 지훈이?\"",
"\"Which classmate? Jihun?\""
],
[
"\"어. 걔네 은근히 부자야.\"",
"\"Yeah. His family is quietly rich.\""
],
[
"\"근데 그게 왜?\"",
"\"But why do you ask?\"",
"\"But that, why?\""
],
[
"\"재미있는 게 말이야… 걔네 집은 금고가 가게에 있어. 집이 아니고.\"",
"\"Here's the funny thing... their safe is at the shop, not at home.\"",
"\"The interesting thing is... his family, the safe is at the shop. Not the house.\""
],
[
"민수와 태호는 백수였다.",
"Minsu and Taeho were jobless."
],
[
"얼마 전에 두 사람은 회사에서 잘렸다.",
"Not long ago, the two of them were fired from their company."
],
[
"그동안 모은 돈은 카지노에서 다 잃었다.",
"They had lost all the money they had saved at a casino."
],
[
"빚도 있었다.",
"They had debts too."
],
[
"민수는 2천만 원, 태호는 천만 원이었다.",
"Minsu owed 20 million won, and Taeho owed 10 million won.",
"Minsu was 20 million won, and Taeho was 10 million won."
],
[
"두 사람은 지금 당장 돈이 필요했다.",
"The two of them needed money right now."
],
[
"\"돈이 다 가게 금고에 있을 거야.\" 민수가 말했다.",
"\"The money is probably all in the store's safe,\" Minsu said."
],
[
"\"왜 은행이 아니고 가게에 있어?\"",
"\"Why is it in the store and not in a bank?\""
],
[
"\"걔네 부모님이 이상하게 은행을 싫어해.\"",
"\"His parents, strangely, hate banks.\""
],
[
"\"금고에 돈이 많아?\"",
"\"Is there a lot of money in the safe?\""
],
[
"\"많을 거야. 지훈이 엄마 가게도 잘되고, 지훈이 아빠도 사업이 잘되거든.\"",
"\"There probably is. Jihun's mom's shop does well, and his dad's business does well too.\"",
"\"It's probably a lot. Jihun's mom's shop goes well too, and Jihun's dad, his business goes well too, you see.\""
],
[
"\"가게를 털자고?\"",
"\"You're saying we should rob the store?\""
],
[
"\"응.\"",
"\"Yeah.\""
],
[
"중학교 때 민수와 지훈이는 진짜 친했다.",
"In middle school, Minsu and Jihun were really close."
],
[
"민수는 그 가게에서 매일 김밥을 먹었다.",
"Minsu ate gimbap at that shop every day."
],
[
"부엌 안에 있는 작은 금고도 그때 봤다.",
"He had also seen the small safe in the kitchen back then."
],
[
"태호가 잠깐 생각했다.",
"Taeho thought for a moment."
],
[
"\"근데 걔네 집, 가게 바로 위 아니야?\"",
"\"But isn't their house right above the shop?\""
],
[
"지훈이네 집은 2층집이었다.",
"Jihun's family lived in a two-story house.",
"Jihun's family's house was a two-story house."
],
[
"1층은 가게고, 2층은 지훈이네가 사는 집이었다.",
"The first floor was the shop, and the second floor was where Jihun's family lived."
],
[
"\"맞아.\"",
"\"That's right.\""
],
[
"\"그럼 안 되지. 밤에도 같은 건물에 있을 거 아냐.\"",
"\"Then it won't work. They'll be in the same building at night too.\"",
"\"Then it's no good. They'll be in the same building at night too, won't they?\""
],
[
"\"그래서 다음 주에 털 생각이야.\"",
"\"That's why I'm thinking of doing it next week.\"",
"\"So my thought is to rob it next week.\""
],
[
"\"왜? 다음 주에는 집에 사람이 없어?\"",
"\"Why? Will nobody be home next week?\"",
"\"Why? Next week, are there no people at home?\""
],
[
"\"어, 다음 주에 지훈이네가 시골 할머니 집에 가.\"",
"\"Yeah, next week Jihun's family is going to his grandmother's house in the country.\""
],
[
"\"니가 어떻게 알아?\"",
"\"How do you know?\""
],
[
"\"지난주에 지훈이를 만났어. 다 같이 할머니 집에 간다고 했어.\"",
"\"I met Jihun last week. He said they're all going to his grandmother's house together.\""
],
[
"\"다 가? 지훈이 부모님도?\"",
"\"Are they all going? His parents too?\""
],
[
"\"응, 다 가. 다음 주에는 지훈이네 집에 아무도 없을 거야.\"",
"\"Yeah, all of them. Next week nobody will be at Jihun's house.\""
],
[
"태호가 씩 웃었다.",
"Taeho grinned."
],
[
"\"좋아. 그럼 니가 가서 금고 한번 보고 와.\"",
"\"Good. Then go take a look at the safe.\"",
"\"Good. Then you go, take one look at the safe, and come back.\""
],
[
"\"알았어.\"",
"\"Got it.\""
],
[
"아직 8시 30분이라 지훈이네 가게가 영업 중이었다.",
"It was only 8:30, so Jihun's family's shop was still open.",
"Because it was still 8:30, Jihun's family's shop was in the middle of business."
],
[
"\"어머, 민수야! 이게 얼마 만이야?\"",
"\"Oh my, Minsu! It's been so long!\"",
"\"Oh my, Minsu! How long has this been?\""
],
[
"아주머니가 웃으면서 나왔다.",
"Jihun's mother came out smiling."
],
[
"민수도 어색하게 웃었다.",
"Minsu smiled awkwardly too."
],
[
"자연스러운 척하려고 했지만 쉽지 않았다.",
"He tried to act natural, but it wasn't easy."
],
[
"\"안녕하세요, 어머니.\"",
"\"Hello, ma'am.\"",
"\"Hello, Mother.\""
],
[
"\"너희 엄마는 잘 계셔?\"",
"\"How's your mom doing?\"",
"\"Is your mom staying well?\""
],
[
"\"네. 엄마는 요즘 좀 바쁘세요.\"",
"\"Yes. My mom is a little busy these days.\""
],
[
"\"동생은?\"",
"\"And your younger sibling?\""
],
[
"\"고3이라서 요즘에 공부 열심히 해요. 지금도 학교에서 공부하고 있을 거예요.\"",
"\"My sibling is in the last year of high school, so they study hard these days. They're probably studying at school even now.\""
],
[
"\"그래? 우리 지훈이도 지금 회사에서 일하고 있을 거야. 요즘에 야근을 많이 해. 너는 어때? 많이 바쁘지?\"",
"\"Really? Our Jihun is probably at work right now too. He works late a lot these days. How about you? Very busy, right?\""
],
[
"민수는 웃으면서 \"네\"라고 했다.",
"Minsu smiled and said, \"Yes.\""
],
[
"사람들은 민수가 회사에서 잘린 걸 몰랐다.",
"People didn't know that Minsu had been fired."
],
[
"\"아버님은요?\"",
"\"And your husband?\"",
"\"And Father?\""
],
[
"\"지훈이 아빠는 사업 때문에 일본에 가. 지금쯤 공항에 도착했을 거야.\"",
"\"Jihun's dad is going to Japan for business. He has probably arrived at the airport by now.\""
],
[
"\"아… 네…\"",
"\"Oh... yes...\""
],
[
"민수는 대화를 하는 척하면서 가게 안을 구석구석 봤다.",
"Pretending to chat, Minsu looked over every corner of the shop.",
"While pretending to have a conversation, Minsu looked at every corner inside the shop."
],
[
"부엌 안에 그 금고가 아직 있었다.",
"The safe was still in the kitchen."
],
[
"'돈이 다 저 금고 안에 있을 거야.' 민수가 속으로 생각했다.",
"'The money is probably all in that safe,' Minsu thought to himself."
]
],
"w": [
[
"분식",
"Korean snack food"
],
[
"금고",
"safe"
],
[
"동창",
"classmate from school"
],
[
"장사가 잘되다",
"business goes well"
],
[
"은근히",
"quietly, secretly"
],
[
"백수",
"jobless person"
],
[
"잘리다",
"to get fired"
],
[
"모으다",
"to save up"
],
[
"잃다",
"to lose"
],
[
"빚",
"debt"
],
[
"당장",
"right now"
],
[
"사업",
"business"
],
[
"털다",
"to rob"
],
[
"친하다",
"to be close (friends)"
],
[
"부엌",
"kitchen"
],
[
"시골",
"the countryside"
],
[
"씩 웃다",
"to grin"
],
[
"영업 중",
"open for business"
],
[
"어색하게",
"awkwardly"
],
[
"~인 척하다",
"to pretend to ~"
],
[
"자연스럽다",
"to be natural"
],
[
"고3",
"last year of high school"
],
[
"야근",
"working late"
],
[
"도착하다",
"to arrive"
],
[
"구석구석",
"every corner"
],
[
"속으로",
"to oneself, inwardly"
]
],
"p": [
{
"e": "-(으)ㄹ 거예요 / -(으)ㄹ 거야 (guessing)",
"s": "돈이 다 가게 금고에 있을 거야."
},
{
"e": "-았/었을 거예요 / -았/었을 거야 (guessing)",
"s": "지금쯤 공항에 도착했을 거야."
}
]
},
"우리 사이, 괜찮지 않아요 2": {
"s": [
[
"회사 인사팀 앞에서 기다리는 동안 지수는 심호흡을 세 번 했다.",
"While waiting outside the company's HR team, Jisu took three deep breaths."
],
[
"'오늘부터 진짜 시작이다. 잘할 수 있다.'",
"'It really starts today. I can do this.'",
"'From today it's the real start. I can do well.'"
],
[
"속으로 계속 생각했지만 가슴이 조금 떨렸다.",
"She kept telling herself that, but her chest trembled a little.",
"She kept thinking it inside, but her chest trembled a little."
],
[
"그 때 복도에서 발소리가 들렸다.",
"Just then, she heard footsteps in the hallway.",
"At that moment, footsteps were heard from the hallway."
],
[
"지수가 고개를 들었다.",
"Jisu looked up.",
"Jisu lifted her head."
],
[
"심장이 내려앉았다.",
"Her heart sank."
],
[
"아까 지하철에서 만난 그 남자였다.",
"It was the man she had met on the subway earlier."
],
[
"흰 양복은 이미 다른 옷으로 갈아입었지만, 그 얼굴은 틀림없었다.",
"He had already changed out of the white suit, but there was no mistaking that face."
],
[
"차갑고 표정이 없는, 그 얼굴.",
"That cold, expressionless face."
],
[
"남자가 지수 앞에서 멈췄다.",
"The man stopped in front of Jisu."
],
[
"\"오늘부터 일하는 신입이에요?\"",
"\"Are you the new hire starting today?\"",
"\"Are you the newcomer who works from today?\""
],
[
"지수는 입이 안 열렸다.",
"Jisu couldn't open her mouth.",
"Jisu, her mouth did not open."
],
[
"뭐라고 말해야 할지 몰랐다.",
"She didn't know what she should say."
],
[
"머릿속이 하얘졌다.",
"Her mind went blank.",
"The inside of her head turned white."
],
[
"옆에서 인사팀 직원이 말했다.",
"An HR employee next to her said:"
],
[
"\"네, 이지수씨예요. 지수씨, 이분이 우리 회사 대표님이에요. 강하준 대표님.\"",
"\"Yes, this is Lee Jisu. Jisu, this is our company's CEO, Mr. Kang Hajun.\""
],
[
"사장님이었다.",
"He was the boss."
],
[
"지수는 그 자리에서 조용히 죽고 싶었다.",
"Jisu wanted to quietly die on the spot."
],
[
"첫날부터, 사장님 양복에 샌드위치를 던진 것이다.",
"On her very first day, she had thrown a sandwich at the boss's suit.",
"From the first day, it was that she threw a sandwich onto the boss's suit."
],
[
"강하준이 지수를 봤다.",
"Kang Hajun looked at Jisu."
],
[
"딱 한 번 봤다.",
"He looked just once."
],
[
"그리고 말했다.",
"Then he said:"
],
[
"\"열심히 해요.\"",
"\"Work hard.\""
],
[
"그게 다였다.",
"That was all."
],
[
"강하준은 지나갔다.",
"Kang Hajun walked past."
],
[
"지수는 그 뒷모습을 보면서 생각했다.",
"Watching his back, Jisu thought:"
],
[
"'나 잘릴 수도 있겠다.'",
"'I might get fired.'"
]
],
"w": [
[
"인사팀",
"HR team"
],
[
"심호흡",
"deep breath"
],
[
"속으로",
"inwardly, to oneself"
],
[
"떨리다",
"to tremble"
],
[
"복도",
"hallway"
],
[
"발소리",
"footsteps"
],
[
"고개를 들다",
"to look up"
],
[
"심장이 내려앉다",
"one's heart sinks"
],
[
"양복",
"suit"
],
[
"갈아입다",
"to change clothes"
],
[
"틀림없다",
"to be certain, no mistake"
],
[
"표정",
"facial expression"
],
[
"멈추다",
"to stop"
],
[
"신입",
"new employee"
],
[
"머릿속이 하얘지다",
"one's mind goes blank"
],
[
"직원",
"employee"
],
[
"대표님",
"CEO"
],
[
"사장님",
"boss, company owner"
],
[
"첫날",
"the first day"
],
[
"던지다",
"to throw"
],
[
"지나가다",
"to pass by"
],
[
"뒷모습",
"someone's back, view from behind"
],
[
"잘리다",
"to get fired"
]
],
"p": [
{
"e": "-아/어야 할지 모르다",
"s": "뭐라고 말해야 할지 몰랐다."
},
{
"e": "-(으)ㄹ 수도 있다",
"s": "'나 잘릴 수도 있겠다.'",
"v": "xZN67cYyIQs",
"t": "S040 제리가 앉을 수 있게 아버지가 가방을 뒷자석으로 옮겼어요",
"ev": "오늘 눈이 와서 차가 막힐 수도 있으니까 콘서트 시간에 늦지 않게 두 사람이 일찍 집에서 나왔어요."
},
{
"e": "-(으)면서",
"s": "지수는 그 뒷모습을 보면서 생각했다.",
"v": "yub5cU9E3oI",
"t": "어제 가족들이랑 다 같이 햄버거를 시켜서 먹었는데 엘리스가 또 햄버거를 다 안 먹고 남긴 거야",
"ev": "그래서 엄마가 엘리스한테 막 짜증내면서 왜 음식을 다 안 먹고 남기냐고 했어."
}
]
},
"우리 사이, 괜찮지 않아요 3": {
"s": [
[
"일주일이 지났다.",
"A week passed."
],
[
"지수는 조금씩 회사에 익숙해졌다.",
"Jisu gradually got used to the company."
],
[
"그러면서 한 가지를 알게 됐다.",
"Along the way, she came to realize one thing.",
"And while doing that, she came to know one thing."
],
[
"대표님은 좀 이상한 사람이었다.",
"The CEO was a bit of a strange person."
],
[
"매일 아침 7시에 출근하고 밤 11시에 퇴근했다.",
"He came to work at 7 every morning and left at 11 at night."
],
[
"밥은 항상 혼자 먹었다.",
"He always ate alone."
],
[
"웃는 걸 거의 본 적이 없었다.",
"She had almost never seen him smile.",
"She had almost no experience of seeing him smile."
],
[
"직원들은 그를 무서워했고, 지수도 처음에는 무서웠다.",
"The employees were afraid of him, and at first Jisu was scared too."
],
[
"그런데 어느 날 밤, 지수가 야근을 하고 있을 때였다.",
"But it was one night, when Jisu was working late."
],
[
"밤 9시였다.",
"It was 9 p.m."
],
[
"사무실에 지수 혼자 남아 있었다.",
"Jisu was the only one left in the office."
],
[
"눈이 뻑뻑하고 배가 고팠지만, 일이 아직 끝나지 않았다.",
"Her eyes were dry and she was hungry, but the work wasn't finished yet."
],
[
"그 때 강하준이 지수 자리 옆을 지나갔다.",
"Just then, Kang Hajun walked past Jisu's desk."
],
[
"그리고 멈췄다.",
"And he stopped."
],
[
"\"저녁 먹었어요?\"",
"\"Have you had dinner?\""
],
[
"지수가 고개를 들었다.",
"Jisu looked up.",
"Jisu lifted her head."
],
[
"강하준이 자신을 보고 있었다.",
"Kang Hajun was looking at her."
],
[
"지수는 순간 무슨 말인지 못 알아들었다.",
"For a moment, Jisu didn't understand what he meant.",
"For a moment, Jisu could not catch what words they were."
],
[
"\"네?\"",
"\"Sorry?\"",
"\"Yes?\""
],
[
"\"밥 먹었냐구요\"",
"\"I asked if you've eaten.\"",
"\"I'm saying, did you eat a meal.\""
],
[
"\"아, 아직요.\"",
"\"Oh, not yet.\""
],
[
"강하준이 뭔가를 지수 책상 위에 놓았다.",
"Kang Hajun put something on Jisu's desk."
],
[
"그리고 아무 말 없이 자기 방으로 들어갔다.",
"Then he went into his office without a word."
],
[
"편의점 삼각김밥이었다.",
"It was a convenience store triangle kimbap."
],
[
"지수는 삼각김밥을 한참 봤다.",
"Jisu looked at the triangle kimbap for a long time."
],
[
"그리고 웃음이 나왔다.",
"Then she started to laugh.",
"And a laugh came out."
],
[
"저도 모르게 나온 웃음이었다.",
"It was a laugh that came out without her realizing it."
],
[
"'이상한 사람이네.' 지수가 생각했다.",
"'What a strange person,' Jisu thought."
],
[
"그런데 기분이 나쁘지 않았다.",
"But she didn't feel bad."
],
[
"오히려 배가 고픈 것도 잠깐 잊었다.",
"In fact, she even forgot for a moment that she was hungry."
]
],
"w": [
[
"익숙해지다",
"to get used to"
],
[
"출근하다",
"to go to work"
],
[
"퇴근하다",
"to leave work"
],
[
"무서워하다",
"to be afraid of"
],
[
"야근",
"working late"
],
[
"사무실",
"office"
],
[
"뻑뻑하다",
"to feel dry (eyes)"
],
[
"자리",
"seat, desk"
],
[
"지나가다",
"to pass by"
],
[
"알아듣다",
"to understand (by hearing)"
],
[
"책상",
"desk"
],
[
"아무 말 없이",
"without a word"
],
[
"편의점",
"convenience store"
],
[
"삼각김밥",
"triangle kimbap"
],
[
"한참",
"for a long time"
],
[
"웃음",
"a laugh, a smile"
],
[
"저도 모르게",
"without realizing it"
],
[
"기분",
"feeling, mood"
],
[
"오히려",
"rather, in fact"
],
[
"잠깐",
"for a moment"
]
],
"p": [
{
"e": "-(으)ㄴ 적이 없다",
"s": "웃는 걸 거의 본 적이 없었다.",
"v": "VvdpMBLnkAI",
"t": "한 번도 돈을 안 내는 거야",
"ev": "어… 저는 데이트할 때 한번도 돈을 내본 적이 없는데요?"
},
{
"e": "-고 있을 때",
"s": "그런데 어느 날 밤, 지수가 야근을 하고 있을 때였다."
},
{
"e": "저도 모르게",
"s": "저도 모르게 나온 웃음이었다."
}
]
},
"우리 사이, 괜찮지 않아요 4": {
"s": [
[
"한 달이 지났다.",
"A month passed."
],
[
"지수는 강하준이 조금씩 궁금해졌다.",
"Jisu grew more and more curious about Kang Hajun."
],
[
"왜 항상 혼자인지, 왜 그렇게 오래 일하는지, 집에는 가는지.",
"Why he was always alone, why he worked so long, whether he ever went home."
],
[
"어느 날 지수가 자료를 찾으러 문서 보관실에 들어갔다.",
"One day Jisu went into the document room to find some materials."
],
[
"그런데 자료실 한쪽에 그림들이 세워져 있었다.",
"But some paintings had been stood up on one side of the room."
],
[
"지수가 가까이 가서 봤다.",
"Jisu went closer to look.",
"Jisu went close and looked."
],
[
"숨이 멈출 정도로 아름다운 그림들이었다.",
"They were paintings so beautiful they took her breath away.",
"They were paintings beautiful to the degree that her breath would stop."
],
[
"온기가 느껴지는 그림들이었다.",
"They were paintings that felt warm.",
"They were paintings in which warmth was felt."
],
[
"그림 속 사람들이 살아있는 것 같았다.",
"The people in the paintings seemed alive."
],
[
"지수가 그림을 보면서 혼자 중얼거렸다.",
"Looking at the paintings, Jisu muttered to herself."
],
[
"'누구 그림이지?'",
"'Whose paintings are these?'"
],
[
"갑자기 뒤에서 목소리가 들렸다.",
"Suddenly she heard a voice behind her.",
"Suddenly a voice was heard from behind."
],
[
"\"내 그림이에요.\"",
"\"They're my paintings.\""
],
[
"지수가 깜짝 놀라서 뒤를 돌아봤다.",
"Jisu was startled and turned around."
],
[
"강하준이었다.",
"It was Kang Hajun."
],
[
"\"죄송해요! 자료 찾으러 왔다가…\"",
"\"I'm sorry! I came to find some materials and...\""
],
[
"지수가 다시 그림을 봤다.",
"Jisu looked at the paintings again."
],
[
"그리고 강하준을 봤다.",
"Then she looked at Kang Hajun."
],
[
"이 차갑고 말이 없는 사람이, 이렇게 따뜻한 그림을 그렸다는 게 잘 믿기지 않았다.",
"She could hardly believe that this cold, quiet man had painted such warm pictures.",
"That this cold, wordless person painted such warm paintings was hard to believe."
],
[
"\"이렇게 아름다운 그림들을 왜 여기 숨겨놨어요?\"",
"\"Why have you hidden such beautiful paintings here?\""
],
[
"강하준이 그림들을 바라봤다.",
"Kang Hajun gazed at the paintings."
],
[
"잠시 동안 아무 말도 없었다.",
"For a while, he said nothing.",
"For a while, there were no words at all."
],
[
"주변이 조용해졌다.",
"Everything around them went quiet."
],
[
"지수는 그 침묵이 어색했다.",
"Jisu felt awkward in that silence.",
"For Jisu, that silence was awkward."
],
[
"\"아무한테도 말하지 마요.\"",
"\"Don't tell anyone.\""
],
[
"그가 나갔다.",
"He left."
],
[
"지수는 혼자 남아서 그림들을 다시 둘러봤다.",
"Left alone, Jisu looked around at the paintings again.",
"Jisu remained alone and looked around at the paintings again."
],
[
"그림 속 여자가 웃고 있었다.",
"The woman in the painting was smiling."
],
[
"왜 숨겨놨을까.",
"Why had he hidden them?"
],
[
"궁금했다.",
"She was curious."
],
[
"그리고 왠지 모르게 신경이 쓰였다.",
"And for some reason, it kept bothering her.",
"And for some unknown reason, her nerves were used on it."
]
],
"w": [
[
"궁금하다",
"to be curious"
],
[
"자료",
"materials, documents"
],
[
"문서 보관실",
"document storage room"
],
[
"세워져 있다",
"to be standing (set up)"
],
[
"가까이",
"close, nearby"
],
[
"숨이 멈추다",
"one's breath stops"
],
[
"온기",
"warmth"
],
[
"느껴지다",
"to be felt"
],
[
"살아있다",
"to be alive"
],
[
"중얼거리다",
"to mutter"
],
[
"목소리",
"voice"
],
[
"깜짝 놀라다",
"to be startled"
],
[
"돌아보다",
"to look back"
],
[
"믿기지 않다",
"to be hard to believe"
],
[
"숨기다",
"to hide"
],
[
"바라보다",
"to gaze at"
],
[
"잠시",
"for a while"
],
[
"침묵",
"silence"
],
[
"어색하다",
"to be awkward"
],
[
"둘러보다",
"to look around"
],
[
"왠지 모르게",
"for some reason"
],
[
"신경이 쓰이다",
"to be bothered by, to keep thinking about"
]
],
"p": [
{
"e": "-지 마요",
"s": "\"아무한테도 말하지 마요.\"",
"v": "5QM8y4Kia7M",
"t": "먹지 마  그거 상했어",
"ev": "먹지 마 그거 상했어"
},
{
"e": "-(으)ㄹ 정도로",
"s": "숨이 멈출 정도로 아름다운 그림들이었다.",
"v": "C0F8A9XZf-0",
"t": "민수가 젤 좋아하는 영화라고도 말하고 염정아랑 문근영 같은 유명한 배우들도 나온다고도 말해서 좀 기대감이 생겼어",
"ev": "처음 시작 부분은 ‘이게 공포영화라고?’ 싶을 정도로 약간 지브리 영화 도입부랑 비슷하다 싶었는데 (계속 보니까) 아니더라?….."
},
{
"e": "-아/어 놓다",
"s": "왜 숨겨놨을까."
}
]
},
"우리 사이, 괜찮지 않아요 5": {
"s": [
[
"다음 날 아침, 지수가 회사 로비를 지나 엘리베이터를 타려고 할 때였다.",
"The next morning, Jisu was crossing the company lobby to take the elevator.",
"It was the next morning, when Jisu passed the company lobby and was about to take the elevator."
],
[
"지수보다 먼저 엘리베이터를 기다리고 있던 어떤 남자와 눈이 마주쳤다.",
"Her eyes met those of a man who was already waiting for the elevator.",
"Her eyes met with a certain man who had been waiting for the elevator before Jisu."
],
[
"1년 전에 헤어진 전 남자친구 서준이었다.",
"It was Seojun, the ex-boyfriend she had broken up with a year ago."
],
[
"엘리베이터 문이 열렸는데도 지수는 그 자리에서 꼼짝할 수 없었다.",
"Even though the elevator door opened, Jisu couldn't move from that spot."
],
[
"머릿속이 혼란스러웠다.",
"Her mind was in chaos.",
"The inside of her head was confused."
],
[
"어느 날 갑자기 이유도 제대로 말하지 않고 헤어지자고 했던 이 사람을 지수는 지금 어떻게 대해야 할지 몰랐다.",
"One day he had suddenly said they should break up, without even properly giving a reason, and now Jisu didn't know how to treat him.",
"Jisu now did not know how she should treat this person who one day suddenly, without properly saying even a reason, said let's break up."
],
[
"\"오랜만이다.\" 서준이 웃으면서 말했다.",
"\"Long time no see,\" Seojun said with a smile.",
"\"It's been a long time,\" Seojun said while smiling."
],
[
"지수는 웃지 않았다.",
"Jisu didn't smile."
],
[
"\"어, 오랜만이네. 우리 회사엔 무슨 일로?\"",
"\"Yeah, it's been a while. What brings you to our company?\""
],
[
"\"나 이번에 이 회사에 컨설팅 들어왔어. 한 달 동안 여기서 일해.\"",
"\"I came to this company for a consulting job this time. I'll be working here for a month.\""
],
[
"한 달.",
"A month."
],
[
"지수는 속으로 한숨을 쉬었다.",
"Jisu sighed inwardly."
],
[
"한 달이나 이 사람 얼굴을 봐야 한다는 게 너무 싫었다.",
"She really hated that she'd have to see this person's face for a whole month.",
"The fact that she had to see this person's face for as much as a month was so hateful."
],
[
"그 때 뒤에서 강하준이 걸어왔다.",
"Just then, Kang Hajun walked up from behind."
],
[
"서준이 강하준을 보고 먼저 인사를 했다.",
"Seojun saw Kang Hajun and greeted him first."
],
[
"\"안녕하십니까, 대표님\"",
"\"Good morning, sir.\"",
"\"Hello, CEO.\""
],
[
"\"네, 안녕하세요\"",
"\"Yes, hello.\""
],
[
"강하준의 목소리는 언제나 그렇듯이 차가웠다.",
"As always, Kang Hajun's voice was cold."
],
[
"강하준이 지수를 봤다.",
"Kang Hajun looked at Jisu."
],
[
"지수는 표정 관리를 못 하고 있었다.",
"Jisu couldn't hide her expression.",
"Jisu was not managing her facial expression."
],
[
"눈동자는 불안했고 얼굴은 굳어 있었다.",
"Her eyes were uneasy and her face was stiff."
],
[
"강하준은 그걸 봤지만 아무 말도 하지 않았다.",
"Kang Hajun saw that, but he didn't say anything."
],
[
"그날 지수는 하루 종일 모니터가 눈에 안 들어왔다.",
"All day, Jisu couldn't focus on her monitor.",
"That day, for the whole day, the monitor did not come into Jisu's eyes."
],
[
"화면을 보면서도 머릿속에는 온통 다른 생각들뿐이었다.",
"Even while looking at the screen, her head was full of other thoughts."
],
[
"지수는 아직도 서준이 왜 헤어지자고 했는지 모른다.",
"Jisu still doesn't know why Seojun wanted to break up."
],
[
"분명 서로 사랑하고 있다고 생각했고 영원할 거라고 믿었다.",
"She had been sure they loved each other, and she had believed it would last forever."
],
[
"헤어진 후 힘들었던 날이 머릿속에 계속 떠올랐다.",
"The hard days after their breakup kept coming back to her."
],
[
"이 남자는 왜 이제 와서 내 앞에 나타난 걸까?",
"Why has this man shown up in front of me now?"
]
],
"w": [
[
"로비",
"lobby"
],
[
"눈이 마주치다",
"eyes meet"
],
[
"헤어지다",
"to break up"
],
[
"전 남자친구",
"ex-boyfriend"
],
[
"꼼짝할 수 없다",
"cannot move at all"
],
[
"혼란스럽다",
"to be confused"
],
[
"제대로",
"properly"
],
[
"대하다",
"to treat (a person)"
],
[
"오랜만이다",
"it's been a long time"
],
[
"컨설팅",
"consulting"
],
[
"한숨을 쉬다",
"to sigh"
],
[
"인사를 하다",
"to greet"
],
[
"언제나 그렇듯이",
"as always"
],
[
"표정 관리",
"controlling one's expression"
],
[
"눈동자",
"eyes, pupils"
],
[
"불안하다",
"to be uneasy"
],
[
"굳다",
"to harden, to stiffen"
],
[
"하루 종일",
"all day"
],
[
"온통",
"entirely"
],
[
"영원하다",
"to be forever"
],
[
"떠오르다",
"to come to mind"
],
[
"나타나다",
"to appear"
]
],
"p": [
{
"e": "-는데도",
"s": "엘리베이터 문이 열렸는데도 지수는 그 자리에서 꼼짝할 수 없었다."
},
{
"e": "-다는 게",
"s": "한 달이나 이 사람 얼굴을 봐야 한다는 게 너무 싫었다."
},
{
"e": "-(으)면서",
"s": "\"오랜만이다.\" 서준이 웃으면서 말했다.",
"v": "yub5cU9E3oI",
"t": "어제 가족들이랑 다 같이 햄버거를 시켜서 먹었는데 엘리스가 또 햄버거를 다 안 먹고 남긴 거야",
"ev": "그래서 엄마가 엘리스한테 막 짜증내면서 왜 음식을 다 안 먹고 남기냐고 했어."
}
]
},
"우리 사이, 괜찮지 않아요 6": {
"s": [
[
"며칠이 지났다.",
"A few days passed."
],
[
"공교롭게도 서준은 지수와 같은 층에서 일을 했다.",
"As luck would have it, Seojun worked on the same floor as Jisu."
],
[
"지수는 서준을 최대한 피하려고 했다.",
"Jisu tried to avoid Seojun as much as possible."
],
[
"사무실에서 서준이 말을 걸면 짧게 대답하고 자리를 피했다.",
"When Seojun spoke to her at the office, she answered briefly and walked away.",
"When Seojun started talking at the office, she answered briefly and avoided the spot."
],
[
"그게 지수가 할 수 있는 최선이었다.",
"That was the best she could do."
],
[
"어느 날 점심시간에 지수는 옥상으로 올라갔다.",
"One day at lunchtime, Jisu went up to the rooftop."
],
[
"팀원들이 같이 밥을 먹자고 했지만 지수는 혼자 밥을 먹는 게 좋았다.",
"Her teammates asked her to eat together, but Jisu liked eating alone.",
"Her teammates said let's eat together, but for Jisu, eating alone was good."
],
[
"가끔은 아무도 없는 곳에서 쉬고 싶었다.",
"Sometimes she wanted to rest somewhere with nobody around."
],
[
"그런데 강하준이 거기 있었다.",
"But Kang Hajun was there."
],
[
"혼자 도시락을 먹고 있었다.",
"He was eating a packed lunch alone."
],
[
"'뭐야? 회사 대표가 혼자 옥상에서 도시락을 먹는다고?'",
"'What? The CEO is eating a packed lunch alone on the roof?'",
"'What? You're saying the company CEO eats a packed lunch alone on the roof?'"
],
[
"지수는 이 광경이 너무 낯설었다.",
"This sight felt very strange to Jisu."
],
[
"두 사람이 서로를 봤다.",
"The two of them looked at each other."
],
[
"\"맛있게 드세요. 제가 다른 데로 갈게요.\" 지수가 말했다.",
"\"Enjoy your meal. I'll go somewhere else,\" Jisu said.",
"\"Please eat deliciously. I will go to another place,\" Jisu said."
],
[
"\"여기 넓어요.\" 강하준이 말했다.",
"\"There's plenty of room here,\" Kang Hajun said.",
"\"It's wide here,\" Kang Hajun said."
],
[
"지수는 멀리 떨어져 앉았다.",
"Jisu sat far away from him."
],
[
"두 사람이 말없이 밥을 먹었다.",
"The two of them ate without a word."
],
[
"어색했다.",
"It was awkward."
],
[
"그런데 이상하게, 그 침묵이 불편하지 않았다.",
"But strangely, the silence wasn't uncomfortable."
],
[
"사무실에서 다른 사람들과 억지로 웃으며 대화하는 것보다 오히려 편했다.",
"It was actually more comfortable than forcing smiles and chatting with people at the office."
],
[
"\"손서준씨 알아요?\" 강하준이 갑자기 물었다.",
"\"Do you know Son Seojun?\" Kang Hajun suddenly asked."
],
[
"지수가 젓가락질을 멈췄다.",
"Jisu stopped moving her chopsticks."
],
[
"\"네…아는 사람이에요.\"",
"\"Yes... he's someone I know.\""
],
[
"\"많이 힘들어 보였어요. 며칠 동안.\"",
"\"You looked like you were having a hard time. These past few days.\"",
"\"You looked very tired. For several days.\""
],
[
"지수가 강하준을 봤다.",
"Jisu looked at Kang Hajun."
],
[
"강하준은 지수를 보지 않고 도시락만 쳐다보면서 먹었다.",
"Without looking at her, Kang Hajun ate, staring only at his lunch."
],
[
"\"괜찮아요.\" 지수가 말했다.",
"\"I'm okay,\" Jisu said."
],
[
"\"그 말은 괜찮지 않을 때 하는 말이에요.\" 강하준이 조용히 말했다.",
"\"That's what people say when they're not okay,\" Kang Hajun said quietly.",
"\"Those words are words you say when you are not okay,\" Kang Hajun said quietly."
],
[
"지수는 아무 말도 하지 못했다.",
"Jisu couldn't say anything."
],
[
"맞는 말이었다.",
"He was right.",
"They were correct words."
],
[
"지수 자신도 알고 있었다.",
"Jisu knew it herself."
],
[
"괜찮지 않다는 걸.",
"That she wasn't okay."
],
[
"그냥 괜찮다고 말하는 게 편해서 그렇게 말하고 있었다는 걸.",
"That she had just been saying it because saying she was okay was easier."
],
[
"바람이 불었다.",
"The wind blew."
],
[
"지수는 하늘을 봤다.",
"Jisu looked at the sky."
]
],
"w": [
[
"공교롭게도",
"as luck would have it"
],
[
"층",
"floor"
],
[
"최대한",
"as much as possible"
],
[
"피하다",
"to avoid"
],
[
"말을 걸다",
"to speak to someone"
],
[
"최선",
"the best one can do"
],
[
"옥상",
"rooftop"
],
[
"팀원",
"teammate"
],
[
"도시락",
"packed lunch"
],
[
"광경",
"sight, scene"
],
[
"낯설다",
"to be unfamiliar"
],
[
"넓다",
"to be wide, spacious"
],
[
"떨어져 앉다",
"to sit apart"
],
[
"말없이",
"without a word"
],
[
"불편하다",
"to be uncomfortable"
],
[
"억지로",
"by force, unwillingly"
],
[
"오히려",
"rather, in fact"
],
[
"편하다",
"to be comfortable"
],
[
"젓가락질",
"using chopsticks"
],
[
"쳐다보다",
"to stare at"
],
[
"바람이 불다",
"the wind blows"
]
],
"p": [
{
"e": "-(으)ㄹ 때",
"s": "\"그 말은 괜찮지 않을 때 하는 말이에요.\"",
"v": "z17MG6ybAbk",
"t": "S037 배우는 연기를 잘 해야 돼요.",
"ev": "요즘에는 여행갈 때 종이 지도가 없어도 돼요."
},
{
"e": "-아/어 보이다",
"s": "\"많이 힘들어 보였어요. 며칠 동안.\"",
"v": "oHG9oL6wS6g",
"t": "토를 하고 나니까 속이 좀 시원해졌어요",
"ev": "민수가 운동을 하고 나니까 기분이 좋아 보였어요."
},
{
"e": "-고 싶었다",
"s": "가끔은 아무도 없는 곳에서 쉬고 싶었다.",
"v": "1Yy8DJlV_4Y",
"t": "수영을 배우고 싶어요",
"ev": "어제 갑자기 짜장면이 너무 먹고 싶었어요. 그래서 한국 식당에 갔어요."
}
]
},
"우리 사이, 괜찮지 않아요 7": {
"s": [
[
"퇴근 시간에 지수가 엘리베이터를 기다리고 있었다.",
"After work, Jisu was waiting for the elevator."
],
[
"그 때 서준이 엘리베이터 쪽으로 걸어왔다.",
"Just then, Seojun walked toward the elevator."
],
[
"지수의 표정이 굳어졌다.",
"Jisu's face stiffened."
],
[
"\"지수야, 우리 얘기 좀 할까? 잠깐이면 돼\"",
"\"Jisu, can we talk? It'll only take a moment.\"",
"\"Jisu, shall we talk a little? If it's a moment, that's enough.\""
],
[
"\"나 바빠.\" 지수가 말했다.",
"\"I'm busy,\" Jisu said."
],
[
"물론 바쁘지 않았다.",
"Of course, she wasn't busy."
],
[
"간신히 지운 과거로 다시 돌아가고 싶지 않았다.",
"She didn't want to go back to a past she had barely managed to erase."
],
[
"\"딱 5분만.\" 서준이 말했다.",
"\"Just five minutes,\" Seojun said."
],
[
"지수가 대답하지 않았다.",
"Jisu didn't answer."
],
[
"서준은 그걸 허락으로 받아들이고 지수 옆에 서서 말했다.",
"Seojun took that as a yes, stood next to her, and said:"
],
[
"\"나 다시 시작하고 싶어.\"",
"\"I want to start over.\""
],
[
"엘리베이터 문이 열렸다.",
"The elevator door opened."
],
[
"지수가 들어갔다.",
"Jisu got in."
],
[
"서준도 따라 들어왔다.",
"Seojun followed her in."
],
[
"\"지수야…\"",
"\"Jisu...\""
],
[
"\"됐어. 다 끝난 일이잖아.\" 지수가 말했다.",
"\"Forget it. It's all over,\" Jisu said.",
"\"It's done. It's a thing that's all finished, you know,\" Jisu said."
],
[
"지수의 목소리는 차가웠다.",
"Jisu's voice was cold."
],
[
"서준은 어떤 말을 하려고 하다가 한숨을 쉬며 입을 닫았다.",
"Seojun was about to say something, but he sighed and closed his mouth."
],
[
"문이 열렸다.",
"The door opened."
],
[
"지수가 나갔다.",
"Jisu walked out."
],
[
"뒤를 돌아보지 않았다.",
"She didn't look back."
],
[
"건물 밖으로 나오니까 11월 밤공기가 차가웠다.",
"When she stepped outside, the November night air was cold.",
"As she came outside the building, she found the November night air cold."
],
[
"지수가 크게 숨을 들이쉬었다.",
"Jisu took a deep breath."
],
[
"기분이 이상했다.",
"She felt strange."
],
[
"슬프지 않았다.",
"She wasn't sad."
],
[
"더 이상 답답하지도 않았다.",
"She didn't feel stifled anymore either."
],
[
"오히려 몸이 가벼웠다.",
"In fact, her body felt light."
],
[
"오랫동안 들고 있던 무거운 걸 내려놓은 것 같은 느낌이었다.",
"It felt like she had put down something heavy she'd been carrying for a long time."
],
[
"그 시각, 서준은 회사 근처 작은 술집 구석 자리에 혼자 앉아 있었다.",
"At that moment, Seojun was sitting alone in a corner seat of a small bar near the company."
],
[
"한 모금도 마시지 않은 맥주잔을 두 손으로 잡고만 있었다.",
"He was just holding, in both hands, a glass of beer he hadn't taken a sip of."
],
[
"형이 떠난 건 7년 전이었다.",
"It was seven years ago that his older brother left."
],
[
"교통사고였다.",
"It was a car accident."
],
[
"모두에게 너무 갑작스러운 일이었다.",
"It was so sudden for everyone."
],
[
"어머니는 한 달 동안 방에서 나오지 않았고, 아버지는 웃지 않았다.",
"His mother didn't come out of her room for a month, and his father didn't smile."
],
[
"형의 죽음은 서준에게 슬픔보다 압박감을 주었다.",
"His brother's death gave Seojun more pressure than sadness."
],
[
"'니 형이 되어줘.'",
"'Take your brother's place for us.'",
"'Become your older brother for us.'"
],
[
"아무도 서준에게 그 말을 하지 않았다.",
"No one said that to Seojun."
],
[
"그러나 서준은 자기가 무엇을 해야 하는지 알았다.",
"But Seojun knew what he had to do."
],
[
"서준은 원래 건축학과였다.",
"Seojun was originally an architecture major."
],
[
"공간을 설계하는 게 좋았다.",
"He liked designing spaces."
],
[
"사람들이 살아가는 장소를 만드는 일이 의미 있다고 생각했다.",
"He thought making places where people live was meaningful."
],
[
"그런데 형이 죽은 후, 그 꿈이 사치처럼 느껴지기 시작했다.",
"But after his brother died, that dream began to feel like a luxury."
],
[
"원래 부모님이 기대했던 건 서준이 아니라, 형이었다.",
"Originally, the one his parents had hopes for was not Seojun, but his brother."
],
[
"MBA를 따고 막 컨설팅 회사에 들어간 형.",
"His brother, who had gotten an MBA and just joined a consulting firm."
],
[
"이제 집안을 일으킬 형.",
"The brother who would now lift up the family."
],
[
"그러나 이제 형은 없다.",
"But now his brother was gone.",
"But now his brother does not exist."
],
[
"서준이 그 자리를 채워야 했다.",
"Seojun had to fill that place."
],
[
"그래서 건축을 포기했다.",
"So he gave up architecture."
],
[
"형처럼 MBA를 땄다.",
"Like his brother, he got an MBA."
],
[
"그리고 형처럼 컨설팅 회사에 들어갔다.",
"And like his brother, he joined a consulting firm."
],
[
"부모님이 조금씩 웃기 시작했다.",
"His parents began to smile little by little."
],
[
"이제 부모님은 서준에게 기대를 하기 시작했다.",
"Now his parents began to put their hopes on Seojun."
],
[
"지수를 만난 건 그 즈음이었다.",
"It was around then that he met Jisu."
],
[
"서준은 지수랑 있을 때만 숨이 쉬어졌다.",
"Seojun could breathe only when he was with Jisu.",
"Seojun's breath came only when he was with Jisu."
],
[
"지수는 서준에게 형 얘기도, 집안 얘기도 묻지 않았다.",
"Jisu didn't ask him about his brother or his family."
],
[
"그냥 옆에 있었다.",
"She was just there beside him."
],
[
"그게 좋았다.",
"He liked that."
],
[
"그런데 어느 순간부터 그 편안함이 두려워졌다.",
"But at some point, that comfort began to scare him."
],
[
"내가 다른 사람에게 이렇게 기대도 되나.",
"Is it okay for me to lean on someone like this?"
],
[
"이렇게 행복해도 되나.",
"Is it okay to be this happy?"
],
[
"나는 성공해야 되는데.",
"I have to succeed, though."
],
[
"결국 서준은 도망쳤다.",
"In the end, Seojun ran away."
],
[
"이유도 말하지 않고.",
"Without even saying why."
],
[
"변명도 없이.",
"Without any excuse."
],
[
"그냥 헤어지자고 했다.",
"He just said they should break up."
],
[
"이해할 수 없다는 지수의 표정을 지금도 기억한다.",
"Even now he remembers the look on Jisu's face, the look that said she couldn't understand."
],
[
"서준이 맥주잔을 들었다.",
"Seojun lifted his beer glass."
],
[
"한 모금 마셨다.",
"He took a sip."
],
[
"맥주가 더 이상 차갑지 않았다.",
"The beer was no longer cold."
],
[
"늦었다는 걸 알고 있었다.",
"He knew it was too late."
],
[
"알면서도 지수 옆에 있고 싶었다.",
"Even knowing that, he wanted to be by Jisu's side."
],
[
"서준은 자기가 지수한테 돌아가고 싶은 건지, 아니면 그 편안함으로 돌아가고 싶은 건지 혼란스러웠다.",
"Seojun was confused about whether he wanted to go back to Jisu or back to that comfort."
],
[
"잔을 내려놓았다.",
"He set the glass down."
],
[
"11월의 밤은 너무 쓸쓸했다.",
"The November night was so lonely."
]
],
"w": [
[
"퇴근",
"leaving work"
],
[
"굳어지다",
"to stiffen"
],
[
"간신히",
"barely"
],
[
"지우다",
"to erase"
],
[
"과거",
"the past"
],
[
"허락",
"permission"
],
[
"받아들이다",
"to accept"
],
[
"따라 들어오다",
"to follow in"
],
[
"밤공기",
"night air"
],
[
"숨을 들이쉬다",
"to breathe in"
],
[
"답답하다",
"to feel stifled"
],
[
"내려놓다",
"to put down"
],
[
"구석 자리",
"corner seat"
],
[
"한 모금",
"one sip"
],
[
"맥주잔",
"beer glass"
],
[
"교통사고",
"car accident"
],
[
"갑작스럽다",
"to be sudden"
],
[
"죽음",
"death"
],
[
"압박감",
"pressure"
],
[
"건축학과",
"architecture major"
],
[
"설계하다",
"to design"
],
[
"의미 있다",
"to be meaningful"
],
[
"사치",
"luxury"
],
[
"기대하다",
"to expect, to hope"
],
[
"집안",
"family"
],
[
"일으키다",
"to raise up"
],
[
"포기하다",
"to give up"
],
[
"즈음",
"around that time"
],
[
"편안함",
"comfort"
],
[
"두렵다",
"to be afraid"
],
[
"기대다",
"to lean on"
],
[
"성공하다",
"to succeed"
],
[
"도망치다",
"to run away"
],
[
"변명",
"excuse"
],
[
"쓸쓸하다",
"to be lonely"
]
],
"p": [
{
"e": "-(으)ㄹ까?",
"s": "\"지수야, 우리 얘기 좀 할까? 잠깐이면 돼\"",
"v": "yrc7Arrtie4",
"t": "헤어지자는 말이야",
"ev": "\"우리 이제 그만할까?\" \"무슨 말이야?\" \"헤어지자는 말이야.\""
},
{
"e": "~처럼",
"s": "형처럼 MBA를 땄다."
},
{
"e": "-(으)ㄴ 것 같다",
"s": "오랫동안 들고 있던 무거운 걸 내려놓은 것 같은 느낌이었다.",
"v": "C0F8A9XZf-0",
"t": "민수가 젤 좋아하는 영화라고도 말하고 염정아랑 문근영 같은 유명한 배우들도 나온다고도 말해서 좀 기대감이 생겼어",
"ev": "아,나도 그 영화 OST 좋다고 들은 것 같아."
},
{
"e": "-(으)면서도",
"s": "알면서도 지수 옆에 있고 싶었다."
}
]
},
"시어머니와 주방 청소 1": {
"s": [
["어머니: 민지야, 식초 냄새(가) 나네.", "Minji, it smells like vinegar.", "Minji, a vinegar smell is coming out."],
["민지: 네, 어머니. 지금 청소하고 있어요.", "Yes, Mother. I'm cleaning right now."],
["어머니: 어, 물 끓였네. 나 커피 한 잔 마셔야겠다.", "Oh, you boiled some water. I think I'll have a cup of coffee.", "Oh, you boiled water. I must drink one cup of coffee."],
["민지: 어머니, 마시지 마세요! 그거 식초물이에요.", "Mother, please don't drink it! That's vinegar water."],
["어머니: 아이고, 식초(를) 마실 뻔했네. 포트에 식초는 왜 넣었어?", "Oh my, I almost drank vinegar. Why did you put vinegar in the kettle?"],
["민지: 식초(를) 넣고 끓여야 포트가 깨끗해져요.", "The kettle only gets clean if you boil it with vinegar.", "Only if you put in vinegar and boil it does the kettle become clean."],
["어머니: 그래? 그럼 이 물(은) 버려야겠다.", "Really? Then I'd better throw this water out."],
["민지: 버리지 마세요! 여기 큰 그릇에 부으면 돼요.", "Please don't throw it out! Just pour it into this big bowl.", "Don't throw it out! If you pour it into the big bowl here, it's fine."],
["어머니: 이걸로 뭐 하려고?", "What are you going to do with this?"],
["민지: 식으면 싱크대 위쪽 문(을) 닦으려고요.", "When it cools down, I'm going to wipe the upper cabinet doors."],
["어머니: 그 높은 데까지? 내가 할게.", "All the way up there? I'll do it."],
["민지: 아니에요, 앉아 계세요. 금방 끝나요.", "No, no, please stay seated. It'll be done in no time."]
],
"w": [
["식초", "vinegar"],
["냄새(가) 나다", "to smell (of)"],
["청소하다", "to clean"],
["끓이다", "to boil"],
["포트", "electric kettle"],
["식초물", "vinegar water"],
["마시다", "to drink"],
["-(으)ㄹ 뻔했다", "almost did"],
["깨끗해지다", "to get clean"],
["버리다", "to throw away"],
["그릇", "bowl, dish"],
["붓다", "to pour"],
["식다", "to cool down"],
["싱크대", "sink, kitchen counter"],
["위쪽 문", "upper door (cabinet)"],
["닦다", "to wipe"],
["높은 데", "a high place"],
["앉아 계세요", "please stay seated (honorific)"],
["금방", "in a moment, right away"],
["끝나다", "to be finished"]
],
"p": [
{
"e": "-지 마세요 / -지 마 (don't)",
"s": "어머니, 마시지 마세요!"
},
{
"e": "-(으)ㄹ 뻔했다 / -(으)ㄹ 뻔했어 (almost)",
"s": "아이고, 식초(를) 마실 뻔했네."
}
]
},
"시어머니와 주방 청소 2": {
"s": [
["어머니: 이거 시금치 데친 물이지? 내가 버릴게.", "This is the water from blanching spinach, right? I'll throw it out."],
["민지: 어머니, 버리지 마세요! 그 물(로) 후드(를) 닦으려고요.", "Mother, please don't throw it out! I'm going to wipe the hood with that water."],
["어머니: 시금치 물로? 후드는 세제로 닦아야지. 기름때가 얼마나 심한데.", "With spinach water? You should clean a hood with detergent. The grease is so bad!", "With spinach water? A hood, you must wipe with detergent. How serious the grease is!"],
["민지: 세제 안 써도 돼요. 이 물에 베이킹소다(를) 한 스푼 넣으면 돼요.", "You don't need detergent. Just add a spoonful of baking soda to this water.", "Even if I don't use detergent, it's fine. If you put one spoon of baking soda in this water, it's fine."],
["어머니: 그걸로 기름때가 닦여? 이리 줘. 내가 해 볼게.", "The grease comes off with that? Give it here. Let me try."],
["어머니: 어머, 진짜 깨끗해졌네!", "Oh my, it's really clean now!"],
["민지: 네, 진짜 잘 닦여요.", "Yes, it really wipes off well."],
["어머니: 다음엔 나도 시금치 데친 물(은) 안 버려야겠다.", "Next time I'd better not throw out the spinach water either.", "Next time, I too must not throw away the blanched spinach water."],
["어머니: 어, 근데 이 행주(에서) 식초 냄새가 나네.", "Oh, but this dishcloth smells like vinegar.", "Oh, but a vinegar smell is coming from this dishcloth."],
["민지: 베란다 건조대에 널려고요. 햇빛에 말려야 냄새가 안 나요.", "I'm going to hang it on the drying rack on the balcony. It only stops smelling once it dries in the sun.", "I'm going to hang it on the balcony drying rack. Only if I dry it in sunlight does the smell not come out."],
["어머니: 이제 청소 다 끝났지? 그럼 나 커피 마셔도 돼?", "The cleaning is all done now, right? Then can I have my coffee?"],
["민지: 아, 맞다! 잠깐만요, 새 물(로) 금방 끓일게요.", "Oh, right! Just a moment, I'll boil fresh water right away."]
],
"w": [
["시금치", "spinach"],
["데치다", "to blanch"],
["버리다", "to throw away"],
["후드", "range hood"],
["닦다 / 닦이다", "to wipe / to come off by wiping"],
["세제", "detergent"],
["기름때", "grease stains"],
["심하다", "to be severe, bad"],
["베이킹소다", "baking soda"],
["한 스푼", "one spoonful"],
["넣다", "to put in"],
["이리 줘", "give it here"],
["-아/어 보다", "to try ~ing"],
["깨끗해지다", "to get clean"],
["행주", "dishcloth"],
["식초 냄새가 나다", "to smell of vinegar"],
["베란다", "balcony"],
["건조대", "drying rack"],
["널다", "to hang out (to dry)"],
["햇빛", "sunlight"],
["말리다", "to dry"],
["끝나다", "to be finished"],
["새 물", "fresh water"],
["끓이다", "to boil"]
],
"p": [
{
"e": "-지 마세요 / -지 마 (don't)",
"s": "어머니, 버리지 마세요!"
},
{
"e": "-(으)려고요 / -(으)려고 (I'm going to)",
"s": "그 물(로) 후드(를) 닦으려고요."
}
]
}
};
