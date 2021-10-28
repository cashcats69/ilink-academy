import React from 'react'
import './Header.scss'
export const Header: React.FC =() =>{
  return(
    <div className='header-chatty'>
    <svg  className='header-svg'width="86" height="34" viewBox="0 0 86 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.5508 17.1573C41.5508 8.08618 34.2892 0.730331 25.3343 0.730331C16.3795 0.73033 9.11789 8.08618 9.11789 17.1573L0.000212905 17.1573C0.000212905 17.1573 5.76389 33.5843 25.3343 33.5843C34.2892 33.5843 41.5508 26.2284 41.5508 17.1573ZM25.3343 11.7476C28.265 11.7476 30.6747 14.1556 30.6747 17.1573C30.6747 20.126 28.2976 22.567 25.3343 22.567C22.4037 22.567 19.994 20.159 19.994 17.1573C19.994 14.1886 22.4037 11.7476 25.3343 11.7476Z" fill="#5E93E7"/>
<path d="M44.4492 17.1573C44.4492 26.2285 51.7108 33.5843 60.6657 33.5843C69.6205 33.5843 76.8821 26.2285 76.8821 17.1573L85.9998 17.1573C85.9998 17.1573 80.2361 0.730366 60.6657 0.730366C51.7108 0.730366 44.4492 8.08622 44.4492 17.1573ZM60.6657 22.567C57.735 22.567 55.3253 20.1591 55.3253 17.1573C55.3253 14.1886 57.7024 11.7477 60.6657 11.7477C63.5963 11.7477 66.006 14.1556 66.006 17.1573C66.006 20.1261 63.5963 22.567 60.6657 22.567Z" fill="#B3CDF8"/>
</svg>
<svg className='header-user' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_8:103)">
<circle cx="32" cy="30" r="24" fill="white"/>
</g>
<circle cx="31.6667" cy="25.2449" r="3.92837" stroke="#5C98F1" strokeWidth="2" strokeLinecap="round"/>
<path d="M40.0002 37.8629C38.9058 36.7686 37.6066 35.9005 36.1768 35.3082C34.747 34.716 33.2145 34.4111 31.6668 34.4111C30.1192 34.4111 28.5867 34.716 27.1569 35.3082C25.727 35.9005 24.4278 36.7686 23.3335 37.8629" stroke="#5C98F1" strokeWidth="2" strokeLinecap="round"/>
<defs>
<filter id="filter0_d_8:103" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="4"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8:103"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8:103" result="shape"/>
</filter>
</defs>
</svg>
</div>
  )
}