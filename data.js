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
},
  {
  id: "DC vs MI",
  date: "2026-04-04",
  results: [
    { player: "Fluker", score: 686.5 },
    { player: "Baniya", score: 428 },
    { player: "Spammer", score: 458.5 },
    { player: "Bengali", score: 412.5 },
    { player: "Kalu", score: 384.5 },
    { player: "AlluArjun", score: 561 }
  ]
},
{
  id: "GT vs RR",
  date: "2026-04-04",
  results: [
    { player: "Fluker", score: 965.5 },
    { player: "Bengali", score: 951.5 },
    { player: "AlluArjun", score: 944.5 },
    { player: "Baniya", score: 940.5 },
    { player: "Spammer", score: 786.5 },
    { player: "Muscleman", score: 753 }
  ]
},
  {
  id: "SRH vs LSG",
  date: "2026-04-05",
  results: [
    { player: "Fluker", score: 655.5 },
    { player: "AlluArjun", score: 642.5 },
    { player: "Baniya", score: 651 },
    { player: "Spammer", score: 734.5 },
    { player: "Muscleman", score: 619 }
  ]
},
  {
  id: "RCB vs CSK",
  date: "2026-04-05",
  results: [
    { player: "Fluker", score: 1021.5 },
    { player: "Bengali", score: 706.5 },
    { player: "AlluArjun", score: 851.5 },
    { player: "Baniya", score: 699.5 },
    { player: "Spammer", score: 705.5 },
    { player: "Muscleman", score: 850 },
    { player: "Kalu", score:642.5}
  ]
},
  {
  id: "RR vs MI",
  date: "2026-04-07",
  results: [
    { player: "Fluker", score: 724.5 },
    { player: "Bengali", score: 551.5 },
    { player: "AlluArjun", score: 603 },
    { player: "Baniya", score: 704 },
    { player: "Spammer", score: 615.5 },
    { player: "Muscleman", score: 616.5 }
  ]
},
  {
  id: "DC vs GT",
  date: "2026-04-08",
  results: [
    { player: "Fluker", score: 903.5 },
    { player: "Bengali", score: 909 },
    { player: "AlluArjun", score: 942 },
    { player: "Baniya", score: 900 },
    { player: "Spammer", score: 835 },
    { player: "Muscleman", score: 978 }
  ]
},
  {
  id: "KKR vs LSG",
  date: "2026-04-09",
  results: [
    { player: "Fluker", score: 578 },
    { player: "Bengali", score: 562.5 },
    { player: "Baniya", score: 550.5 },
    { player: "Spammer", score: 601 }
  ]
},
  {
  id: "RR vs RCB",
  date: "2026-04-10",
  results: [
    { player: "Fluker", score: 798 },
    { player: "Bengali", score: 956 },
    { player: "AlluArjun", score: 966 },
    { player: "Baniya", score: 839 },
    { player: "Spammer", score: 870 }
  ]
},
   {
  id: "PBKS vs SRH",
  date: "2026-04-11",
  results: [
    { player: "Fluker", score: 874.5 },
    { player: "Bengali", score: 1016.5 },
    { player: "AlluArjun", score: 867.5 },
    { player: "Baniya", score: 591.5 },
    { player: "Spammer", score: 591.5 },
    { player: "Muscleman", score: 825.5 }
  ]
},
   {
  id: "CSK vs DC",
  date: "2026-04-11",
  results: [
    { player: "Fluker", score: 803 },
    { player: "Bengali", score: 1025.5 },
    { player: "AlluArjun", score: 782 },
    { player: "Baniya", score: 702.5 },
    { player: "Spammer", score: 801.5 },
    { player: "Kalu", score: 595 }
  ]
},
   {
  id: "LSG vs GT",
  date: "2026-04-12",
  results: [
    { player: "Fluker", score: 723 },
    { player: "Bengali", score: 738.5 },
    { player: "AlluArjun", score: 795 },
    { player: "Baniya", score: 796 },
    { player: "Spammer", score: 790 }
  ]
},
   {
  id: "MI vs RCB",
  date: "2026-04-12",
  results: [
    { player: "Fluker", score: 851 },
    { player: "Bengali", score: 928.5 },
    { player: "AlluArjun", score: 950.5 },
    { player: "Baniya", score: 969 },
    { player: "Spammer", score: 772 }
  ]
},
   {
  id: "SRH vs RR",
  date: "2026-04-13",
  results: [
    { player: "Fluker", score: 577.5 },
    { player: "Bengali", score: 531 },
    { player: "AlluArjun", score: 831 },
    { player: "Baniya", score: 530 },
    { player: "Spammer", score: 536 }
  ]
},
  {
  id: "CSK vs KKR",
  date: "2026-04-14",
  results: [
    { player: "Fluker", score: 656.5 },
    { player: "Bengali", score: 674.5 },
    { player: "AlluArjun", score: 670.5 },
    { player: "Baniya", score: 784 },
    { player: "Spammer", score: 709.5 },
    { player: "Muscleman", score: 706.5 }
  ]
},
  {
  id: "RCB vs LSG",
  date: "2026-04-15",
  results: [
    { player: "Fluker", score: 814.5 },
    { player: "Bengali", score: 670 },
    { player: "AlluArjun", score: 756 },
    { player: "Baniya", score: 453.5 },
    { player: "Spammer", score: 614.5 },
    { player: "Muscleman", score: 483.5 }
  ]
},
   {
  id: "MI vs PBKS",
  date: "2026-04-16",
  results: [
    { player: "Fluker", score: 822.5 },
    { player: "Bengali", score: 813 },
    { player: "AlluArjun", score: 767 },
    { player: "Baniya", score: 609.5 },
    { player: "Spammer", score: 811 }
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

