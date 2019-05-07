import  { ADD_REMINDER }  from '../constants';

const getReminderData = (action) => {
  const { text, dueDate } = action;

  return {
    text,
    dueDate,
    id: Math.random()
  }
}

const reminders = (state = [], action = {}) => {
  switch(action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        getReminderData(action)
      ]
    default: return state;
  }
}

export default reminders;