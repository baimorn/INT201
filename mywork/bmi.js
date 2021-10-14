//สร้าง Class ไว้เพื่อเก็บข้อมูลส่วนตัวทั่วไปของนักศึกษา
class student{
    constructor(stdid,fname,lname,){
        this.stdid = stdid;
        this.firstname = fname;
        this.lastname = lname;
    }
}

//สร้าง Class เพื่อเก็บรายละเอียดรายวิชา (เพิ่มการสร้าง Class เข้ามาเพื่อเป็นระเบียบในการเก็บเป็น Array)
class subject{
    constructor(courseCode , courseName , credit){
        this._courseCode = courseCode;
        this._courseName = courseName;
        this._credit = credit;
    }
}


//subject information
const subject1 = new subject('GEN101' , 'PHYSICALEDUCATION' ,1);
const subject2 = new subject('GEN121' , 'LEARNING AND PROBLEM SOLVING' , 3);
const subject3 = new subject('INT100' , 'LEARNING AND PROBLEM SOLVING' , 3);
const subject4 = new subject('INT101' , 'PROGRAMMING FUNDAMENTALS' , 3);
const subject5 = new subject('INT102' , 'WEB TECHOLOGY' , 1);
const subject7 = new subject('GEN121' , 'LEARNING AND PROBLEM SOLVING' , 3);
const subject8 = new subject('INT114' , 'DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY' ,3);

//student information
let s1 = new student("63130500036" , "Nitchakarn" , "Pasanee");

console.log(s1);

