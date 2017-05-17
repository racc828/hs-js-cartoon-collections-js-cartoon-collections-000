function dwarfRollCall(dwarves) {
  const newarr = []
  for(let i = 0; i < dwarves.length; i++) {
    newarr.push(`${i + 1}. ${dwarves[i]} `);
  }
  return newarr.join("")
}

function summonCaptainPlanet(planeteerCalls){
  for(let i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese(foods) {
  var cheese = ["cheddar", "gouda", "thyme"];
  for(let i = 0; i < foods.length; i++) {
    for (let c = 0; c < cheese.length; c++) {
      if(foods[i] === cheese[c]) {
        return cheese[c]
      }
    }
  }
  return "no cheese!"
}
