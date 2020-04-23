function reverse(word){
  let newWord = [];
  for(let i = word.length -1; i >=0; i--) {
    newWord.push(word[i]);
    
  }
  console.log(newWord)
  return newWord;
  // add whatever parameters you deem necessary - good luck!
}

function reverse2(word){
  let newWord = word.split('').reverse().join('');
  console.log(newWord);
  return newWord;
}

// using pure recursion
function reverse3(word){
  let newWord = '';
  if(word.length === 0) {
    console.log(newWord, "NEW")
    return newWord;
  }
  newWord = newWord.concat(word[word.length - 1]);
  console.log(newWord)
  newWord = newWord.concat(reverse3(word.substring(0, word.length -1)))
  return newWord;
}

// normal recursion
function reverse4(word){
  let newWord = '';
  if(word.length === 0) {
    return newWord;
  }
  newWord = newWord.concat(word[word.length - 1]);
  
  return newWord.concat(reverse4(word.substring(0, word.length -1)));
}

reverse3('awesome')

reverse2('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'