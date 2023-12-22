

// ==================== links-page
const linksData = [
  {
    id: 1,
    category: "fruits",
    title: "Exciting Adventures in Banana Planting",
    description:
      "Join the gardening journey with Madison Moulton as she shares tips for growing banana plants. Whether indoors or outdoors, discover the joy of tropical gardening!",
    img: "image/links-pages/fruits-1.jpeg",
  },
  {
    id: 2,
    category: "fruits",
    title: "Blackberry Bonanza: A Gardener's Guide",
    description:
      "Embark on a berry-filled adventure with Taylor Sievers! Learn the art of cultivating blackberries in your garden for a bountiful harvest this season.",
    img: "image/links-pages/fruits-2.jpeg",
  },
  {
    id: 3,
    category: "fruits",
    title: "Peachy Secrets: Unveiling Peach Tree Growth",
    description:
      "Unlock the mysteries of peach tree growth stages with essential tips from our gardening expert. From planting to fruit production, discover the secrets of peach trees.",
    img: "image/links-pages/fruits-3.jpeg",
  },
  {
    id: 4,
    category: "fruits",
    title: "Rambutan Revelations: Growing in Hardiness Zone 10+",
    description:
      "Explore the exotic world of rambutan trees with our guide. Learn to care for these heat-loving tropical plants thriving in USDA hardiness zone 10 and above.",
    img: "image/links-pages/fruits-4.jpg",
  },
  {
    id: 5,
    category: "fruits",
    title: "Companion Plants for Watermelon Wonderland",
    description:
      "Join Kayleigh Brillon on a journey through companion planting with watermelons. Discover the perfect plants to grow alongside watermelons for a thriving garden ecosystem.",
    img: "image/links-pages/fruits-5.jpeg",
  },
  {
    id: 6,
    category: "fruits",
    title: "Strawberry Symphony: Planting in Hardiness Zone 7",
    description:
      "Logan Hailey presents a gardener's calendar for planting strawberries in USDA hardiness zone 7. Explore the right timing and essential tips for a successful strawberry season.",
    img: "image/links-pages/fruits-6.jpg",
  },
  {
    id: 7,
    category: "harvesting",
    title: "Parsley Harvest Delight: Tips and Tricks",
    description:
      "Embark on a parsley harvest adventure with our expert guide. Whether you're drying or using it fresh, learn the essential techniques to harvest parsley without causing damage!",
    img: "image/links-pages/harvesting-1.jpg",
  },
  {
    id: 8,
    category: "harvesting",
    title: "Rhubarb Revelry: Harvesting Without Harming",
    description:
      "Unlock the secrets of harvesting rhubarb without causing plant damage. Our guide shares tips to ensure your rhubarb keeps growing back year after year!",
    img: "image/links-pages/harvesting-2.jpg",
  },
  {
    id: 9,
    category: "harvesting",
    title: "Dill Harvest Mastery: A Comprehensive Guide",
    description:
      "Master the art of harvesting dill for optimal production. Our comprehensive guide explains everything you need to know to harvest dill properly!",
    img: "image/links-pages/harvesting-3.jpg",
  },
  {
    id: 10,
    category: "harvesting",
    title: "Oregano Harvest Bliss: Stocking Up for Flavor",
    description:
      "Discover the joy of harvesting oregano for a constant supply of flavorful leaves. Our revealing guide walks you through the steps to keep your kitchen stocked!",
    img: "image/links-pages/harvesting-4.jpg",
  },
  {
    id: 11,
    category: "harvesting",
    title: "Rosemary Harvest Harmony: The Right Way",
    description:
      "Achieve rosemary harvest perfection with our in-depth guide. Learn the techniques to ensure you always have a fresh supply at your fingertips!",
    img: "image/links-pages/harvesting-5.jpg",
  },
  {
    id: 12,
    category: "harvesting",
    title: "Sweet Potato Harvest Extravaganza: Digging and Storage Tips",
    description:
      "Experience the thrill of harvesting sweet potatoes with our simple guide. Learn when and how to dig them up and discover essential storage tips for a bountiful harvest!",
    img: "image/links-pages/harvesting-6.jpg",
  },
  {
    id: 13,
    category: "vegetables",
    title: "Vegetable Wonderland: A Beginner's Garden Journey",
    description:
      "Embark on your gardening journey with expert Jenna Rich! Discover 31 easy-to-grow vegetables perfect for beginners or those looking to brush up on the basics.",
    img: "image/links-pages/vegetables-1.jpg",
  },
  {
    id: 14,
    category: "vegetables",
    title: "Tomato Triumph: Growing the 11 Easiest Varieties from Seed",
    description:
      "Explore the world of tomatoes with former organic farmer Logan Hailey! Learn about the 11 easiest tomato cultivars to grow from seed, whether in your windowsill, patio container, or outdoor garden.",
    img: "image/links-pages/vegetables-2.jpeg",
  },
  {
    id: 15,
    category: "vegetables",
    title: "Cabbage Conundrums: Navigating 5 Common Growing Mistakes",
    description:
      "First-time cabbage growers, fear not! Gardening expert Kaleigh Brillon delves into the five most common mistakes and provides practical solutions to ensure your cabbage thrives.",
    img: "image/links-pages/vegetables-3.jpg",
  },
  {
    id: 16,
    category: "vegetables",
    title: "Unearth Uniqueness: 27 Rare Vegetables for Culinary Adventure",
    description:
      "Spice up your culinary repertoire with former organic farmer Logan Hailey! Dive into the world of 27 unusual and rare vegetables from around the globe, perfect for breaking the routine of a regular crop rotation.",
    img: "image/links-pages/vegetables-4.jpg",
  },
  {
    id: 17,
    category: "vegetables",
    title: "Radicchio Delights: 9 Unique Varieties for Adventurous Gardeners",
    description:
      "Challenge your taste buds with the incredible diversity of radicchio! Former organic farmer Logan Hailey explores the buttery texture and extreme cold hardiness of the 9 most delectable Italian radicchio varieties.",
    img: "image/links-pages/vegetables-5.jpeg",
  },
  {
    id: 18,
    category: "vegetables",
    title: "Tomato Thirst: Navigating the Water Needs for Juicy Harvests",
    description:
      "Unlock the secrets of juicy tomatoes with expert tips from gardening guru Madison Moulton. Learn the correct watering techniques to ensure a bountiful end-of-season harvest!",
    img: "image/links-pages/vegetables-6.jpeg",
  },
  {
    id: 19,
    category: "microgreens",
    title: "Shiso Symphony: Fast and Easy Growth of Microgreens",
    description:
      "Dive into the world of Shiso microgreens! Discover the incredible and uncommon addition they bring to your culinary seed library with our comprehensive guide.",
    img: "image/links-pages/microgreens-1.jpeg",
  },
  {
    id: 20,
    category: "microgreens",
    title: "Lemon Balm Delights: Fast and Easy Microgreen Cultivation",
    description:
      "Add a zesty touch to your cocktails and dishes with Lemon Balm microgreens! Our in-depth guide explores the fast and easy steps to grow your own lemony delights.",
    img: "image/links-pages/microgreens-2.jpg",
  },
  {
    id: 21,
    category: "microgreens",
    title: "Parsley Pleasures: Fast and Easy Growth of Microgreens",
    description:
      "Elevate your dishes with the deliciousness of Parsley microgreens! Explore the right way to grow these tiny treats with our guide, making them a popular choice in your culinary endeavors.",
    img: "image/links-pages/microgreens-3.jpg",
  },
  {
    id: 22,
    category: "trees",
    title: "Unraveling the Mystery: Why Isn’t My Festive Fir Sipping Water?",
    description:
      "If your Christmas tree seems less thirsty than expected, delve into possible explanations with tree decorating aficionado Melissa Strauss. This article provides valuable insights to troubleshoot the issue.",
    img: "image/links-pages/trees-1.jpg",
  },
  {
    id: 23,
    category: "trees",
    title:
      "Rooting Tradition: Planting Your Live Christmas Tree with Expert Tips",
    description:
      "Embarking on a journey with a live Christmas tree? Gardening expert Melissa Strauss guides you through the process, ensuring your tree not only adorns your home but also becomes a lasting beauty in your garden.",
    img: "image/links-pages/trees-2.jpg",
  },
  {
    id: 24,
    category: "trees",
    title: "Hydration Harmony: Navigating Christmas Tree Watering Essentials",
    description:
      "Amidst various suggestions for Christmas tree water amendments, Melissa Strauss, a Christmas tree enthusiast, clarifies the dos and don'ts. Ensure your tree receives the right hydration with these valuable insights.",
    img: "image/links-pages/trees-3.jpg",
  },
  {
    id: 25,
    category: "flowers",
    title: "Unlocking the Enigma: Reviving Your Cyclamen's Blossoms",
    description:
      "Cyclamen, often seen as a fleeting houseplant, can extend its bloom cycle with the right care. Gardening expert Kaleigh Brillon sheds light on why your cyclamen isn't flowering and offers guidance to bring its blossoms back to life.",
    img: "image/links-pages/flowers-1.jpg",
  },
  {
    id: 26,
    category: "flowers",
    title:
      "Floral Symphony: 35 Exquisite Flowers for Your Artful Cutting Garden",
    description:
      "Embarking on a journey to create a cutting garden? Join gardening expert Melissa Strauss as she unveils a collection of 35 flowers, harmonizing to craft a stunning garden and breathtaking floral arrangements.",
    img: "image/links-pages/flowers-2.webp",
  },
  {
    id: 27,
    category: "flowers",
    title: "Radiant Hues of Autumn: Cultivating and Nurturing Autumn Joy Sedum",
    description:
      "Embrace the fall with the rosy pink clusters of Autumn Joy Sedum, turning burgundy red and copper. Horticulturalist and former organic farmer Logan Hailey shares effortless tips for cultivating this delightful herbaceous perennial.",
    img: "image/links-pages/flowers-3.jpeg",
  },

  {
    id: 28,
    category: "housePlants",
    title: "Unveiling the Secrets: Reviving Your Christmas Cactus Blooms",
    description:
      "Christmas cactus plants are cherished for their vibrant winter flowers. If your Christmas cactus missed its winter bloom, gardening expert Jill Drago explores four reasons behind the lack of blossoms.",
    img: "image/links-pages/housePlants-1.jpeg",
  },
  {
    id: 29,
    category: "housePlants",
    title: "Orchid Odyssey: Navigating the 8 Most Common Orchid Diseases",
    description:
      "From fungal foes to viral villains, orchids face various diseases. Gardening expert Madison Moulton outlines eight common orchid diseases and provides valuable tips for prevention and treatment.",
    img: "image/links-pages/housePlants-2.jpeg",
  },
  {
    id: 30,
    category: "housePlants",
    title: "Leafy Mysteries: Why is My Christmas Cactus Shedding Leaves?",
    description:
      "The sight of leaves dropping from your Christmas cactus can be concerning. Known for their resilience, these plants usually thrive. Gardening expert Jill Drago identifies reasons behind leaf loss and offers solutions to restore your Christmas cactus's health.",
    img: "image/links-pages/housePlants-3.jpeg",
  },
  {
    id: 31,
    category: "housePlants",
    title: "Potting Perfection: Decoding the Best Pots for Orchids",
    description:
      "Selecting the right pot for your orchids goes beyond aesthetics. The chosen pot significantly impacts plant health. Gardening expert Madison Moulton unveils the secrets of potted orchid conditions to guide you in selecting the optimal pots for your orchids.",
    img: "image/links-pages/housePlants-4.jpeg",
  },
  {
    id: 32,
    category: "accessibileGardens",
    title: "Journey Through the Senses: Crafting a Sensory Garden Experience",
    description:
      "Embark on a sensory adventure that engages all five senses in a harmonious garden setting. Explore innovative concepts for designing and creating sensory garden spaces that captivate and delight!",
    img: "image/links-pages/accessibileGardens-1.jpg",
  },
  {
    id: 33,
    category: "accessibileGardens",
    title: "Seated Serenity: Designing Wheelchair Accessible Garden Beds",
    description:
      "For those with limited mobility, the prospect of wheelchair-accessible garden beds opens new possibilities. Delve into the world of accessibility-focused bed designs and create spaces that cater to everyone!",
    img: "image/links-pages/accessibileGardens-2.jpg",
  },
  {
    id: 34,
    category: "accessibileGardens",
    title: "Navigating Nature: Crafting Wheelchair Accessible Garden Paths",
    description:
      "In an adaptive garden, accessible paths are key for a seamless experience. Explore the world of wheelchair-accessible garden paths, covering materials, design elements, and essential considerations for a truly inclusive outdoor space!",
    img: "image/links-pages/accessibileGardens-3.jpg",
  },
  {
    id: 35,
    category: "gardeningTips",
    title: "Crafting Festive Beauty: DIY Holiday Wreaths with Nature's Bounty",
    description:
      "Unleash your creativity and save on holiday décor with DIY wreaths! Gardening expert Madison Moulton unveils 15 plant options to elevate your wreath-making skills, bringing festive charm to your home.",
    img: "image/links-pages/gardeningTips-1.jpg",
  },
  {
    id: 36,
    category: "gardeningTips",
    title:
      "Pacific Northwest Gardening Wisdom: Steering Clear of 28 Invasive Plants",
    description:
      "Maintain a thriving landscape in the Pacific Northwest by avoiding invasive plants. Gardening expert Liessa Bowen guides you through the hazards, sharing 28 invasive species that pose a threat to your garden and the local ecosystem.",
    img: "image/links-pages/gardeningTips-2.jpg",
  },
  {
    id: 37,
    category: "homesteading",
    title:
      "Preserving Bounty: Sweet Potato Curing Techniques for Long-Term Storage",
    description:
      "Ensure the longevity of your sweet potatoes by mastering the art of proper curing. Our comprehensive guide walks you through the essential steps for safe and effective sweet potato storage.",
    img: "image/links-pages/homesteading-1.jpg",
  },
  {
    id: 38,
    category: "homesteading",
    title:
      "Squash Storage Mastery: A Comprehensive Guide to Prolonging Freshness",
    description:
      "Unlock the secrets to extended squash freshness! Learn the techniques and methods to store squash successfully for months after harvest. Our ultimate guide ensures your produce stays delicious for an extended period.",
    img: "image/links-pages/homesteading-2.jpg",
  },
  {
    id: 39,
    category: "hydroponics",
    title: "Strawberry Bliss: Mastering Hydroponic Growth for Juicy Berries",
    description:
      "Embark on a journey of hydroponic strawberry cultivation! Our guide unravels different techniques to cultivate luscious berries without soil, ensuring a bountiful harvest.",
    img: "image/links-pages/hydroponics-1.jpg",
  },
  {
    id: 40,
    category: "hydroponics",
    title:
      "Nitrogen Nurturing: A Guide to Preventing Toxicity in Your Hydroponic Garden",
    description:
      "Navigate the nuances of nitrogen toxicity in hydroponic gardening. This guide enlightens you on causes, diagnosis, treatment, and prevention strategies, ensuring a thriving and healthy garden.",
    img: "image/links-pages/hydroponics-2.jpg",
  },

  {
    id: 41,
    category: "raisedBedGardening",
    title:
      "Elevate Your Garden: 15 Surprising Benefits of Raised Bed Gardening",
    description:
      "Uncover the magic of raised bed gardening, whether you're a greenhorn or a seasoned pro. Discover 15 unexpected advantages that will sway you to embrace this gardening technique, making it a game-changer for your plants!",
    img: "image/links-pages/raisedBedGardening-1.jpeg",
  },
  {
    id: 42,
    category: "raisedBedGardening",
    title: "Hot or Not? The Science Behind Metal Raised Garden Beds",
    description:
      "Contemplating metal raised garden beds? Dive into the science with gardening expert Taylor Sievers. This article examines whether metal beds get too hot, providing insights to help you make an informed decision for your garden.",
    img: "image/links-pages/raisedBedGardening-2.jpeg",
  },
  {
    id: 43,
    category: "raisedBedGardening",
    title: "Building a Solid Garden: A Guide to Raised Garden Bed Materials",
    description:
      "Navigate the world of raised garden bed materials with our comprehensive guide. Compare and contrast different options to ensure you choose the right materials for constructing a robust and thriving garden!",
    img: "image/links-pages/raisedBedGardening-3.jpg",
  },
  {
    id: 44,
    category: "raisedBedGardening",
    title: "Level Up Your Short Raised Garden Bed: Filling Tips and Tricks",
    description:
      "Curious about filling a short raised garden bed? Get the answers in our guide! Learn how to calculate the right amount of soil for your compact garden space, ensuring optimal growth for your plants.",
    img: "image/links-pages/raisedBedGardening-4.jpg",
  },
  {
    id: 45,
    category: "gardenPests",
    title: "Aphid Alert: Exploring 11 Garden Aphid Species You Might Encounter",
    description:
      "Navigating the world of aphids? Gardening expert Madison Moulton guides you through 11 common aphid types found in gardens. Learn to identify these tiny pests and discover effective strategies for keeping them at bay.",
    img: "image/links-pages/gardenPests-1.jpg",
  },
  {
    id: 46,
    category: "gardenPests",
    title: "Ant Invasion: Why Orchids Attract Crawling Ants and How to Stop It",
    description:
      "Are ants taking over your orchids? Discover the reasons behind this common issue and get expert tips from Melissa Strauss on effectively removing ants from your indoor or garden orchids. Enjoy a pest-free orchid haven!",
    img: "image/links-pages/gardenPests-2.jpg",
  },
  {
    id: 47,
    category: "gardenPests",
    title:
      "Spicy Defense: Testing Cayenne Pepper Against Rabbit Garden Invaders",
    description:
      "Concerned about rabbits in your garden? Wondering if cayenne pepper can keep them at bay? Certified master gardener Liz Jaros delves into the effectiveness of this household remedy. Learn whether cayenne pepper is your secret weapon against furry intruders!",
    img: "image/links-pages/gardenPests-3.jpg",
  },

  {
    id: 48,
    category: "organicTreatments",
    title:
      "Comparing Natural Defenders: Horticultural Oil vs. Neem Oil Unveiled",
    description:
      "Dive into the world of natural pest control! Explore the differences between horticultural oil and neem oil, uncovering their unique pros and cons. Our comprehensive guide helps you decide when to deploy each eco-friendly solution for a thriving garden.",
    img: "image/links-pages/organicTreatments-1.jpg",
  },
];
