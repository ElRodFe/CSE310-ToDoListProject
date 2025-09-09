//Count the total of todos
function countTodos(arr, index = 0) {
  if (index >= arr.length) return 0;
  return 1 + countTodos(arr, index + 1);
}

module.exports = countTodos;