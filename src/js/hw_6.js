export class Student {
    constructor (university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.studentIsDismissed = false;
    }
    
    get getMarks() { return !this.studentIsDismissed ? this.marks : null;}

    set setMark(number){!this.studentIsDismissed ? this.marks.push(number) : null;}

    static getInfo(university, course, fullName) { return `Студент ${course}го курсу ${university}, ${fullName}`;}
};
