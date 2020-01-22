import {connect} from 'react-redux';
import Options from '../components/Options';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({option_element: state.option_element})
}
export default connect(mapStateToProps)(Options);