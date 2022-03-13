import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 30;
    width: 80%;
    height: 100%;
    background: ${props => props.theme.colors.dark};
    display: grid;
    align-items: center;
    top: 0;
    right:0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${props => props.theme.colors.primary};
`

export const Icon = styled.div`
    position:absolute ;
    top: 1.3rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`

export const SidebarWrapper = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
`

export const Links = styled(LinkS)`
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
`
export const Linkr = styled(LinkR)`
    color: ${props => props.theme.colors.primary};
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
`
