const { log } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class player {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}
class team {
    constructor(name, coach) {
        this.name = name;
        this.coach = coach;
        this.pl = [];
    }

    addPlayer(player) {
        this.pl.push(player);
    }
    removePlayer(name) {
        this.pl = this.pl.filter(player => player.name !== name)
    }
    selectall() {
        for (let i = 0; i < this.pl.length; i++) {
            const s = this.pl[i];
            console.log(s);
        }
    }
}
var t;
rl.question("please enter team name : \n", (teamName) => {
    rl.question("please enter coach name : \n", (coachTeam) => {
        t = new team(teamName, coachTeam);
        console.log("save \n");
        rl.question("please enter number player: \n", (number) => {
            add(number);
        });
    });
});

function add(num) {
    if (num == 0) {
        console.log("compleate");
        remove();
    } else {
        rl.question("Enter player name: ", (namePlayer) => {
            rl.question("Enter age: ", (agePlayer) => {
                rl.question("Enter position: ", (positionPlayer) => {
                    const player1 = new player(namePlayer, agePlayer, positionPlayer);
                    t.addPlayer(player1);
                    console.log(player1);
                    console.log("----------------------");
                    add(num - 1);
                });
            });
        });
    }
}

function remove() {
    rl.question("Do you want to remove the player?(y/n)", (answer) => {
        if (answer == "n" || answer == "N" || answer == "y" || answer == "Y") {
            if (answer == "n" || answer == "N") {
                console.log("ok");
            }
            else {
                rl.question("please enter name :", (rName) => {
                    t.removePlayer(rName);
                    console.log(`remove ${rName} compleate`);
                    t.selectall();
                    remove();
                });
            }
        } else {
            console.log("no");
        }
    });
}