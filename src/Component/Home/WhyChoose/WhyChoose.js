import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
const WhyChoose = () => {
    return (
        <div className="w-100">
            <div className="riding-img">
                <div className="text-white video-text">  <h1>WHY CHOOSE FECT?</h1>
                    <p className="mt-2 h5">FECT's Bicycle Shop has been in business for 20 years in downtown Southampton</p></div>
                <div className="video-btn-box">
                    <div className="video-btn-box-inner" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <div className="video-btn">
                        </div>
                        <FontAwesomeIcon className="video-btn-icon" icon={faPlayCircle}></FontAwesomeIcon>
                    </div>
                </div>
            </div>

            {/* Modal start */}
            


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content modal-content-WhyChoose">
                        <div className="modal-header modal-header-WhyChoose">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                       
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}

                        <div className="modal-body m-auto">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}

                            <iframe style={{ width: '400px', height: '400px' }} src="https://www.youtube.com/embed/N-ZO2ILecoE" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal finish */}
            <br />
                <br />
                <br />
                <br />
        </div>
    )
}

export default WhyChoose
