import { connect } from "react-redux";
import Shipping from "../components/Shipping";
import IGlobalState from "../state/globalState";

const mapStateToProps = (state: IGlobalState) => {
  return { hour_before: state.hour_before, seller: state.seller };
};
export default connect(mapStateToProps)(Shipping);
