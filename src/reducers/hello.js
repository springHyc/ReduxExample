const hello = (state = {userName: '贺贺'}, action) => {
  switch (action.type) {
    case 'USER_CHANGE':
      return {
        userName: action.userName
      }
    default:
      return state
  }
}

export default hello

