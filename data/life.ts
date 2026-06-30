export type LifeEntry = {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  thought: string;
  tags: string[];
};

export const lifeEntries: LifeEntry[] = [
  {
    id: "museum-note",
    title: "Museum afternoon",
    date: "May 2026",
    category: "Gallery",
    imageUrl: "/life/met.jpg",
    thought: "I like places where everything slows down for a second. The museum is one of those places.",
    tags: ["design", "quiet"]
  },
  {
    id: "bun_cat",
    title: "She's a little softie",
    date: "May 2026",
    category: "Animals",
    imageUrl: "/life/bun_cafe.jpg",
    thought: "Doesn't she looks like a screaming bun. Sooo cute ~~",
    tags: ["cat", "quiet", "cafe"]
  },
  {
    id: "louse_kill_me",
    title: "She looks annoyed but she loves me (I think)",
    date: "May 2026",
    category: "Animals",
    imageUrl: "/life/louise_kill_me.jpg",
    thought: "She loves me right? I think she does. I hope she does...",
    tags: ["cat"]
  },
  {
    id: "starry_night_cali",
    title: "Starry Night at Cali",
    date: "May 2026",
    category: "Gallery",
    imageUrl: "/life/stars.jpg",
    thought: "I love stars.",
    tags: ["star", "travel"]
  },
  {
    id: "griffin",
    title: "Griffin Observatory",
    date: "May 2026",
    category: "Gallery",
    imageUrl: "/life/griffin.jpg",
    thought: "I love the night sky.",
    tags: ["star", "travel"]
  },
  {
    id: "erha",
    title: "Erha likes me",
    date: "Apr 2026",
    category: "Animals",
    imageUrl: "/life/erha_likes_me.jpg",
    thought: "Aww he let me pet him.",
    tags: ["dog", "travel"]
  },
  {
    id: "manhatta_winna",
    title: "Dinner with Winna",
    date: "Mar 2026",
    category: "People",
    imageUrl: "/life/manhatta_w_winna.jpg",
    thought: "Sis's birthday dinner. Even though she always yell at me as a younger sister, I know she loves me. I love her too.",
    tags: ["family", "life"]
  },
  {
    id: "nook-memory",
    title: "Celebrating for Nook",
    date: "Feb 2026",
    category: "People",
    imageUrl: "/life/nook_hangout.jpg",
    thought: "We were so happy for the birth of Nook. Check out more details about Nook in the project page :D",
    tags: ["friend", "life", "gratitude"]
  },
  {
    id: "louise_laying_on_bed",
    title: "Aww",
    date: "Jan 2026",
    category: "Animals",
    imageUrl: "/life/louise_chiling.jpg",
    thought: "She grown up so fast.",
    tags: ["cat"]
  },
  {
    id: "friend-memory",
    title: "A soft memory",
    date: "Nov 2025",
    category: "People",
    imageUrl: "/life/my_day1.jpg",
    thought: "Some days are about remembering who made you laugh when everything felt a little too serious.",
    tags: ["friend", "life"]
  }, 
  {
    id: "swe_conference",
    title: "SWE conference with friends",
    date: "Oct 2025",
    category: "People",
    imageUrl: "/life/swe_nrl.jpg",
    thought: "first conference in my life! So glad I was able to go with friends and connected with excellent individuals. I hope to keep learning and growing in this field.",
    tags: ["career", "gratitude"]
  }, 
  {
    id: "kitten_louise",
    title: "My little Louise",
    date: "May 2025",
    category: "Animals",
    imageUrl: "/life/kitten_louise.jpg",
    thought: "Introducing my cat: Louise.",
    tags: ["cat"]
  }, 
  {
    id: "mellon_me",
    title: "little me",
    date: "idk",
    category: "Memory",
    imageUrl: "/life/childhood.jpg",
    thought: "Child pic with my favorite cousin :3",
    tags: ["memory", "family"]
  },
  {
    id: "mellon_me",
    title: "Mellon me",
    date: "2008?",
    category: "Memory",
    imageUrl: "/life/mellon_me.jpg",
    thought: "Child pic lol",
    tags: ["memory"]
  }
];

export const diaryNotes = [
  "I want this space to feel like a portfolio, but also like a small room where my personality can breathe.",
  "Outside of tech, I care about art direction, community, and the emotional texture of everyday things.",
  "This page is intentionally unfinished in the best way: it can grow whenever I have a photo, a thought, or a small moment worth keeping."
];