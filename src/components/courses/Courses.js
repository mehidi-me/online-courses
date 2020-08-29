import React from 'react';

const Courses = (props) => {

    const {image_url, title, description,price} = props.courses
    return (
        
            <div className="col mb-4">
                <div className="card h-100">
                <img src={image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <h6 className="card-title">${price}</h6>
                    <button className="btn btn-primary" onClick={()=>{props.addToCardEvent(props.courses)}}>Add to card</button>
                </div>
                </div>
            </div>

    );
};

export default Courses;