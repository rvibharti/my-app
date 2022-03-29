import React from 'react'

function Cards(props) {
    const { url, title, images } = props;
    return (
        <div className="col-4">
            <div className="card" style={{ width: "15rem" }} >
                <img src={images} className="card-img-top" alt="ALT" />
                <div className="card-body">
                    <a href={url} >{title}</a>
                </div>
            </div>
        </div >
    )
}

export default Cards