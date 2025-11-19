const songs = [
  { title: "Song A", genre: "rock" },
  { title: "Song B", genre: "pop" },
  { title: "Song C", genre: "rock" },
  { title: "Song D", genre: "jazz" },
];

// Group objects based on genre
// {
//  rock: [{ title: 'Song A', genre: 'rock' }, { title: 'Song C', genre: 'rock' }],
//  pop: [{ title: 'Song B', genre: 'pop' }],
//  jazz: [{ title: 'Song D', genre: 'jazz' }]
// }

let resp = songs.reduce((acc, item) => {
  if (acc[item.genre]) {
    acc[item.genre].push(item);
  } else {
    acc[item.genre] = [item];
  }
  return acc;
}, {});

console.log(resp);
