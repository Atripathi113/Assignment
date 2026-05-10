Approach

Read words from file and store in a Set for fast O(1) lookup
Sort words by length (longest first) so the first compound word found is the answer
For each word, recursively try every possible split into prefix + suffix
If prefix exists in Set and suffix can also be split into valid words, the word is compound
Use a Map to cache results and avoid solving the same suffix twice
Stop as soon as 2 compound words are found
Print results and time taken using Date.now()

Reference 


Used String metods

Set and map

Word Break problem 
