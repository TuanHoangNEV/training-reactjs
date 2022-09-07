import React from "react";

import '../styles/Table.css'

export const TableCommon = (props) => {
    const selectedRow = (index) => {
        props.onSelected(index)
    }

    let itemCol = [];
    let itemHead = [];
    let itemData = [];
    props.colName.forEach((item, i) => {
        itemHead.push(
            <th key={i}>{item}</th>
        )
    })
    props.colSize.forEach((item, i) => {
        itemCol.push(
            <col key={i} style={{width: item}}/>
        )
    })
    props.data.forEach((item, i) => {
        let row = []

        Object.values(item).forEach((val, index) => {
            const chkHiddenCol = index >= itemHead.length;
            row.push(
                <td key={index} className={chkHiddenCol ? 'd-none' : ''}>{val}</td>
            )
        });
        itemData.push(
            <tr key={i} onClick={() => selectedRow(i)} className={(i === props.selectedIndex) ? 'selected-row' : ''}>
                {row}
            </tr>
        )
    })

    return (
        <div>
            <table className={'table col col-12'}>
                <colgroup>
                    {itemCol}
                </colgroup>
                <thead>
                <tr>
                    {itemHead}
                </tr>
                </thead>
                <tbody>
                {itemData}
                </tbody>
            </table>
        </div>
    )
};

