import Map from './Map'
import './DepartureLocation.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Basic_Components_top from '../Basic_Component_top';
import Basic_Components_bottom from '../Basic_Component_bottom';

export default function DepartureLocation (){
    const movePage = useNavigate();

    function goSetArrivalLocation() {
        movePage('/arrivalLocation');
    }

    const [detailAddr, setDetailAddr] = useState("");

    function handleDetailAddrChange(newDetailAddr) {
        setDetailAddr(newDetailAddr);
    }

    return (
        <div className="App" style={{height:'900px', width:'500px'}}>
            <div className="phone">
                <div className="screen">
                    <div className="basic_Components_top">
                        <Basic_Components_top />
                        <hr />
                    </div>

                    <div className="div_head">
                        <div>
                            <p className="par_depLocationAsk">어디서 출발하시나요?</p>
                        </div>
                        <Map onDetailAddrChange={handleDetailAddrChange} />
                        
                        <div className="location">
                            <p>내 위치 &nbsp; <b>{detailAddr}</b></p> {/* 현 위치도 가져와야 함. 현재는 우선 '가져온 위치 정보'로 고정 */}
                        </div>
                        <div className="buttons">
                            <button className="btn_depLocationConfirm" onClick={goSetArrivalLocation}>여기로<br/>부를게요</button>
                        </div>
                    </div>

                    <div className="basic_Components_bottom">
                        <hr />
                        <Basic_Components_bottom />
                    </div>
                </div>
            </div>
        </div>
    )
}