function annagrams(word1, word2) {
    let first = {};
    let second = {};
  
    if(word1.length !== word2.length) {
      return false
    }
  
    for(let char of word1) {
      first[char] = (first[char] || 0) +1
    }
  
    for (let letter of word2) {
      second[letter] = (second[letter] || 0) + 1
    }
    console.log(first, second);
    for (obj in first) {
      if (!(first[obj] === second[obj])) {
        return false
      }
    }
    return true
  }
  
  function annagrams2(word1, word2) {
    let first = {};
  
    if(word1.length !== word2.length) {
      return false
    }
  
    for(let char of word1) {
      first[char] = (first[char] || 0) +1
    }
  
    for (let letter of word2) {
     if(!first[letter]) {
       return false;
     } else {
       first[letter] -= 1;
     }
  
    }
    return true
  }
  
  annagrams2('aaz', 'zaa')