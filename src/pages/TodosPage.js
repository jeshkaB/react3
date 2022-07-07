import {Outlet} from 'react-router-dom'

import TodosComponent from "../components/TodosComponent";


function TodosPage(props) {
    return (
        <div>
            <Outlet/>
            <TodosComponent/>
        </div>
    );
}

export default TodosPage;