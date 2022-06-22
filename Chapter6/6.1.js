function sumToWithCycle(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
alert(sumToWithCycle(100));

function sumToWithRecursion(n) {
  if (n == 1) return 1;
  return n + sumToWithRecursion(n - 1);
}
alert(sumToWithRecursion(100));

function sumTo(n) {
  return ((1 + n) * n) / 2;
}
alert(sumTo(100));
//------------------------------------------------------------------------------------------------------

function fib(n) {
  let a = 1;
  let b = 1;
  let c = 0;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

// //------------------------------------------------------------------------------------------------------

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }

  function printList(list) {  
    let listCopy = list;  
    while (listCopy) {
      alert(listCopy.value);
      listCopy = listCopy.next;
    }
  }
  
  printList(list);

  
function printListWithRecursion(list) {
    alert(list.value);
    if (list.next) {
        printListWithRecursion(list.next);
    }  
  }
  
  printListWithRecursion(list);

  //------------------------------------------------------------------------------------------------------

  function printListBack(list) {  
    let listCopy = list;  
    let mas = []
    while (listCopy) {
      mas.push(listCopy.value)
      listCopy = listCopy.next;
    }

    for(let i=mas.length-1; i>=0; i--){
    alert(mas[i])
    }
  }

  printListBack(list)


  function printListWithRecursionBack(list) {
    if (list.next) {
        printListWithRecursionBack(list.next);
    }  
    alert(list.value);
  }
  
  printListWithRecursionBack(list);