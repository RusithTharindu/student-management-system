import { useState, useEffect } from "react";
import axios from "axios";


const ViewStudent = () => {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        const getStudents = () => {
            axios.get("http://localhost:8070/student/").then((res) => {
                setStudents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
    }, []);

    return (
        <div className="container">
            <h1>Student List</h1>
            {students.length > 0 ? (
                <ul>
                    {students.map((student) => (
                        <li key={student.id}>
                            <h2>{student.name}</h2>
                            <p>Age: {student.age}</p>
                            <p>Grade: {student.gender}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No students found.</p>
            )}
        </div>
    );
};

export default ViewStudent;