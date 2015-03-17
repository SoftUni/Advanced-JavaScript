function sum(numbers){
  var count = numbers.length,
      sum = 0,
      numbersString = numbers.join(" + ") + " = ",
      i;
  
  for(i = 0; i < count; i+=1){
    sum += numbers[i];
  }
  
  console.log( numbersString + sum);
}

sum([0, 1, 2, 3, 4, 5, 6, 7]);
sum([2, 3, 1, 2, 3, 4, 5, 6]);