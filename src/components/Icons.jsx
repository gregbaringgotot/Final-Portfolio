import React from 'react'
const Icon = ({children,size=24,...props}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>
export const ArrowDown = props => <Icon {...props}><path d="M12 4v16m-7-7 7 7 7-7"/></Icon>
export const ArrowLeft = props => <Icon {...props}><path d="M20 12H4m7-7-7 7 7 7"/></Icon>
export const ArrowRight = props => <Icon {...props}><path d="M4 12h16m-7-7 7 7-7 7"/></Icon>
export const ArrowUpRight = props => <Icon {...props}><path d="M5 19 19 5M8 5h11v11"/></Icon>
export const Menu = props => <Icon {...props}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>
export const X = props => <Icon {...props}><path d="M5 5l14 14M19 5 5 19"/></Icon>
export const Sun = props => <Icon {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></Icon>
export const Moon = props => <Icon {...props}><path d="M20.8 14.3A8.5 8.5 0 0 1 9.7 3.2 8.5 8.5 0 1 0 20.8 14.3Z"/></Icon>
