import { Link, Outlet } from "react-router-dom"


function Survey() {
    return(
        <div>
            <h1>Questionnaire</h1>
            <Link to="/survey/client">Questionnaire Client</Link>
            <Link to="/survey/freelance">Questionnaire freelance</Link>
            <Outlet />
        </div>
    )
}
//outlet indique où les composants enfants doivent être imbriqués
export default Survey