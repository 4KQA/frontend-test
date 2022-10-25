import React, { useState } from 'react'
import chevronDownIcon from '../assets/svg/icons/IconChevronDown.svg'

export default function References() {
    const [showAccordion, setShowAccordion] = useState(false);
    const [rotateChevron, setRotateChevron] = useState(false);

    function handleClick() {
        setShowAccordion(!showAccordion);
        setRotateChevron(!rotateChevron);
    }
    
    const rotate = rotateChevron ? "rotate(0deg)" : "rotate(180deg)"

    return (
        <section className='references'>
            <div className='referencesContainer contentPadding'>
                <img 
                    className='defaultHoverAnimation' 
                    src={chevronDownIcon} 
                    alt='Chevron Down Icon' 
                    onClick={handleClick}
                    style={{
                        transform: rotate,
                        transition: "0.5s"
                    }}
                >
                </img>

                <h2 className='headerFont'>
                    References
                </h2>
            </div>

            {showAccordion && 
                <div className='clientRow contentPadding'>
                    <p>Client 1</p>
                    <p className='divider-placeholder'>|</p>
                    <p>Client 2</p>
                    <p className='divider-placeholder'>|</p>
                    <p>Client 3</p>
                    <p className='divider-placeholder'>|</p>
                    <p>Client 4</p>
                    <p className='divider-placeholder'>|</p>
                    <p>Client 5</p>
                    <p className='divider-placeholder'>|</p>
                </div>
            }
        </section>
    )
}
