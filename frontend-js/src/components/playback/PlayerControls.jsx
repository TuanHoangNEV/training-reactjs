import React from 'react';

const PlayerControls = (props) => {
    let itemData = [];

    props.lstImg.forEach((item, i) => {
        itemData.push(
            <img key={i} src={item} className={'i-thumbnail'}/>
        )
    })

    return (
        <div className={'row col-12'}>
            {itemData}

        </div>
    );
}

export default PlayerControls;