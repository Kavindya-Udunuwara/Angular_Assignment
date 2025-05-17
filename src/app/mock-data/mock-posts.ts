import { Post } from "../models/post.model";

export const POSTS: Post[] = [
    {
      id: 1,
      title: 'Sigiriya Rock Fortress',
      body: `Sigiriya, a UNESCO World Heritage site, is a rock fortress and palace in the Matale District of Sri Lanka. Rising 200 meters from the forest floor, the rock features frescoes, landscaped gardens, and an extensive network of moats and walls. King Kasyapa built his royal palace on top of this rock in the 5th century AD, turning it into one of the most sophisticated urban centers of the time. The climb to the summit reveals breathtaking views and centuries-old engineering marvels.`,
      tags: ['UNESCO', 'fortress', 'history'],
      userId: 101,
      createdAt: '2024-11-01T08:00:00Z'
    },
    {
      id: 2,
      title: 'Ella - Scenic Mountain Village',
      body: `Nestled in the hills of Uva Province, Ella is a paradise for nature lovers. Surrounded by cloud forests, tea plantations, and iconic spots like Little Adam’s Peak and the Nine Arches Bridge, Ella offers serenity and adventure. The town is a backpacker favorite, offering hiking, waterfalls like Ravana Falls, and panoramic train rides between Kandy and Ella. The air is cooler, the views are stunning, and the laid-back vibe attracts travelers from all over the world.`,
      tags: ['nature', 'hiking', 'scenic'],
      userId: 102,
      createdAt: '2024-11-02T08:30:00Z'
    },
    {
      id: 3,
      title: 'Kandy - Cultural Capital of Sri Lanka',
      body: `Kandy is home to the revered Temple of the Tooth Relic, a sacred Buddhist site that attracts thousands of pilgrims and tourists every year. The city is nestled beside a lake and surrounded by lush hills. The Kandy Esala Perahera, held annually, is a grand procession of dancers, drummers, and elephants. Kandy preserves traditional Sinhalese culture and is the perfect blend of heritage, religion, and natural beauty.`,
      tags: ['culture', 'temple', 'heritage'],
      userId: 103,
      createdAt: '2024-11-03T09:15:00Z'
    },
    {
      id: 4,
      title: 'Galle Fort - Colonial Charm by the Sea',
      body: `Galle Fort, built first by the Portuguese and later fortified by the Dutch, is a coastal gem and another UNESCO World Heritage Site. Its cobblestone streets, preserved colonial architecture, lighthouse, and seaside ramparts attract visitors year-round. Galle Fort offers cozy cafes, art galleries, and a deep dive into Sri Lanka’s colonial past. Sunsets by the walls are magical and a must-see experience for anyone visiting the south coast.`,
      tags: ['colonial', 'fort', 'UNESCO'],
      userId: 104,
      createdAt: '2024-11-04T10:20:00Z'
    },
    {
      id: 5,
      title: 'Anuradhapura - Ancient Capital',
      body: `Anuradhapura, one of the oldest continuously inhabited cities in the world, is a sacred city for Buddhists. It is home to stupas like Ruwanwelisaya, Jethawanaramaya, and the sacred Bodhi Tree — a descendant of the original tree under which the Buddha attained enlightenment. The ruins of monasteries, palaces, and bathing tanks are spread across a vast area. This city tells the story of Sri Lanka’s golden era of Buddhism and governance.`,
      tags: ['ancient', 'buddhism', 'ruins'],
      userId: 105,
      createdAt: '2024-11-05T11:00:00Z'
    },
    {
      id: 6,
      title: 'Polonnaruwa - The Medieval Marvel',
      body: `Polonnaruwa served as the second capital after the fall of Anuradhapura. It is known for its well-preserved ruins, including the Gal Vihara — a series of Buddha statues carved into granite. The Parakrama Samudra reservoir, Royal Palace ruins, and intricately designed temples showcase the brilliance of King Parakramabahu’s reign. The site is clean and compact, making it ideal for cycling tours through history.`,
      tags: ['UNESCO', 'history', 'statues'],
      userId: 106,
      createdAt: '2024-11-06T12:10:00Z'
    },
    {
      id: 7,
      title: 'Nuwara Eliya - Little England',
      body: `Known for its colonial architecture and cool climate, Nuwara Eliya is often called ‘Little England.’ Located in the central highlands, it's surrounded by tea estates, waterfalls, and botanical gardens. Victoria Park and Lake Gregory are top attractions. The town’s 19th-century buildings and horse races during the April season bring a taste of British charm to Sri Lanka’s hill country.`,
      tags: ['hill country', 'tea', 'colonial'],
      userId: 107,
      createdAt: '2024-11-07T13:25:00Z'
    },
    {
      id: 8,
      title: 'Arugam Bay - Surfer’s Paradise',
      body: `Located on the east coast, Arugam Bay is globally known for its surf breaks and laid-back vibe. Whether you're a professional surfer or a beach bum, this town offers something for everyone. It also provides access to nearby Kumana National Park, Pottuvil Lagoon, and local village tours. The sunsets, beach bars, and hammocks define the charm of Arugam Bay.`,
      tags: ['surf', 'beach', 'east coast'],
      userId: 108,
      createdAt: '2024-11-08T14:00:00Z'
    },
    {
      id: 9,
      title: 'Yala National Park - Wild Encounters',
      body: `Yala is Sri Lanka’s most visited national park and is famous for its leopard population. It also hosts elephants, sloth bears, crocodiles, and a variety of birds. The landscape is a mix of grasslands, lagoons, and forest. Safari rides early in the morning or late afternoon offer the best chances to see wildlife in action.`,
      tags: ['wildlife', 'safari', 'nature'],
      userId: 109,
      createdAt: '2024-11-09T15:10:00Z'
    },
    {
      id: 10,
      title: 'Mirissa - Whale Watching and Beaches',
      body: `Mirissa, located along the southern coast, is known for its turquoise waters and golden beaches. It’s a hotspot for whale watching, especially blue whales and dolphins during peak season. Coconut Tree Hill is one of the most Instagrammed spots, offering stunning views over the ocean. It’s also perfect for snorkeling, beach bars, and seafood dinners under the stars.`,
      tags: ['beach', 'whales', 'south coast'],
      userId: 110,
      createdAt: '2024-11-10T16:00:00Z'
    },

        {
          id: 11,
          title: 'Adam’s Peak - Sacred Mountain',
          body: `Also known as Sri Pada, Adam’s Peak is a sacred mountain venerated by Buddhists, Hindus, Muslims, and Christians. At the summit lies a rock formation believed to be the footprint of Buddha, Shiva, or Adam depending on the faith. Pilgrims climb the mountain at night to reach the top by sunrise. The view from the summit is breathtaking, with the shadow of the peak creating a perfect triangle in the morning mist.`,
          tags: ['pilgrimage', 'mountain', 'sunrise'],
          userId: 111,
          createdAt: '2024-11-11T05:30:00Z'
        },
        {
          id: 12,
          title: 'Trincomalee - Eastern Port City',
          body: `Trincomalee, on the east coast, is known for its deep natural harbor and historic temples like Koneswaram. The area is also rich with beaches such as Nilaveli and Uppuveli, offering calm waters and coral reefs. Pigeon Island National Park nearby is ideal for snorkeling and marine life observation. Trinco, as it's affectionately called, blends history, religion, and beachside relaxation.`,
          tags: ['harbor', 'temples', 'beaches'],
          userId: 112,
          createdAt: '2024-11-12T06:00:00Z'
        },
        {
          id: 13,
          title: 'Dambulla Cave Temple',
          body: `The Dambulla Cave Temple, also known as the Golden Temple of Dambulla, is a complex of five caves filled with over 150 statues and paintings of Buddha. It’s the largest and best-preserved cave temple complex in Sri Lanka. The site is situated on a massive rock offering views of the surrounding plains. The caves date back to the 1st century BCE and remain an active place of worship today.`,
          tags: ['temple', 'caves', 'Buddha'],
          userId: 113,
          createdAt: '2024-11-13T07:15:00Z'
        },
        {
          id: 14,
          title: 'Bentota - River and Beach Bliss',
          body: `Bentota is a coastal town that offers the best of both river and sea. It’s ideal for water sports like jet skiing, boat safaris, and windsurfing. The beach is long and golden, while the Bentota River provides a calm, green escape. Ayurveda resorts, turtle hatcheries, and nearby temples make it a well-rounded destination for both relaxation and exploration.`,
          tags: ['river', 'beach', 'watersports'],
          userId: 114,
          createdAt: '2024-11-14T08:40:00Z'
        },
        {
          id: 15,
          title: 'Horton Plains & World’s End',
          body: `Horton Plains National Park is located in the central highlands and is a UNESCO World Heritage Site. Its most famous viewpoint, World’s End, is a sheer cliff with a drop of about 870 meters. The park is also home to Baker’s Falls and endemic species such as the sambar deer. Trekking through the misty grasslands and cloud forests is a peaceful yet exhilarating experience.`,
          tags: ['UNESCO', 'nature', 'trekking'],
          userId: 115,
          createdAt: '2024-11-15T09:00:00Z'
        },
        {
          id: 16,
          title: 'Kalpitiya - Dolphins and Kitesurfing',
          body: `Kalpitiya is a relatively untouched coastal area in northwestern Sri Lanka. It’s a hotspot for dolphin watching, especially spinner dolphins. The strong winds and flat lagoons also make it a favorite for kitesurfers from around the world. The region’s mangrove forests and Dutch-era ruins add historical and ecological value to this hidden gem.`,
          tags: ['dolphins', 'kitesurfing', 'coast'],
          userId: 116,
          createdAt: '2024-11-16T10:10:00Z'
        },
        {
          id: 17,
          title: 'Jaffna - Northern Heritage',
          body: `Jaffna is the cultural heart of Tamil heritage in Sri Lanka. The city features the impressive Jaffna Library, ancient Hindu temples like Nallur Kandaswamy, and colonial-era architecture. Its cuisine is distinct and flavorful. The nearby islands, accessible by causeway or ferry, offer serene beaches and historic ruins. Jaffna’s resilience and culture make it an unforgettable visit.`,
          tags: ['Tamil', 'culture', 'temples'],
          userId: 117,
          createdAt: '2024-11-17T11:00:00Z'
        },
        {
          id: 18,
          title: 'Udawalawe - Elephant Territory',
          body: `Udawalawe National Park is one of the best places to see elephants in the wild. Unlike Yala, it has fewer predators, so elephant sightings are almost guaranteed. The Udawalawe Reservoir and open grasslands make the scenery especially photogenic. The park is also home to jackals, buffalo, and many bird species, making it a great safari destination for families.`,
          tags: ['elephants', 'wildlife', 'safari'],
          userId: 118,
          createdAt: '2024-11-18T12:00:00Z'
        },
        {
          id: 19,
          title: 'Hikkaduwa - Snorkeling and Coral Reefs',
          body: `Hikkaduwa is a vibrant beach town along the southwestern coast. It is famous for its coral sanctuary, sea turtles, and nightlife. Visitors can snorkel among colorful fish or take glass-bottom boat rides. Hikkaduwa also offers bustling streets with cafes, shops, and beach bars that attract both local and international travelers.`,
          tags: ['coral', 'snorkeling', 'nightlife'],
          userId: 119,
          createdAt: '2024-11-19T13:00:00Z'
        },
        {
          id: 20,
          title: 'Matale - Spice Gardens and Aluvihare',
          body: `Matale is known for its spice gardens, where visitors can learn about cinnamon, cardamom, cloves, and other Sri Lankan spices. The Aluvihare Rock Temple is another highlight, famous as the site where the Pali Canon was first written down. Matale is a quiet but culturally rich town ideal for a day trip from Kandy.`,
          tags: ['spices', 'temples', 'culture'],
          userId: 120,
          createdAt: '2024-11-20T14:00:00Z'
        },
        {
          id: 21,
          title: 'Ratnapura - City of Gems',
          body: `Ratnapura, meaning "City of Gems," is Sri Lanka’s gem mining capital. Visitors can tour gem mines, see cutting and polishing workshops, and visit the gem museum. The surrounding hills and waterfalls also make it a scenic destination. It’s the gateway to Sinharaja Forest Reserve, another UNESCO World Heritage Site.`,
          tags: ['gems', 'mining', 'UNESCO'],
          userId: 121,
          createdAt: '2024-11-21T08:00:00Z'
        },
        {
          id: 22,
          title: 'Pinnawala Elephant Orphanage',
          body: `Located near Kegalle, Pinnawala is a sanctuary for orphaned and injured elephants. Visitors can witness feeding and bathing times in the nearby river. While the ethics of captivity are debated, the site offers educational insight into elephant conservation and care in Sri Lanka.`,
          tags: ['elephants', 'conservation', 'orphanage'],
          userId: 122,
          createdAt: '2024-11-22T09:00:00Z'
        },
        {
          id: 23,
          title: 'Kitulgala - Adventure Capital',
          body: `Kitulgala is Sri Lanka’s top destination for adventure sports like white-water rafting, canyoning, and zip-lining. It also gained fame as the filming location for the classic movie "The Bridge on the River Kwai." The Kelani River runs through this lush, green town, making it a scenic and exciting stop for adrenaline seekers.`,
          tags: ['rafting', 'adventure', 'river'],
          userId: 123,
          createdAt: '2024-11-23T10:00:00Z'
        },
        {
          id: 24,
          title: 'Negombo - Beach Gateway',
          body: `Located close to the Bandaranaike International Airport, Negombo is often the first or last stop for many travelers. The town offers long beaches, Dutch canals, a buzzing fish market, and colonial churches. It’s ideal for a relaxing stroll along the coast or sampling seafood at a beachside restaurant.`,
          tags: ['beach', 'gateway', 'fishing'],
          userId: 124,
          createdAt: '2024-11-24T11:00:00Z'
        },
        {
          id: 25,
          title: 'Ambuluwawa Tower - Spiral Viewpoint',
          body: `Ambuluwawa is a unique multi-religious complex and biodiversity site near Gampola. Its iconic spiral tower offers 360-degree panoramic views of the central highlands. The narrow path up the tower is a thrilling climb, and the gardens below celebrate harmony among Sri Lanka’s religions and ecosystems.`,
          tags: ['tower', 'view', 'multi-religious'],
          userId: 125,
          createdAt: '2024-11-25T12:00:00Z'
        },
        {
          id: 26,
          title: 'Weligama - Surf and Stilt Fishing',
          body: `Weligama is a laid-back town ideal for beginner surfers. Its wide bay is perfect for learning. One of the area’s iconic images is the traditional stilt fishermen balancing above the waves. Weligama has been growing steadily as a tourist destination while retaining its fishing village charm.`,
          tags: ['surfing', 'fishing', 'beach'],
          userId: 126,
          createdAt: '2024-11-26T13:00:00Z'
        },
        {
          id: 27,
          title: 'Mihintale - Cradle of Buddhism',
          body: `Mihintale is believed to be the site where Mahinda, the son of Indian Emperor Ashoka, met King Devanampiyatissa and introduced Buddhism to Sri Lanka. The hill features ancient stupas, staircases, and inscriptions. It’s a peaceful place of reflection and a must-visit for those interested in spiritual history.`,
          tags: ['buddhism', 'ancient', 'spiritual'],
          userId: 127,
          createdAt: '2024-11-27T14:00:00Z'
        },
        {
          id: 28,
          title: 'Bambarakanda Falls - Sri Lanka’s Tallest',
          body: `Bambarakanda is the tallest waterfall in Sri Lanka, with a sheer drop of 263 meters. It is surrounded by pine forests and can be reached via a short hike. The remote and unspoiled setting makes it perfect for photography, picnics, and nature walks.`,
          tags: ['waterfalls', 'hiking', 'nature'],
          userId: 128,
          createdAt: '2024-11-28T15:00:00Z'
        },
        {
          id: 29,
          title: 'Sinharaja Forest Reserve - Biodiversity Hotspot',
          body: `Sinharaja is the last viable area of primary tropical rainforest in Sri Lanka. It is teeming with endemic flora and fauna. Guided walks introduce visitors to rare birds, insects, and plant life. As a UNESCO World Heritage Site, Sinharaja is crucial for conservation and scientific research.`,
          tags: ['forest', 'UNESCO', 'wildlife'],
          userId: 129,
          createdAt: '2024-11-29T16:00:00Z'
        },
        {
          id: 30,
          title: 'Ritigala - Mystical Mountain Monastery',
          body: `Ritigala is an ancient Buddhist monastery and archaeological site nestled within a strict nature reserve. The site is known for its unique architecture, giant stone pathways, and mysterious legends. Its remote and forested setting gives it an aura of mysticism that few other sites can match.`,
          tags: ['monastery', 'nature', 'archaeology'],
          userId: 130,
          createdAt: '2024-11-30T17:00:00Z'
        }
      
      
  ];
  