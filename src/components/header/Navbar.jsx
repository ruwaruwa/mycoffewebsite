import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo3 from '../../assets/logo3.png.png'
import { FaAtlassian, FaBucket, FaComment, FaConfluence, FaCuttlefish, FaDatabase, FaEquals, FaModx, FaPython, FaSquarePiedPiper, FaUbuntu, FaUmbrellaBeach } from 'react-icons/fa6'
import Fouter from './Fouter'
export default function Navbar() {

    const [handleclick,sethandleclick]= useState(false)
  return (
    <div className='bg-orange px-2'>
{/* <hero sections></hero> */}
        <div className='flex justify-between  mx-2 my-8 p-2 bg-my md:flex-row '> 
          
<div className='flex gap-4'>
<div className='bg-cofdark p-3'>
{/* <img src=   {logo3} alt="" className='h-[80px] mx-4' /> */}
<FaCuttlefish className=' text-white text-2xl'/>
</div>
<span className='text-3xl font-serif md:text-4xl '>Baris Coffe</span>
</div>
<button className='p-2'><FaEquals onClick={()=>sethandleclick(!handleclick)} className='text-2xl block md:hidden'/></button>
<div className='hidden items-center md:block'>
<div className='text-white flex text-2xl gap-4  '>
    <ul className='flex flex-row gap-4 text-white'>
    <Link to={'/home'}><li className='hover:text-red-500  hover:border-b py-2'>home</li></Link>
<Link to={'/custamers'}><li className='hover:text-red-500  hover:border-b py-2'>Customer</li></Link>
<Link to={'/products'}><li className='hover:text-red-500  hover:border-b py-2'>Prodts</li></Link>
<Link to={'/service'}><li className='hover:text-red-500  hover:border-b py-2'>Service</li></Link>
    </ul>
    <button className='bg-cofdark rounded-lg py-1 p-3 hidden md:block'>login</button>
 
</div>


</div>

        </div>
        {/* <hero sections END></hero> */}
{/* <---sidebar menu---> */}
<div className={`${handleclick ? 'block' : 'hidden' } w-[100%] md:hidden h-screen  center top-6 relative`}>
<div className='bg-ruwa h-[80%]'>
<div className='text-black flex text-2xl gap-4 px-2  '>
    <ul className='flex  gap-4 text-white flex-col'>
    <Link to={'/home'}><li className='hover:text-red-500  hover:border-b py-2'>home</li></Link>
<Link to={'/custamers'}><li className='hover:text-red-500  hover:border-b py-2'>Customer</li></Link>
<Link to={'/products'}><li className='hover:text-red-500  hover:border-b py-2'>Prodts</li></Link>
<Link to={'/service'}><li className='hover:text-red-500  hover:border-b py-2'>Service</li></Link>
    </ul>
    <button className='bg-cofdark rounded-lg py-1 p-3 hidden md:block'>login</button>
 
</div>
</div>
</div>
{/* <--end-sidebar menu---> */}
        
        {/* <start home page></start> */}
        <div className='grid grid-cols-1 md:grid-cols-2 px-2 py-3'>

<div className='hadow-sm'>
<div className='text-center  '>
<span className='text-or font-mono text-3xl mt-4  '>Baris coffe</span>

</div>
<div className='text-center'>
<span className='text-6xl mt-4 '>fresh Roasted coffe</span>
<div className='py-6 text-white'>
    <button className='bg-ruwa px-6 py-3 rounded-xl'> Shop Naw</button>
</div>
</div>
</div>
<div className='  '>
<img className='rounded-bl-full rounded-tr-full h-[360px]' src='https://www.verywellhealth.com/thmb/enqdlurt-cfzp1sidBVkJDnfOLQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Coffee-OleksiyMaksymenko-58c5600c5f9b58af5cc7c009.jpg'></img>

</div>

      </div>
              {/* <start home page></start> */}
              <div className=' px-10 items-center bg-lithg'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mx-10 py-4 gap-2'>
<div className='shadow-lg bg-white w-[350px]'>
<div className='flex gap-3'>
    <FaAtlassian className='text-4xl text-ligth mx-3'/>
 <div className=''> 
 <span className='text-2xl font-serif mt-1'>Free shopin worldwide</span><br></br>
 <span className='text-graylight mx-4'>ON order Over $40</span>
 </div>

</div>
</div>
<div className='shadow-lg bg-white w-[350px]'>
<div className='flex gap-3'>
    <FaConfluence className='text-4xl text-ligth mx-3'/>
 <div className=''> 
 <span className='text-2xl font-serif  mt-1'>Free shopin worldwide</span><br></br>
 <span className='text-graylight mx-4'>ON order Over $40</span>
 </div>

</div>
</div>
<div className='shadow-lg bg-white w-[350px]'>
<div className='flex gap-3'>
    <FaModx className='text-4xl text-ligth mx-3'/>
 <div className=''> 
 <span className='text-2xl font-serif  mt-1'>Free shopin worldwide</span><br></br>
 <span className='text-graylight mx-4'>ON order Over $40</span>
 </div>

</div>
</div>
<div className='shadow-lg bg-white w-[350px]'>
<div className='flex gap-3'>
    <FaPython className='text-4xl text-ligth mx-3'/>
 <div className=''> 
 <span className='text-2xl font-serif  mt-1'>Free shopin worldwide</span><br></br>
 <span className='text-graylight mx-4'>ON order Over $40</span>
 </div>

</div>
</div>
                </div>
                </div>
                 {/* <top categors></top> */}
              <div className='px-16 items-center'>
                <div className='text-center p-2'>
                    <span className='text-2xl font-semibold font-serif p-2'>top Categories</span>
                </div>
                <div className='mx-10'>
                <div className='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3  py-3 gap-4'>
<div className=' shadow-lg  h-[300px] w-[400px] gap-6 ' >
    <div className='w-full'>

<img className=' py-2 rounded-l-2xl rounded-3xl ' src='https://s3-us-west-2.amazonaws.com/utsw-patientcare-web-production/original_images/coffee_heart_600.jpg'></img>
<div className='flex gap-2'>
    <div>
        <FaSquarePiedPiper className='text-3xl'/>
    </div>
    <span className='text-2xl font-sans text-black'>Coffe moncha</span>
</div>
</div>

</div>
<div className=' shadow-lg  h-[300px] w-[390px] mx-4' >
    <div className=''>

<img className=' py-2  rounded-3xl ' src='https://img.delicious.com.au/OVuZkaXj/w759-h506-cfill/del/2021/06/how-much-coffee-should-you-drink-per-dayy-heres-what-the-science-says-154176-3.jpg'></img>
<div className='flex gap-2'>
    <div>
        <FaSquarePiedPiper className='text-3xl'/>
    </div>
    <span className='text-2xl font-sans text-black'>Coffe americano</span>
</div>
</div>

</div>
<div className=' shadow-lg  h-[320px] w-[400px] mx-4' >
    <div className='w-full'>

<img className=' py-2 rounded-l-2xl rounded-3xl ' src='https://cdn.shopify.com/s/files/1/0838/4525/files/what_is_a_cortado_coffee_drink_480x480.jpg?v=1648552382'></img>
<div className='flex gap-2'>
    <div>
        <FaSquarePiedPiper className='text-3xl'/>
    </div>
    <span className='text-2xl font-sans text-black'>Coffe cuppccino</span>
</div>
</div>

</div>
                </div>
                </div>
                
                
              </div>
                 {/* <top categors>END</top> */}
                
              
 <div className= ' my-2 bg-lithg'>
                    <div className='text-center p-2'>
<span className='text-3xl font-semibold'>Top Products</span>

                    </div>
                    <div className='ml-64 lg:ml-96 space-x-9 py-4 flex'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                        <div className=''>
                    <button className='text-white bg-ligth py-2 px-8 rounded-lg gap-4'>feutured</button>
                    </div>


<div><button className='text-2xl bg-or py-1 px-6 rounded-lg gap-2'>lateast</button>
</div>



<div><button className='bg-white rounded-lg px-8 py-2'>bestseller</button>
</div>
                        </div>
                   
               
                   </div>
                  

                 </div>
                 <div className=''>
                 <div className='px-8'>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-8 py-2 gap-4'>
<div className='rounded-sm bg-white px-4 shadow-lg w-[300px] '>
<div className='px-4 py-2'><button className='bg-ligth px-4 rounded-full text-white'>-25%</button></div>
<div className='px-4 py-2'>
<img className='h-[200px]  rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTV4zt2RkGNEk24LC2GR2vSiKCRjTU0BnGCGmD3cT7jo8nizgae_xrcivekAGqh1pIjM&usqp=CAU'></img>

</div>
<div className=''>
    <FaComment className='mx-20 text-3xl text-cof'/>
    <span className='px-10 text-2xl font-sans'> Irish coffe</span>
   
</div>
<div className='flex gap-16 px-2 py-1'>
<FaBucket className='text-2xl mt-1 text-or'/>
<div className='flex gap-4'>
    <span className='text-2xl font-semibold'>$9.00 </span><p className='font-thin mt-1'>$12.00</p>
</div>
</div>
</div>
<div className='rounded-sm bg-white px-4 shadow-lg w-[300px] '>
<div className='px-4 py-2'><button className='bg-ligth px-4 rounded-full text-white'>-25%</button></div>
<div className='px-4 py-2'>
<img className='h-[200px] rounded-md' src='https://s7d1.scene7.com/is/image/mcdonalds/DC_201906_2743_MediumIcedCaramelMacchiato_Glass_A1_832x472:product-header-desktop?wid=830&hei=458&dpr=off'></img>

</div>
<div className=''>
    <FaComment className='mx-20 text-3xl text-cof'/>
    <span className='px-10 text-2xl font-sans'> Irish coffe</span>
   
</div>
<div className='flex gap-16 px-2 py-1'>
<FaBucket className='text-2xl mt-1 text-or'/>
<div className='flex gap-4'>
    <span className='text-2xl font-semibold'>$9.00 </span><p className='font-thin mt-1'>$12.00</p>
</div>
</div>
</div>
<div className='rounded-sm bg-white px-4 shadow-lg w-[300px] '>
<div className='px-4 py-2'><button className='bg-ligth px-4 rounded-full text-white'>-25%</button></div>
<div className='px-4 py-2'>
<img className='h-[200px] rounded-md' src='https://i.ytimg.com/vi/AGVG30UBJsU/maxresdefault.jpg '></img>

</div>
<div className=''>
    <FaComment className='mx-20 text-3xl text-cof'/>
    <span className='px-10 text-2xl font-sans'> Irish coffe</span>
   
</div>
<div className='flex gap-16 px-2 py-1'>
<FaBucket className='text-2xl mt-1 text-or'/>
<div className='flex gap-4'>
    <span className='text-2xl font-semibold'>$9.00 </span><p className='font-thin mt-1'>$12.00</p>
</div>
</div>
</div>
<div className='rounded-sm bg-white px-4 shadow-lg w-[300px] '>
<div className='px-4 py-2'><button className='bg-ligth px-4 rounded-full text-white'>-25%</button></div>
<div className='px-4 py-2'>
<img className='h-[200px] rounded-md' src='https://media.istockphoto.com/id/926482266/vector/coffee-cups-top-view-vector-plastic-paper-white-empty-fast-food-take-out-coffee-menu-mugs.jpg?s=612x612&w=0&k=20&c=709wvfSusOKY8sjRfBExxwY1f9AiLl7kdjDlvUWzEks='></img>

</div>
<div className=''>
    <FaComment className='mx-20 text-3xl text-cof'/>
    <span className='px-10 text-2xl font-sans'> Irish coffe</span>
   
</div>
<div className='flex gap-16 px-2 py-1'>
<FaBucket className='text-2xl mt-1 text-or'/>
<div className='flex gap-4'>
    <span className='text-2xl font-semibold'>$9.00 </span><p className='font-thin mt-1'>$12.00</p>
</div>
</div>
</div>
        
                 </div>
               </div>
                 </div>
              
               <div className='px-6'>
                <div className='mx-16'>
               
                <div className='grid grid-cols-1  md:grid-cols-3 px-26 py-2 gap-4 '>
                <div className=' h-[400px] w-[300px] py-2 '>
                    <div className=''>
<img className='wi-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TNaSeztYAOb57FiafnHCsHB4REbMud7xGU3WvRpvtmzJaq5dA6zx2ubcJnvoTylj4uU&usqp=CAU'></img>
</div>
<div className='mt-4'>
                    <div className='shadow-lg '>
<img className='w-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR5NdrWq2fqZ498TUriUuj04DPDRV7vweJQ&usqp=CAU'></img>
</div>
                    </div>
                    </div>
                    <div className='shadow-lg h-[400px] mr-20 py-2  '> 
                   
<img className='h-[385px] w-full px-1 py-1 rounded-3xl' src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'></img>

                    </div>
                    <div className=' h-[400px] w-[300px] py-2 '>
                    <div className=''>
<img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TNaSeztYAOb57FiafnHCsHB4REbMud7xGU3WvRpvtmzJaq5dA6zx2ubcJnvoTylj4uU&usqp=CAU'></img>
</div>
<div className='mt-4'>
                    <div className='shadow-lg '>
<img className='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR5NdrWq2fqZ498TUriUuj04DPDRV7vweJQ&usqp=CAU'></img>
</div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                
                {/* <----------Start------> */}
                <div className=' px-10 py-2 '>
                    <div className='text-center py-2'>
<span className='text-black font-bold  text-xl p-2'>Special Prducts</span>
                    </div>
<div className='flex items-center'>
    <div className='px-6  py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
<div className='shadow-lg w-[300px]  bg-white py-4 px-5 gap-2'>
<div className='px-8'>
    <img className='rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-ix-hQ4GRxZpduKvpOxMblQwjldnQd-wQQt7t5xP-0gRC_fVl03L057zCzhuhDSPqFU&usqp=CAU'></img>
</div>
<div className='px-10 py-2'>
    <FaUbuntu className='mx-6 text-3xl  text-ruwa'/>
    <span className='text-2xl font-extralight'>Brandy coffe</span>
</div>
<div className='flex gap-6'>
<FaDatabase className='text-ruwa text-5xl mx-2 mt-1'/>
    <div className='flex gap-4 mt-4'>
    <div>
   <span className='text-3xl'>$15</span>
   </div>
   <p className='mt-2'>$35.000</p>
    </div>
   
</div>
</div>
<div className='shadow-lg w-[300px]  bg-white py-4 px-5 gap-2'>
<div className='px-8'>
    <img className='rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-ix-hQ4GRxZpduKvpOxMblQwjldnQd-wQQt7t5xP-0gRC_fVl03L057zCzhuhDSPqFU&usqp=CAU'></img>
</div>
<div className='px-10 py-2'>
    <FaUbuntu className='mx-6 text-3xl  text-ruwa'/>
    <span className='text-2xl font-extralight'>Brandy coffe</span>
</div>
<div className='flex gap-6'>
<FaDatabase className='text-ruwa text-5xl mx-2 mt-1'/>
    <div className='flex gap-4 mt-4'>
    <div>
   <span className='text-3xl'>$15</span>
   </div>
   <p className='mt-2'>$35.000</p>
    </div>
   
</div>
</div>
<div className='shadow-lg w-[300px]  bg-white py-4 px-5 gap-2'>
<div className='px-8'>
    <img className='rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-ix-hQ4GRxZpduKvpOxMblQwjldnQd-wQQt7t5xP-0gRC_fVl03L057zCzhuhDSPqFU&usqp=CAU'></img>
</div>
<div className='px-10 py-2'>
    <FaUbuntu className='mx-6 text-3xl  text-ruwa'/>
    <span className='text-2xl font-extralight'>Brandy coffe</span>
</div>
<div className='flex gap-6'>
<FaDatabase className='text-ruwa text-5xl mx-2 mt-1'/>
    <div className='flex gap-4 mt-4'>
    <div>
   <span className='text-3xl'>$15</span>
   </div>
   <p className='mt-2'>$35.000</p>
    </div>
   
</div>
</div>
<div className='shadow-lg w-[300px]  bg-white py-4 px-5 gap-2'>
<div className='px-8'>
    <img className='rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-ix-hQ4GRxZpduKvpOxMblQwjldnQd-wQQt7t5xP-0gRC_fVl03L057zCzhuhDSPqFU&usqp=CAU'></img>
</div>
<div className='px-10 py-2'>
    <FaUbuntu className='mx-6 text-3xl  text-ruwa'/>
    <span className='text-2xl font-extralight'>Brandy coffe</span>
</div>
<div className='flex gap-6'>
<FaDatabase className='text-ruwa text-5xl mx-2 mt-1'/>
    <div className='flex gap-4 mt-4'>
    <div>
   <span className='text-3xl'>$15</span>
   </div>
   <p className='mt-2'>$35.000</p>
    </div>
   
</div>
</div>
<div className='shadow-lg w-[300px]  bg-white py-4 px-5 gap-2'>
<div className='px-8'>
    <img className='rounded-lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-ix-hQ4GRxZpduKvpOxMblQwjldnQd-wQQt7t5xP-0gRC_fVl03L057zCzhuhDSPqFU&usqp=CAU'></img>
</div>
<div className='px-10 py-2'>
    <FaUbuntu className='mx-6 text-3xl  text-ruwa'/>
    <span className='text-2xl font-extralight'>Brandy coffe</span>
</div>
<div className='flex gap-6'>
<FaDatabase className='text-ruwa text-5xl mx-2 mt-1'/>
    <div className='flex gap-4 mt-4'>
    <div>
   <span className='text-3xl'>$15</span>
   </div>
   <p className='mt-2'>$35.000</p>
    </div>
   
</div>
</div>

    </div>
</div>
                </div>
                 {/* <-------END---------> */}
                 {/* <....star...> */}
                 <div>
                    <div>
                        <div className='text-center'>
<span className='text-2xl font-bold'>Least Blogs</span>
                        </div>
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
<div className='bg-white shadow-xl'>
<div className='py-4'>
    <img className='px-6 min-w-full rounded-bl-full' src='https://media.istockphoto.com/id/517136705/photo/young-friends-together-drinking-coffee-in-the-city.jpg?s=170667a&w=0&k=20&c=ohCccBXAqY8SVxbhdfRLbz5sq438D5UkHICUxLZMqZ4='></img>
</div>
<div className='px-6'>
    <span className='text-3xl '>The Standard lorem</span>
  <div className='px-4'>
  <span className='text-ruwa'>05 December 2020</span>
  </div>
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Explicabo, tempora similique. Maiores distinctio alias ducimus
     impedit soluta beatae molestiae sapiente
    
  </span>
 <div className='py-4'>
 <button className='bg-my p-2 px-5 rounded-3xl text-white'>Read More</button>
 </div>
</div>
</div>
<div className='bg-white shadow-xl'>
<div className='py-4'>
    <img className='px-6 min-w-full rounded-bl-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbjEl17_RvEBVZ7KKUT_ijsnCzAwDg0J9C0051gU1vvj1s2k1dGoJFvxwWb6IhhCKXic&usqp=CAU'></img>
</div>
<div className='px-6'>
    <span className='text-3xl '>The Standard lorem</span>
  <div className='px-4'>
  <span className='text-ruwa'>05 December 2020</span>
  </div>
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Explicabo, tempora similique. Maiores distinctio alias ducimus
     impedit soluta beatae molestiae sapiente
    
  </span>
 <div className='py-4'>
 <button className='bg-my p-2 px-5 rounded-3xl text-white'>Read More</button>
 </div>
</div>
</div>
<div className='bg-white shadow-xl'>
<div className='py-4'>
    <img className='px-6 min-w-full rounded-bl-full' src='https://c8.alamy.com/comp/K46EF4/portrait-of-two-women-friends-talking-over-a-coffee-and-dessert-K46EF4.jpg'></img>
</div>
<div className='px-6'>
    <span className='text-3xl '>The Standards lorem</span>
  <div className='px-4'>
  <span className='text-ruwa'>05 December 2020</span>
  </div>
  <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Explicabo, tempora similique. Maiores distinctio alias ducimus
     impedit soluta beatae molestiae sapiente
    
  </span>
 <div className='py-4'>
 <button className='bg-my p-2 px-5 rounded-3xl text-white'>Read More</button>
 </div>
</div>
</div>
       
       
                            </div>
                        </div>
                    </div>
                 </div>


                 {/* <----end foter--> */}
                 <Fouter/>
               </div>
               
             
             
  
  )
}
