import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default PublicLayout;