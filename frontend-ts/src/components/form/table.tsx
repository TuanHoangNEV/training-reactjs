import * as React from "react";
import styled from "styled-components";

const TD = styled.td
    ``;
const TH = styled.th
    ``;
const TABLE = styled.table
    ``;

interface Props {
    colName: string[];
    colSize: string[];
    data: any;
}

export const TableCommon: React.FunctionComponent<Props> = (props) => {
    let itemCol: any = [];
    let itemHead: any = [];
    let itemData: any = [];
    props.colName.forEach((item, i) => {
        itemHead.push(
            <TH key={i}>{item}</TH>
        )
    })
    props.colSize.forEach((item, i) => {
        itemCol.push(
            <col key={i} style={{width: item}}/>
        )
    })
    props.data.forEach((item: any, i: number) => {
        let row: any = []
        Object.values(item).forEach((val: any, index) => {
            row.push(
                <TD key={index}>{val}</TD>
            )
        });
        itemData.push(
            <tr key={i}>
                {row}
            </tr>
        )
    })

    return (
        <div>
            <TABLE className={'table table-striped col col-12'}>
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
            </TABLE>
        </div>
    )
};

