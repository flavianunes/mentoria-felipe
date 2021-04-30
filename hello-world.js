

const student = {
    name: "Flavia",
    age: 25,
    isFamele: true,
}


const student2 = {
    name: "Felipe",
    age: 26,
    isFamele: false,
}

const student3 = {
    name: "Sica",
    age: 54,
    isFamele: false,
}

const aux = student.name + " tem " + student.age + " e  é " + student.isFamele ? "uma mulher" : "outro";

const {name, age, isFamele} = student;

const aux2 = `${name} tem ${age} e é ${isFamele ? "uma mulher" : "outro"}`;


const students = [student, student2];
const [flavia, felipe] = students;

students.push(student3);

function increaseAge(student){
    return {
        ...student, 
        age: student.age+1
    };
}

const newStudents = students.map(increaseAge);

//console.log({newStudents});

const addAge = function(acc, student){
    return acc + student.age;
}

const addAgeArrow = (acc, {age}) => acc + age;

const sumAge = newStudents.reduce(addAge, 0)

//console.log({sumAge})


const newStudentsFemale = newStudents.filter(({isFamele}) => !isFamele)
//console.log({newStudentsFemale})

//---------------------------------------------------------------------------------

const a = {
    x: 12,
    y: 33,
}

const b = {
    w: 44,
    z: 32,
}

const c = {
    ...a,
    ...b,
} 

a.x,
a["x"]

//console.log({c})

const x = "a";

const switchTeste = {
    a: 1,
    b: 2,
    c: 3,
} 
console.log(switchTeste[x])
