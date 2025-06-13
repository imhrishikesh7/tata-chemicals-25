import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import Cover from '../Components/Home/Cover'
import Gratitude from '../Components/Home/Gratitude'
import Title from '../Components/Title'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BOD from '../Components/Home/BOD';
import Highlights from '../Components/Home/Highlights';
import Message from '../Components/Home/Message';

const Home = () => {
    
    return (
        <div>
            <Cover />
            <Gratitude />
            <Highlights />
            <Message />
            
            <BOD />
        </div>
    )
}

export default Home