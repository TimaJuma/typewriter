const sentence = "hello there from lighthouse labs";


// takes any text and prints out  each character with deay of 100sec after each other in same line
const textGifer = (text) => {
  interval = 0;
  for(const char of text) {
    setTimeout(()=> {
      process.stdout.write(char);
    }, interval);
    interval += 100;
    
  };
  setTimeout(()=> console.log('\n'), interval + 100);
};

textGifer(sentence)
