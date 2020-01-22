import { connect } from "react-redux";
import Images from "../components/Images";
import IGlobalState from "../state/globalState";

const mapStateToProps = (state: IGlobalState) => {
  return { images_link: state.images_link };
};
export default connect(mapStateToProps)(Images);
