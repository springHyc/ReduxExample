import {connect} from 'react-redux';
import { userChange } from '../actions';
import HelloPanel from '../components/HelloPanel';

const mapStateToProps = (state) => {
  return {userName: state.hello.userName}
};

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => {
    dispatch(userChange(value));
  },
  onClick: () => {
    dispatch(userChange());
  }
});

const HelloApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloPanel)

export default HelloApp
