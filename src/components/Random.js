import React, { useState } from "react";

import "./style.css"

function Random() {
    const [dummy, setDummy] = useState([{
        userName: "",
        department: "",
        rating: "",
    }])
    const [details, setDetails] = useState([])
    const [head, setHead] = useState("Employee Feedback Form")
    const [hide,setHide] = useState(true)


    const userHandler = (user) => {
        setDummy({ ...dummy, [user.target.name]: [user.target.value] })
    }
    const submitHandler = (sbmt) => {
        sbmt.preventDefault()
        const newData = { ...dummy, id: new Date().getTime().toString }
        console.log(details);
        setDetails([...details, newData])
        setHead("Employee Feedback List")
        setHide(false)
    }
    // const[print,setPrint]=userState(false)
    const back= () => {
        setHide(true)
        setHead("Employee Feedback Form")

    }


    return (
      <>
            <h1 className="head" >{head}</h1>
      {hide ? 
        <form onSubmit={submitHandler}>
            <br />
            <label>Name:-</label>
            <input type="text" name="userName" placeholder="username" onChange={userHandler} value={dummy.userName} />
            <br />
            <br />
            <br />
            <br />
            <label>Department:-</label>
            <input type="text" name="department" placeholder="department" onChange={userHandler} value={dummy.department} />
            <br />
            <br />
            <br />
            <br />
            {/* <input type="number" name="rating" placeholder="rating" onChange={userHandler} value={rating} /> */}
            <label>Rating:-</label>
            <input type="number" className="select" name="rating" placeholder="rating" onChange={userHandler} value={dummy.rating} />

            
            <br />
            <br />
            <br />
            <br />
            <input type="submit" className="submit" />


        </form> :
        <div className="print_result">
            {
                details.map((e)=>{
                    return(
                        <>
                        <div className="print_result_child">
                            <p>Name:{e.userName}</p>
                            <p>Department:{e.department}</p>
                            <p>Rating:{e.rating}</p>

                        </div>
                        </>
                )
                })
            }


                 <button onClick={back} className="go_back">Go Back</button>
        </div> 

}

        </>

    );
}

export default Random