students1 = [
  {
    id: 1,
    name: "name1",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 2,
    name: "name2",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 3,
    name: "name3",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 4,
    name: "name4",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 5,
    name: "name5",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 6,
    name: "name6",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 7,
    name: "name7",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
];

students2 = [
  {
    id: 8,
    name: "name1",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 9,
    name: "name2",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 10,
    name: "name3",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 11,
    name: "name4",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 12,
    name: "name5",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 13,
    name: "name6",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
  {
    id: 14,
    name: "name7",
    gpa: Math.round(Math.random() * 50 + 1) / 10,
  },
];

function getTopStudents(studentsArray1, studentsArray2) {
  let arr = studentsArray1.concat(studentsArray2);
  arr.sort((a, b) => {
    return a.gpa - b.gpa;
  });
  console.log(arr);

  let amount = 5,
    res = [],
    butWaitTheresMore = true;
  for (let i = arr.length - 1; i > arr.length - 1 - amount; i--) {
    res.unshift(arr[i]);
    if ((butWaitTheresMore = true)) {
      if (arr[arr.length - amount].gpa === arr[arr.length - amount - 1].gpa) {
        amount++;
      } else butWaitTheresMore = false;
    }
  }
  return res;
}

let result = getTopStudents(students1, students2);
console.log(result);