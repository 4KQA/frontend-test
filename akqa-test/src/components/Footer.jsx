import leo from '../assets/logo/LEOlogo.png'

import '../App.css'


export default function Footer() {
    return (
        <footer>
            <div className='f-txt-copy'>
                <div className='leo-logo'><img src={leo} alt="Leo Logo" /></div>
                <p className='f-copy'>&#169; Copyright LEO Pharma 2020 LEO and the LEO aon Design <br /> are registered trademarks of LEO Pharma <br /> All rights reserved</p>
            </div>
            <div>
                <ul className='f-legals'>
                    <li>Contact</li>
                    <hr />
                    <li>Imprint</li>
                    <hr />
                    <li>Conditions</li>
                    <hr />
                    <li>Terms of use</li>
                    <hr />
                    <li> Privacy</li>
                    <hr />
                    <li> Cookie content</li>
                </ul>

            </div>
        </footer>
    )
}