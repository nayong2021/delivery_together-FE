import * as React from "react";
import { ReactComponent as Home } from "../../assets/img/home-03.svg";
import { ReactComponent as Building } from "../../assets/img/building-05.svg";
import { ReactComponent as Marker } from "../../assets/img/marker-pin-01.svg";

export default function RegionListItem({
    addressInfo
}) {

    let component;
    let alias;

    if(addressInfo && addressInfo.addressCategory === "우리집"){
        component = <Home className="marker" />;
        alias="우리집";
    }
    if(addressInfo && addressInfo.addressCategory === "회사"){
        component = <Building className="marker" />;
        alias="회사";
    }
    if(addressInfo && addressInfo.addressCategory === "ETC"){
        component = <Marker className="marker" />;
        alias=addressInfo.alias === "" ? addressInfo.address : addressInfo.alias;
    }
    
  return (
    addressInfo ? (
        <li>
            <div className="txt">
                {component}
                <div>
                    <div className="txt-title">{alias}</div>
                    <div>{addressInfo.address}</div>
                </div>
            </div>

            <div className="ck-area">
                <input
                    id="region_ck1"
                    type="checkbox"
                    name="region_ck"
                    className="ck-custom"
                />
            </div>
        </li>
      ) : null
  )
}
