export const showList = (todos) =>
  `List of your task: \n\n${todos
    .map((todo) => (todo.isCompleted ? '✅' : '🔘') + ' ' + todo.name + '\n\n')
    .join('')}`;
