// 添加代办事件
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

// 更新代办事件
export const updateTodo = (id) => {
  return {
    type: 'UPDATE_TODO',
    id,
  }
}

// 显示所有代办事件
export const showAll = () => {
  return {
    type: 'SHOW_ALL',
  }
}

// 显示已完成代办事件
export const showCompleted = () => {
  return {
    type: 'SHOW_COMPLETED',
  }
}
// 显示未完成代办事件
export const showUncompleted = () => {
  return {
    type: "SHOW_UNCOMPLETED"
  }
}