import { useState } from "react";

const AddStudent = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const sendData = (e) => {
        e.preventDefault();
        const newStudent = {
            name,
            age,
            gender
        }
        console.log(newStudent);
    }

    return(
        <>
            <div className="w-full h-[90vh] flex flex-col justify-center items-center ">
                <div className="text-[22px] font-semibold">
                    Enter student details
                </div>
                <form action="" className="flex flex-col w-[45%]" onSubmit={sendData}>
                        <label htmlFor="name" className="font-medium">Name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            className=" rounded-md border h-[40px] pl-3 mb-4 " 
                            placeholder="Enter student's name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />

                        <label htmlFor="age" className="font-medium">Age:</label>
                        <input 
                            type="text" 
                            name="age" 
                            id="age" 
                            className=" rounded-md border h-[40px] pl-3 mb-4" 
                            placeholder="Enter student's age"
                            onChange={(e) => {
                                setAge(e.target.value);
                            }}
                        />

                        <label htmlFor="gender" className="font-medium">Gender:</label>
                        <input 
                            type="text" 
                            name="gender" 
                            id="gender" 
                            className=" rounded-md border h-[40px] pl-3 mb-4" 
                            placeholder="Enter student's gender" 
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                        />

                        <button type="submit" className="p-2 border bg-blue-600 text-white rounded-lg my-3 ">Submit</button>
                </form>
            </div>
        </>
    ) 
}

export default AddStudent;