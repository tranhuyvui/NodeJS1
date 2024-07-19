const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Student {
    constructor(name, id, scores) {
        this.name = name;
        this.id = id;
        this.scores = scores;
    }

    averageScore() {
        let sumScores = 0;
        let cnt = this.scores.length;
        for (let i = 0; i < cnt; i++) {
            sumScores += parseInt(this.scores[i]);
        }
        return sumScores / cnt;
    }

    printInfo() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.id}`);
        console.log(`Student Scores: ${this.scores.join(', ')}`);
        console.log(`Student Average Score: ${this.averageScore()}`);
    }
}

function inputStudentData(callback) {
    let students = [];
    rl.question('Enter number of students: ', function(num) {
        let n = parseInt(num);
        inputStudentInfo(0);

        function inputStudentInfo(index) {
            if (index < n) {
                rl.question(`Enter Student ${index + 1} Name: `, function(name) {
                    rl.question(`Enter Student ${index + 1} ID: `, function(id) {
                        rl.question(`Enter Student ${index + 1} Scores (comma separated): `, function(scoresStr) {
                            const scores = scoresStr.split(',').map(score => parseInt(score.trim()));
                            const newStudent = new Student(name, id, scores);
                            students.push(newStudent);
                            inputStudentInfo(index + 1);
                        });
                    });
                })
            } else {
                rl.close();
                callback(students);
            }
        }
    });
}

function main() {
    inputStudentData(function(students) {
        console.log('\nStudent Information:\n');
        for(let i = 0;i < students.length;i++){
            console.log('student:', i + 1, '\n');
            students[i].printInfo();
            console.log('\n');
        }
    });
}

main();
