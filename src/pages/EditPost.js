import React from 'react';
import { Link } from 'react-router-dom';
import { TitleCreateEditPost, FormContainer, Form, InputTitle, InputBody, InputSubmit } from '../assets/styledComponents/styledCreateEditPost';
import { GoBack } from '../assets/styledComponents/styledDetail';

const EditPost = () => {

    return (
        <FormContainer>

            <Form method='post'>
                
                <TitleCreateEditPost>Edit this post!</TitleCreateEditPost>

                <InputTitle type='text' placeholder='Title' />
                <InputBody placeholder='Body' />

                <InputSubmit type='submit' value='Edit' />

            </Form>
            
            <Link to='/' style={{textDecoration:'none', color:'#000'}}>
                <GoBack type='button' value='Back' />
            </Link>

        </FormContainer>
    );
};

export default EditPost;