export function getSubjects(student) {
    const subjects = Object.keys(student.subjects).map(subject => {
      return subject[0].toUpperCase() + subject.slice(1).replace("_", " ");
    });
  
    return subjects;
};