import { EditTodo } from "../../redux/state/todo/todoSlice";
import store from "../../redux/store/store";
import Swal from "sweetalert2";


export const TodoEditAlart = (i,item) => {
    Swal.fire({
        title:"Update Task",
        input:"text",
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i,task:value}))
            }
        }
    })
};

