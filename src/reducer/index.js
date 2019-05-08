import  { ADD_REMINDER, DELETE_REMINDER, CLEAR_ALL_REMINDERS }  from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const getReminderData = (action) => {
  const { text, dueDate } = action;

  return {
    text,
    dueDate,
    id: Math.random()
  }
}

const reminders = (state = read_cookie("reminders") || [], action = {}) => {
  let newReminders = null;

  switch(action.type) {
    case ADD_REMINDER:
      newReminders = [
        ...state,
        getReminderData(action)
      ];
      bake_cookie("reminders", newReminders);
      return newReminders
    case DELETE_REMINDER :
      newReminders = state.filter(reminder => reminder.id !== action.id);
      bake_cookie("reminders", newReminders);
      return newReminders;
    case CLEAR_ALL_REMINDERS:
      newReminders = [];
      bake_cookie("reminders", newReminders);
      return newReminders;
    default: return state;
  }
}

export default reminders;