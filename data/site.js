// ---------------------------------------------------------------------------
// SITE-WIDE SETTINGS. Edit this file to change the club name, tagline, or
// meeting/advisor info that appears in the header, footer, home page, and
// about page.
// ---------------------------------------------------------------------------
module.exports = {
  clubName: "Academic Challenge",
  shortName: "Academic Challenge",
  tagline:
    "A student-run club at Mission San Jose High School that competes in " +
    "Science Olympiad, Science Bowl, Quiz Bowl, Ocean Science Bowl, and " +
    "History Bowl at the regional, state, and national levels.",
  // Real copy, supplied by the club. Shown directly under the h1 on the
  // home page, above the Contact Us / Meet Our Team buttons.
  homeIntroParagraphs: [
    "The goal of Mission San Jose Academic Challenge is to increase " +
      "student interest in various STEM and humanities fields through " +
      "participation in the various competitions of History Bowl, Ocean " +
      "Science Bowl, Science Bowl, Science Olympiad, and Quiz Bowl.",
    "As a primarily student-run organization, MSJ AC also seeks to " +
      "foster leadership and communication skills in its members.",
  ],
  joinCta: {
    heading: "Get Involved",
    bodyParagraphs: [
      "We welcome high school students of any grade to join one of our " +
        "competitions. Join our Discord server and use the " +
        "#competition-select channel to sign up for events and mailing " +
        "lists — each program also has its own sign-up form, linked on " +
        "that program's page.",
      "We are also always looking for mentors and volunteers " +
        "(particularly parents)! If interested, email us at " +
        "ac.msjhs@gmail.com.",
    ],
    ctaLabel: "Join Our Discord",
    ctaHref: "https://discord.gg/XSwSzKC8wY",
  },
  donate: {
    heading: "Donate",
    body:
      "Donations of any amount are highly appreciated! The school does " +
      "not have any funding allocated for our club, so we depend " +
      "largely on student-run fundraisers and donations. Contributions " +
      "go toward registration fees, transportation, lodging, study " +
      "materials, facility rentals, and advisor stipends — costs that " +
      'add up quickly. To donate, make checks payable to "MSJHS (MSJ ' +
      'Academic Challenge)" with the purpose noted on the memo line; ' +
      "receipts are available on request. We also accept non-monetary " +
      "donations such as equipment or materials, and can discuss company " +
      "matching, grants, or sponsorships.",
    linkLabel: "Contact Us About Donating",
  },
  about: {
    whatWeDo:
      'Affectionately dubbed "Academically Challenged" by its members, ' +
      "Academic Challenge is a student-run club that competes in Science " +
      "Olympiad, Science Bowl, Quiz Bowl, Ocean Science Bowl, and History " +
      "Bowl at the regional, state, and national levels. Our goal is to " +
      "encourage the study of science, engineering, math, and the " +
      "humanities, and to create a tightly-knit community of students.",
    school:
      "Academic Challenge is based at Mission San Jose High School, a " +
      "public high school in Fremont, California that serves grades 9–12.",
    organization:
      "The club is run entirely by its students. An officer board " +
      "handles overall operations and logistics, while each competition " +
      "program is led by student captains who run tryouts, practices, " +
      "and travel for their event.",
  },
  // No single club-wide meeting time — each program sets its own tryout
  // and practice schedule (see each program's "How to Participate").
  meeting: {
    summary: "Practice schedules are set per program, not club-wide.",
    detail:
      "Each program's page lists its current tryout process and " +
      "practice day/time under \"How to Participate.\" Most practices " +
      "run weekly during that program's season, either at Mission San " +
      "Jose High School or online.",
  },
  advisor: {
    name: "Advisor Name Placeholder",
    email: "advisor@example.com",
  },
};
