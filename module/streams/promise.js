function wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms) 
        
      
  })
}
wait(5000).then(() => {
    console.log(`the class is over`);
})

function BackendStudent(female, male) {
    console.log(`the girlfriend of ${male} is ${female}`);
    
}
BackendStudent("favour", "isaac")