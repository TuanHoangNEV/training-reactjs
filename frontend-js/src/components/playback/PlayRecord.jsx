import React, {useRef, useEffect} from 'react';

const PlayRecord = (props) => {
    const videoRef = useRef();

    useEffect(() => {
        videoRef.current?.load();
    }, [props.url]);

    return (
        <video ref={videoRef} className={'m-auto w-100'} controls autoPlay={true}>
            <source src={props.url} type={props.type}/>
        </video>
    );
}

export default PlayRecord;