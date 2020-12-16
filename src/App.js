import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Friend from '../src/components/friend'
import FriendForm from './components/form'

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

export default function App() {
const [friends,setFriends] = useState([
  {
    id:1,
    name: 'Hussain Ali',
    email: 'ali.415code@gmail.com',
    role: 'Full-Stack Engineer',
  },
])

const [formValues,setFormValues] = useState(initialFormValues)
  
const updateForm = (event) => {
  setFormValues({...formValues,
    [event.target.name]: event.target.value,
   });
  };

const submitForm = (event) => {
  event.preventDefault();
  setFriends([...friends,formValues])
  setFormValues({name:'',email:''})

  }

return (
    <div className="container">
      <h1>Friend List</h1>
      <FriendForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
       />

      {friends.map((friend) =>{
        return <Friend key={friend.id} details={friend}/>
      })}
    </div>    
  );
}

