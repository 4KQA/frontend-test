import React from 'react'
import LeoLogo from '../assets/svg/logos/LEO-Logo.svg'

export default function Footer() {
    const footerLinks = [
        {
            id: 1,
            name: "Contact",
            url: "https://www.leo-pharma.com/"
        },
        {
            id: 2,
            name: "Imprint",
            url: "https://www.leo-pharma.com/"
        },
        {
            id: 3,
            name: "Conditions",
            url: "https://www.leo-pharma.com/"
        },
        {
            id: 4,
            name: "Terms of use",
            url: "https://www.leo-pharma.com/"
        },
        {
            id: 5,
            name: "Privacy",
            url: "https://www.leo-pharma.com/"
        },
        {
            id: 5,
            name: "Cookie content",
            url: "https://www.leo-pharma.com/"
        }
    ]

    return (
        <footer className='bgBlue'>
            <div className='footerContainer contentPadding'>
            
                    
                <div className='footerLogo'>
                    <img src={LeoLogo} alt='LEO Pharma Logo'></img>
                </div>
                
                <div className='footerMenu'>
                    <ul>
                    {
                        footerLinks.map(({id, name, url}, index) => {
                            return (
                                <li key={id}>
                                    <a className='defaultHoverAnimation' href={url} target="_blank" rel="noreferrer">{name}</a>
                                    <p className='footerSpacer'>|</p>
                                </li>
                                
                            );
                        })
                    }
                    </ul>

                </div>

                <div className='footerInfo'>
                    <div>
                        <p>
                            © Copyright LEO Pharma 2020
                            <br></br>LEO and the LEO Lion Design
                            <br></br>are registered trademarks
                            <br></br>of LEO Pharma
                            <br></br>All rights reserved
                        </p>
                        <a href='https://www.leo-pharma.com/' target="_blank" rel="noreferrer">LEO Pharma corporate website</a>
                    </div>
                </div>

            </div>
        </footer>
  );
}
