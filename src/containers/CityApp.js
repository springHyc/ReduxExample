import { connect } from "react-redux";
import { cityChange } from "../actions";
import CityPanel from "../components/CityPanel";

const mapStateToProps = state => {
  return { city: state.city.city };
};

const mapDispatchToProps = dispatch => ({
  onChange: city => {
    dispatch(cityChange(city));
  },
  onClick: () => {
    dispatch(cityChange());
  }
});

const CityApp = connect(mapStateToProps, mapDispatchToProps)(CityPanel);

export default CityApp;
