export function getItem() {
    return (dispatch) => {
      return dispatch({
        type: "GET_ITEM"
      });
    };
  }
  
  export function addItem(data) {
    return (dispatch) => {
      return dispatch({
        type: "ADD_ITEM",
        payload: data
      });
    };
  }
  
  export function editItem(data) {
    return (dispatch) => {
      return dispatch({
        type: "EDIT_ITEM",
        payload: data
      });
    };
  }
  
  export function deleteItem(employeeId) {
    return (dispatch) => {
      return dispatch({
        type: "DELETE_ITEM",
        payload: employeeId
      });
    };
  }
  