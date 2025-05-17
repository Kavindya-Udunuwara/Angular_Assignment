import { Comment } from '../models/post.model';

export const COMMENTS: Comment[] = [
  // Comments for postId 1 - Sigiriya Rock Fortress
  {
    id: 1,
    postId: 1,
    name: 'Alice M.',
    email: 'alice@example.com',
    body: 'Climbing Sigiriya was a once-in-a-lifetime experience! The views from the top are truly breathtaking.',
  },
  {
    id: 2,
    postId: 1,
    name: 'Raj P.',
    email: 'rajp@example.com',
    body: 'The frescoes inside the rock fortress are stunning. Such rich history preserved.',
  },
  {
    id: 3,
    postId: 1,
    name: 'Nisha K.',
    email: 'nisha.k@example.com',
    body: 'Highly recommend going early in the morning to avoid the heat during the climb.',
  },

  // Comments for postId 2 - Ella - Scenic Mountain Village
  {
    id: 4,
    postId: 2,
    name: 'Ben T.',
    email: 'ben.t@example.com',
    body: 'Ella’s hiking trails are perfect for nature lovers. The Nine Arches Bridge is a must-see!',
  },
  {
    id: 5,
    postId: 2,
    name: 'Sara W.',
    email: 'sara.w@example.com',
    body: 'I loved the peaceful vibe in Ella, especially the tea plantations. Great spot to unwind.',
  },
  {
    id: 6,
    postId: 2,
    name: 'Lahiru M.',
    email: 'lahiru.m@example.com',
    body: 'The train ride from Kandy to Ella offers some of the most scenic views in Sri Lanka.',
  },

  // Comments for postId 3 - Kandy - Cultural Capital of Sri Lanka
  {
    id: 7,
    postId: 3,
    name: 'Anjali R.',
    email: 'anjali.r@example.com',
    body: 'The Temple of the Tooth is spiritually uplifting and architecturally magnificent.',
  },
  {
    id: 8,
    postId: 3,
    name: 'Dilan S.',
    email: 'dilan.s@example.com',
    body: 'Kandy Esala Perahera is one of the most colorful festivals I’ve ever attended.',
  },
  {
    id: 9,
    postId: 3,
    name: 'Maya L.',
    email: 'maya.l@example.com',
    body: 'Beautiful lake and hills make Kandy a must-visit city.',
  },

  // Comments for postId 4 - Galle Fort - Colonial Charm by the Sea
  {
    id: 10,
    postId: 4,
    name: 'James C.',
    email: 'james.c@example.com',
    body: 'Galle Fort’s colonial architecture takes you back in time. Loved the cafes!',
  },
  {
    id: 11,
    postId: 4,
    name: 'Ruwan D.',
    email: 'ruwan.d@example.com',
    body: 'Sunset by the ramparts is magical. Don’t miss the lighthouse.',
  },
  {
    id: 12,
    postId: 4,
    name: 'Hema P.',
    email: 'hema.p@example.com',
    body: 'The art galleries in Galle Fort offer some fantastic local works.',
  },

  // Comments for postId 5 - Anuradhapura - Ancient Capital
  {
    id: 13,
    postId: 5,
    name: 'Tharindu K.',
    email: 'tharindu.k@example.com',
    body: 'Anuradhapura’s stupas are awe-inspiring, especially Ruwanwelisaya.',
  },
  {
    id: 14,
    postId: 5,
    name: 'Lakshmi N.',
    email: 'lakshmi.n@example.com',
    body: 'The sacred Bodhi Tree was a highlight of my visit to Anuradhapura.',
  },
  {
    id: 15,
    postId: 5,
    name: 'Pavan S.',
    email: 'pavan.s@example.com',
    body: 'Great place for history buffs interested in ancient Buddhism.',
  },

  // Comments for postId 6 - Polonnaruwa - The Medieval Marvel
  {
    id: 16,
    postId: 6,
    name: 'Farah M.',
    email: 'farah.m@example.com',
    body: 'The Buddha statues at Gal Vihara are incredibly well-preserved and serene.',
  },
  {
    id: 17,
    postId: 6,
    name: 'Kamal R.',
    email: 'kamal.r@example.com',
    body: 'Cycling around Polonnaruwa ruins was an amazing way to explore history.',
  },
  {
    id: 18,
    postId: 6,
    name: 'Nimal J.',
    email: 'nimal.j@example.com',
    body: 'Parakrama Samudra reservoir looks stunning, especially at sunset.',
  },

  // Comments for postId 7 - Nuwara Eliya - Little England
  {
    id: 19,
    postId: 7,
    name: 'Emma W.',
    email: 'emma.w@example.com',
    body: 'The colonial buildings and cool climate give Nuwara Eliya a charming vibe.',
  },
  {
    id: 20,
    postId: 7,
    name: 'Suresh T.',
    email: 'suresh.t@example.com',
    body: 'Tea estates are breathtaking, and the lake is perfect for a relaxing boat ride.',
  },
  {
    id: 21,
    postId: 7,
    name: 'Indika H.',
    email: 'indika.h@example.com',
    body: 'Horse racing in April is a fun local tradition to experience here.',
  },

  // Comments for postId 8 - Arugam Bay - Surfer’s Paradise
  {
    id: 22,
    postId: 8,
    name: 'Mia K.',
    email: 'mia.k@example.com',
    body: 'Arugam Bay is the ultimate surf spot with a laid-back beach vibe.',
  },
  {
    id: 23,
    postId: 8,
    name: 'Sanjay P.',
    email: 'sanjay.p@example.com',
    body: 'Sunsets at the beach bars are unforgettable here.',
  },
  {
    id: 24,
    postId: 8,
    name: 'Leah D.',
    email: 'leah.d@example.com',
    body: 'Loved the nearby village tours, great way to experience local life.',
  },

  // Comments for postId 9 - Yala National Park - Wild Encounters
  {
    id: 25,
    postId: 9,
    name: 'Rajeev M.',
    email: 'rajeev.m@example.com',
    body: 'Saw leopards and elephants on my safari—what a thrilling experience!',
  },
  {
    id: 26,
    postId: 9,
    name: 'Hannah S.',
    email: 'hannah.s@example.com',
    body: 'Morning safari rides are the best time to spot wildlife in Yala.',
  },
  {
    id: 27,
    postId: 9,
    name: 'Dinuka W.',
    email: 'dinuka.w@example.com',
    body: 'The diverse landscape makes Yala a photographer’s paradise.',
  },

  // Comments for postId 10 - Mirissa - Whale Watching and Beaches
  {
    id: 28,
    postId: 10,
    name: 'Olivia R.',
    email: 'olivia.r@example.com',
    body: 'Whale watching tours in Mirissa were unforgettable—spotted blue whales!',
  },
  {
    id: 29,
    postId: 10,
    name: 'Kumar S.',
    email: 'kumar.s@example.com',
    body: 'Coconut Tree Hill is the perfect Instagram spot, especially at sunset.',
  },
  {
    id: 30,
    postId: 10,
    name: 'Jessica L.',
    email: 'jessica.l@example.com',
    body: 'Love the relaxed beach bars and fresh seafood dinners here.',
  },

  // Comments for postId 11 - Adam’s Peak - Sacred Mountain
  {
    id: 31,
    postId: 11,
    name: 'Naveen K.',
    email: 'naveen.k@example.com',
    body: 'The pilgrimage up Adam’s Peak at night was spiritually moving.',
  },
  {
    id: 32,
    postId: 11,
    name: 'Sarah J.',
    email: 'sarah.j@example.com',
    body: 'Sunrise from the summit with the peak’s shadow was breathtaking.',
  },
  {
    id: 33,
    postId: 11,
    name: 'Mohamed A.',
    email: 'mohamed.a@example.com',
    body: 'Loved learning about the different religious interpretations of the footprint.',
  },

  // Comments for postId 12 - Trincomalee - Eastern Port City
  {
    id: 34,
    postId: 12,
    name: 'Rachel V.',
    email: 'rachel.v@example.com',
    body: 'Snorkeling at Pigeon Island near Trincomalee was spectacular.',
  },
  {
    id: 35,
    postId: 12,
    name: 'Anura P.',
    email: 'anura.p@example.com',
    body: 'Koneswaram temple offers a peaceful and historical atmosphere.',
  },
  {
    id: 36,
    postId: 12,
    name: 'Linda C.',
    email: 'linda.c@example.com',
    body: 'Nilaveli and Uppuveli beaches are perfect for relaxation and swimming.',
  },

  // Comments for postId 13 - Dambulla Cave Temple
  {
    id: 37,
    postId: 13,
    name: 'Sunil D.',
    email: 'sunil.d@example.com',
    body: 'The statues and paintings inside Dambulla caves are truly remarkable.',
  },
  {
    id: 38,
    postId: 13,
    name: 'Tina M.',
    email: 'tina.m@example.com',
    body: 'Great place to experience ancient Buddhist art and meditation.',
  },
  {
    id: 39,
    postId: 13,
    name: 'Ashan G.',
    email: 'ashan.g@example.com',
    body: 'Don’t miss the panoramic views of the surrounding countryside.',
  },

  // Comments for postId 14 - Bentota - Coastal Resort Town
  {
    id: 43,
    postId: 14,
    name: 'Kevin B.',
    email: 'kevin.b@example.com',
    body: 'The beaches at Bentota are clean and perfect for water sports.',
  },
  {
    id: 44,
    postId: 14,
    name: 'Nirosha T.',
    email: 'nirosha.t@example.com',
    body: 'Loved the turtle hatchery visit and learning about conservation.',
  },
  {
    id: 45,
    postId: 14,
    name: 'Peter L.',
    email: 'peter.l@example.com',
    body: 'Bentota river boat rides are relaxing and scenic.',
  },

  // Comments for postId 15 - Horton Plains - Nature’s Plateau
  {
    id: 40,
    postId: 15,
    name: 'Lila S.',
    email: 'lila.s@example.com',
    body: "Walking to World's End was exhilarating and the views are spectacular.",
  },
  {
    id: 41,
    postId: 15,
    name: 'Ravi H.',
    email: 'ravi.h@example.com',
    body: 'Early morning hikes here are refreshing and full of birdlife.',
  },
  {
    id: 42,
    postId: 15,
    name: 'Meena P.',
    email: 'meena.p@example.com',
    body: 'Bring warm clothes; it gets chilly up on the plateau.',
  },

  // Comments for postId 16 - Kalpitiya - Dolphins and Kitesurfing

  {
    id: 43,
    postId: 16,
    name: 'Nimali R.',
    email: 'nimali.r@example.com',
    body: 'Saw dolphins for the first time here, incredible experience!',
  },
  {
    id: 44,
    postId: 16,
    name: 'Adrian P.',
    email: 'adrian.p@example.com',
    body: 'Kitesurfing conditions were perfect, highly recommend for adventure lovers.',
  },
  {
    id: 45,
    postId: 16,
    name: 'Shanika L.',
    email: 'shanika.l@example.com',
    body: 'Loved exploring the mangroves and learning about the local ecology.',
  },

  // Comments for postId 17 - Jaffna - Northern Heritage

  {
    id: 46,
    postId: 17,
    name: 'Ravi K.',
    email: 'ravi.k@example.com',
    body: 'Jaffna’s temples have such rich history and vibrant culture.',
  },
  {
    id: 47,
    postId: 17,
    name: 'Meena T.',
    email: 'meena.t@example.com',
    body: 'The food in Jaffna is deliciously different, must try the crab curry!',
  },
  {
    id: 48,
    postId: 17,
    name: 'Kumar S.',
    email: 'kumar.s@example.com',
    body: 'The Jaffna Library’s restoration is a testament to resilience.',
  },

  // Comments for postId 18 - Udawalawe - Elephant Territory

  {
    id: 49,
    postId: 18,
    name: 'Sanjaya M.',
    email: 'sanjaya.m@example.com',
    body: 'Elephant sightings were frequent, a perfect safari for families.',
  },
  {
    id: 50,
    postId: 18,
    name: 'Lara P.',
    email: 'lara.p@example.com',
    body: 'Loved the peaceful grasslands and bird watching around the reservoir.',
  },
  {
    id: 51,
    postId: 18,
    name: 'Dilan R.',
    email: 'dilan.r@example.com',
    body: 'Udawalawe felt more relaxed and less crowded than Yala.',
  },

  // Comments for postId 19 - Hikkaduwa - Snorkeling and Coral Reefs

  {
    id: 52,
    postId: 19,
    name: 'Emily W.',
    email: 'emily.w@example.com',
    body: 'Snorkeling here was magical with so many colorful fish!',
  },
  {
    id: 53,
    postId: 19,
    name: 'Keshan D.',
    email: 'keshan.d@example.com',
    body: 'Great nightlife and beach vibes, perfect for a fun trip.',
  },
  {
    id: 54,
    postId: 19,
    name: 'Nirosha L.',
    email: 'nirosha.l@example.com',
    body: 'Glass-bottom boat rides gave amazing views of the coral reefs.',
  },

  // Comments for postId 20 - Matale - Spice Gardens and Aluvihare

  {
    id: 55,
    postId: 20,
    name: 'Anura P.',
    email: 'anura.p@example.com',
    body: 'Learning about spices made the visit really interesting.',
  },
  {
    id: 56,
    postId: 20,
    name: 'Sunitha K.',
    email: 'sunitha.k@example.com',
    body: 'Aluvihare Rock Temple was peaceful and full of history.',
  },
  {
    id: 57,
    postId: 20,
    name: 'David L.',
    email: 'david.l@example.com',
    body: 'A nice quiet day trip away from busy Kandy.',
  },

  // Comments for postId 21 - Ratnapura - City of Gems

  {
    id: 58,
    postId: 21,
    name: 'Praveen S.',
    email: 'praveen.s@example.com',
    body: 'Touring the gem mines was fascinating and educational.',
  },
  {
    id: 59,
    postId: 21,
    name: 'Lisa M.',
    email: 'lisa.m@example.com',
    body: 'Loved the waterfalls nearby, such a beautiful area.',
  },
  {
    id: 60,
    postId: 21,
    name: 'Ruwan D.',
    email: 'ruwan.d@example.com',
    body: 'Great place for nature lovers and history buffs alike.',
  },

  // Comments for postId 22 - Pinnawala Elephant Orphanage

  {
    id: 61,
    postId: 22,
    name: 'Yasmin T.',
    email: 'yasmin.t@example.com',
    body: 'Feeding the elephants was a touching and educational experience.',
  },
  {
    id: 62,
    postId: 22,
    name: 'Ajith K.',
    email: 'ajith.k@example.com',
    body: 'A great place to learn about elephant conservation efforts.',
  },
  {
    id: 63,
    postId: 22,
    name: 'Maya S.',
    email: 'maya.s@example.com',
    body: 'The bathing time was a highlight for the whole family.',
  },

  // Comments for postId 23 - Kitulgala - Adventure Capital

  {
    id: 64,
    postId: 23,
    name: 'Brian J.',
    email: 'brian.j@example.com',
    body: 'White-water rafting on the Kelani River was thrilling!',
  },
  {
    id: 65,
    postId: 23,
    name: 'Nadeesha F.',
    email: 'nadeesha.f@example.com',
    body: 'Kitulgala’s greenery and adventure sports made it unforgettable.',
  },
  {
    id: 66,
    postId: 23,
    name: 'Harsha W.',
    email: 'harsha.w@example.com',
    body: "Loved the history behind 'The Bridge on the River Kwai' filming.",
  },

  // Comments for postId 24 - Negombo - Beach Gateway

  {
    id: 67,
    postId: 24,
    name: 'Sandra L.',
    email: 'sandra.l@example.com',
    body: 'Great spot to relax before or after flights, beautiful beaches.',
  },
  {
    id: 68,
    postId: 24,
    name: 'Chaminda R.',
    email: 'chaminda.r@example.com',
    body: 'The fish market is lively and offers a real local experience.',
  },
  {
    id: 69,
    postId: 24,
    name: 'Ayesha M.',
    email: 'ayesha.m@example.com',
    body: 'Loved strolling along the Dutch canals and enjoying the colonial charm.',
  },

  // Comments for postId 25 - Ambuluwawa Tower - Spiral Viewpoint

  {
    id: 70,
    postId: 25,
    name: 'Ishan G.',
    email: 'ishan.g@example.com',
    body: 'The spiral tower climb was challenging but the views were worth it.',
  },
  {
    id: 71,
    postId: 25,
    name: 'Nethmi D.',
    email: 'nethmi.d@example.com',
    body: 'A beautiful place showcasing Sri Lanka’s religious harmony and nature.',
  },
  {
    id: 72,
    postId: 25,
    name: 'Rajith K.',
    email: 'rajith.k@example.com',
    body: 'Great spot for photography and peaceful walks in the gardens.',
  },

  // Comments for postId 26 - Weligama - Surf and Stilt Fishing

  {
    id: 73,
    postId: 26,
    name: 'Anushka F.',
    email: 'anushka.f@example.com',
    body: 'Perfect place to learn surfing, very friendly locals too.',
  },
  {
    id: 74,
    postId: 26,
    name: 'Dinesh P.',
    email: 'dinesh.p@example.com',
    body: 'Stilt fishermen are a unique sight and a cultural treasure.',
  },
  {
    id: 75,
    postId: 26,
    name: 'Lisa N.',
    email: 'lisa.n@example.com',
    body: 'Loved the laid-back beach vibe and fresh seafood.',
  },

  // Comments for postId 27 - Mihintale - Cradle of Buddhism

  {
    id: 76,
    postId: 27,
    name: 'Suresh T.',
    email: 'suresh.t@example.com',
    body: 'A deeply spiritual place, perfect for reflection and history lovers.',
  },
  {
    id: 77,
    postId: 27,
    name: 'Gayan H.',
    email: 'gayan.h@example.com',
    body: 'The ancient staircases and inscriptions tell fascinating stories.',
  },
  {
    id: 78,
    postId: 27,
    name: 'Maya R.',
    email: 'maya.r@example.com',
    body: 'Peaceful and well-preserved, a must-visit for cultural tourists.',
  },

  // Comments for postId 28 - Bambarakanda Falls - Sri Lanka’s Tallest

  {
    id: 79,
    postId: 28,
    name: 'Hiran M.',
    email: 'hiran.m@example.com',
    body: 'The hike up to the falls was refreshing and the views stunning.',
  },
  {
    id: 80,
    postId: 28,
    name: 'Tara W.',
    email: 'tara.w@example.com',
    body: 'Loved the serene atmosphere and pine forests around.',
  },
  {
    id: 81,
    postId: 28,
    name: 'Kevin J.',
    email: 'kevin.j@example.com',
    body: 'Great spot for photography and nature walks.',
  },

  // Comments for postId 29 - Sinharaja Forest Reserve - Biodiversity Hotspot

  {
    id: 82,
    postId: 29,
    name: 'Priya S.',
    email: 'priya.s@example.com',
    body: 'The guided walks were insightful; saw many rare birds.',
  },
  {
    id: 83,
    postId: 29,
    name: 'Rohan L.',
    email: 'rohan.l@example.com',
    body: 'An incredible forest with rich biodiversity and peaceful vibes.',
  },
  {
    id: 84,
    postId: 29,
    name: 'Sarah B.',
    email: 'sarah.b@example.com',
    body: 'A UNESCO site that truly deserves protection and admiration.',
  },

  // Comments for postId 30 - Ritigala - Mystical Mountain Monastery

  {
    id: 85,
    postId: 30,
    name: 'Ajith K.',
    email: 'ajith.k@example.com',
    body: 'Ritigala’s forest and ruins have a magical, mysterious feel.',
  },
  {
    id: 86,
    postId: 30,
    name: 'Elaine M.',
    email: 'elaine.m@example.com',
    body: 'Loved the peaceful walks and ancient inscriptions.',
  },
  {
    id: 87,
    postId: 30,
    name: 'Chamara D.',
    email: 'chamara.d@example.com',
    body: 'A unique archaeological site that’s off the usual tourist trail.',
  },
];
