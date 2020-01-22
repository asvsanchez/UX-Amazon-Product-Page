import { connect } from "react-redux";
import Review from "../components/Review";
import IGlobalState from "../state/globalState";

const mapStateToProps = (state: IGlobalState) => {
  return { ratings_review: state.ratings_review };
};
export default connect(mapStateToProps)(Review);
