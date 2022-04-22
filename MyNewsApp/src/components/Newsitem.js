//We find sampleoutput.json data from news api url by hitting it in browser and write &q=cricket for cricket news and delete country
import React, { Component } from 'react'

export class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <div style={{display : "flex",justifyContent:'flex-end',position:'absolute',right:0}} >
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                    </div>
                    <img className="card-img-top" style={{ height: "13rem" }} src={!imageUrl ? "https://c.ndtvimg.com/2021-11/1j2jnu9g_kfc-dress_625x300_19_November_21.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675" : imageUrl} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...

                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read more</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Newsitem
