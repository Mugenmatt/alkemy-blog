import {useState, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../assets/utils/UserContext';
import { TitleCreateEditPost, ErrorMsg, FormContainer, Form, InputTitle, InputSubmit } from '../assets/styledComponents/styledCreateEditPost';

const CreateUser = (props) => {
    const url = 'https://reqres.in/api/users';
    const [firstName, setFirstName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [email, setEmail] = useState('')
    const [ redirectSubmit, setRedirectSubmit ] = useState(false);
    const [ emptyInput, setEmptyInput ] = useState(false);
    const [lengthFirstNamesError, setlengthFirstNamesError] = useState(false);
    const [lengthLastNameError, setLengthLastNameError] = useState(false);
    const [lengthEmailError, setLengthEmailError] = useState(false);

    const {users, setUsers, completeData} = useContext(UserContext);

    const handleChangeFirstName = (data) => {
        setFirstName(data.target.value);
    }

    const handleChangeLastName = (data) => {
        setLastName(data.target.value);
    }
    
    const handleChangeEmail = (data) => {
        setEmail(data.target.value)
    }

    const handleNewUser = (data) => {
        data.preventDefault()
        if(lastName === ' ' || firstName === ' ' || email === ' ') {
            setEmptyInput(true)
            setTimeout(() => {
                setEmptyInput(false)
            }, 3000)
            return
        }
        if(firstName.length < 3 || lastName.length < 3 ) {
            setlengthFirstNamesError(true)
            setLengthLastNameError(true)
            setTimeout(() => {
                setlengthFirstNamesError(false)
                setLengthLastNameError(false)
            }, 3000)
            return
        }
        if(email.length < 10) {
            setLengthEmailError(true)
            setTimeout(() => {
                setLengthEmailError(false)
            }, 3000)
            return
        }

        let number = 1;
        function lastId() {

            if(number === 1) {
                number = number + 1;
                return number;
            }
            return 1;
        }
        
        completeData.total = lastId
        completeData.per_page += 1;

        let newUser = {
            id: lastId(),
            first_name: firstName,
            last_name: lastName,
            email: email,
            avatar: ' ',
        }

        fetch(`${url}`, { 
            method:'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json',
            }
        })
        .then(data => data.json())
        .then(res => {
            const newUser = [...users, res]
            console.log(newUser);
            setUsers(newUser)
        })
        .catch(error => console.log('Error: ', error))

        return setRedirectSubmit(true)
    }

    return (
        <FormContainer>

            <Form onSubmit={handleNewUser}>
                
                <TitleCreateEditPost> Create a user!</TitleCreateEditPost>

                {emptyInput && <ErrorMsg>Inputs cannot be empty!</ErrorMsg>}
                {lengthFirstNamesError && <ErrorMsg>First name must contain at least 3 characters!</ErrorMsg>}
                {lengthLastNameError && <ErrorMsg>Last name contain at least 5 characters!</ErrorMsg>}
                {lengthEmailError && <ErrorMsg>Email must contain at least 5 characters!</ErrorMsg>}

                <InputTitle type='text' placeholder='First Name' onChange={handleChangeFirstName} />
                <InputTitle placeholder='Last Name' onChange={handleChangeLastName} />
                <InputTitle placeholder='Email' onChange={handleChangeEmail} />

                <InputSubmit type='submit' value='Create' />

            </Form>

            {redirectSubmit && <Redirect to='/' />}

        </FormContainer>
    );
};

export default CreateUser;