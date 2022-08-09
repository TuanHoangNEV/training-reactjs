import styled from "styled-components";

const BtnBox = styled.div
    `display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .5rem;`;

const ButtonBox = ({children}: any) => {
    return (
        <BtnBox className="buttonBox-calc">{children}</BtnBox>
    )
}

export default ButtonBox