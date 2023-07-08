
import React from "react";
import {
    MDBCol,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBBtn,
    MDBIcon,
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import Badge from "./Badge";

const Blogs = ({title, category, description, imageUrl, id, excerpt, handleDelete}) => {
    return(
        <MDBCol size="4">
            <MDBCard class='h-100 mt-2' style={{maxWidth: "22rem"}}>
                <MDBCardImage 
                  src={imageUrl}
                  alt={title}
                  position='top'
                  style={{maxwidth: "100%", height: "180px"}}
                  
                />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>{excerpt(description)}
                    <Link to={`/blog/${id}`}>Read more</Link>
                    <Badge>{category}</Badge>
                    <span>
                        <MDBBtn className="mt-1" tag="a" color="none" onClick={() => handleDelete(id)}>
                           <MDBIcon
                               fas
                               icon="trash"
                               style={{color: "#dd4b39"}}
                               size="lg"

                           />

                           
                        </MDBBtn>
                        <Link to={`/editBlog/${id}`}>
                        <MDBIcon
                               fas
                               icon="edit"
                               style={{color: "#55acee",marginLeft: "10px"}}
                               size="lg"

                           />
                        </Link>
                    </span>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
        
    
}
export default Blogs