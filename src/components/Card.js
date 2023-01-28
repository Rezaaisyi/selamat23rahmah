import React from 'react'
import {IoAlert, IoThumbsUp, IoHappyOutline,IoMedkit, IoLogoUsd, IoAirplane, IoMailOutline,IoWoman, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill, IoStar} from "react-icons/io5"
import { IconContext } from 'react-icons'
import {motion} from 'framer-motion';

let easing = [0.6,-0.05,0.01,0.99];

let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const item = {
    hidden:{opacity:0,y:20},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration:.2
        }
    }
}

const title = {
    hidden:{
        y:60,
        opacity:0
    },
    show:{
        y:0,
        opacity:1,
        transition:{
            delay:.2,
            duration:0.6,
            ease:easing
        }
    }
};

const hoverEffect = {
    whileHover:{
        scale:1.5,rotate:720,borderRadius:"100%"
    },
    whileTap:{
        scale:.8,rotate:360,borderRadius:"100%"
    },
}

const star={
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};

function Card() {
  return (
    <motion.div className="service_container">
        <div className="title_wrapper">
        <h4>Allahumma thouwil umuuronaa washohih ajsaa danaa wanawwir quluu banaa <br/> wasabbit iymaa nanaa wa'ah sin'a maalanaa wawasshih arzaqonaa waila khoiri qhorribnaa wa anissarri ibidnaa <br/> waaqndi hawaa ijanaa fiddiini waddunyaa wallaa hiroti innaka alakulli sai'in qodiir</h4>
        <motion.div className="review_container" variants={stagger}>
            <IconContext.Provider value={{color:"#fff", size:"18px"}}>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
            </IconContext.Provider>
        </motion.div>

            <motion.span className="service_title"
                initial={{y:20, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1.8}}
            >Semoga apa yang disini bisa terkabulkan</motion.span>
            <motion.h2
                initial={{y:200, opacity:0}}
                animate={{y:0, opacity:1}}
                exit={{opacity:0}}
                transition={{duration:.5, delay:1}}
            >Mari sama-sama mengucap<br/>Aamiiin!!!</motion.h2>
        </div>


        <motion.div className="service_card" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:false}}>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ddfbf9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#14da8f", size:"22px"}}>
                        <IoMedkit/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Makin sehat &<br/>Makin kuat</h3>
                <a href="#">
                    <span>Amiin</span>
                    <IconContext.Provider value={{color:"#8EA7E9", size:"15px"}}>
                        <IoAlert/>
                    </IconContext.Provider>
                </a>
            </motion.div>

            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#e7daf8"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#5700cf", size:"22px"}}>
                        <IoWoman/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Lebih sabar &<br/>Lebih dewasa</h3>
                <a href="#">
                    <span>Amiin</span>
                    <IconContext.Provider value={{color:"#8EA7E9", size:"15px"}}>
                        <IoAlert/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffede6"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#ff8559", size:"22px"}}>
                        <IoLogoUsd/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Semoga rejeki,<br/>duitnya banyakkk!</h3>
                <a href="#">
                    <span>Amiin</span>
                    <IconContext.Provider value={{color:"#8EA7E9", size:"15px"}}>
                        <IoAlert/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#ffe1e9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#fa3970", size:"22px"}}>
                        <IoAirplane/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Kita cepat<br/>Bertemuuu coooi!! wkwk</h3>
                <a href="#">
                    <span>Amiin</span>
                    <IconContext.Provider value={{color:"#8EA7E9", size:"15px"}}>
                        <IoAlert/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#dcedff"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#56a8f4", size:"22px"}}>
                        <IoHappyOutline/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Semua hal<br/>yang baik-baik</h3>
                <a href="#">
                    <span>Amiin</span>
                    <IconContext.Provider value={{color:"#8EA7E9", size:"15px"}}>
                        <IoAlert/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card" variants={item}>
                <motion.span className="service_icon" style={{backgroundColor:"#dbf9ed"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                    <IconContext.Provider value={{color:"#06d786", size:"22px"}}>
                        <IoThumbsUp/>
                    </IconContext.Provider>
                </motion.span>
                <h3>Berkah pokoknya<br/>ya sayang</h3>
                <a href="#">
                    <span>Amiin</span>
                    <IconContext.Provider value={{color:"#8EA7E9", size:"15px"}}>
                        <IoAlert/>
                    </IconContext.Provider>
                </a>
            </motion.div>
            <motion.div className="card dark" variants={item}>
                <img src={process.env.PUBLIC_URL + '/assets/images/line.png'} alt="line" className="line"/>               
                <h2>+999 <br/>bingung</h2>
                <a href="#">
                    <span>Hal baik lainnya</span>
                    <motion.span className="service_icon" style={{backgroundColor:"#8EA7E9"}} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
                        <IconContext.Provider value={{color:"#fff", size:"18px"}}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </motion.span>
                </a>
            </motion.div>

            <motion.div className="card light" variants={item}>
                <img src={process.env.PUBLIC_URL + '/assets/images/putri.png'} alt="line" className="line"/>
                <h2>Halloo!!</h2>
            </motion.div>

        </motion.div>

    </motion.div>
  )
}

export default Card



//thanks for watching
//please subscribe my channel..........