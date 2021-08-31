import { cssPro } from "../constants";
import { Student } from "../models";

const StudentInfo = (props: Student) => {
    return(
        <div>
            <div style={{fontSize: 20, color: "red"}}>{props.id}</div>
            <div style={cssPro}>{props.name}</div>
        </div>
    );
}

export default StudentInfo;