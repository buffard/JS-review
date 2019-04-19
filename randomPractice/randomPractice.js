//create an array with numbers 1-100 and then reverse the order of the numbers without .reverse
let list = []
  for(let i = 1; i<=100; i++) {
    
    list.push(i)
  }
  console.log(list)

let reverseList = []
  for(let i = list.length-1; i >=0; i--) {
    reverseList.push(list[i])

  }
  console.log(reverseList)