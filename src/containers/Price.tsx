import {connect} from 'react-redux';
import Price from '../components/Price';
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({name_style: state.name_style,
        price: state.price})
}
export default connect(mapStateToProps)(Price);