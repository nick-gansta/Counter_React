import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { ButtonCounter } from '../../Button/ButtonCounter';
import s from './Input.module.css'

type InputSetType = {
    onChagneValueInputMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChagneValueInputStart: (e: ChangeEvent<HTMLInputElement>) => void
    maxValueInput: number
    startValueInput: number
    reset: () => void
    disReset: boolean
}
export const InputSetting = (props: InputSetType) => {
    const className = props.maxValueInput <= -1 || props.maxValueInput === props.startValueInput ? s.errInput : s.input;

    return (
        <div className={s.inputBlock}>
            <div className={s.inputLeadBlock}>
                <span>MAX VALUE:<input
                    className={className}
                    type={'number'} onChange={props.onChagneValueInputMax} min={-1} value={props.maxValueInput}/></span>
                <br/>
                <span className={s.startTextInput}>START VALUE:<input
                    className={props.startValueInput <= -1 || props.startValueInput === props.maxValueInput ? s.errInput : s.input}
                    onChange={props.onChagneValueInputStart} type={'number'} min={-1}
                    value={props.startValueInput}/></span>
            </div>
            <ButtonCounter btnClass={s.btnInc} dis={props.disReset} nameBtn={'reset'} click={props.reset}/>
        </div>
    );
};
