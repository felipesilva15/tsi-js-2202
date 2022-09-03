let amigos = ["Felipe", "Bono", "Paulo", "Marcelo", "Alan", "Yuri", "Matheus"];

console.log(amigos);

// Looping com o amigos

// For
for (let i = 0; i < amigos.length; i++) {
    // Template string(interpolação) 
    console.log(`${i} - ${amigos[i]}`);
}

// foreach

amigos.forEach(function(value, index){
    console.log(`${index}: ${value}`);
});

// map

amigos.map(function(value, index){
    console.log(`${index}: ${value}`);
});