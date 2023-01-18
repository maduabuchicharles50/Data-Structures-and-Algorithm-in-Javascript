// function to count a number using recursion
function count(n) {
  if (n < 0) {
    return;
  } else {
    console.log(n);
    count(n - 1);
  }
}
count(10);
