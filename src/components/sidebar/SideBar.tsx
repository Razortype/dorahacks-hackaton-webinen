import React, { FC, useEffect, useRef, useState } from "react";
import './SideBar.css';
import { providers, Providers } from "../../lib/env-profiles";
import { SideBarData } from "./SideBarData";

import { TonConnectButton } from '@tonconnect/ui-react'

import { ListGroup, Row, Col, Container, Card, Button } from "react-bootstrap";
import { isMobile } from "react-device-detect";

import useConnectionStore from "../../store/connection-store/useConnectionStore";


interface SideBarProps {
    show:Boolean,
    setShow:Function
}

const SideBar: FC<SideBarProps> = ({show, setShow}) => {
    const {disconnect, address, toggleConnect, connect} = useConnectionStore();
    const [width,setWidth]= useState(window.innerWidth);
    const [sessionLink,setSessionLink]=useState<string | null>(null);
    const [selectedProvider, setSelectedProvider] = useState<Providers | null>(null);

    const onSessionLinkCreated = (value: string) => {
        if (isMobile) {
          // @ts-ignore
          window.location = value;
        } else {
          setSessionLink(value);
        }
      };

    useEffect(() => {
        const handleWindowResize = () => {
          setWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    });

    const connectButtonFunction = async(provider: Providers)=>{
        // if ((provider === Providers.TON_HUB || provider === Providers.TONKEEPER) && !isMobile) {
        //     setShowQr(true);
        //   }
        await connect(provider,onSessionLinkCreated);

    }
    const adapterConfig = {
        [Providers.TON_HUB]: {
          name: "Tonhub",
          icon: "https://api.ton.app/uploads/5_Lbhiuey_Wj0_A23_Ch_I_Mzgh_85671404ab.png",
          mobileCompatible: true,
          testnetCompatible: false, // When TC2 is available this distinction becomes obsolete
        },
        [Providers.TONKEEPER]: {
          name: "Tonkeeper",
          icon: "https://tonkeeper.com/assets/tonconnect-icon.png", // TODO
          mobileCompatible: true,
          testnetCompatible: true,
        },
      
        [Providers.EXTENSION]: {
          name: "Google Chrome Plugin",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/768px-Google_Chrome_icon_%28September_2014%29.svg.png",
          mobileCompatible: false,
          testnetCompatible: true,
        },
        [Providers.OPEN_MASK]: {
          name: "OpenMask",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC2QqCyUAJeKVcp_lcLM4BMPnZZKElFiTa3DTl4vtWs42E1377XrxiOl_wU7ZWMEV0RNU&usqp=CAU",
          mobileCompatible: false,
          testnetCompatible: true,
        },
      };

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
                <Button onClick={() => connectButtonFunction(Providers.OPEN_MASK)}>{address ? address:"Connect the wallet"}</Button>
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