const express = require('express');
const app = express();
const PORT = 3000;

const chefs = [
  {
    "id": 1,
    "picture": "https://i.ibb.co/M8Fqz5h/image.png",
    "name": "John Smith",
    "experience": 12,
    "recipes": 78,
    "likes": 420
  },
  {
    "id": 2,
    "picture": "https://i.ibb.co/7QNQ50g/image.png",
    "name": "Sarah Johnson",
    "experience": 8,
    "recipes": 52,
    "likes": 312
  },
  {
    "id": 3,
    "picture": "https://i.ibb.co/qy5pcQs/image.png",
    "name": "David Lee",
    "experience": 15,
    "recipes": 92,
    "likes": 654
  },
  {
    "id": 4,
    "picture": "https://i.ibb.co/Cz0HX3H/image.png",
    "name": "Amy Chen",
    "experience": 10,
    "recipes": 68,
    "likes": 234
  },
  {
    "id": 5,
    "picture": "https://i.ibb.co/JQsqkkv/image.png",
    "name": "Michael Kim",
    "experience": 18,
    "recipes": 106,
    "likes": 789
  },
  {
    "id": 6,
    "picture": "https://i.ibb.co/h7DtZ2f/image.png",
    "name": "Emily Davis",
    "experience": 7,
    "recipes": 43,
    "likes": 178
  },
  {
    "id": 7,
    "picture": "https://i.ibb.co/tY7jm6m/image.png",
    "name": "James Nguyen",
    "experience": 13,
    "recipes": 81,
    "likes": 532
  },
  {
    "id": 8,
    "picture": "https://i.ibb.co/hLVxy5C/image.png",
    "name": "Jessica Wilson",
    "experience": 9,
    "recipes": 57,
    "likes": 289
  },
  {
    "id": 9,
    "picture": "https://i.ibb.co/18xT4Sp/image.png",
    "name": "William Brown",
    "experience": 11,
    "recipes": 72,
    "likes": 398
  },
  {
    "id": 10,
    "picture": "https://i.ibb.co/z6KCd78/image.png",
    "name": "Olivia Jones",
    "experience": 6,
    "recipes": 38,
    "likes": 142
  }
];

app.get('/api/chefs', (req, res) => {
  res.json(chefs);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
