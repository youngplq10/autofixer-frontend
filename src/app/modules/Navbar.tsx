"use client"

import { IconButton, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [contactOpen, setContactOpen] = useState(false);
    
    return (
        <>
            <nav className='navbar-custom my-4'>
                <div className="d-flex justify-content-between align-items-center mx-5 py-3">

                    <div>
                        <Link href="/" className='text-decoration-none'>
                            <Stack direction="row" spacing={2}>
                                <Typography variant='h4' color='text.primary' className=''>
                                    AutoFixer
                                </Typography>
                            </Stack>
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
                        {['/o-nas', '/cennik', '/#opinie', '/kontakt'].map((href, i) => (
                            <Link href={href} key={i} className="text-decoration-none">
                                <Typography variant="h4" color='text.primary'>
                                    {['O nas', 'Cennik', 'Opinie', 'Kontakt'][i]}
                                </Typography>
                            </Link>
                        ))}
                    </div>
                </div>

                {menuOpen && (
                    <div className="d-md-none mx-1 px-5 pb-3">
                        {['/o-nas', '/cennik', '/#opinie', '/kontakt'].map((href, i) => (
                            <div key={i} className="my-2">
                                <Link href={href} className="text-decoration-none hover-underline">
                                    <Typography variant="h4" color='text.primary'>
                                        {['O nas', 'Cennik', 'Opinie', 'Kontakt'][i]}
                                    </Typography>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
                
            </nav>
        </>
    )
}

export default Navbar