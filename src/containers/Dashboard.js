import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeList } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeList: (index) => dispatch(removeList(index)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)