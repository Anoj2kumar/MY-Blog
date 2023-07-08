import React from "react";
const About = () => {
    return (
         <div>
             <h2>About</h2>
             <p>A blog (a truncation of "weblog") is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page.</p>
         </div>
         
    );
};
export default About
// useEffect(() => {
//     if (id) {
//         setEditMode(true);
//         getSingleBlog(id)
//     }else {
//         setEditMode(false);
//         setFormValue({...initialState});
//     }
// },[id]);

// const getSingleBlog = async (id) => {
//    const singleBlog = await axios.get(`http://localhost:3001/blog/${id}`);
//    if (singleBlog.status === 200){
//        setFormValue({...singleBlog.data});
//    }else{
//        toast.error("something went wrong")
//    }
   
// };