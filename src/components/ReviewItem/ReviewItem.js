import React from 'react';

const ReviewItem = (props) => {
   // console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle ={
        borderBottom:"1 px solid solid lightGray",
        marginBottom : '5px',
        paddingBottom:'5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle}>
            <h3  className="product-name"> Product Name: {name}</h3>
            <h4>Price: {price}</h4>
            <h4>Quantity: {quantity}</h4>
            <br/>
            <button
                 className="main-button"
                onClick={() =>props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;