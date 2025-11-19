let users = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

let newUsers = users.reduce((acc, item) => {
  if (acc[item.user]) {
    acc[item.user].duration = acc[item.user].duration + item.duration;
    acc[item.user].equipment = [
      ...new Set([...acc[item.user].equipment, item.equipment]),
    ].sort();
  } else {
    acc[item.user] = item;
  }
  return acc;
}, {});

console.log(Object.values(newUsers));
