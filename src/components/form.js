import React from 'react';

export default function FriendForm(props){

    const {values,update,submit} = props;
    

    return(
        <form className="form container" onSubmit={submit}>
            <div className ="form-group inputs">
            <label htmlFor="name">Name</label> {/*name*/}
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    maxLength="30"
                    value={values.name}
                    onChange={update}
                    required
                ></input>
            <label htmlFor="email">Email</label> {/*email*/} 
                <input
                    name="email"
                    type="email"
                    placeholder="Insert Email"
                    value={values.email}
                    onChange={update}
                    required
                ></input>
            <label>Role</label> {/*role*/}
            <select name="role" value={values.role} onChange={update}>
                <option value="">-----select role-----</option>
                <option value="Front Engineer">Front-End Engineer</option>
                <option value="Backend Engineer">Back-End Engineer</option>
                <option value="Devops Engineer">DevOps Engineer</option>
            </select>

            <div className="submit">
                <button>Submit</button>
            </div>
           </div>
        </form>

    )
}