let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let l = 0; l < adj.length; l++) {
    for (let n = 0; n < noun.length; n++) {
      console.log(pronoun[i] + adj[l] + noun[n] + ".com");
    }
  }
}
