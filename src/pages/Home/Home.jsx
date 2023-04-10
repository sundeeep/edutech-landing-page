import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Hero from '../../components/Hero/Hero';
import Testimonials from './sections/Testimonials/Testimonials';


const Home = () => {
    return (
        <Box>
            <main>
                <Hero />
                <Testimonials />
            </main>
        </Box>
    )
}

export default Home