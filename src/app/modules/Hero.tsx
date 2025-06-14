"use client"

import { Button, Chip, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LocationPinIcon from '@mui/icons-material/LocationPin';
import CallIcon from '@mui/icons-material/Call';
import BuildIcon from '@mui/icons-material/Build';
import Image from 'next/image';
import audi from "@/app/assets/audi2.png";
import audibroken from "@/app/assets/audi2broken.png";
import { clearTimeout, setInterval } from 'timers';

const Hero = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [broken, setBroken] = useState(true);

    useEffect(() => {
        const timeout = setInterval(() => {
            setBroken(!broken);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [broken])
    
    return (
        <>
            <div className='col-12 col-xl-6 mt-5-on-xl'>
                <Chip variant='filled' icon={<LocationPinIcon className='text-white' />} label="Elbląg i okolice" style={{ backgroundColor: "#3B588F" }} className='p-3' />
                <Typography variant='h1' color="text.primary" className='fst-italic mt-4' style={{ fontWeight: 400 }}>Mobilny serwis samochodowy</Typography>
                <Typography variant='h4' color='text.primary' style={{ fontWeight: 300 }} className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                <Stack direction="row" className='mt-4' gap={2}>
                    <Button variant='outlined' className='py-2'><CallIcon className='me-2' />Zadzwoń do nas</Button>
                    <Button variant='contained' className='py-2'><BuildIcon className='me-2' />Sprawdź usługi</Button>
                </Stack>
            </div>

            <div className='col-12 col-xl-6 mt-5 d-flex justify-content-end align-items-end min-height-50-on-xl'>
                <Image src={broken ? audibroken : audi} key={broken ? 'broken' : 'normal'} alt='Audi' width={isSmallScreen ? 300 : 500} height={isSmallScreen ? 160 : 260} className='mt-5 me-5 glitch' />
            </div>
        </>
    )
}

export default Hero
