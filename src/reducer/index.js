import  { ADD_REMINDER, DELETE_REMINDER, CLEAR_ALL_REMINDERS }  from '../constants';

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
      ];
    case DELETE_REMINDER :
      return state.filter(reminder => reminder.id !== action.id);
    case CLEAR_ALL_REMINDERS:
      return []
    default: return state;
  }
}

export default reminders;