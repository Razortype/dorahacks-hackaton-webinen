import React, { FC, useEffect, useRef, useState } from "react";
import './SideBar.css';

import { SideBarData } from "./SideBarData";

import { TonConnectButton } from '@tonconnect/ui-react'

import { ListGroup, Row, Col, Container, Card, Button } from "react-bootstrap";

interface SideBarProps {
    show:Boolean,
    setShow:Function
}

const SideBar: FC<SideBarProps> = ({show, setShow}) => {
    const [width,setWidth]= useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    });

    if(show) {
        return (
        
            <div className="sidebar__section">
                {width < 576 ?
                <Button className="sidemenu__close__button" onClick={()=>setShow(false)}>
                    X
                </Button>
                : 
                ''
                }
                <Container className="text-center p-3">
                    <h1 className="sidebar__title pt-5 mt-5">WEBINEN</h1>
                    <TonConnectButton className="mt-5"/>
                </Container>
    
                <ListGroup className="sidemenu__navlinks p-3">
                    {SideBarData.map(({title, icon, link})=> {
                        return (
                            <ListGroup.Item action href={link} onClick={() => window.innerWidth < 576 && setShow(false)} className="nav__item bg-nav">
                                {icon} {title}
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </div>
        );

    }
    else{
        return(
            <>
            </>
        )
    }
  
}

export default SideBar;