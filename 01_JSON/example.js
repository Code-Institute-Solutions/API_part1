let bookCharacter = {
    name: "Reginald Jeeves",
    employer: "Bertram Wilberforce Wooster",
    novels: 11,
    shortStories: 35,
    printStatus: function () {
        console.log(this.name + " works for " + this.employer);
    },
}

console.log(bookCharacter.employer);
console.log(bookCharacter["employer"]);
console.log(bookCharacter.printStatus());