import React,{useState} from 'react'
import {CiHome} from 'react-icons/ci'
import {BiNews,BiUser} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

const tabs = [
    {
        name:'News feed',
        icon:<BiNews/>,
    },
    {
        name:'Cart',
        icon:<AiOutlineShoppingCart/>,
    },
    {
        name:'Home',
        icon:<CiHome/>,
    },
    {
        name:'Chat',
        icon:<BsChatSquareDots/>,
    },
    {
        name:'Account',
        icon:<BiUser/>,
    },
]


const Navigation = () => {
    const [active,setActive] = useState(2);
  return (
    <div className='navigation'>
        <ul>
           {
            tabs.map((tab,index)=>(
              <li 
                className={`list ${active === index ? 'active':''}`} 
                key={index}
                onClick={()=>setActive(index)}
                >
                  <a href="#">
                      <span className="icon">{tab.icon}</span>
                      <span className="text">{tab.name}</span>
                  </a>
              </li>
            ))
           }
            
            <div className="indicator"></div>
        </ul>
    </div>
  )
}

export default Navigation
