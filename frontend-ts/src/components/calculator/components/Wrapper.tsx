import styled from "styled-components";

const Wrp = styled.div
    `background: #f6f8f9;
    width: 20rem;
    padding: 2rem;
    margin-top: 4rem;
    border-radius: 1rem;
    box-shadow: 0 9px 15px -3px rgba(0,0,0,0.1);`;

const Wrapper = ({children}: any) => {
    return (
        <Wrp className="wrapper-calc">{children}</Wrp>
    )
}

export default Wrapper