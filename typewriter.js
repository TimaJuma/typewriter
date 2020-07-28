const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(()=> {
//     process.stdout.write(char);
//   }, 1000)
// }

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
