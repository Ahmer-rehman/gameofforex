'use client'
import { toggleVideoClose } from '@/redux/features/videoSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React from 'react'
import { Modal } from 'react-bootstrap'

const VideoModal = () => {
    const dispatch = useAppDispatch()
    const showVideo = useAppSelector(state => state.video.isVideoOpen)
    const handleVideoClose = () => {
        dispatch(toggleVideoClose())
    }
    const embedUrl = "https://www.youtube.com/embed/p9dWGfvMJsI?si=Bt4dTqN9adK_XvHS";
  return (
    <Modal show={showVideo} onHide={handleVideoClose} size='lg' centered className="modal-video" id="LKQIY6EGFR9TU">
        <Modal.Header className='vidoe-modal-header' closeButton></Modal.Header>
        <Modal.Body className="modal-video-body">
            <div className="modal-video-inner" id="modal-video-inner-LKQIY6EGFR9TU" >
            <div className="modal-video-movie-wrap">
                <iframe 
                className='video-modal-iframe'
                src={embedUrl}        
                allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen      
                />
            </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default VideoModal