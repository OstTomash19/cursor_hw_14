//hw-3
export function getDegreeOfNumber(number, degree) {
    let degreeOfNumber = 1;
    for(let i = 0; i < Math.abs(degree); i++) {
        degreeOfNumber *= number;
    }
    
    if(degree < 0) degreeOfNumber = 1 / degreeOfNumber;

    return degreeOfNumber;
};

