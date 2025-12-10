import styled from "styled-components";

export const HWCard = styled.div`
    max-width: 300px;

    border: 1px solid #00000044;
    border-radius: 4px;
    background-color: ${({ $active }) => !$active ? "#ffffff" : "#000000"};
    color: ${({ $active }) => !$active ? "#000000" : "#ffffff"};
    transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

    box-sizing: border-box;
    overflow: hidden;
`

export const HWCardImage = styled.img`
    width: 300px;
`

export const HWCardContent = styled.div`
    padding: 12px;
    box-sizing: border-box;
`
export const HWCardTitle = styled.h4`
    font-weight: 600;
    font-size: 22px;
    margin: 0;
`

export const HWCardSubtitle = styled.h5`
    font-weight: 500;
    font-size: 18px;
    color: ${({ $active }) => !$active ? "#00000088" : "#ffffff88"};
    margin: 0;
`

export const HWCardText = styled.p`
    font-size: 16px;
    margin: 16px 0 0 0;
`


export const HWButton = styled.button`
    padding: 10px 12px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: ${({ $active }) => !$active ? "#0d6efd" : "#ffffff"};
    transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;

    font-size: 16px;
    color: ${({ $active }) => !$active ? "#ffffff" : "#000000"};
    margin: 16px 0 0 0;

    &:hover {
        background-color: ${({ $active }) => !$active ? "#0b5ed7" : "#d6d6d6"};
    }
`