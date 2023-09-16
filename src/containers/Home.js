import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps)(Home)
