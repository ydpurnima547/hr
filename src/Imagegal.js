
import React,{useState} from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",
]
 const Imagegal = ()=> {
const [data,setData] = useState({img:'',i:0})    
const viewImage =(img,i)=>{
    setData({img,i})
    console.log(img,i)
}
const imgAction = (action) =>{
    let i= data.i;
    if(action === 'next-img'){
        setData({img:images[i+1],i:i+1});
    }
    if(action === 'previous-img'){
        setData({img:images[i-1],i:i-1});
    }

}
  return (
    <>
    {data.img 
    <div style ={{width:"100%"}}>
    <button onClick={()=>imgAction()} style={{position:"absolute",top:"10px",right:"10px"}}>x</button>
    <button onClick={()=>imgAction('previous-img')}>Previous</button>
<img src={data.img} style={{ maxWidth:"90%",maxHeight:"90%"}}/>
<button onClick={()=>imgAction('next-img')}>Next</button>
</div>
    }
    <div style={{padding:"10px"}}>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter="20px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt=""
                            onClick={()=> viewImage(image,i)}
                        />
                    ))}
                </Masonry>
        </ResponsiveMasonry>
         </div>   </> )
 }
export default  Imagegal;