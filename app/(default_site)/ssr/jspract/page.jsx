export default function JsPract() {
  //-- Comparing reference types --//

  //We can't Add key value pair to a Map just like we do in normal Object using bracket notation, but instead it adds the property to the map1 object itself, not to the Map structure.
  const map1 = new Map();
  map1.set("sub", "javascript");//sets "sub" as key and "javascript" as its value in map1 Map structure not 
  map1["name"] = "ram"; //sets name as property in map1 object but not in map1 Map structure
  console.log(map1.has("name")); //output: false
  console.log(map1["sub"]); //doesn't work bcz sub property is not present in map1 object//output: undefined 
  console.log(map1["name"]); //output: ram //bcz "name" property is present in map1 object but not in map1 Map structure
  console.log(map1.name);//output: ram //bcz "name" property is present in map1 object but not in map1 Map structure
  console.log(map1.size); //output: 1 //size is one bcz size property only counts the key-value pairs in the map1 Map structure but "name"-"ram" is a property on regular map1 object so it will not be considered as key-value pair of map1 Map structure


  //When you use bracket notation to add a property to an object (including a Map), JavaScript treats it as adding a regular property to the object, not a key-value pair in the Map. In other words, you are adding a property to the map1 object itself, not to the Map structure.

  // However, when you later check the size of the Map using map1.size, it correctly returns 1. This is because the size property of a Map reflects the number of key-value pairs in the Map, not the number of properties of the underlying object.
  // console.log(map1.has("sub"));
  // console.log(map1.size);
  // console.log(map1["sub"]);
  return <div>Hi</div>;
}
