import { connect } from "react-redux";
import AddList from "../components/AddList"
import { addList } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        addList: (list) => dispatch(addList(list)),

    }
}

export default connect(null, mapDispatchToProps)(AddList)