"use client"

import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, InputLabel, Select, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import porsche from "@/app/assets/porsche.webp"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildIcon from '@mui/icons-material/Build';
import axios from 'axios'

const QuickPricing = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    type brand = { brandName : string }
    type model = { modelName: string }
    type gen = { genName: string }

    const [brands, setBrands] = useState<brand[]>([])
    const [models, setModels] = useState<model[]>([])
    const [gens, setGens] = useState<gen[]>([])

    const [selectedBrand, setSelectedBrand] = useState<string>()
    const [selectedModel, setSelectedModel] = useState()
    const [selectedGen, setSelectedGen] = useState()

    useEffect(() => {
        if (selectedBrand !== null) {
            axios.get("http://localhost:8080/api/public/brands", {})
            .then((res) => {
                console.log(res)
                setBrands(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/api/public/models/" + selectedBrand, {})
            .then((res) => {
                console.log(res)
                setModels(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [selectedBrand])

    return (
        <>
            <div className='row my-5 py-5 justify-content-center'>
                <div className='col-10 col-md-8 col-lg-3 mt-3'>
                    <FormControl sx={{ width: '100%', bgcolor: '#353B61', color: '#fff' }}>
                        <InputLabel className='text-white'>Marka</InputLabel>
                        <Select native onChange={(e) => setSelectedBrand(e.target.value)}>
                            {
                                brands.map((brand) => {
                                    return (
                                        <option key={brand.brandName} value={brand.brandName || ""}>{brand.brandName}</option>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>

                <div className='col-10 col-md-8 col-lg-3 mt-3'>
                    <FormControl sx={{ width: '100%', bgcolor: '#353B61', color: '#fff' }}>
                        <InputLabel className='text-white'>Model</InputLabel>
                        <Select native disabled={selectedBrand === null ? true : false}>
                            {
                                models.map((model) => {
                                    return (
                                        <option key={model.modelName} value={model.modelName} onChange={() => setSelectedModel(model)}>{model.modelName}</option>
                                    )
                                })
                            }
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

                    <Image src={porsche} width={isSmallScreen ? 350 : 400} height={isSmallScreen ? 350 : 400} alt='Porsche' />
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

                    <Button variant='contained' className='my-3 py-2 mb-5'><BuildIcon className='me-2' />Zobacz więcej</Button>
                </div>
            </div>
        </>
    )
}

export default QuickPricing
