export const addList = (list) => {
    return {
        type: "ADD_LIST",
        value: list
    }
  }


  export const removeList = (index) => {
    return {
        type: "REMOVE_List",
        value: index
    }
  }