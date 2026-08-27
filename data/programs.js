// ---------------------------------------------------------------------------
// PROGRAMS. One entry per competition program. To add a program, add one
// object to this array — every nav menu, dropdown, footer sitemap, and
// prev/next link on program pages is generated from this list, so nothing
// else needs to be edited by hand.
//
// achievements / upcomingCompetitions are plain data arrays: add or remove
// a row to change what renders in those sections, no markup involved.
// logos: small org/tournament logo(s) shown next to the page title.
// photos: real team photos shown in a gallery on the Notable Achievements
// section — each is { src (relative to public/), alt, caption }. Add or
// remove an entry to change what shows, no markup involved.
//
// Content below is sourced from the club's previous site
// (msjhsac.wixsite.com/home) as of 2026-08, plus later corrections from
// the club. Per-program sign-up form links were removed (2026-08) once
// they went stale — participate.selectionProcess now points people to
// Discord/Contact instead. Where a field isn't known (e.g. exact
// upcoming competition dates), it's left empty rather than guessed.
// ---------------------------------------------------------------------------
module.exports = [
  {
    slug: "science-olympiad",
    name: "Science Olympiad",
    shortDescription:
      "A tournament-style competition spanning 23 events in science, engineering, and math.",
    logos: [{ src: "assets/programs/science-olympiad/scioly-logo.png", alt: "Science Olympiad logo" }],
    photos: [
      {
        src: "assets/programs/science-olympiad/bay-area-regional.jpg",
        alt: "The team posing in a gym under a Cal State East Bay Pioneers sign, holding medals and a trophy",
        caption: "Bay Area Regionals",
      },
      {
        src: "assets/programs/science-olympiad/norcal-state.jpg",
        alt: "The team and their coach holding a 5th place trophy and plaque in front of a Science Olympiad banner",
        caption: "NorCal State, 5th place (2025)",
      },
    ],
    overview:
      'Science Olympiad is often called "the track meet of academia." ' +
      "Teams of 15 compete across 23 events spanning science, " +
      "engineering, and mathematics — a mix of written tests, pre-built " +
      "devices, and on-site labs — over 7 time blocks per tournament. " +
      "Placements across all events combine into an overall team score, " +
      "with lower totals ranking higher. MSJ competes through " +
      "invitationals, Bay Area Regionals, and Northern California State " +
      "Finals, with most tournaments held on Saturdays.",
    participate: {
      whoCanJoin: "Open to any Mission San Jose High School student, grades 9–12.",
      selectionProcess:
        "Tryouts are typically held in October: candidates test on up to " +
        "6 events during lunch in Mr. Melcic's room over about two weeks.",
      timeCommitment: "Varies by event load — most members compete in up to 6 events per season.",
      practiceSchedule: "Set after tryouts, once event assignments are finalized.",
      whatToStudy: "Event-specific study guides, shared in the MSJ AC Discord server once you're signed up.",
    },
    achievements: [
      { year: "2026", competition: "NorCal State Science Olympiad", placement: "5th place" },
      { year: "2026", competition: "NorCal State Science Olympiad — Astronomy", placement: "1st place" },
      { year: "2026", competition: "NorCal State Science Olympiad — Designer Genes", placement: "1st place" },
      { year: "2026", competition: "NorCal State Science Olympiad — Materials Science", placement: "1st place" },
      { year: "2026", competition: "NorCal State Science Olympiad — Rocks and Minerals", placement: "1st place" },
      { year: "2026", competition: "NorCal State Science Olympiad — Chemistry Lab", placement: "3rd place" },
      { year: "2026", competition: "NorCal State Science Olympiad — Circuit Lab", placement: "3rd place" },
      { year: "2026", competition: "NorCal State Science Olympiad — Disease Detectives", placement: "3rd place" },
      { year: "2026", competition: "NorCal State Science Olympiad — Remote Sensing", placement: "3rd place" },
      { year: "2026", competition: "Alameda County Science Olympiad", placement: "2nd place" },
      { year: "2023-24", competition: "BARSO (Regionals)", placement: "2nd place" },
      { year: "2023-24", competition: "Stanford Science Olympiad", placement: "3rd place" },
      { year: "2023-24", competition: "GullSO", placement: "3rd place" },
      { year: "2023-24", competition: "Mira Loma Science Olympiad Invitational", placement: "5th place" },
      { year: "2023-24", competition: "GGSO (Berkeley/Stanford Invitational)", placement: "6th place" },
      { year: "2023-24", competition: "NorCal State", placement: "6th place" },
    ],
    upcomingCompetitions: [],
  },
  {
    slug: "science-bowl",
    name: "Science Bowl",
    shortDescription:
      "A Jeopardy-style buzzer competition covering biology, chemistry, physics, earth & space science, math, and energy.",
    logos: [{ src: "assets/programs/science-bowl/nsb-logo.png", alt: "National Science Bowl logo" }],
    photos: [
      {
        src: "assets/programs/science-bowl/champions-2026.jpg",
        alt: "Five students and their coach holding a green banner reading National Science Bowl, 2026 National Champion",
        caption: "2026 National Science Bowl Champions",
      },
      {
        src: "assets/programs/science-bowl/stage-2026.jpg",
        alt: "The team on stage at the National Science Bowl holding a trophy cup",
        caption: "National Science Bowl finals, 2026",
      },
      {
        src: "assets/programs/science-bowl/team-2022.jpg",
        alt: "The team in National Science Bowl polos holding a trophy on stage, wearing masks",
        caption: "National Science Bowl, 2022",
      },
    ],
    overview:
      "Science Bowl is a Jeopardy-style buzzer competition between two " +
      "teams of five (four players plus one alternate). Each round " +
      "covers about 25 question sets across six disciplines — biology, " +
      "chemistry, physics, earth and space science, math, and energy — " +
      "with individual toss-ups worth 4 points and team-discussed bonus " +
      "questions worth 10.",
    participate: {
      whoCanJoin: "Open to any Mission San Jose High School student, grades 9–12.",
      selectionProcess:
        "Tryouts are one-hour, buzzer-based tests held per subject; each " +
        "student can try out for two subject sections, plus math " +
        "optionally. Team selection weighs tryout scores alongside team " +
        "synergy and behavior.",
      timeCommitment: "Set after tryouts, once teams are finalized.",
      practiceSchedule:
        "Practices use prewritten questions brought by each member, " +
        "then split into teams to run full competition sets; exact " +
        "times are set after tryouts and may change.",
      whatToStudy: "The six Science Bowl subject areas — biology, chemistry, physics, earth & space science, math, and energy.",
    },
    achievements: [
      { year: "2026", competition: "National Science Bowl", placement: "Champions" },
      { year: "2026", competition: "Stanford Science Bowl", placement: "Champions" },
      { year: "2026", competition: "Sandia Regional Science Bowl", placement: "Champions" },
      { year: "2024-25", competition: "Regionals", placement: "1st place" },
      { year: "2024-25", competition: "Nationals", placement: "Top 12" },
      { year: "2024-25", competition: "Berkeley Science Bowl", placement: "1st place" },
      { year: "2024-25", competition: "Stanford Science Bowl", placement: "1st place" },
      { year: "2024-25", competition: "MIT Science Bowl", placement: "2nd place" },
      { year: "2024-25", competition: "Blair-Amador Invitational", placement: "1st place" },
      { year: "2024-25", competition: "Texas Invitational", placement: "1st place" },
      { year: "2024-25", competition: "Iron City Invitational", placement: "1st place" },
    ],
    upcomingCompetitions: [
      { date: "TBA", event: "ICSBT 2", location: "TBA" },
      { date: "TBA", event: "Berkeley Science Bowl", location: "TBA" },
      { date: "TBA", event: "MIT Science Bowl", location: "TBA" },
      { date: "TBA", event: "AVES 2", location: "TBA" },
      { date: "TBA", event: "Stanford Science Bowl", location: "TBA" },
      { date: "TBA", event: "Sandia/LLNL Regionals", location: "TBA" },
    ],
  },
  {
    slug: "quiz-bowl",
    name: "Quiz Bowl",
    shortDescription:
      "A fast-paced buzzer competition covering science, history, literature, mythology, fine arts, and more.",
    logos: [
      { src: "assets/programs/quiz-bowl/naqt-logo.png", alt: "NAQT logo" },
      { src: "assets/programs/quiz-bowl/hsnct-logo.png", alt: "2026 High School National Championship Tournament logo" },
    ],
    photos: [
      {
        src: "assets/programs/quiz-bowl/hsnct-2026.jpg",
        alt: "Four students holding a trophy and wearing medals on stage at the High School National Championship Tournament",
        caption: "HSNCT 2026, 5th place",
      },
    ],
    overview:
      "Quiz Bowl is a fast-paced academic buzzer competition where teams " +
      "of 4–6 answer pyramidal toss-up questions spanning science, " +
      "history, literature, mythology, fine arts, and more. Clues run " +
      "from less well-known to more well-known within each question, " +
      "rewarding both broad knowledge and quick recall.",
    participate: {
      whoCanJoin: "Open to any Mission San Jose High School student, grades 9–12.",
      selectionProcess: "Sign up via the club Discord or contact us — see the Get Involved section on the home page.",
      timeCommitment: "Regular Sunday practices, plus tournament days as they're announced.",
      practiceSchedule: "In person, Sundays at 4:30 PM.",
      whatToStudy:
        "General academic knowledge across science, history, " +
        "literature, mythology, and fine arts; tournaments are usually " +
        "announced a couple of weeks in advance on the hsquizbowl forum.",
    },
    achievements: [
      { year: "2026", competition: "High School National Championship Tournament", placement: "5th place" },
    ],
    upcomingCompetitions: [],
  },
  {
    slug: "ocean-science-bowl",
    name: "Ocean Science Bowl",
    shortDescription:
      "A buzzer competition on marine science — biology, chemistry, physical & earth science, and policy.",
    logos: [{ src: "assets/programs/ocean-science-bowl/nosb-logo.png", alt: "National Ocean Sciences Bowl logo" }],
    photos: [
      {
        src: "assets/programs/ocean-science-bowl/sea-lion-bowl.jpg",
        alt: "The team posing with trophies and stuffed-animal prizes after the Sea Lion Bowl",
        caption: "Sea Lion Bowl (NorCal)",
      },
    ],
    overview:
      "Ocean Science Bowl (the National Ocean Sciences Bowl's Sea Lion " +
      "Bowl) is a buzzer competition covering marine biology, " +
      "chemistry, physical science, geology, geography, history, " +
      "technology, and policy. Each match pairs two buzzer rounds " +
      "around a Team Challenge Question (TCQ) worksheet round, where " +
      "the team works together on written questions; final scores " +
      "combine TCQ and buzzer performance. Teams field four players " +
      "plus one optional alternate. Regionals run in early February, " +
      "with the top team advancing to Nationals in April–May; " +
      "scrimmages run the month before Regionals.",
    participate: {
      whoCanJoin: "Open to any Mission San Jose High School student, grades 9–12.",
      selectionProcess: "General practices begin over the summer and continue until tryouts (date set each year).",
      timeCommitment: "Weekly practices through the season, plus scrimmages and the Regional/National tournaments.",
      practiceSchedule: "Currently online, Sundays 7–8 PM, with a planned move to in-person practices.",
      whatToStudy:
        "Buzzer training, scrimmages, and content review across marine " +
        "biology, chemistry, physical/earth science, geography, " +
        "history, technology, and policy — materials provided by " +
        "Academic Challenge.",
    },
    achievements: [
      { year: "2026", competition: "Sea Lion Bowl (NorCal)", placement: "Champions" },
      { year: "2023-24", competition: "Northern California Sea Lion Bowl Championship", placement: "3rd place" },
      { year: "2022-23", competition: "LOBSTr", placement: "1st place" },
      { year: "2022-23", competition: "Lynbrook Invitational (Varsity)", placement: "1st place" },
      { year: "2022-23", competition: "Lynbrook Invitational (JV)", placement: "3rd place" },
    ],
    upcomingCompetitions: [],
  },
  {
    slug: "history-bowl",
    name: "History Bowl",
    shortDescription: "A fast-paced buzzer competition testing knowledge across all of history.",
    logos: [{ src: "assets/programs/history-bowl/ihbb-logo.png", alt: "International History Bowl logo" }],
    photos: [
      {
        src: "assets/programs/history-bowl/team-sweatshirts.jpg",
        alt: "Three team members in Mission San Jose History Bowl sweatshirts in a hotel hallway",
        caption: "Mission San Jose History Bowl",
      },
      {
        src: "assets/programs/history-bowl/study-session.jpg",
        alt: "Team members studying together at a practice session",
        caption: "Team practice",
      },
    ],
    overview:
      "History Bowl is a fast-paced academic buzzer competition " +
      "covering all facets of history, from ancient civilizations to " +
      "contemporary events. Matches run four rounds: two toss-up " +
      "rounds of decreasing difficulty (the second with 10-point bonus " +
      'questions), a rapid-fire "lightning round" against the clock, ' +
      "and a final toss-up round with bonus points for earlier correct " +
      "answers. Teams field 3–6 players.",
    participate: {
      whoCanJoin: "Open to any Mission San Jose High School student, grades 9–12.",
      selectionProcess: "Sign up via the club Discord or contact us — see the Get Involved section on the home page.",
      timeCommitment: "Not specified — check the club Discord for current details.",
      practiceSchedule: "Not specified — check the club Discord for current details.",
      whatToStudy: "General history knowledge spanning ancient civilizations through contemporary events.",
    },
    achievements: [
      { year: "2026", competition: "National History Bowl (Varsity, ~100 teams)", placement: "35th place" },
      { year: "2026", competition: "National History Bowl (JV)", placement: "21st place" },
      { year: "2026", competition: "Hopkins History Bowl (~100 teams)", placement: "3rd place" },
      { year: "2025", competition: "National History Bowl (Varsity, ~100 teams)", placement: "25th place" },
      { year: "2025", competition: "Hopkins History Bowl (~100 teams)", placement: "5th place" },
    ],
    upcomingCompetitions: [],
  },
];
