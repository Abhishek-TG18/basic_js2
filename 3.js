let students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];
function checkResults(name){
    let flag=0;

  students.filter((student)=>{
        if(student.name===name)
        {
            flag=1;
            if(student.marks>90){
                console.log(`Congratulations ${student.name}! You have cleared the exam.`);
            }
            else{
                console.log(`Sorry ! You have not cleared the exam.`);
            }
        }
       
  }
  )
  if(flag==0)
  console.log("invalid username");
}
checkResults("Abhi");
checkResults("Farman");
checkResults("Shivam");