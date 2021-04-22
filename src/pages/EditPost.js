import {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { TitleCreateEditPost, ErrorMsg, FormContainer, Form, InputTitle, InputBody, InputSubmit } from '../assets/styledComponents/styledCreateEditPost';

const EditPost = (props) => {
    const [title, setTitle] = useState(' ')
    const [body, setBody] = useState(' ')
    const [redirectSubmit, setRedirectSubmit] = useState(false);
    const [emptyInput, setEmptyInput] = useState(false);
    const [lengthTitleError, setLengthTitleError] = useState(false);
    const [lengthBodyError, setLengthBodyError] = useState(false);
    // const proxy = 'https://rocky-basin-57618.herokuapp.com';
    const url = `https://jsonplaceholder.typicode.com/posts`;
    const idPost = props.match.params.id;

    useEffect(() => {
        
        fetch(`${url}/${idPost}`, {
            method:'PUT',
            body: JSON.stringify({
                id: 1,
                title: title,
                body: body,
                userId: idPost,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        .then(data => data.json())
        .then(res => {
            console.log(res)
        })
        .catch(error => console.log(error));

    }, [body, idPost, title, url])

    const handleChangeTitle = (data) => {
        setTitle(data.target.value);
        console.log(title);
    }

    const handleChangeBody = (data) => {
        setBody(data.target.value);
        console.log(body);
    }

    const handleEditedPost = (data) => {
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

        return setRedirectSubmit(true)
    }

    return (
        <FormContainer>

            <Form method='post' onSubmit={handleEditedPost}>
                
                <TitleCreateEditPost>Edit this post!</TitleCreateEditPost>

                {emptyInput && <ErrorMsg>Inputs cannot be empty!</ErrorMsg>}
                {lengthTitleError && <ErrorMsg>Title must contain at least 3 characters!</ErrorMsg>}
                {lengthBodyError && <ErrorMsg>Title must contain at least 5 characters!</ErrorMsg>}

                <InputTitle type='text' placeholder='Title' onChange={handleChangeTitle}/>
                <InputBody placeholder='Body' onChange={handleChangeBody} />

                <InputSubmit type='submit' value='Edit' />

            </Form>

            {redirectSubmit && <Redirect to='/' />}

        </FormContainer>
    );
};

export default EditPost;