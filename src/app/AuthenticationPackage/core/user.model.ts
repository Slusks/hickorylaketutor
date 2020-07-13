
export class FirebaseUserModel {
  uid: string;
  provider: string;
  email: string;
  lastName: string;
  role: string;
  child1: string;
  grade1: number;
  subject1: string;
  child2: string;
  grade2: number;
  subject2: string;
  parentName: string;

  constructor(){
    this.uid ="";
    this.provider="";
    this.email = "";
    this.lastName ="";
    this.role =""
    this.child1 ="";
    this.grade1= null;
    this.subject1 ="";
    this.child2 ="";
    this.grade2= null;
    this.subject2 ="";
    this.parentName= "";;

  }
}