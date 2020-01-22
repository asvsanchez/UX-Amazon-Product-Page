import { connect } from "react-redux";
import Wish from "../components/Wish";
import IGlobalState from "../state/globalState";

const mapStateToProps = (state: IGlobalState) => {
  return { wish: state.wish };
};
export default connect(mapStateToProps)(Wish);
