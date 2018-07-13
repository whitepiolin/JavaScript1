let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

//2.1
favoriteAnimals.push("turtle");
//2.2
console.log(favoriteAnimals);
//2.3
favoriteAnimals.splice(1, 0, "meerkat");
//2.4
console.log("we will see 'meerkat' at index 1 ");
//2.5
console.log(favoriteAnimals);
//2.6
console.log(favoriteAnimals.length);
console.log("The array has a length of:" + favoriteAnimals.length );
//2.7
console.log(favoriteAnimals);
favoriteAnimals.splice(3, 1);
//2.8
console.log(favoriteAnimals);
//2.9
favoriteAnimals.indexOf("meerkat");
//2.10
console.log("The item you are looking for is at index:" + favoriteAnimals.indexOf("meerkat"));

