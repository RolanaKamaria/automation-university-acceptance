import React from 'react'
import './WelcomeStrange.css'
import HeaderOut from '../HeaderOut/HeaderOut'
import Footer from '../../components/Footer/Footer'
import MainNav from '../../components/MainNav/MainNav'
import Syria from '../../assest/images/syria.png'
import { useSelector } from 'react-redux'
const WelcomeStrange = () => {
  const user=useSelector(state=>state.user);
  return (
    <div className="welcome-strange mainbg" dir="rtl">
      <HeaderOut/>
      <div className="log-nav">
        <MainNav/>
      <div className='welcome-strange-body'>
          <div className='label-welcome-strange-name'>{user.userinfo.username}</div>
          <div className='label-welcome-strange'>أهلاً بك في ربوع الوطن</div>
          <button className='btn-welcome-start btn'>ابدأ المفاضلة</button>
      </div>
      <img src={Syria} alt='our country' className='flage-image'/>
      </div>
      <Footer/>
    </div>
  )
}

export default WelcomeStrange
