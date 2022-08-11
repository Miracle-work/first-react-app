import React from 'react';
import classes from './Form.module.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
const FormInput = (props) => {
    
    return (
        <>
            <div className={`${classes.form_input_first}`}>
                <input type="text" id={props.id} firstInputName='{props.inputName}' className='form-control' />
            </div>
            <div className={`${classes.form_input_second}`}>
                <input type="text" secondInputName='{props.inputName}' className='form-control' />
            </div>
            <button className={`${classes.form_search_icon}`}>
                <AiOutlineSearch className={`${classes.icon}`}/>
            </button>
            <button className={`${classes.form_plus_icon}`}>
                <AiOutlinePlusCircle className={`${classes.icon}`}/>
            </button>
            <button className={`${classes.form_minus_icon}`}>
                <AiOutlineMinusCircle className={`${classes.icon}`}/>
            </button>
        </>
    );
};

export default FormInput;