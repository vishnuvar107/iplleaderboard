/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║                   LEADERBOARD DATA                       ║
 * ║──────────────────────────────────────────────────────────║
 * ║  This is the ONLY file you need to edit.                 ║
 * ║                                                          ║
 * ║  HOW TO ADD A MATCH:                                     ║
 * ║  1. Add a new object to the MATCHES array below.         ║
 * ║  2. Set id (display name), date (YYYY-MM-DD).            ║
 * ║  3. In results[], list each player who played,           ║
 * ║     with their score (integers or decimals both work).   ║
 * ║  4. Save the file and reload index.html in your browser. ║
 * ║                                                          ║
 * ║  WINS are determined automatically:                      ║
 * ║  The player with the highest score in each match wins.   ║
 * ║  Ties → all tied players are counted as winners.         ║
 * ╚══════════════════════════════════════════════════════════╝
 */

// ── Fixed player roster ─────────────────────────────────────
// Add or remove names here to change the roster.
// Players not in this list but present in match results
// will still appear in the leaderboard.
const PLAYERS = [
  "Muscleman",
  "Baniya",
  "Mutheri",
  "AlluArjun",
  "Spammer",
  "Fluker",
  "Bengali",
  "Kalu"
];

// ── Match data ───────────────────────────────────────────────
// Each match: { id, date, results: [{ player, score }, ...] }
// Not every player needs to appear in every match.
const MATCHES = [
  {
    id: "RCB vs SRH",
    date: "2026-03-28",
    results: [
      { player: "Muscleman", score: 1020 },
      { player: "Baniya", score: 906 },
      { player: "AlluArjun", score: 788.5 },
      { player: "Spammer", score: 896.5 },
      { player: "Fluker", score: 876 },
      { player: "Bengali", score: 737.5 }
    ]
  },

  {
    id: "MI vs KKR",
    date: "2026-03-29",
    results: [
      { player: "Muscleman", score: 851 },
      { player: "Baniya", score: 791 },
      { player: "Mutheri", score: 809 },
      { player: "AlluArjun", score: 772.5 },
      { player: "Spammer", score: 749 },
      { player: "Fluker", score: 724 },
      { player: "Kalu", score: 431 },
      { player: "Bengali", score: 736.5 }
    ]
  },

  {
    id: "RAJ vs CSK",
    date: "2026-03-30",
    results: [
      { player: "Muscleman", score: 582 },
      { player: "Baniya", score: 594 },
      { player: "AlluArjun", score: 612 },
      { player: "Spammer", score: 551 },
      { player: "Fluker", score: 454.5 },
      { player: "Bengali", score: 590 }
    ]
  },
  
  {
    id: "PK vs GT",
    date: "2026-03-31",
    results: [
      { player: "Muscleman", score: 724 },
      { player: "Baniya", score: 608.5 },
      { player: "Mutheri", score: 613.5 },
      { player: "AlluArjun", score: 591.5 },
      { player: "Spammer", score: 638.5 },
      { player: "Fluker", score: 654.5 },
      { player: "Bengali", score: 625.5 }
    ]
  },

  {
    id: "LSG vs DC",
    date: "2026-04-01",
    results: [
      { player: "Muscleman", score: 449.5 },
      { player: "Baniya", score: 459.5 },
      { player: "AlluArjun", score: 620.5 },
      { player: "Spammer", score: 486.5 },
      { player: "Fluker", score: 489.5 },
      { player: "Kalu", score: 548.5 },
      { player: "Bengali", score: 559 }
    ]
  }
  ,
  
  {
  id: "KKR vs SRH",
  date: "2026-04-02",
  results: [
    { player: "Spammer", score: 824.5 },
    { player: "Baniya", score: 677 },
    { player: "Fluker", score: 699 },
    { player: "Muscleman", score: 740 },
    { player: "Bengali", score: 634 }
  ]
},

  {
  id: "CSK vs PBKS",
  date: "2026-04-03",
  results: [
    { player: "Fluker", score: 968.5 },
    { player: "Spammer", score: 847.5 },
    { player: "Muscleman", score: 786 },
    { player: "Kalu", score: 777.5 },
    { player: "Bengali", score: 777.5 },
    { player: "Baniya", score: 748 },
    { player: "AlluArjun", score: 680.5 }
  ]
}
];
  // ── To add a new match, copy the block below and fill it in:
  // ,{
  //   id: "Match 07",
  //   date: "2025-04-06",
  //   results: [
  //     { player: "Sneha Iyer",   score: 240   },
  //     { player: "Arjun Mehta",  score: 220   },
  //     { player: "Divya Pillai", score: 198   }
  //   ]
  // }

