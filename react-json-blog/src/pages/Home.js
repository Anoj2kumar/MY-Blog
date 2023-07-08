import React,{useState, useEffect} from "react";
import axios from "axios";
import {MDBRow, MDBCol, MDBContainer, MDBTypography} from"mdb-react-ui-kit";
import { toast } from "react-toastify";
import Blogs from "../components/Blogs";
import Search from "../components/Search";
import Category from "../components/Category";
import LatestBlog from "../components/LatestBlog";
import Pagination from "../components/Pagination";


const Home = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [latestBlog, setLatestBlog] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalBlog, setTotalBlog] = useState(null);
    const [pageLimit] = useState(5);
    const options = ["University","Company", "College", "Travel", "Fitness", "Sports", "Food", "Tech" ];

    useEffect(() => {
        loadBlogsData(0,6,0);
        fetchLatestBlog();
        
     }, []);
    
           const loadBlogsData = async (start, end, increase) =>{
           const response = await axios.get(`http://localhost:3001/blog?_start=${start}&_end=${end}`);
           if(response.status === 200){
             setData(response.data)
             setCurrentPage(currentPage + increase);
           }else{
             toast.error("Something went wrong.");
           }
          };

          const fetchLatestBlog = async () => {
           const totalBlog = await axios.get("http://localhost:3001/blog");
           setTotalBlog(totalBlog.data.length);
           const start = totalBlog.data.length - 4;
           const end = totalBlog.data.length;
           const response = await axios.get(`http://localhost:3001/blog?_start=${start}&_end=${end}`);
           if(response.status === 200){
               setLatestBlog(response.data)
           }else{
            toast.error("Something went wrong.");
           }
          }
            
         console.log("data, data");
         const handleDelete =  async (id) => {
             if(window.confirm("Are you sure that you wanted to delete that blog ?")){
                 const response = await axios.delete(`http://localhost:3001/blog/${id}`);
                 if(response.status === 200){
                     toast.success("Blog Deleted Successfully");
                     loadBlogsData();
                 }else{
                     toast.error("Something went wrong");
                 }
             }
         };
     const excerpt = (str) => {
          if(str.length > 50){
              str = str.substring(0, 50) + "..."
          }
          return str;
     };
     const onInputChange = (e) => {
         if(!e.target.value){
             loadBlogsData();
         }

         setSearchValue(e.target.value);

     }
     const handleSearch = async (e) => {
          e.preventDefault();
          const response = await axios.get(`http://localhost:3001/blog?q=${searchValue}`);
          if(response.status === 200){
            setData(response.data)
          }else{
              toast.error("something went wrong")
          }
              
     };
     const handleCategory = async (category) => {
         const response = await axios.get(`http://localhost:3001/blog?category=${category}`);
         if(response.status === 200){
             setData(response.data)
         }else{
            toast.error("something went wrong")
         }
     }
    return (
         <>
         <Search searchValue={searchValue} onInputChange={onInputChange} handleSearch={handleSearch}/>
         <MDBRow>
             { data.length === 0 && (
                 <MDBTypography className="text-center mb-0" tag= "h2">
                   No Blog Found
                 </MDBTypography>
             )}
             <MDBCol>
                 <MDBContainer>
                     <MDBRow>
                         {data && data.map((item, index) => (
                             <Blogs
                             key={index}
                             {...item}
                             excerpt={excerpt}
                             handleDelete={handleDelete}
                             />
                         ))}
                     </MDBRow>
                 </MDBContainer>
             </MDBCol>
               <MDBCol size="3">
               <h4 className="text-start">Latest Post</h4>
                  {latestBlog && latestBlog.map((item, index) => (
                      <LatestBlog key = {index} {...item} />
                  ))} 
                  <Category options={options} handleCategory={handleCategory}/>
               </MDBCol>
         </MDBRow>
         <div className="mt-3">
              <Pagination currentPage={currentPage} loadBlogsData={loadBlogsData} pageLimit={pageLimit} data={data} totalBlog={totalBlog}/>
         </div>
         </>
    );
};
export default Home