const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 599,
    stock: 15,
    description: 'A novel about the serious issues of rape and racial inequality.',
    image: 'https://m.media-amazon.com/images/I/51Z9p5AecCL._SY445_SX342_.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    price: 499,
    stock: 83,
    description: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1k7QNP_48y1nNMkXTZxtAejkB_fIkV1ipg&s'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 399,
    stock: 47,
    description: 'A novel about the American dream and the disillusionment that comes with it.',
    image: 'https://i.etsystatic.com/20545894/r/il/7d8e6d/1977091569/il_570xN.1977091569_fv4f.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 450,
    stock: 34,
    description: 'A novel about teenage rebellion and the loss of innocence.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepQ4nglb_GFfVfN-mS4MtTDcVE61rmYFhgg&s'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 550,
    stock: 34,
    description: 'A romantic novel that also critiques the British class system.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 750,
    stock: 10,
    description: 'A fantasy novel about the adventures of Bilbo Baggins.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    price: 650,
    stock: 20,
    description: 'A novel about the obsessive quest of Captain Ahab for revenge on Moby Dick.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzupxaMyS14q9tsTAF3bnsUZ6AME2FHJziyA&s'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    price: 899,
    stock: 15,
    description: 'A novel about the French invasion of Russia and the impact on Tsarist society.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg'
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    price: 599,
    stock: 29,
    description: 'A psychological novel about the moral dilemmas of crime and justice.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 1099,
    stock: 18,
    description: 'An epic fantasy novel about the battle between good and evil in Middle-earth.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91dSMhdIzTL.jpg'
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    price: 511,
    stock: 17,
    description: "A novel about a young woman's journey to self-discovery and independence.",
    image: 'https://m.media-amazon.com/images/I/41+VR4PNiEL._SY780_.jpg'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: 550,
    stock: 35,
    description: 'A dystopian novel that explores the dangers of totalitarianism and technology.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    price: 450,
    stock: 40,
    description: 'A gothic novel about the passionate and destructive love between Heathcliff and Catherine.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVyim1sOEJlsyqi8XtGIBKpW5He5iOzTKPg&s'
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    price: 650,
    stock: 22,
    description: 'A novel about the tragic love affair between Anna Karenina and Count Vronsky.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTU_mdUeR9bBo4FObOGm7wU_LzVgMc7mdAA&s'
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 799,
    stock: 50,
    description: 'A handbook of agile software craftsmanship.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg'
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    price: 999,
    stock: 40,
    description: 'Your journey to mastery as a software developer.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/518FqJvR9aL._SX379_BO1,204,203,200_.jpg'
  },
  {
    title: "You Don't Know JS: Scope & Closures",
    author: 'Kyle Simpson',
    price: 699,
    stock: 35,
    description: 'A deep dive into the core mechanisms of JavaScript.',
    image: 'https://m.media-amazon.com/images/I/81zWsOMWE4L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    price: 1299,
    stock: 20,
    description: 'The classic book on the foundations of design patterns.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    price: 750,
    stock: 44,
    description: 'A modern introduction to programming with JavaScript.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91asIC1fRwL.jpg'
  },
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 599,
    stock: 50,
    description: 'Uncovering the best features of JavaScript.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
  }
];

  module.exports = books;
  