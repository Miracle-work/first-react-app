import React from 'react';
import Button from '../Button/Button';
import FormInput from './FormInput';
import classes from './Form.module.scss';
import { AiOutlineSearch } from "react-icons/ai";

const Form = () => {
    return (
        <form method='' action='' dir="rtl">
            <div className={`${classes.container}`}>
                <div className={`${classes.flex_container}`}>
                    <div className={`${classes.form_label}`}>
                        <label htmlFor='product' className=''>المنتج</label>
                    </div>
                    <div className={`${classes.form_input_first}`}>
                        <input type="text" id="product" className='form-control' />
                    </div>
                    <div className={`${classes.form_input_second}`}>
                        <input type="text" className='form-control' />
                    </div>
                    <button className={`${classes.form_search_icon}`}>
                        <AiOutlineSearch className={`${classes.icon}`}/>
                    </button>
                </div>
            </div>

            <div className={`${classes.container}`}>
                <div className={`${classes.flex_container}`}>
                    <div className={`${classes.form_label}`}>
                        <label htmlFor='quality_1' className=''>معايير الجودة 1</label>
                    </div>
                    {/* Form Inputs */}
                    <FormInput id="quality_1" firstInputName='quality_1_1' secondInputName='quality_1_2'/>
                </div>
                <div className={`${classes.flex_container}`}>
                    <div className={`${classes.form_label}`}>
                        <label htmlFor='quality_2'  className=''>معايير الجودة 2</label>
                    </div>
                    {/* Form Inputs */}
                    <FormInput id="quality_2" firstInputName='quality_2_1' secondInputName='quality_2_2'/>
                </div>
                <div className={`${classes.flex_container}`}>
                    <div className={`${classes.form_label}`}>
                        <label htmlFor='quality_3' className=''>معايير الجودة 3</label>
                    </div>
                    {/* Form Inputs */}
                    <FormInput id="quality_3" firstInputName='quality_3_1' secondInputName='quality_2_3'/>
                </div>
            </div>
            
            <Button/>
        </form>
    );
};

export default Form;