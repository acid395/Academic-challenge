// ---------------------------------------------------------------------------
// PEOPLE. Every officer, captain, and alumnus is defined exactly ONCE here
// and referenced everywhere else by id. To add a person, add one object to
// this array — their bio page, roster card, and any program-page captain
// listing are all generated from this record. Nothing else needs editing.
//
// Fields:
//   id           kebab-case, used to build team/people/<id>.html
//   name         display name
//   photo        null -> renders a styled initials block automatically.
//                Set to a path (e.g. "assets/photos/member-01.jpg") to
//                switch to a real photo — the template swaps automatically.
//   status       "current" | "alumni"
//   classYear    graduating class (alumni only), used to group the alumni
//                roster
//   grade        current grade level, e.g. "12" (current members only)
//   email        contact email. By club policy, only shown for people who
//                hold a CAPTAIN role (current members) — officer-only
//                bios don't publish an email. Never set for alumni.
//   discord      Discord handle, same show/hide rule as email.
//   bio          bio paragraph. Omit (leave undefined) if none was
//                provided — the bio section is simply skipped, no
//                placeholder text is invented.
//   roles        array of { type: "officer" | "captain", title, program,
//                order }. "program" (a program slug) is only used for
//                captain roles and drives that program page's Captains
//                section. "order" controls listing order within a
//                roster/group. A person can hold more than one role.
//                For alumni, roles are stored as free-text descriptive
//                title strings (with the years/positions as given) rather
//                than structured per-program entries, since historical
//                roles don't drive any live roster.
// ---------------------------------------------------------------------------
module.exports = [
  // ==========================================================================
  // CURRENT OFFICERS
  // ==========================================================================
  {
    id: "theenash-sengupta",
    name: "Theenash Sengupta",
    photo: null,
    status: "current",
    grade: "12",
    email: "theenash202008@gmail.com",
    discord: "heathens5319",
    bio:
      "Senior Theenash Sengupta is a seasoned Academic Challenge competitor, " +
      "co-captaining the Science Bowl, Quiz Bowl, and Science Olympiad " +
      "teams. His specializations in Biology and Chemistry have enabled " +
      "him to compete with and meet students across the country, even " +
      "taking him on a round trip to Boston. He enjoys running, " +
      "skygazing, treehugging, and forgetting how to read. In his free " +
      "time, you can find Theenash attempting to understand Sabrina " +
      "Carpenter's rhymes or catching up on his to-watch list.",
    roles: [
      { type: "officer", title: "Co-President", order: 1 },
      { type: "captain", program: "science-bowl", title: "Co-Captain", order: 2 },
      { type: "captain", program: "science-olympiad", title: "Co-Captain", order: 2 },
      { type: "captain", program: "quiz-bowl", title: "Co-Captain", order: 2 },
    ],
  },
  {
    id: "roshan-annamalai",
    name: "Roshan Annamalai",
    photo: null,
    status: "current",
    grade: "12",
    roles: [
      { type: "officer", title: "Co-President", order: 2 },
      { type: "captain", program: "science-bowl", title: "Co-Captain", order: 1 },
      { type: "captain", program: "science-olympiad", title: "Co-Captain", order: 1 },
    ],
  },
  {
    id: "pradyumna-krishna",
    name: "Pradyumna Krishna",
    photo: null,
    status: "current",
    grade: "12",
    email: "challengeprady@gmail.com",
    discord: "qb308",
    bio:
      "Pradyumna Krishna is a senior at Mission San Jose High School, and " +
      "the captain of MSJ Quiz Bowl. In Quiz Bowl, he specializes in " +
      "literature, mythology, and fine arts. Outside of his academic " +
      "life, he is interested in computer science and machine learning. " +
      "In his free time, he watches a lot of sports, and ponders whether " +
      "he would be a great UFC fighter in an alternate reality.",
    roles: [
      { type: "officer", title: "Co-President", order: 3 },
      { type: "captain", program: "quiz-bowl", title: "Co-Captain", order: 1 },
    ],
  },
  {
    id: "anish-agarwal",
    name: "Anish Agarwal",
    photo: null,
    status: "current",
    grade: "11",
    bio:
      "Anish Agarwal is a junior at Mission San Jose High School. He is " +
      "also a member of the Science Bowl team at MSJ, who won first " +
      "place at nationals. His core subjects are biology and chemistry. " +
      "He was placed in the top 20 in US National Chemistry Olympiad and " +
      "was invited to attend the chemistry camp at the University of " +
      "Maryland. Outside of academics, he enjoys spending time with his " +
      "family, travelling across different countries and experiencing " +
      "many cultures and cuisines. In his free time, he likes to scroll " +
      "through Youtube shorts and watch movies.",
    roles: [{ type: "officer", title: "Co-Vice President", order: 4 }],
  },
  {
    id: "rutvik-arora",
    name: "Rutvik Arora",
    photo: null,
    status: "current",
    grade: "11",
    email: "arorarutvik@gmail.com",
    discord: "mcproz",
    bio:
      "Rutvik Arora is a junior at Mission San Jose High School. His main " +
      "subjects include physics and a bit of math. He is a member of the " +
      "Science Bowl team at MSJ, who won first place at nationals. He " +
      "has two silver medals in the USA Physics Olympiad and was invited " +
      "to attend the USA Astronomy and Astrophysics Olympiad training " +
      "camp. His hobbies include playing badminton occasionally and " +
      "scrolling.",
    roles: [
      { type: "officer", title: "Co-Vice President", order: 5 },
      { type: "captain", program: "science-olympiad", title: "Co-Captain", order: 4 },
    ],
  },
  {
    id: "edward-zeng",
    name: "Edward Zeng",
    photo: null,
    status: "current",
    grade: "11",
    email: "edwzen065@gmail.com",
    discord: "icannotfly",
    bio:
      "Edward Zeng is one of MSJ AC's Secretaries this year. He " +
      'participates in all 5 of the Academic Challenge events, but he is ' +
      'not particularly good at any of them. He is definitely a "STEM ' +
      'sweat," as some would say, competing in a variety of olympiads, ' +
      "from linguistics to chemistry (he got 4th place in the " +
      "International Linguistics Olympiad this year and has no idea how " +
      "that happened). Apart from partaking in STEM activities like " +
      "every other Mission San Jose student, Edward also enjoys making " +
      "maps but never finishes them, since he gets bored of the vibe " +
      "halfway in.",
    roles: [
      { type: "officer", title: "Secretary", order: 6 },
      { type: "captain", program: "science-olympiad", title: "Co-Captain", order: 6 },
    ],
  },
  {
    id: "brian-lu",
    name: "Brian Lu",
    photo: null,
    status: "current",
    grade: "11",
    bio:
      "Brian Lu is an extremely intelligent and handsome junior who " +
      "serves as one of MSJ AC's Secretaries this year. He participates " +
      "in Science Olympiad, where he mainly does biology and build " +
      "events. He enjoys reading all things biology and participates in " +
      "USABO. He likes sleeping, eating, hanging out with friends, more " +
      "eating, watching football, and debating between listening to " +
      'Tiki Tiki or Yara Yara phonk. Brian will only respond to people ' +
      'who address him by his proper honorifics: "Mr. Tuff" and "Sigma ' +
      'male".',
    roles: [
      { type: "officer", title: "Secretary", order: 7 },
      { type: "captain", program: "science-olympiad", title: "Co-Captain", order: 3 },
    ],
  },
  {
    id: "chengry-hsien",
    name: "Chengry Hsien",
    photo: null,
    status: "current",
    grade: "11",
    bio:
      "Chengry Hsien is MSJ AC's Secretary for the 2026–2027 school " +
      'year. He participates in both Science Olympiad and Quiz Bowl. He ' +
      'isn\'t really a "STEM sweat," as some would say, but Chengry ' +
      "balances things out with competitive swimming—he recently " +
      "achieved Speedo Sectionals and is now just .5 off a TYR Futures " +
      "cut. Outside of the pool, Chengry is a passionate pianist who has " +
      "performed at Carnegie Hall multiple times, has been invited to " +
      "play at Stern Auditorium, and has won numerous international " +
      "competitions. His favorite artist is Don Toliver, and he often " +
      "listens to the Octane album on repeat. In his free time, Chengry " +
      "enjoys chatting with friends, worrying about Rusu, watching Keep " +
      "Running China, and—of course—eating. He also loves " +
      "binge-watching TV series and has a love for war-action movies.",
    roles: [{ type: "officer", title: "Secretary", order: 8 }],
  },
  {
    id: "aayush-kothari",
    name: "Aayush Kothari",
    photo: null,
    status: "current",
    grade: "12",
    email: "akothari2020@gmail.com",
    discord: "kotlin_ant",
    bio:
      "Aayush Kothari is a senior at MSJ's Academic Challenge. He tries " +
      "to participate in all MSJ competitions except Science Bowl " +
      "because they get too much attention. He has been to both Quiz " +
      "Bowl and History Bowl nationals and has multiple Top 20 " +
      "placements. When he is not locked in for history bowl, he is " +
      "grinding american football–the REAL football– and cheering for " +
      "the Denver Broncos. One thing he needs to due before school ends " +
      "is learn how to drive and participate in school sports for once.",
    roles: [
      { type: "officer", title: "Treasurer", order: 9 },
      { type: "captain", program: "history-bowl", title: "Co-Captain", order: 1 },
    ],
  },
  {
    id: "ishaan-kabra",
    name: "Ishaan Kabra",
    photo: null,
    status: "current",
    grade: "11",
    email: "ishkabra2010@gmail.com",
    discord: "hellcat4024",
    bio:
      "Junior Ishaan Kabra is an avid Academic Challenge competitor, " +
      "whose favorite competition involves listening to words and " +
      "pressing buttons. He competes in Science Bowl, Science Olympiad, " +
      "and Ocean Science Bowl. His focus in Earth and space science has " +
      "led him to exploring a tick-infested forest in Tulsa, Oklahoma " +
      "alongside 40 other similarly delusional students. Ishaan is also " +
      "an enthusiast for board games and further enjoys playing " +
      "ping-pong on his dining table.",
    roles: [
      { type: "officer", title: "Treasurer", order: 10 },
      { type: "captain", program: "ocean-science-bowl", title: "Captain", order: 1 },
    ],
  },
  {
    id: "manu-cherukumille",
    name: "Manu Cherukumille",
    photo: null,
    status: "current",
    grade: "11",
    email: "mcherukumille@gmail.com",
    discord: "monoo123",
    bio:
      "Manu Cherukumille is a junior at Mission San Jose High School who " +
      "has been participating in academic competitions for numerous " +
      "years. His interests for such things started with geography, as " +
      "he always would love to explore Google Earth in his spare time. " +
      "This sparked his curiosity and growth mindset which inspired him " +
      "to dabble in other academic competitions. Currently, he mainly " +
      "participates in quiz bowl and also dabbles in science Olympiad. " +
      "He also plays water polo and loves to engage in various similar " +
      "outdoor activities such as basketball.",
    roles: [
      { type: "officer", title: "Publicity Officer", order: 11 },
      { type: "captain", program: "quiz-bowl", title: "Co-Captain", order: 3 },
    ],
  },
  {
    id: "vincent-huang",
    name: "Vincent Huang",
    photo: null,
    status: "current",
    grade: "11",
    bio:
      "Vincent Huang is a junior at Mission San Jose High School who has " +
      "been participating in history bowl for a while but still sucks " +
      "at it. When he is not studying, you can find him watching anime " +
      "or playing minecraft where he's a top 200 player. He also loves " +
      "watching TV shows and loves looking at Wikipedia politics pages.",
    roles: [{ type: "officer", title: "Publicity Officer", order: 12 }],
  },
  {
    id: "abhiraam-girish",
    name: "Abhiraam Girish",
    photo: null,
    status: "current",
    grade: "10",
    email: "abhiraamgirish@gmail.com",
    discord: ".anglesey",
    bio:
      "Abhiraam Girish likes geography and participates in everything " +
      "except science olympiad. He also likes tennis and Bayern Munich " +
      "among other things and is the best tennis and soccer sports " +
      "better within a 50 mile radius. He hopes to be the goat " +
      "nonchalant best winger in the world Michael Olises personal " +
      "assistant in the next five years.",
    roles: [
      { type: "officer", title: "Publicity Officer", order: 13 },
      { type: "captain", program: "quiz-bowl", title: "Co-Captain", order: 4 },
    ],
  },
  {
    id: "jonathan-yang",
    name: "Jonathan Yang",
    photo: null,
    status: "current",
    grade: "11",
    email: "jonathanyang97531@gmail.com",
    discord: "wyo.ming",
    bio:
      "Jonathan Yang is a junior and is one of MSJ AC's Activities " +
      "Coordinators this year. He participates in Science Olympiad, " +
      "where he mainly does inquiry and build events. He enjoys " +
      "mathematics and computer science, participating in competitions " +
      "such as the AIME and USACO, although he's kind of bad at both of " +
      "them. He is also a black belt in kung fu, despite skipping half " +
      "of his weekly classes. In his free time, he enjoys doomscrolling, " +
      "procrastinating, crashing out over his favorite football/soccer " +
      "team, and researching random things.",
    roles: [
      { type: "officer", title: "Activities Coordinator", order: 14 },
      { type: "captain", program: "science-olympiad", title: "Co-Captain", order: 5 },
    ],
  },

  // ==========================================================================
  // CURRENT CAPTAINS (no officer position)
  // ==========================================================================
  {
    id: "yeehun-jang",
    name: "Yeehun Jang",
    photo: null,
    status: "current",
    grade: "10",
    email: "yeehunj@gmail.com",
    discord: "bdellovibrios",
    bio:
      "Yeehun Jang is a sophomore and enjoys staring at photos of fish " +
      "on Wikipedia. He has competed in Science Olympiad and Ocean " +
      "Science Bowl with questionable results. He swims for the sole " +
      "purpose of keeping hydrated by drinking excessive amounts of " +
      "pool water. In his free time Yeehun enjoys doomscrolling, " +
      "eating, crashing out, and sleeping.",
    roles: [{ type: "captain", program: "ocean-science-bowl", title: "Captain", order: 2 }],
  },
  {
    id: "navika-joseph",
    name: "Navika Joseph",
    photo: null,
    status: "current",
    grade: "9",
    email: "navika.joseph@gmail.com",
    discord: "lavender.book",
    bio:
      "Navika Joseph is a freshman and has competed in Quiz Bowl, " +
      "History Bowl, Science Olympiad, and Science Bowl. Although she " +
      "specializes in history, she refuses to learn about the U.S " +
      "presidents because they are unimportant and unlikely to come up. " +
      "Between competition rounds she can be found doomscrolling while " +
      "pretending to review flashcards and devouring chocolate that " +
      "miraculously appears from the depths of her bag. In her free " +
      "time she enjoys watching youtube, stress eating oreos, and " +
      "staring out her window.",
    roles: [{ type: "captain", program: "history-bowl", title: "Co-Captain", order: 2 }],
  },
  {
    id: "eric-zhang",
    name: "Eric Zhang",
    photo: null,
    status: "current",
    roles: [{ type: "captain", program: "science-olympiad", title: "Co-Captain", order: 7 }],
  },

  // ==========================================================================
  // ALUMNI
  // ==========================================================================
  // classYear for Ashwin Vaidyanathan, Ethan Yan, and Ben Qu was inferred
  // from stated Grade + school year in their bio (no explicit "Class of"
  // line was given for them) and confirmed by the club as of 2026-08-26.
  {
    id: "ashwin-vaidyanathan",
    name: "Ashwin Vaidyanathan",
    photo: null,
    status: "alumni",
    classYear: "2026",
    bio:
      "Junior Ashwin Vaidyanathan serves as the history bowl captain for " +
      "MSJ AC and currently participates in History Bowl (duh) and Quiz " +
      "Bowl. His main interests are history and political science, and " +
      "he has participated in national and international level " +
      "competitions in both. He enjoys studying these subjects deeply, " +
      "by which he means going down Wikipedia and Youtube rabbit holes. " +
      "At school, he also does Model UN, is Vice President of the " +
      "Civics Club, runs a politics blog, and is regrettably, a " +
      "percussionist in MSJ's marching band and wind ensemble. Outside " +
      "of school, Ashwin enjoys practicing percussion, watching Youtube " +
      "videos, and listening to music. His music taste is primarily " +
      "K-pop, but he also listens to classical music, especially when " +
      "locking in during the wee hours of the night. Recently, he has " +
      "taken a peculiar interest in working out and going to the gym, " +
      "an interest which will face the ultimate test at the hands of " +
      "the College Board this year.",
    roles: [{ type: "officer", title: "History Bowl Captain", order: 1 }],
  },
  {
    id: "ethan-yan",
    name: "Ethan Yan",
    photo: null,
    status: "alumni",
    classYear: "2026",
    bio:
      "Junior Ethan Yan is an Activities Coordinator for MSJ AC. During " +
      "Sophomore year, he competed as a physics and math specialist in " +
      "Science Bowl and participated in physics and inquiry events in " +
      "Science Olympiad. He participates in math and physics contests, " +
      "such as the AMCs and F=ma. Outside of school, he is an avid " +
      "figure skater, with his favorite jumps being Axel and Lutz and " +
      "least favorite being Loop. He also enjoys watching movies, some " +
      "of his favorites being Gladiator, The Man in the Iron Mask, and " +
      "The Godfather, from which he chose music for his figure skating " +
      "routines.",
    roles: [{ type: "officer", title: "Activities Coordinator", order: 1 }],
  },
  {
    id: "jasmine-li",
    name: "Jasmine Li",
    photo: null,
    status: "alumni",
    classYear: "2026",
    bio:
      "This school year, Senior Jasmine Li has retired their position " +
      "as smiskified Publicity Officer to serve as one of AC's " +
      "secretaries. In Science Olympiad, she competes in physics, " +
      "inquiry, and build events. Jasmine is also unfortunately " +
      "chronically online. In their free time, she watches comedy " +
      "specials, tries to perfect her ballroom whisk, maintains a daily " +
      "30 min on Twitter, and keeps up with the Midwest Emo music " +
      "scene. Spot them on campus with a different hair color each " +
      "month.",
    roles: [{ type: "officer", title: "Co-Secretary, Science Olympiad Co-Captain", order: 1 }],
  },
  {
    id: "aravind-muralidharan",
    name: "Aravind Muralidharan",
    photo: null,
    status: "alumni",
    classYear: "2026",
    bio:
      "Senior Aravind Muralidharan serves as ocean science bowl captain " +
      "and the treasurer for the AC club this year. He has also tried " +
      "in science bowl, quiz bowl, and science Olympiad with varying " +
      "degrees of success. His other activities include playing violin " +
      "for the school orchestra as well as the California Youth " +
      "Symphony; running for MSJ track and field in the 100 meters, " +
      "long jump, and triple jump; and grinding for USABO. In his free " +
      "time he likes to listen to and play classical music, attempt " +
      "records in MarioKart 8 deluxe, work on jigsaw puzzles (looking " +
      "for a good 2000 piece puzzle right now), and play street " +
      "basketball with his friends.",
    roles: [{ type: "officer", title: "Co-Secretary, Ocean Science Bowl Co-Captain", order: 1 }],
  },
  {
    id: "advaith-mopuri",
    name: "Advaith Mopuri",
    photo: null,
    status: "alumni",
    classYear: "2026",
    bio:
      "Senior Advaith Mopuri is a co-captain of the science bowl team. " +
      "Advaith specializes in math and physics, and is unusually bad at " +
      "chemistry. He likes running, working on puzzles, playing with " +
      "his dog, and most other things you can do outside. Advaith also " +
      "likes playing board games, watching sitcoms, and making bad " +
      "jokes. In his free time, you can probably find Advaith listening " +
      "to Clairo and drinking matcha.",
    roles: [{ type: "officer", title: "Co-President, Science Bowl Co-Captain", order: 1 }],
  },
  {
    id: "fiona-hsu",
    name: "Fiona Hsu",
    photo: null,
    status: "alumni",
    classYear: "2025",
    bio:
      "Senior Fiona Hsu serves as this school year's Science Olympiad " +
      "co-captain. Aside from competing in, of course, Science Olympiad " +
      "competitions, she has also been in a few MUN conferences. " +
      "Unfortunately, the entirety of her personality revolves around " +
      "having moved from USA to Taiwan to USA, and thus she carries a " +
      "bunch of unrelatable and strange credentials ranging from the " +
      "ability to do balloon sculpting to doing front flips (no I will " +
      "not demonstrate). She also runs. Which, in fact, is painful. " +
      'This year, Fiona has also become a Co-President of the Academic ' +
      "Challenge Club. She has a special obsession with chemistry, " +
      "because NaOH is yummy (just kidding, please do not consume " +
      "NaOH). Overall, she has other interests outside of school, " +
      "including creating foodstuffs, drawing, reading, surviving " +
      "through typhoons in Taiwan, and gaming quite a bit.",
    roles: [{ type: "officer", title: "President 2024-2025, Science Olympiad Captain 2023-2024, 2024-2025", order: 1 }],
  },
  {
    id: "rayyan-ibrahim",
    name: "Rayyan Ibrahim",
    photo: null,
    status: "alumni",
    classYear: "2025",
    bio:
      "Senior Rayyan Ibrahim currently serves as an Ocean Sciences Bowl " +
      "Captain and Science Olympiad Captain. Rayyan specializes mostly " +
      "in biology events but has a deep hatred for Science Olympiad's " +
      '"Forestry" event. Outside of AC, he is also the President of ' +
      "the MSJ Biology Club and Percussion Captain of the MSJ Drumline. " +
      "Outside of MSJ, Rayyan has worked in a herpetology lab and has " +
      "participated in ecological fieldwork. He enjoys spending time " +
      "out in nature, with hobbies ranging from wildlife photography to " +
      "fishing. He also likes hanging out with his pets, which include " +
      "parakeets and cats.",
    roles: [{ type: "officer", title: "President 2024-2025, Science Olympiad Captain 2024-2025, Ocean Science Bowl Captain 2024-2025", order: 1 }],
  },
  {
    id: "advai-srinivasan",
    name: "Advai Srinivasan",
    photo: null,
    status: "alumni",
    classYear: "2025",
    bio:
      "Advai Srinivasan is one of the Science Olympiad captains this " +
      "year; he also participates in science bowl and focuses on the " +
      "earth and space sciences. He likes rocks and minerals a lot and " +
      "tends to find himself lost in identifying images. Outside of sad " +
      "hobbies he likes to bake, cook, and read manga/webtoons. He also " +
      "plays trombone and finds fun in playing random songs he hears " +
      "from time to time.",
    roles: [{ type: "officer", title: "Secretary 2024-2025, Science Olympiad Captain 2024-2025", order: 1 }],
  },
  {
    id: "annie-xu",
    name: "Annie Xu",
    photo: null,
    status: "alumni",
    classYear: "2024",
    roles: [{ type: "officer", title: "President 2023-24, Science Bowl Captain 2023-24, Publicity Officer 2022-23", order: 1 }],
  },
  {
    id: "sahas-goli",
    name: "Sahas Goli",
    photo: null,
    status: "alumni",
    classYear: "2024",
    roles: [{ type: "officer", title: "Vice President 2023-24, Ocean Science Bowl Captain 2022-24, Activities Coordinator 2022-23", order: 1 }],
  },
  {
    id: "aadrij-upadya",
    name: "Aadrij Upadya",
    photo: null,
    status: "alumni",
    classYear: "2024",
    roles: [{ type: "officer", title: "Vice President 2023-24, Science Olympiad Captain 2022-24", order: 1 }],
  },
  {
    id: "varish-venkatesh",
    name: "Varish Venkatesh",
    photo: null,
    status: "alumni",
    classYear: "2024",
    roles: [{ type: "officer", title: "Science Olympiad Captain 2023-24", order: 1 }],
  },
  {
    id: "kerry-xu",
    name: "Kerry Xu",
    photo: null,
    status: "alumni",
    classYear: "2024",
    roles: [{ type: "officer", title: "Treasurer 2023-24, History and Quiz Bowl Captain 2023-24", order: 1 }],
  },
  {
    id: "daniel-liu",
    name: "Daniel Liu",
    photo: null,
    status: "alumni",
    classYear: "2024",
    roles: [{ type: "officer", title: "Secretary 2023-24", order: 1 }],
  },
  {
    id: "arushi-dinker",
    name: "Arushi Dinker",
    photo: null,
    status: "alumni",
    classYear: "2024",
    roles: [{ type: "officer", title: "Publicity Officer 2023-24", order: 1 }],
  },
  {
    id: "shivi-narang",
    name: "Shivi Narang",
    photo: null,
    status: "alumni",
    classYear: "2024",
    roles: [{ type: "officer", title: "Activities Coordinator 2023-24, Science Olympiad Captain 2023-24", order: 1 }],
  },
  {
    id: "chris-ge",
    name: "Chris Ge",
    photo: null,
    status: "alumni",
    classYear: "2023",
    bio:
      "Junior Chris Ge serves as AC's Treasurer and a captain for " +
      "Science Olympiad 2021-2022. He's participated on MSJ's Science " +
      "Olympiad A team for 2 years and was a captain last year. His " +
      "favorite subject in science is physics, and his favorite overall " +
      "subject is math (though computer science is a close second). In " +
      "particular, he's been competing in math competitions since 4th " +
      "grade, is a 3-time USAJMO qualifier, 5-time AIME qualifier, and " +
      "1-time USAJMO Honorable Mention. For some further flexes: he's " +
      "in the USACO Gold Division and was in the top 50% of USAPhO " +
      "contestants in 2021. Chris will meme whether or not it is " +
      "appropriate. He also has 7 Pokemon Go accounts and actively " +
      "plays them.",
    roles: [{ type: "officer", title: "Co-President 2022-2023, Treasurer 2021-2022, Science Olympiad Captain 2021-2023", order: 1 }],
  },
  {
    id: "jerry-yuan",
    name: "Jerry Yuan",
    photo: null,
    status: "alumni",
    classYear: "2023",
    bio:
      "Junior Jerry Yuan serves as AC's Secretary, after previously " +
      "serving as Webmaster, and is a two-year Ocean Science Bowl " +
      "Captain. In addition, he has five years of Science Bowl and two " +
      "years of Science Olympiad experience, particularly specializing " +
      "in earth/space science and physics and being a USAPhO and " +
      "USAAAO Semifinalist, as well as qualifying for AIME and USACO " +
      "Silver. Additionally, he helps with coaching/tutoring the " +
      "elementary school Science Bowl Teams, particularly the Gomes " +
      "team. Outside of AC, Jerry served as the Smoke Signal's sports " +
      "editor, was a part of the MSJ Badminton Varsity and MSJ Cross " +
      "Country teams, and was an officer for MSJ's Earth and Space " +
      "Club. In his free time, Jerry spends way too much time listening " +
      "to podcasts or k-pop music and playing Minecraft.",
    roles: [{ type: "officer", title: "Co-President 2022-2023, Secretary 2021-2022, Webmaster 2020-2021, Science Bowl Co-Captain 2022-2023, Ocean Science Bowl Captain 2020-2023", order: 1 }],
  },
  {
    id: "ayushi-kashyap",
    name: "Ayushi Kashyap",
    photo: null,
    status: "alumni",
    classYear: "2023",
    bio:
      "Junior Ayushi Kashyap has participated in Science Olympiad for " +
      "seven years, since elementary school, doing events in all of " +
      "the subject areas, while competing, and medaling at a variety of " +
      "invitationals. Her favorite subject area is identification and " +
      "binder events. Her least favorite area is build events, for " +
      "obvious reasons. She also did Ocean Science Bowl in freshman " +
      "year and had fun memeing around. Outside of AC, she helps run " +
      "the BirdSO Invitational, a very fun Science Olympiad " +
      "invitational. In her free time, she enjoys reading books, " +
      "listening to music, and making people laugh.",
    roles: [{ type: "officer", title: "Co-Vice President 2022-2023, Science Olympiad Captain 2021-2023", order: 1 }],
  },
  {
    id: "samuel-zhou",
    name: "Samuel Zhou",
    photo: null,
    status: "alumni",
    classYear: "2023",
    bio:
      "Junior Samuel Zhou served as AC's Webmaster. He's participated " +
      "in Science Bowl for four years, getting to Middle School " +
      "Nationals in 2019, participating on the MSJ A team, and has also " +
      "helped coach the Gomes Science Bowl team. He specializes in math " +
      "and physics, and has participated in those competitions for " +
      "several years — a 2021 USAJMO qualifier, a 2-time AIME " +
      "qualifier, a 2-time USAPhO qualifier, and a 2021 USAPhO " +
      "honorable mention. In his free time, he enjoys a good dystopian " +
      "novel, a several hour long YouTube binge, or playing video games " +
      "for too long at a time.",
    roles: [{ type: "officer", title: "Co-Vice President 2022-2023, Webmaster 2021-2022, Science Bowl Co-Captain 2022-2023", order: 1 }],
  },
  {
    id: "pareekshith-krishna",
    name: "Pareekshith Krishna",
    photo: null,
    status: "alumni",
    classYear: "2023",
    bio:
      "Junior Pareekshith Krishna served as the co-captain of MSJ " +
      "Quizbowl alongside Kaushik. Pareekshith participated in Quizbowl " +
      "for over six years, earning 3rd at Middle School Nationals in " +
      "2019 and 19th at High School Nationals in 2021. His specialties " +
      "include history, literature, and science, and he helped coach " +
      "and tutor middle school students and teams in these fields. In " +
      "his free time, you can probably find him reading extremely long " +
      "and boring novels, watching Youtube, and playing Clash Royale.",
    roles: [{ type: "officer", title: "Secretary 2022-2023, Quiz Bowl Captain 2021-2023, History Bowl Co-Captain 2021-2023", order: 1 }],
  },
  {
    id: "chahak-gupta",
    name: "Chahak Gupta",
    photo: null,
    status: "alumni",
    classYear: "2023",
    roles: [{ type: "officer", title: "Treasurer 2022-2023", order: 1 }],
  },
  {
    id: "ben-qu",
    name: "Ben Qu",
    photo: null,
    status: "alumni",
    classYear: "2023",
    bio:
      "Junior Benjamin Qu served as the co-captain of MSJ History Bowl " +
      "alongside Pareekshith. Benjamin participated in History Bee and " +
      "Bowl since 7th grade, making semifinals in Middle School History " +
      "Bee Nationals in 2019, and getting 13th place in High School " +
      "History Bowl Nationals in 2020. He likes history and biology, " +
      "and is an active Boy Scout. If he isn't working, you can " +
      "probably find him surfing the Internet, watching random " +
      "shows/movies, or playing video games.",
    roles: [{ type: "officer", title: "History Bowl Co-Captain 2021-2022", order: 1 }],
  },
  {
    id: "titus-tsai",
    name: "Titus Tsai",
    photo: null,
    status: "alumni",
    classYear: "2022",
    bio:
      "Senior Titus Tsai serves as Academic Challenge's President, " +
      "Science Bowl Captain, and Ocean Science Bowl Captain after " +
      "previously serving as the Activities Coordinator and Ocean " +
      "Science Bowl Captain. He actively participates in practices " +
      "for/is part of all four of Academic Challenge's competitions at " +
      "the time. Despite only specializing in geoscience and astronomy, " +
      "he was part of the Varsity/A team of Science Bowl, Ocean Science " +
      "Bowl, and Science Olympiad for two years. Quite predictably, his " +
      "main interests concern the Earth and space, so he can often be " +
      "found listening to miscellaneous lectures on such topics.",
    roles: [{ type: "officer", title: "President 2021-2022, Activities Coordinator 2020-2021, Science Bowl Captain 2021-2022, Ocean Science Bowl Captain 2020-2022", order: 1 }],
  },
  {
    id: "inimai-subramanian",
    name: "Inimai Subramanian",
    photo: null,
    status: "alumni",
    classYear: "2022",
    bio:
      "Senior Inimai Subramanian serves as AC's Vice President, after " +
      "previously serving as Treasurer, and is a Science Olympiad " +
      "Captain. She has been an avid member of Science Olympiad for 5 " +
      "years and has won countless awards and medals through the " +
      "competition, as well as competing in Science Bowl for 2 years. " +
      "She loves learning about a wide range of topics, but specializes " +
      "in Earth Science and Astronomy. An eager teacher of mathematics " +
      "and science, she also enjoys reading books, doing physics, and " +
      "finding new specimens to add to her rock collection. In her " +
      "spare time, she loves to play piano, dance, attempt to write " +
      "poetry, and embark on lengthy Wikipedia spirals.",
    roles: [{ type: "officer", title: "Vice President 2021-2022, Treasurer 2020-2021, Science Olympiad Captain 2020-2022", order: 1 }],
  },
  {
    id: "kaushik-varadharajan",
    name: "Kaushik Varadharajan",
    photo: null,
    status: "alumni",
    classYear: "2022",
    bio:
      "Senior Kaushik Varadharajan served as the co-captain of MSJ " +
      "Quizbowl, along with Pareekshith. This was Kaushik's third year " +
      "participating in the event, after joining at the end of freshman " +
      "year and repeatedly getting painfully close to winning " +
      "tournaments. His interests lie in computer science, language, " +
      "and music, and he was also the vice president of MSJ Linguistics " +
      "Club. If he wasn't stressing over college essays, he was either " +
      "watching YouTube videos about history and language, attempting " +
      "to make music on GarageBand, or just sleeping.",
    roles: [{ type: "officer", title: "Quiz Bowl Captain 2021-2022", order: 1 }],
  },
  {
    id: "caleb-chiang",
    name: "Caleb Chiang",
    photo: null,
    status: "alumni",
    classYear: "2021",
    roles: [{ type: "officer", title: "President 2020-2021, Secretary 2019-2020, Science Olympiad Captain 2019-2021", order: 1 }],
  },
  {
    id: "srinjoy-chatterjee",
    name: "Srinjoy Chatterjee",
    photo: null,
    status: "alumni",
    classYear: "2021",
    roles: [{ type: "officer", title: "Vice President 2020-2021, Science Bowl Captain 2020-2021", order: 1 }],
  },
  {
    id: "anish-kashyap",
    name: "Anish Kashyap",
    photo: null,
    status: "alumni",
    classYear: "2021",
    roles: [{ type: "officer", title: "Secretary 2020-2021, Science Bowl Co-Captain 2020-2021", order: 1 }],
  },
  {
    id: "raymond-qian",
    name: "Raymond Qian",
    photo: null,
    status: "alumni",
    classYear: "2021",
    roles: [{ type: "officer", title: "Science Olympiad Captain 2020-2021", order: 1 }],
  },
  {
    id: "vibhav-athreya",
    name: "Vibhav Athreya",
    photo: null,
    status: "alumni",
    classYear: "2021",
    roles: [{ type: "officer", title: "Quiz Bowl Captain 2020-2021", order: 1 }],
  },
  {
    id: "ashish-basetty",
    name: "Ashish Basetty",
    photo: null,
    status: "alumni",
    classYear: "2021",
    roles: [{ type: "officer", title: "Quiz Bowl Captain 2020-2021", order: 1 }],
  },
  {
    id: "jack-burd",
    name: "Jack Burd",
    photo: null,
    status: "alumni",
    classYear: "2021",
    roles: [{ type: "officer", title: "Activities Coordinator 2019-2020", order: 1 }],
  },
  {
    id: "christina-yu",
    name: "Christina Yu",
    photo: null,
    status: "alumni",
    classYear: "2020",
    roles: [{ type: "officer", title: "President 2019-2020, Science Olympiad Captain 2018-2020", order: 1 }],
  },
  {
    id: "patrick-liu",
    name: "Patrick Liu",
    photo: null,
    status: "alumni",
    classYear: "2020",
    roles: [{ type: "officer", title: "Vice President 2019-2020, Science Bowl Captain 2019-2020", order: 1 }],
  },
  {
    id: "eric-ma",
    name: "Eric Ma",
    photo: null,
    status: "alumni",
    classYear: "2020",
    roles: [{ type: "officer", title: "Treasurer 2019-2020, Science Olympiad Build Captain 2019-2020", order: 1 }],
  },
  {
    id: "angela-gao",
    name: "Angela Gao",
    photo: null,
    status: "alumni",
    classYear: "2020",
    roles: [{ type: "officer", title: "Webmaster 2019-2020, Ocean Science Bowl Captain 2019-2020", order: 1 }],
  },
  {
    id: "rachel-hsiao",
    name: "Rachel Hsiao",
    photo: null,
    status: "alumni",
    classYear: "2020",
    bio: "Rachel is credited with designing the current MSJ AC logo!",
    roles: [{ type: "officer", title: "Graphic Designer 2019-2020, Ocean Science Bowl Captain 2019-2020", order: 1 }],
  },
];
