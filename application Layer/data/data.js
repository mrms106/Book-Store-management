const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 599,
    stock: 15,
    description: 'A novel about the serious issues of rape and racial inequality.',
    image: 'https://m.media-amazon.com/images/I/51Z9p5AecCL._SY445_SX342_.jpg',
    location: 'A-1' // Compartment A, Row 1
  },
  {
    title: '1984',
    author: 'George Orwell',
    price: 499,
    stock: 75,
    description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1k7QNP_48y1nNMkXTZxtAejkB_f',
    location: 'A-2' // Compartment A, Row 2
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 399,
    stock: 40,
    description: 'A novel about the American dream and the disillusionment that comes with it.',
    image: 'https://i.etsystatic.com/20545894/r/il/7d8e6d/1977091569/il_570xN.1977091569_fv4f.jpg',
    location: 'A-3' // Compartment A, Row 3
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 450,
    stock: 33,
    description: 'A novel about teenage rebellion and the loss of innocence.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepQ4nglb_GFfVfN-mS4MtTDcVE61rmYFhgg&s',
    location: 'A-4' // Compartment A, Row 4
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 550,
    stock: 33,
    description: 'A romantic novel that critiques the British class system.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg',
    location: 'A-5' // Compartment A, Row 5
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 750,
    stock: 5,
    description: 'A fantasy novel about the adventures of Bilbo Baggins.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
    location: 'A-6' // Compartment A, Row 6
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    price: 650,
    stock: 20,
    description: 'A novel about the obsessive quest of Captain Ahab for revenge on Moby Dick.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzupxaMyS14q9tsTAF3bnsUZ6AME2FHJziyA&s',
    location: 'A-7' // Compartment A, Row 7
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    price: 899,
    stock: 15,
    description: 'A novel about the French invasion of Russia and its impact on Tsarist society.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg',
    location: 'A-8' // Compartment A, Row 8
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    price: 599,
    stock: 29,
    description: 'A psychological novel about the moral dilemmas of crime and justice.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg',
    location: 'A-9' // Compartment A, Row 9
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 1099,
    stock: 17,
    description: 'An epic fantasy novel about the battle between good and evil in Middle-earth.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg',
    location: 'A-10' // Compartment A, Row 10
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    price: 511,
    stock: 15,
    description: "A novel about a young woman's journey to self-discovery and independence.",
    image: 'https://m.media-amazon.com/images/I/41+VR4PNiEL._SY780_.jpg',
    location: 'B-1' // Compartment B, Row 1
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: 550,
    stock: 32,
    description: 'A dystopian novel that explores the dangers of totalitarianism and technology.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg',
    location: 'B-2' // Compartment B, Row 2
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    price: 450,
    stock: 40,
    description: 'A gothic novel about the passionate and destructive love between Heathcliff and Catherine.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVyim1sOEJlsyqi8XtGIBKpW5He5iOzTKPg&s',
    location: 'B-3' // Compartment B, Row 3
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    price: 650,
    stock: 21,
    description: 'A novel about the tragic love affair between Anna Karenina and Count Vronsky.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTU_mdUeR9bBo4FObOGm7wU_LzVgMc7mdAA&s',
    location: 'B-4' // Compartment B, Row 4
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 799,
    stock: 49,
    description: 'A handbook of agile software craftsmanship.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg',
    location: 'B-5' // Compartment B, Row 5
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    price: 999,
    stock: 40,
    description: 'Your journey to mastery as a software developer.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/518FqJvR9aL._SX379_BO1,204,203,200_.jpg',
    location: 'B-6' // Compartment B, Row 6
  },
  {
    title: "You Don't Know JS: Scope & Closures",
    author: 'Kyle Simpson',
    price: 699,
    stock: 35,
    description: 'A detailed look at JavaScript closures and scope.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41z0hJvDfPL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    location: 'B-7' // Compartment B, Row 7
  },
  {
    title: 'The Mythical Man-Month',
    author: 'Frederick P. Brooks Jr.',
    price: 799,
    stock: 25,
    description: 'Essays on software engineering and project management.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41XhdKEM-HL._SX326_BO1,204,203,200_.jpg',
    location: 'B-8' // Compartment B, Row 8
  },
  {
    title: 'The Art of Computer Programming',
    author: 'Donald E. Knuth',
    price: 1200,
    stock: 10,
    description: 'A comprehensive book on algorithms and programming.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51SKmuL2bZL._SX378_BO1,204,203,200_.jpg',
    location: 'B-9' // Compartment B, Row 9
  },
  {
    title: 'Refactoring',
    author: 'Martin Fowler',
    price: 899,
    stock: 40,
    description: 'Improving the design of existing code.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41CHTdxcswL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    location: 'B-10' // Compartment B, Row 10
  },
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
    price: 1499,
    stock: 15,
    description: 'The comprehensive guide to algorithms.',
    image: 'https://m.media-amazon.com/images/I/61ZYxrQEpCL._AC_UF1000,1000_QL80_.jpg',
    location: 'C-1' // Compartment C, Row 1
  },
  {
    title: 'गोदान (Godan)',
    author: 'Munshi Premchand',
    price: 399,
    stock: 50,
    description: 'A classic novel depicting the struggles of rural India and the life of a poor farmer.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQ0eD2HQrFKuCaJ0inKwDCHd67L1H-L7NQQ&s',
    location: 'C-2' // Compartment C, Row 2
  },
  {
    title: 'गबन (Gaban)',
    author: 'Munshi Premchand',
    price: 349,
    stock: 38,
    description: 'A story about the moral dilemmas of a man driven to crime by societal pressures.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8JNQPNBrejTlFwkP70Gsg7OHUNawDzf7IQ&s',
    location: 'C-3' // Compartment C, Row 3
  },
  {
    title: 'राग दरबारी (Raag Darbari)',
    author: 'Shrilal Shukla',
    price: 450,
    stock: 35,
    description: 'A satirical novel that explores the corruption and inefficiency in rural India.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGpDsCwfylEHOKj-U7kaLclgyZ-NBGu3qe3A&s',
    location: 'C-4' // Compartment C, Row 4
  },
  {
    title: 'मधुशाला (Madhushala)',
    author: 'Harivansh Rai Bachchan',
    price: 299,
    stock: 45,
    description: 'A collection of poems that reflect on the philosophy of life through the metaphor of a tavern.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GDtmHvA5Owp3U5wQIEH7uegMRX7f0Bbe2g&s',
    location: 'C-5' // Compartment C, Row 5
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 599,
    stock: 40,
    description: 'A romantic novel that explores the themes of love, social standing, and marriage.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35HIfFXMfo7vjBWr-U42lOAmd0LSxwnIbwA&s',
    location: 'C-6' // Compartment C, Row 6
  },
  {
    title: 'The Fault in Our Stars',
    author: 'John Green',
    price: 499,
    stock: 50,
    description: 'A touching story of young love between two cancer patients.',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg',
    location: 'C-7' // Compartment C, Row 7
  },
  {
    title: 'Me Before You',
    author: 'Jojo Moyes',
    price: 550,
    stock: 30,
    description: 'A romantic novel that explores the relationship between a caretaker and her quadriplegic patient.',
    image: 'https://m.media-amazon.com/images/I/914woZe6eBL._AC_UF1000,1000_QL80_.jpg',
    location: 'C-8' // Compartment C, Row 8
  },
  {
    title: 'Outlander',
    author: 'Diana Gabaldon',
    price: 650,
    stock: 19,
    description: 'A historical romance that spans centuries and time travel.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeK2xp80o7fDo5u_KSxpSbxDNEQDfRDgWOVg&s',
    location: 'C-9' // Compartment C, Row 9
  },
  {
    title: 'The Notebook',
    author: 'Nicholas Sparks',
    price: 499,
    stock: 43,
    description: 'A classic love story that chronicles the enduring love of a couple over the years.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPgd55ObXtv-Ah4zZHOEaQOkJA5D4Hk6X-mQ&s',
    location: 'C-10' // Compartment C, Row 10
  },
  {
    title: 'चंद्रकांता (Chandrakanta)',
    author: 'Devaki Nandan Khatri',
    price: 399,
    stock: 40,
    description: 'A classic tale of love, fantasy, and adventure revolving around the love story of Prince Virendra Singh and Princess Chandrakanta.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9byp9DLEKLtavX2XWODRoxDqEcD8G7jukfg&s',
    location: 'D-1' // Compartment D, Row 1
  },
  {
    title: 'मिलन (Milan)',
    author: 'Vijayadan Detha',
    price: 350,
    stock: 35,
    description: 'A heart-touching love story set in the rustic beauty of rural Rajasthan.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmc1PXGm1moEdYrz-gWOQuTZL7zZaOrqqn9w&s',
    location: 'D-2' // Compartment D, Row 2
  },
  {
    title: 'एक प्रेम कहानी मेरी भी (Ek Prem Kahani Meri Bhi)',
    author: 'Ravinder Singh',
    price: 299,
    stock: 45,
    description: 'A modern love story that resonates with the young generation, exploring the nuances of love and loss.',
    image: 'https://m.media-amazon.com/images/I/81bsYqCAqcL._AC_UF1000,1000_QL80_.jpg',
    location: 'D-3' // Compartment D, Row 3
  }
];


  module.exports = books;
  