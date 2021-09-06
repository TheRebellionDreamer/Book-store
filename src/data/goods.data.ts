export interface IGood {
  id: number;
  category: string;
  title: string;
  author: string;
  image: string;
  price: number;
};

export const goods: IGood[] = [
  {
    id: 1,
    category: "books",
    title: "JavaScript Pocket Guide",
    author: "David Flanagan",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    price: 750,
  },
  {
    id: 2,
    category: "books",
    title: "JavaScript In-depth Guide",
    author: "David Flanagan",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    price: 1450,
  },
  {
    id: 3,
    category: "books",
    title: "React and Redux",
    author: "Alex Banks and Eva Porcello",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    price: 950,
  },
  {
    id: 4,
    category: "books",
    title: "GraphQL",
    author: "Alex Banks and Eva Porcello",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    price: 850,
  },
  {
    id: 5,
    category: "books",
    title: "The path to learning React",
    author: "Robin Viruch",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    price: 550,
  },
  {
    id: 6,
    category: "video",
    title: "Fundamental JavaScript",
    author: "Barbara Pierce",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=862&q=80",
    price: 1250,
  },
  {
    id: 7,
    category: "video",
    title: "Animations in JavaScript",
    author: "Lucy Williams",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80",
    price: 1550,
  },
  {
    id: 8,
    category: "video",
    title: "TypeScript basics",
    author: "Susan Clark",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80",
    price: 2250,
  },
  {
    id: 9,
    category: "video",
    title: "Pro React",
    author: "Juan Greene",
    image:
      "https://images.unsplash.com/photo-1550784343-6bd0ce5d600b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    price: 1450,
  },
  {
    id: 10,
    category: "stickers",
    title: "Frontend sticker set",
    author: "Cindy Moore",
    image:
      "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80",
    price: 550,
  },
  {
    id: 11,
    category: "stickers",
    title: "Backend sticker set",
    author: "Carla Brown",
    image:
      "https://images.unsplash.com/photo-1496493820873-82288ac48a48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    price: 550,
  },
  {
    id: 12,
    category: "stickers",
    title: "FullStack sticker set",
    author: "Leroy Parker",
    image:
      "https://images.unsplash.com/photo-1593754500338-969a679d5ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    price: 1550,
  },
];
