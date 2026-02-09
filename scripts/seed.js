// This Script Wipes The Database, then repopulates it with 5 examples
// for development use only

import { supabase } from "../src/client.js";

const DEFAULT_CREATORS = [
  {
    name: "Mr. Beast",
    url: "https://www.youtube.com/mrbeast",
    description: "The biggest creator making the wildest stunts and gameshows on Earth.",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/c/ce/MrBeast_2023_%28cropped%29.jpg",
  },
  {
    name: "Fireship",
    url: "https://www.youtube.com/@Fireship",
    description: "Popular tech commentary blending news, sarcasm and microtutorials.",
    imageURL: "https://media.licdn.com/dms/image/v2/D4E0BAQHyh_nBimL5KA/company-logo_200_200/B4EZu.BQnZHoAI-/0/1768419560300/fireshipio_logo?e=1772064000&v=beta&t=NQHLyn310kPbQUnYpqbnMaL9bMyK_yMwQS6e-dvQXxE",
  },
  {
    name: "krazam",
    url: "https://www.youtube.com/KRAZAM",
    description: "Zany satirical dramatizations of software development life",
    imageURL: "https://i.ytimg.com/vi/IU4ByUbDKNc/hqdefault.jpg"
  },
  {
    name:"Veritasium",
    url:"https://www.youtube.com/veritasium",
    description:"Informative science video essays with accessible style and deep investigation",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Veritasium_logo.jpg",

  },
  {
    name:"Anthony Sistilli",
    url:"https://www.youtube.com/@AnthonySistilli",
    description:"Sketches and commentary about the software industry",
    imageURL: "https://i.ytimg.com/vi/HbtCgfVr-9s/hqdefault.jpg",
  },
];

async function seed() {
  // 1) Clear table (dev-only)
  const { error: delError } = await supabase.from("creators").delete().neq("id", 0);
  if (delError) throw delError;

  // 2) Insert defaults
  const { error: insError } = await supabase.from("creators").insert(DEFAULT_CREATORS);
  if (insError) throw insError;

  console.log("✅ Seeded creators table with defaults.");
}

seed().catch((e) => {
  console.error("❌ Seed failed:", e?.message ?? e);
  throw e; 
});
