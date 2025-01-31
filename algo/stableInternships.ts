// Це реалізація алгоритму стабільного паросполучення (Stable Marriage Problem), також відомого як алгоритм Гейла-Шеплі. Давайте розберемо його детальніше:
// Що це за алгоритм?
// Це алгоритм, який знаходить стабільне паросполучення між двома групами (в даному випадку між стажерами та командами), де кожна сторона має свої преференції щодо іншої сторони.
// Де використовується?

// Розподіл студентів по університетах
// Призначення лікарів-інтернів у лікарні
// Розподіл працівників по проектах
// Matching на сайтах знайомств
// Розподіл органів для трансплантації

// Переваги алгоритму:

// Гарантовано знаходить стабільне рішення
// Оптимальний для однієї зі сторін (в даному випадку для стажерів)
// Працює за поліноміальний час O(n²)
// Не потребує центрального координатора
// Справедливий - жодна пара не може покращити свій стан, не погіршивши стан іншої пари


// O(n^2) time | O(n) space
function stableInternships(
    interns: number[][],
    teams: number[][]
  ): [number, number][] {
    let available: boolean[] = new Array(interns.length).fill(true);
    let matchings: (number | null)[] = new Array(teams.length).fill(null);
    
    while (available.some(i => i)) {
      for (let intern = 0; intern < interns.length; intern++) {
        if (!available[intern]) continue;
        let team: number = interns[intern].shift()!;
        console.log("intern: " + intern);
        console.log("team: " + team);
        console.log(" ");
        if (matchings[team] == null) {
            available[intern] = false;
            matchings[team] = intern;
            console.log("free team");
            console.log("available: " + available);
            console.log("matchings: " + matchings);
            console.log(" ");
        }
        //pair a better match if the current intern is a higher priority than the existing matched intern
        else if (teams[team].indexOf(intern) < teams[team].indexOf(matchings[team])) {
            console.log("taken team");
            console.log("current intern rank: " + teams[team].indexOf(intern));
            console.log("matched intern rank: " + teams[team].indexOf(matchings[team]));
            available[matchings[team]!] = true;
            available[intern] = false;
            matchings[team] = intern;
            console.log("available: " + available);
            console.log("matchings: " + matchings);
            console.log(" ");
        }
      }
      if (available.some(i => i)) console.log("available interns remaining!!!");
      console.log("");
    }
    return matchings.map((i, t) => [i!,t]);
  }