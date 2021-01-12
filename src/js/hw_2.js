//hw-4
export function getPairs (students) {
    const womenArr = students.filter(student => {
        return student.charAt(student.length - 1) === "а";
    });

    const menArr = students.filter(student => {
        return student.charAt(student.length - 1) !== "а";
    });

    const pairs = menArr.map((student, i) => {
        return [`${student} i ${womenArr[i]}`];
    });

    return pairs;
};