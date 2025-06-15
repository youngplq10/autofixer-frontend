"use client"

import { Accordion, AccordionDetails, AccordionSummary, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, useMediaQuery, useTheme } from '@mui/material'
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
    type element = { name: string, price: number }
    type category = { title: string, elements: element[] }

    const [brands, setBrands] = useState<brand[]>([])
    const [models, setModels] = useState<model[]>([])
    const [gens, setGens] = useState<gen[]>([])
    const [categories, setCategories] = useState<category[]>([])

    const [selectedBrand, setSelectedBrand] = useState<string>()
    const [selectedModel, setSelectedModel] = useState<string>()
    const [selectedGen, setSelectedGen] = useState<string>()

    useEffect(() => {
        if (selectedBrand !== null) {
            axios.get(process.env.NEXT_PUBLIC_API + "/public/brands", {})
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
        axios.get(process.env.NEXT_PUBLIC_API + "/public/models/" + selectedBrand, {})
            .then((res) => {
                console.log(res)
                setModels(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [selectedBrand])

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API + "/public/gens/" + selectedModel, {})
            .then((res) => {
                console.log(res)
                setGens(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [selectedModel])

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_API + "/public/category/" + selectedGen, {})
            .then((res) => {
                console.log(res.data.data)
                setCategories(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [selectedGen])

    if (brands === null) return <p>loading</p>

    console.log("A")

    return (
        <>
            <div className='row my-5 py-5 justify-content-center'>
                <div className='col-10 col-md-8 col-lg-3 mt-3'>
                    <FormControl sx={{ width: '100%', bgcolor: '#353B61', color: '#fff' }}>
                        <InputLabel className='text-white'>Marka</InputLabel>
                        <Select
                            onChange={(event : SelectChangeEvent) => {
                                const value = event.target.value as string;
                                setSelectedBrand(value);
                                setGens([])
                                setSelectedModel(undefined)
                                setSelectedGen(undefined)
                            }}
                            >
                            {brands.map((brand) => (
                                <MenuItem key={brand.brandName} value={brand.brandName}>{brand.brandName} </MenuItem>
                            ))}
                        </Select>

                    </FormControl>
                </div>

                <div className='col-10 col-md-8 col-lg-3 mt-3'>
                    <FormControl sx={{ width: '100%', bgcolor: '#353B61', color: '#fff' }}>
                        <InputLabel className='text-white'>Model</InputLabel>
                        <Select 
                            disabled={selectedBrand === null ? true : false}
                            onChange={(event : SelectChangeEvent) => {
                                const value = event.target.value as string;
                                setSelectedModel(value);
                                setGens([])
                            }}
                        >    
                            {
                                models.map((model) => {
                                    return (
                                        <MenuItem key={model.modelName} value={model.modelName} onChange={() => setSelectedModel(model.modelName)}>{model.modelName}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>

                <div className='col-10 col-md-8 col-lg-3 mt-3'>
                    <FormControl sx={{ width: '100%', bgcolor: '#353B61', color: '#fff' }}>
                        <InputLabel className='text-white'>Generacja</InputLabel>
                        <Select 
                            disabled={selectedModel === null ? true : false}
                            onChange={(event) => {
                                const value = event.target.value as string;
                                setSelectedGen(value);
                            }}
                        >
                            {
                                gens.map((gen) => {
                                    return (
                                        <MenuItem key={gen.genName} value={gen.genName} onChange={() => setSelectedGen(gen.genName)}>{gen.genName}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                </div>
            </div>

            <div className='row my-1'>
                {
                    selectedGen === undefined ? (
                        <>
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
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='col-12 col-lg-6'>
                                <Typography variant='h2' color='text.primary' className='fst-italic' style={{ fontWeight: 400 }}>Cennik dla {selectedBrand} {selectedModel} {selectedGen}</Typography>

                                <Image src={porsche} width={isSmallScreen ? 350 : 400} height={isSmallScreen ? 350 : 400} alt='Porsche' />
                            </div>

                            <div className='col-12 col-lg-6'>                               
                                {
                                    categories.map((category) => {
                                        return (
                                            <Accordion sx={{ bgcolor: "#353B61" }} className='my-2'>
                                                <AccordionSummary expandIcon={<ExpandMoreIcon className='text-white' />}><Typography variant='h4' color='text.primary'>{category.title}</Typography></AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography variant='h5' color='text.primary'>
                                                        <ul>
                                                            {
                                                                category.elements.map((element) => {
                                                                    return (
                                                                        <li>{element.name} - {element.price}zł</li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                }                
            </div>
        </>
    )
}

export default QuickPricing
