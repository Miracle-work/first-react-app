import React from 'react';
import classes from './Form.module.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
const FormInput = (props) => {
    return (
        <>
            {/* <div className='col-md-3'>
                <input type="text" id="product" className='form-control' />
            </div>
            <div className='col-md-4'>
                <input type="text" className='form-control' />
            </div>
            <div className='col-md-1'>
                <button type="submit" className='form-control btn btn-light'>s</button>
            </div>
            <div className='col-md-1'>
                <button type="submit" className='form-control btn btn-success'>s</button>
            </div>
            <div className='col-md-1'>
                <button type="submit" className='form-control btn btn-danger'>s</button>
            </div> */}

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