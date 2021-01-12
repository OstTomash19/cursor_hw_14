import { getDegreeOfNumber } from './js/hw_1'
import { getPairs } from './js/hw_2'
import { getRandomArray } from './js/hw_3'
import { getSubjects } from './js/hw_4'
import { getMyTaxes } from './js/hw_5'
import { Student } from './js/hw_6'
import { generateBlocks, generateBlocksInterval } from './js/hw_7'
// import './js/babel'
import './styles/styles.css'

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const newStudents = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    },
  }
];

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const ostap = new Student('Український Католицький Університет', 5, 'Томашівський Остап');

const UsingTime = 1000;

console.log(getDegreeOfNumber(7,2));
console.log(getPairs(students));
console.log(getRandomArray(15, 1, 100));
console.log(getSubjects(newStudents[0]));
console.log(getMyTaxes.call(ukraine, 2000));
console.log(ostap);

generateBlocks();
setInterval(() => generateBlocksInterval(), UsingTime);