import {connect} from 'react-redux';
import Title from '../components/Title';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({title: state.title})
}
export default connect(mapStateToProps)(Title);