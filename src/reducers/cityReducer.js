const cityReducer = (state = {city: '北京'}, action) => {
  switch (action.type) {
    case 'CITY_CHANGE':
      return {
        city: action.city
      }
    default:
      return state
  }
}

export default cityReducer

