import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
// import devPic from './devPic.jpg';
import './about.css'

const devPic=React.lazy(()=>import('../Assets/Images/devPic.jpg'));
export const About = () => {

  return (
    <div className="infoContainer text-left ml-5">
                <div className="devInfo">
                    <div className="hello">Hi I am </div>
                    <div className="name">Zeeshan Ali </div>
                    <div className="about">Web Developer , Enterpreneur , learner</div>
                    <div className="moreAbout">I am a web developer who has a skill to develop extensive websites including functionality. You can contact me through</div>
                    <div className="icons">
                        <a href="mailto:zeeshanali902332gmail.com" target="_blank" rel="noopener noreferrer" className='email'><MdEmail size="30px" color="#EA4335"/></a>
                        <a href="https://www.facebook.com/profile.php?id=100037013343034" target="_blank" rel="noopener noreferrer" className='facebook'>{<BsFacebook size="30px" />}</a>
                        <a href="https://instagram.com/zeeshanali90233?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" className='instagram'>{<FaInstagramSquare size="30px" color='#E4405F'/>}</a>
                        <a href="https://github.com/zeeshanali90233" target="_blank"rel="noopener noreferrer"  className='github'>{<AiFillGithub size="30px" color='black'/>}</a>
                    </div>
                
                </div>
                <div className=" devImg">
                    <img src={devPic} alt=""/>
                </div>
            </div>
  )
}
