import React from 'react';
import { useForm } from 'react-hook-form';
import '../Customer/Customer.css';

const Customer = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <div className="container">
                <form className='form' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Please Fill up</h1>
                    <div className="inputs text-start" >
                        <div className='label'>
                            <label  htmlFor="">Name</label>
                            <input type={'text'}  {...register("name")} placeholder="Enter customer name please" />
                        </div>
                        <div className="label">
                            <label htmlFor="">Phone</label>
                            <input type={'text'}  {...register("number")} placeholder="Type your Phone no here" />
                        </div>
                        <div className="label">
                            <label htmlFor="">Email</label>
                            <input type={'email'} {...register("email", { required: true })} placeholder="Enter a valid mail address" />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="label">
                            <label htmlFor="">Address</label>
                            <input className='address' type={'text'}  {...register("address")} placeholder="Enter delivery address here" />
                        </div>
                    </div>

                    <input className='button' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Customer;