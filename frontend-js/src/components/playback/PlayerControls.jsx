import React, {useEffect, useRef} from 'react';

const PlayerControls = (props) => {
    const imgRef = useRef();

    useEffect(() => {
    }, [props.lstImg]);

    let itemData = [];

    props.lstImg.forEach((item, i) => {
        itemData.push(
            <img key={i} src={item} className={'i-thumbnail'}/>
        )
    })

    return (
        <div className={'row col-12'} ref={imgRef}>
            {itemData}
        </div>
    );
}

export default PlayerControls;