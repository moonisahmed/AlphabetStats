//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    //number of Chars Calculation
    var nChars = txt.length;
    
    //number of Words Calculation
    var nWords = txt.replace(/\n/g," ");
    nWords = nWords.replace(/\W/g," ");
    //noNewLinetxt.trim();
    nWords = nWords.split(' ');
    for (let i in nWords){
            if (nWords[i] === '')
                {
                    nWords.splice(i,1);
                }
        } 
    nWords = nWords.filter(Boolean);
    
    //number of Lines Calculation 
    var nLines = 0;
    if(nChars != 0){
            nLines = txt.split('\n');
    
        }
   
    //number of Non Empty Lines
    var nNonEmptyLines = txt.replace('\t',''); 
    nNonEmptyLines = nNonEmptyLines.split('\n');
    nNonEmptyLines = removeWhiteSpaceFromArray(nNonEmptyLines);
    
    //maximum Line Length
    var maxLineLength = maximumLineLength(nNonEmptyLines);
    
    //average Word Length
    var averageWordLength = avgWordLength(nWords);
    
    //palindromes length
    var palindromes = palindromefinder(nWords);
    
    //list of longest Words
    var longestWords = longestWordsList(nWords);
    
    //most Frequent Words
    var mostFrequentWords = mostFrequentWordsList(nWords);
    
    
    function mostFrequentWordsList(array){
        
    }

    function longestWordsList(array){
        let wordLength = [];
        let count = 0;
        let wordsList = [];
        let alreadyExist = false;
        let longestWord = 0;
        let longestWordIndex = 0;
        array.sort();
        
        for(let i in array)
            {
                array[i].toLowerCase();
                wordLength.push(array[i].length);
            }
        while(count < 10 && array.length > 0 )
            {
                alreadyExist = false;
                longestWordIndex = 0;
                longestWord = 0;
                for(let j = 0; j<wordLength.length;j++)
                {
                    if(wordLength[j]> longestWord)
                    {
                        longestWord = wordLength[j];
                        longestWordIndex = j;

                    }
                }

                for(let k = 0; k< wordsList.length; k++)
                {
                    if(wordsList[k] === array[longestWordIndex])
                    {
                        alreadyExist = true;
                    }
                }

                if(array[longestWordIndex] != null && !alreadyExist)
                {                        
                    wordsList.push(array[longestWordIndex]);
                    count++;
                }

                wordLength.splice(longestWordIndex,1);
                array.splice(longestWordIndex,1);
            }
            
        return wordsList;
    }
    
    function palindromefinder(array){
        let palindromelist = [];
        
        for (let i in array)
            {
                array[i] = array[i].toLowerCase();
                let mid = array[i].length/2;
                let left = [];
                let right= [];
                let palCause = true;
                
                if (array[i].length > 2 && array[i].length%2 !=0)
                { 
                    for( let j = 0; j < mid; j++)
                        {
                            left.push(array[i][j]);
                        }
                    
                    for(let k = array[i].length-1; k > mid;k--)
                        {
                            right.push(array[i][k]);
                        }
                    
                    
                    for(let m = 0; m < left.length-1; m++)
                    {
                        if(left[m] != right[m])
                            {
                                palCause = false;
                            }
                    }
                    if(palCause === true)
                    {
                        palindromelist.push(array[i]);
                    }
                }
                
                else if (array[i].length > 2 && array[i].length%2 ==0)
                {
                    for( let j = 0; j < mid; j++)
                        {
                            left.push(array[i][j]);
                        }
                    
                    for(let k = array[i].length-1; k >= mid;k--)
                        {
                            right.push(array[i][k]);
                        }
                    
                    for(let m = 0; m < left.length; m++)
                    {
                        if(left[m] != right[m])
                            {
                                palCause = false;
                            }
                    }
                    
                    if(palCause === true)
                    {
                        palindromelist.push(array[i]);
                    }
                }
                    
               

                
                }
            
        
        return palindromelist;
        
    }
    
    function avgWordLength(array){
        
        let wordLength = [];
        for(let i in array)
            {
                
                wordLength.push(array[i].length);
            }
        
        let sum = 0;
        for(let j in wordLength)
            {
                sum = sum + parseFloat(wordLength[j]);
            }
        return sum/wordLength.length;
    }
    
    function removeWhiteSpaceFromArray(array){
        var letters = /\S/g;
        for ( let i in array)
            {
                if (array[i].match(/[a-z]/i)){
                        continue;
                            }   
                array.splice(i,1);
            }
        return array;
    }
    
    function maximumLineLength(array){
        let count = 0;
        for ( let i in array)
            {
                if (array[i].length > count ) 
                    {
                        count = array[i].length;
                    }
                
            }
        return count;
    }
    
    return {
        nChars: nChars.length,
        nWords: nWords.length,
        nLines: nLines.length,
        nNonEmptyLines: nNonEmptyLines.length,
        averageWordLength: averageWordLength,
        maxLineLength: maxLineLength,
        palindromes: palindromes,
        longestWords: longestWords,
        mostFrequentWords: [ "hello(7)", "world(1)" ]
        
    };
}

