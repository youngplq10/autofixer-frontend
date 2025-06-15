"use client"

import { Dialog, DialogContent, IconButton, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Image from 'next/image'
import logo from "@/app/assets/logo.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [contactOpen, setContactOpen] = useState(false);
    
    return (
        <>
            <nav className='my-4'>
                <div className="d-flex justify-content-between align-items-center mx-5 py-3">

                    <div>
                        <Link href="/" className='text-decoration-none'>
                            <Image src={logo} width={150} height={30} alt='AutoFixer' />
                        </Link>
                    </div>

                    <IconButton
                        className="d-md-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        color="inherit"
                    >
                        {menuOpen ? <CloseIcon style={{ color: "#fff" }} /> : <MenuIcon style={{ color: "#fff" }} />}
                    </IconButton>

                    <div className={`d-none d-md-flex gap-4 nav-links`}>
                        {['/o-nas', '/cennik', '/#opinie'].map((href, i) => (
                            <Link href={href} key={i} className="text-decoration-none">
                                <Typography variant="h4" color='text.primary'>
                                    {['O nas', 'Cennik', 'Opinie'][i]}
                                </Typography>
                            </Link>
                        ))}

                        <div>
                            <Typography variant="h4" color='text.primary' onClick={() => setContactOpen(true)} className='hover-pointer'>
                                Kontakt
                            </Typography>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className="d-md-none mx-1 px-5 pb-3">
                        {['/o-nas', '/cennik', '/#opinie'].map((href, i) => (
                            <div key={i} className="my-2">
                                <Link href={href} className="text-decoration-none hover-underline">
                                    <Typography variant="h4" color='text.primary'>
                                        {['O nas', 'Cennik', 'Opinie'][i]}
                                    </Typography>
                                </Link>
                            </div>
                        ))}

                        <div className="my-2">
                            <Typography variant="h4" color='text.primary' onClick={() => setContactOpen(true)} className='hover-pointer'>
                                Kontakt
                            </Typography>
                        </div>
                    </div>
                )}
                
            </nav>

            <Dialog open={contactOpen} onClose={() => setContactOpen(false)}>
                <DialogContent>
                    <Typography variant='h5' color='text.primary' className='my-2'>Przykładowe dane nieistniejącej marki:</Typography>
                    <Typography variant='h5' color='text.primary' className='my-2'>82-300 Elbląg</Typography>
                    <Typography variant='h5' color='text.primary' className='my-2'>Giermków 23/2</Typography>
                    <Typography variant='h5' color='text.primary' className='my-2'>Tel. 565-112-104</Typography>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Navbar