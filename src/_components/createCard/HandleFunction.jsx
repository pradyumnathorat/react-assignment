import React, { useEffect } from 'react'
import { authActions } from '_store';
import { useDispatch } from 'react-redux';
import { history } from '_helpers';
const HandleFunction = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        function onSubmit(data) {
            return dispatch(authActions.createCard({ name: `${data.name}'s Card`, cardExpiration: data.expiry, cardHolder: data.name, cardNumber: data.number, category: 'MC' }));
        };
        onSubmit(props.formData);
        console.log(props.formData);
    }, [])


    return (
        <>
        </>
    );
}

export default HandleFunction