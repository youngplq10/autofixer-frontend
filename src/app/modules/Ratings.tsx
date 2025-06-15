import { Stack, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import p1 from "@/app/assets/p1.png"
import p2 from "@/app/assets/p2.png"

const Ratings = () => {
    return (
        <>
            <div className='row mt-5 py-5'>
                <div className='col-3'>
                    <Typography variant='h1' color="text.primary" className='mt-5' style={{ fontWeight: 600 }}>OPINIE KLIENTÓW</Typography>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-md-5 border rounded-3 bg-dark text-white p-4 me-5 my-2'>
                        <Stack direction="row" gap={1}>
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </Stack>

                        <Typography variant='body1' color='text.primary' className='my-3'>AutoFixer to prawdziwe wybawienie! Zepsuł mi się samochód w środku miasta, a oni przyjechali w ciągu pół godziny i naprawili problem na miejscu. Profesjonalizm i szybkość na najwyższym poziomie. Zdecydowanie polecam!</Typography>
                
                        <Stack direction="row" gap={2}>
                            <Image src={p1} alt='Person 1' width={40} height={40} className='rounded-5'/>
                            <Typography variant='body1' color='text.primary' className='mt-2'>John Snow</Typography>
                        </Stack>
                </div>

                <div className='col-12 col-md-5 border rounded-3 bg-dark text-white p-4 me-5 my-2'>
                        <Stack direction="row" gap={1}>
                            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        </Stack>

                        <Typography variant='body1' color='text.primary' className='my-3'>Świetna obsługa i ogromna wygoda. Nie musiałem nigdzie jechać, a mechanik zadbał o mój samochód prosto pod moim domem. Ceny uczciwe, a jakość usług naprawdę solidna. AutoFixer to mój numer jeden w Elblągu!</Typography>
                
                        <Stack direction="row" gap={2}>
                            <Image src={p2} alt='Person 1' width={40} height={40} className='rounded-5'/>
                            <Typography variant='body1' color='text.primary' className='mt-2'>Snow John</Typography>
                        </Stack>
                </div>
            </div>
        </>
    )
}

export default Ratings
