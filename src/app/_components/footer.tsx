import React from 'react';
import { LinkPreview } from "./ui/link-preview";

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    }


    return(
        <footer  role="contentinfo" className='flex flex-row justify-between text-white bg-background ml-[-1%] pl-[2%] mb-[-1%] mr-[-0.5%]'>
            <div className='flex max-[640px]:flex-wrap max-[640px]:flex-wrap  max-[640px]:flex-col-reverse ' >
            <div>
                <div className='col-row p-[2rem]'>
                    <h3 className=' bg-gradient-to-r from-yellow-300 to-red-700 bg-clip-text text-transparent'>Lien Utile</h3>
                    <ul>
                        <li className='pb-[0.55rem]' ><LinkPreview className='list-none text-foreground no-underline' url="https://uicolors.app/create">Color Generator</LinkPreview></li>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground no-underline' url="https://animista.net/">Animasta</LinkPreview ></li>
                        <li className='pb-[0.55rem]' ><LinkPreview  className='list-none text-foreground no-underline' url="https://www.canva.com/">Canva</LinkPreview ></li>
                        <li className='pb-[0.55rem]' ><LinkPreview  className='list-none text-foreground no-underline' url="https://fontawesome.com/">FontAwesome</LinkPreview ></li>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground no-underline' url="https://www.svgrepo.com/">SvGPro</LinkPreview ></li>
                    </ul>
                    <p className='text-foreground'>© Portfolio de Alexandre De Roeck {getCurrentYear()}</p>
                </div>
            </div>

            <div>
                <div className='col-row p-[2rem]'>
                    <h3  className=' bg-gradient-to-r from-yellow-300 to-red-700 bg-clip-text text-transparent'>Lien Utile</h3>
                    <ul>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground no-underline' url="https://www.figma.com">Figma</LinkPreview ></li>
                        <li className='pb-[0.55rem]' ><LinkPreview  className='list-none text-foreground no-underline' url="https://www.w3schools.com/">W3schools</LinkPreview ></li>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground no-underline' url="https://validator.w3.org/">W3C Validator</LinkPreview ></li>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground no-underline' url="https://github.com/">Github</LinkPreview ></li>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground no-underline' url="https://vercel.com/">Vercel</LinkPreview ></li>
                    </ul>
                </div>
            </div>
            <div>
            <div className='col-row p-[2rem]'>
                    <h3  className=' bg-gradient-to-r from-yellow-300 to-red-700 bg-clip-text text-transparent'>Lien Utile</h3>
                    <ul>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground  no-underline' url="https://uiverse.io">Uiverse</LinkPreview ></li>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground no-underline' url="https://codepen.io/">Code Pen</LinkPreview ></li>
                        <li className='pb-[0.55rem]'><LinkPreview  className='list-none text-foreground no-underline' url="https://www.skeleton.dev/">Skeleton dev</LinkPreview ></li>
                        <li className='pb-[0.55rem]' ><LinkPreview  className='list-none text-foreground no-underline' url="https://jsben.ch/">JSBench</LinkPreview ></li>
                        <li className='pb-[0.55rem]' ><LinkPreview  className='list-none text-foreground no-underline' url="https://www.minifier.org/">Minifier code</LinkPreview ></li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer;