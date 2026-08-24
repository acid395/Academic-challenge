// ---------------------------------------------------------------------------
// PEOPLE. Every officer, captain, and alumnus is defined exactly ONCE here
// and referenced everywhere else by id. To add a person, add one object to
// this array — their bio page, roster card, and any program-page captain
// listing are all generated from this record. Nothing else needs editing.
//
// Fields:
//   id           kebab-case, used to build team/people/<id>.html
//   name         placeholder display name
//   photo        null -> renders a styled initials block automatically.
//                Set to a path (e.g. "assets/photos/member-01.jpg") to
//                switch to a real photo — the template swaps automatically.
//   status       "current" | "alumni"
//   classYear    graduating class, used to group the alumni roster
//   email        optional; shown on the person's bio page and, for
//                officers, on the contact page
//   bio          placeholder paragraph
//   roles        array of { type: "officer" | "captain", title, program,
//                order }. "program" (a program slug) is only used for
//                captain roles. "order" controls listing order within a
//                roster/group. A person can hold more than one role.
// ---------------------------------------------------------------------------
module.exports = [
  // --- Officers (current) ---------------------------------------------
  {
    id: "member-01",
    name: "Member Name 01",
    photo: null,
    status: "current",
    email: "member01@example.com",
    bio:
      "Bio placeholder for Member Name 01. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [{ type: "officer", title: "President", order: 1 }],
  },
  {
    id: "member-02",
    name: "Member Name 02",
    photo: null,
    status: "current",
    email: "member02@example.com",
    bio:
      "Bio placeholder for Member Name 02. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [
      { type: "officer", title: "Vice President", order: 2 },
      { type: "captain", program: "quiz-bowl", title: "Captain", order: 1 },
    ],
  },
  {
    id: "member-03",
    name: "Member Name 03",
    photo: null,
    status: "current",
    email: "member03@example.com",
    bio:
      "Bio placeholder for Member Name 03. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [{ type: "officer", title: "Secretary", order: 3 }],
  },
  {
    id: "member-04",
    name: "Member Name 04",
    photo: null,
    status: "current",
    email: "member04@example.com",
    bio:
      "Bio placeholder for Member Name 04. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [{ type: "officer", title: "Treasurer", order: 4 }],
  },

  // --- Captains (current) ----------------------------------------------
  {
    id: "member-05",
    name: "Member Name 05",
    photo: null,
    status: "current",
    email: null,
    bio:
      "Bio placeholder for Member Name 05. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [{ type: "captain", program: "science-olympiad", title: "Captain", order: 1 }],
  },
  {
    id: "member-06",
    name: "Member Name 06",
    photo: null,
    status: "current",
    email: null,
    bio:
      "Bio placeholder for Member Name 06. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [{ type: "captain", program: "science-olympiad", title: "Co-Captain", order: 2 }],
  },
  {
    id: "member-07",
    name: "Member Name 07",
    photo: null,
    status: "current",
    email: null,
    bio:
      "Bio placeholder for Member Name 07. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [{ type: "captain", program: "science-bowl", title: "Captain", order: 1 }],
  },
  {
    id: "member-08",
    name: "Member Name 08",
    photo: null,
    status: "current",
    email: null,
    bio:
      "Bio placeholder for Member Name 08. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [{ type: "captain", program: "ocean-science-bowl", title: "Captain", order: 1 }],
  },
  {
    id: "member-09",
    name: "Member Name 09",
    photo: null,
    status: "current",
    email: null,
    bio:
      "Bio placeholder for Member Name 09. Replace with a short bio " +
      "covering grade, interests, and role on the team.",
    roles: [{ type: "captain", program: "history-bowl", title: "Captain", order: 1 }],
  },

  // --- Alumni -------------------------------------------------------------
  {
    id: "member-10",
    name: "Member Name 10",
    photo: null,
    status: "alumni",
    classYear: "20XX",
    email: null,
    bio:
      "Bio placeholder for Member Name 10. Replace with a short bio " +
      "covering their time in the club and what they went on to do.",
    roles: [
      { type: "officer", title: "Former President", order: 1 },
      { type: "captain", program: "science-bowl", title: "Former Captain", order: 1 },
    ],
  },
  {
    id: "member-11",
    name: "Member Name 11",
    photo: null,
    status: "alumni",
    classYear: "20XX",
    email: null,
    bio:
      "Bio placeholder for Member Name 11. Replace with a short bio " +
      "covering their time in the club and what they went on to do.",
    roles: [{ type: "captain", program: "ocean-science-bowl", title: "Former Captain", order: 2 }],
  },
  {
    id: "member-12",
    name: "Member Name 12",
    photo: null,
    status: "alumni",
    classYear: "20XY",
    email: null,
    bio:
      "Bio placeholder for Member Name 12. Replace with a short bio " +
      "covering their time in the club and what they went on to do.",
    roles: [{ type: "officer", title: "Former Secretary", order: 1 }],
  },
];
