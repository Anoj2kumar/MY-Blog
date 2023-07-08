import { MDBBadge } from "mdb-react-ui-kit";
import React from "react";
const Badge = ({children, styleInfo}) => {
    const colorKey = {
        Company: "primary",
        Travel: "success",
        Fitness: "danger",
        Food: "warning",
        Tech: "info",
        Sports: "dark",
        University: "secondary",
        College: "warning"
    }
    return (
         <h5 style={styleInfo}>
             <MDBBadge color={colorKey[children]}>{children}</MDBBadge>
            
         </h5>
    );
};
export default Badge;