class Person{
   constructor(name){
    this.name=name;
   }
    walk(){
        console.log("walk");
    }
}

class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }

    teach()
    {
        console.log("Teach");
    }
}

const teacher=new Teacher("vimal","BE");
teacher.teach();
console.log(teacher);
