import {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TitleCreateEditPost, ErrorMsg, FormContainer, Form, InputTitle, InputBody, InputSubmit } from '../assets/styledComponents/styledCreateEditPost';

const CreatePost = (props) => {
    // const proxy = 'https://rocky-basin-57618.herokuapp.com';
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const { posts, setPosts }  = props;
    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')
    const [ redirectSubmit, setRedirectSubmit ] = useState(false);
    const [ emptyInput, setEmptyInput ] = useState(false);
    const [ lengthTitleError, setLengthTitleError ] = useState(false);
    const [ lengthBodyError, setLengthBodyError ] = useState(false);

    const handleChangeTitle = (data) => {
        setTitle(data.target.value);
        console.log(title);
    }

    const handleChangeBody = (data) => {
        setBody(data.target.value);
        console.log(body);
    }

    const handleNewPost = (data) => {
        data.preventDefault()
        if(body === '' || title === '') {
            setEmptyInput(true)
            setTimeout(() => {
                setEmptyInput(false)
            }, 3000)
            return
        }
        if(title.length < 3) {
            setLengthTitleError(true)
            setTimeout(() => {
                setLengthTitleError(false)
            }, 3000)
            return
        }
        if(body.length < 5) {
            setLengthBodyError(true)
            setTimeout(() => {
                setLengthBodyError(false)
            }, 3000)
            return
        }

        let lastId = posts.pop();
        lastId = lastId.id;
        let lastIdPlusOne = lastId + 1;
        const newPost = {
            title: title,
            body: body,
            userId: lastIdPlusOne
        }

        fetch(`${url}`, { 
            method:'POST',
            mode: 'cors',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json',
            }
        })
        .then(data => data.json())
        .then(res => {
            console.log(res);
            setPosts([...posts, res])
        })
        .catch(error => console.log('Error: ', error))

        return setRedirectSubmit(true)
    }

    return (
        <FormContainer>

            <Form onSubmit={handleNewPost}>
                
                <TitleCreateEditPost> Your post!</TitleCreateEditPost>

                {emptyInput && <ErrorMsg>Inputs cannot be empty!</ErrorMsg>}
                {lengthTitleError && <ErrorMsg>Title must contain at least 3 characters!</ErrorMsg>}
                {lengthBodyError && <ErrorMsg>Body must contain at least 5 characters!</ErrorMsg>}

                <InputTitle type='text' placeholder='Title' onChange={handleChangeTitle} />
                <InputBody placeholder='Body' onChange={handleChangeBody} />

                <InputSubmit type='submit' value='Create' />

            </Form>

            {redirectSubmit && <Redirect to='/' />}

        </FormContainer>
    );
};

export default CreatePost;