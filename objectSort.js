const people = [
    { name: "Kelvin", age: 13 },
    { name: "James", age: 20 },
    { name: "Dominic", age: 19 },
    { name: "Ivonne", age: 21 },
    { name: "Kyalo", age: 10 },
    { name: "Jonathan", age: 10 }
  ];
  
  const sortedArray = people.sort((a, b) => a.name.localeCompare(b.name));
  
  const under18 = people.filter(person => person.age < 18);
  const over18 = people.filter(person => person.age > 18);
  
  console.log("Sorted Array:", sortedArray);
  console.log("Parental Guidance:", under18);
  console.log("Over 18 years:", over18);
  