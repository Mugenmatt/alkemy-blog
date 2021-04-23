import {useState, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../assets/utils/UserContext';
import { TitleCreateEditPost, ErrorMsg, FormContainer, Form, InputTitle, InputSubmit } from '../assets/styledComponents/styledCreateEditPost';

const EditUser = (props) => {
    const idUser = props.match.params.id;

    const url = 'https://reqres.in/api/users';

    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [email, setEmail] = useState('')
    const [redirectSubmit, setRedirectSubmit] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);
    const [lengthFirstNamesError, setlengthFirstNamesError] = useState(false);
    const [lengthLastNameError, setLengthLastNameError] = useState(false);
    const [lengthEmailError, setLengthEmailError] = useState(false);

    const {users, setUsers} = useContext(UserContext);

    const handleChangeFirstName = (data) => {
        setFirstName(data.target.value);
    }

    const handleChangeLastName = (data) => {
        setLastName(data.target.value);
    }
    
    const handleChangeEmail = (data) => {
        setEmail(data.target.value)
    }

    const handleEditedPost = (data) => {
        data.preventDefault()
        if(lastName === ' ' || firstName === ' ' || email === ' ') {
            setEmptyInput(true)
            setTimeout(() => {
                setEmptyInput(false)
            }, 3000)
            return
        }
        else if(firstName.length < 3 || lastName.length < 3 ) {
            setlengthFirstNamesError(true)
            setLengthLastNameError(true)
            setTimeout(() => {
                setlengthFirstNamesError(false)
                setLengthLastNameError(false)
            }, 3000)
            return
        }
        else if(email.length < 10) {
            setLengthEmailError(true)
            setTimeout(() => {
                setLengthEmailError(false)
            }, 3000)
            return
        } else {
            const newData = {
                id: Number(idUser),
                email: email,
                first_name: firstName,
                last_name: lastName,
            }

            fetch(`${url}/${idUser}`, {
                method:'PATCH',
                body: JSON.stringify(newData),
                  headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
            })
            .then(data => data.json())
            .then(userToEdit => {
                // console.log(userToEdit);
                
                let userDataChange = users.map(user => {
                    if(user.id === userToEdit.id) {
                        return userToEdit;
                    }
                    return user;
                })
    
                setUsers(userDataChange)

                return setRedirectSubmit(true)
            })
            .catch(error => console.log(error));
            
        }

    }

    const idFixed = Number(idUser);
    const userToEdit = users.find(user => {
        return user.id === idFixed;
    })

    return (
        <FormContainer>
            <Form onSubmit={handleEditedPost}>
                
                <TitleCreateEditPost>Edit this user!</TitleCreateEditPost>

                {emptyInput && <ErrorMsg>Inputs cannot be empty!</ErrorMsg>}
                {lengthFirstNamesError && <ErrorMsg>First name must contain at least 3 characters!</ErrorMsg>}
                {lengthLastNameError && <ErrorMsg>Last name contain at least 5 characters!</ErrorMsg>}
                {lengthEmailError && <ErrorMsg>Email must contain at least 5 characters!</ErrorMsg>}

                <InputTitle type='text' placeholder={userToEdit.first_name} onChange={handleChangeFirstName}/>

                <InputTitle type='text' placeholder={userToEdit.last_name} onChange={handleChangeLastName}/>

                <InputTitle type='email' placeholder={userToEdit.email} onChange={handleChangeEmail}/>

                <InputSubmit type='submit' value='Edit' pointerEvent={
                    emptyInput || 
                    lengthFirstNamesError || 
                    lengthLastNameError || 
                    lengthEmailError ? 'none' : 'auto'
                } />

            </Form>

            {redirectSubmit && <Redirect to='/' />}

        </FormContainer>
    );
};

export default EditUser;