"use client";

import React, { FormEvent, MouseEventHandler, useEffect, useState } from 'react';
import "./form.css";
import Alert from './Alert';
import { resourceLimits } from 'worker_threads';

const Form = ({ onClose }: any) => {

    useEffect(() => {
        async function getLoader() {
            const { bouncy } = await import('ldrs');
            bouncy.register();
        }
        getLoader();
    }, [])

    const [showAlert, setShowAlert] = useState({
        show: false,
        msg: 'Some Error Occurred',
        type: 'default-alert',
    });
    
    const [successState, setSuccessState] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = (event: any) => {
        event.preventDefault();
        onClose();
    };

    const displayAlert = (msg: string, type: string) => {
        setShowAlert({
            show: true,
            msg: msg,
            type: type,
        });

        setTimeout(() => {
            setShowAlert({
                show: false,
                msg: "Some Error Ocurred",
                type: "default",
            })
        }, 5000)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        const formData: FormData = new FormData(event.target as HTMLFormElement);

        const content = {
            referred_by: formData.get("referrer"),
            referred_to: formData.get("referee"),
            referred_by_name: formData.get("name")
        }

        if(content.referred_by == content.referred_to){
            displayAlert("You cannot refer yourself!", "error");
            setIsLoading(false);
            return;
        }

        const serverURI: any = process.env.NEXT_PUBLIC_SERVER_URL + "/new-referral";

        try {
            const response = await fetch(serverURI, {
                method: "POST",
                body: JSON.stringify(content),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            let result = await response.json();

            if (!response) {
                displayAlert("Unable to fetch. Try again later.", "error");
                return;
            }

            if (!response.ok) {
                displayAlert("Some error occurred. Try again.", "error");
                return;
            }

            displayAlert("An email has been sent containing the referral code.", "success");
            setSuccessState(true);
        } catch (e) {
            displayAlert("Some error occurred. Try again", "error");
            console.log(e);
        }

        setIsLoading(false);
    };

    return (
        <div className='w-screen h-screen absolute bg-black-100 z-50 top-0 flex items-center justify-center p-4'>

            {showAlert.show ? <Alert message={showAlert.msg} type={showAlert.type} /> : null}

            <div className='bg-blue-100 p-3 rounded-xl'>
                <div className='w-full flex justify-end'>
                    <button onClick={handleClose} className='text-blue-500 text-3xl'>
                        <span className="material-symbols-outlined hover:bg-blue-300 rounded-full p-2">
                            close
                        </span>
                    </button>
                </div>
                {successState ?
                    <div>
                        <div className='px-12 pb-8'>
                            <h1 className='text-success font-medium text-3xl mb-2'>Success!</h1>
                            <p className='text-lg'>Congratulations! You now stand a chance to win upto Rs. 15,000.</p>
                            <p className='text-lg'>An email containing the referral code was sent to the referee.</p>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='px-12'>
                            <h1 className='text-blue-500 font-medium text-3xl'>Refer a friend</h1>
                            <p className='text-xl'>and get a chance to earn upto <span className='text-blue-500'>Rs. 15,000</span></p>

                            <form onSubmit={handleSubmit} className='my-8'>
                                <input type="text" name="name" id="" placeholder='Your Full Name' required autoComplete='off' />
                                <input type="email" name="referrer" id="" placeholder='Your Email ID' required autoComplete='off' />
                                <input type="email" name="referee" id="" placeholder="Referee's Email ID" required autoComplete='off' />
                                {isLoading ?
                                    <button type="submit" className='w-fit px-6 py-2 bg-blue-500 text-white rounded-md hover:cursor-wait' disabled ><l-bouncy size="20" color="white"></l-bouncy></button>
                                    : <button type="submit" className='w-fit px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 hover:cursor-pointer'>Refer Now</button>
                                }
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Form;