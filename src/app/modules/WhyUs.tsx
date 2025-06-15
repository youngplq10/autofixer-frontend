import { Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import service1 from "@/app/assets/service1.jpg"
import service2 from "@/app/assets/service2.jpg"
import service3 from "@/app/assets/service3.jpg"

const WhyUs = () => {
    return (
        <>
            <div className='row'>
                <div className='col-12 text-center mt-5'>
                    <Typography variant='h3' color='text.primary' style={{ fontWeight: 400 }} className='fst-italic mt-5 pt-5'>Dlaczego jesteśmy najlepsi na rynku?</Typography>
                </div>
            </div>

            <div className='row g-4 justify-content-center align-items-center d-flex'>

                <div className="col-12 col-md-10 col-lg-4 my-4">
                    <div className="border rounded-5 text-center">
                        <Image src={service1} width={1000} height={1000} alt='Project image' style={{ width: '100%', height: 'auto'}} className='rounded-5' />
                        <Typography variant='h4' color='text.primary' className='fw-bolder p-4'>Fachowa obsługa 🔧</Typography>
                        <Typography variant='h5' color='text.primary' className='px-4 pt-2 pb-5'>
                            Nasi mechanicy to doświadczeni specjaliści – szybko diagnozują i naprawiają usterki.
                        </Typography>
                    </div>
                </div>

                <div className="col-12 col-md-10 col-lg-4 my-4">
                    <div className="border rounded-5 text-center">
                        <Image src={service2} width={1000} height={1000} alt='Project image' style={{ width: '100%', height: 'auto' }} className='rounded-5' />
                        <Typography variant='h4' color='text.primary' className='fw-bolder p-4'>Szybki dojazd 🕒</Typography>
                        <Typography variant='h5' color='text.primary' className='px-5 pt-2 pb-5'>
                            Dojeżdżamy na miejsce już w 30 minut – bez czekania i stresu.
                        </Typography>
                    </div>
                </div>

                <div className="col-12 col-md-10 col-lg-4 my-4">
                    <div className="border rounded-5 text-center">
                        <Image src={service3} width={1000} height={1000} alt='Project image' style={{ width: '100%', height: 'auto' }} className='rounded-5' />
                        <Typography variant='h4' color='text.primary' className='fw-bolder p-4'>Przejrzyste ceny 💰</Typography>
                        <Typography variant='h5' color='text.primary' className='px-5 pt-2 pb-5'>
                            Nie zaskoczymy Cię rachunkiem – zawsze wiesz, za co płacisz. 
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs
