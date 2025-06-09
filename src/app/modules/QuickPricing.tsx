"use client"

import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, InputLabel, Select, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import porsche from "@/app/assets/porsche.webp"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildIcon from '@mui/icons-material/Build';

const QuickPricing = () => {
    return (
        <>
            <div className='row my-5 py-5 justify-content-center'>
                <div className='col-10 col-md-8 col-lg-3 mt-3'>
                    <FormControl sx={{ width: '100%', bgcolor: '#353B61', color: '#fff' }}>
                        <InputLabel className='text-white'>Marka</InputLabel>
                        <Select native>
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                        </Select>
                    </FormControl>
                </div>

                <div className='col-10 col-md-8 col-lg-3 mt-3'>
                    <FormControl sx={{ width: '100%', bgcolor: '#353B61', color: '#fff' }}>
                        <InputLabel className='text-white'>Model</InputLabel>
                        <Select native>
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                        </Select>
                    </FormControl>
                </div>

                <div className='col-10 col-md-8 col-lg-3 mt-3'>
                    <FormControl sx={{ width: '100%', bgcolor: '#353B61', color: '#fff' }}>
                        <InputLabel className='text-white'>Generacja</InputLabel>
                        <Select native>
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className='row my-1'>
                <div className='col-12 col-lg-6'>
                    <Typography variant='h2' color='text.primary' className='fst-italic' style={{ fontWeight: 400 }}>Cennik dla Porsche 911 GT3RS</Typography>

                    <Image src={porsche} width={400} height={400} alt='Porsche' />
                </div>

                <div className='col-12 col-lg-6'>
                    <Accordion sx={{ bgcolor: "#353B61" }} className='my-2'>
                        <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white' />}><Typography variant='h4' color='text.primary'>Wymiana</Typography></AccordionSummary>

                        <AccordionDetails>
                            <Typography variant='h5' color='text.primary'>
                                <ul>
                                    <li>Wymiana opony - 200zł</li>
                                    <li>Wymiana szyby przedniej - 700zł</li>
                                    <li>Wymiana klocków hamulcowych - 500zł</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ bgcolor: "#353B61" }} className='my-2'>
                        <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white' />}><Typography variant='h4' color='text.primary'>Lakierowanie</Typography></AccordionSummary>

                        <AccordionDetails>
                            <Typography variant='h5' color='text.primary'>
                                <ul>
                                    <li>Wymiana opony - 200zł</li>
                                    <li>Wymiana szyby przedniej - 700zł</li>
                                    <li>Wymiana klocków hamulcowych - 500zł</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ bgcolor: "#353B61" }} className='my-2'>
                        <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white' />}><Typography variant='h4' color='text.primary'>Usługi</Typography></AccordionSummary>

                        <AccordionDetails>
                            <Typography variant='h5' color='text.primary'>
                                <ul>
                                    <li>Wymiana opony - 200zł</li>
                                    <li>Wymiana szyby przedniej - 700zł</li>
                                    <li>Wymiana klocków hamulcowych - 500zł</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Button variant='contained' className='my-3 py-2'><BuildIcon className='me-2' />Zobacz więcej</Button>
                </div>
            </div>
        </>
    )
}

export default QuickPricing
