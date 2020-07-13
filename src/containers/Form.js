import {connect} from 'react-redux';
import Form from '../components/Form'

const mapStateToProps = (state) => {
    return {
        questionT: state.questionT
    }
}
export default connect(mapStateToProps)(Form) 

