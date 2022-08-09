import {useContext} from "react";
import {CalcContext} from '../context/CalcContext'
import styled from "styled-components";

const Btn = styled.button
    `background: #e9f0f4;
    height: 3.5rem;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #242424;
    border: none;
    font-size: 1.5rem;`;

const getStyleName = (btn: any) => {
    const className: any = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
    }
    return className[btn]
}

const Button = ({value}: any) => {
    const {calc, setCalc}: any = useContext(CalcContext);

    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        });
    }
    const resetClick = () => {
        setCalc({sign: '', num: 0, res: 0})
    }
    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        if (numberString === '0' && calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }
    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }
    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (a: any, b: any, sign: any) => {
                const result: any = {
                    '+': (a: any, b: any) => a + b,
                    '-': (a: any, b: any) => a - b,
                    'x': (a: any, b: any) => a * b,
                    '/': (a: any, b: any) => a / b,
                }
                return result[sign](a, b);
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }
    }
    const persenClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: ''
        })
    }
    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })
    }

    const handleBtnClick = () => {

        const results: any = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            'x': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalsClick,
            '%': persenClick,
            '+-': invertClick
        }
        if (results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }

    return (
        <Btn onClick={handleBtnClick} className={`${getStyleName(value)} button-calc`}>{value}</Btn>
    )
}

export default Button