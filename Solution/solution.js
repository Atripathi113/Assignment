
const fs= require('fs');

function file(filename){
    const start = Date.now();

    const words = fs.readFileSync(filename, 'utf-8').split('\n')
    .map(w => w.trim()).filter(Boolean)


  const wordSet= new Set(words);
  const memory= new Map();

  words.sort((a,b) => b.length - a.length);

  function wordBreak(word , actual){
    if(memory.has(word)) return memory.get(word);
    if(word.length === 0) return !actual;

    for(let i=1; i<= word.length; i++){
        const prefix = word.slice(0,i);
        const suffix = word.slice(i);

        if(wordSet.has(prefix) && wordBreak(suffix, false)){
            
                memory.set(word, true);
                return true;
            }
        }
         memory.set(word, false);
    return false;
    }
   
  
    const result = [];
    for(const word of words){
        if(wordBreak(word, true)){
            result.push(word);
            if(result.length === 2) break;
        }
    }
    const end = Date.now();
    console.log(`\n Input file: ${filename}`);
    console.log(`Longest compound word: ${result[0]}`);
    console.log(`Second longest compound word: ${result[1]}`);
    console.log(`Execution time: ${end - start} ms`);
}

file('Input_01.txt');
file('Input_02.txt');