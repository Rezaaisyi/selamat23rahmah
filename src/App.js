import logo from './logo.svg';
import './App.scss';
import {FaSafari, FaDribbble, FaWhatsapp} from 'react-icons/fa';
import {IoMailOutline, IoChevronForwardCircle, IoStar} from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Card from './components/Card';
import { motion } from 'framer-motion';
import {useRef} from 'react';
import Slide from './components/Slide';

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

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6, ease:easeing
    }
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};

const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}

const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}

const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
};

const btnGroup={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6, ease:easeing}
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

const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easeing}
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



function App() {
  
  const ref = useRef(null);
  const fes = useRef(null);


  const handleClick2 = () => {
    fes.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  
  return (
    <motion.div initial='initial' animate='animate'>
      <motion.header variants={stagger}>
          <motion.div className="logo_wrapper" variants={header}>mra.<span>co</span></motion.div>
          <motion.div className="menu_container" variants={stagger}>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
                <div className="icon"><FaSafari/></div>
                <div className="icon"><FaWhatsapp/></div>
              </IconContext.Provider>
            </motion.span>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px"}}>
                kartu hbd online seng
              </IconContext.Provider>
            </motion.span>
            <motion.span className="menu" variants={header}>
              <span></span>
              <span></span>
              <span></span>
            </motion.span>
          </motion.div>
      </motion.header>

      <motion.div className="content_wrapper" initial={{opacity:0,scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:easeing}}>
        <div className="left_content_wrapper">

          <motion.h2>

            <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>p</motion.span>
                <motion.span variants={letter}>p</motion.span>
                <motion.span variants={letter}>y</motion.span>
                <motion.span variants={letter} className="second">B</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>y</motion.span>
            </motion.span>
            <motion.span variants={lastName} initial="initial" animate="animate" className='last'>
                <motion.span variants={letter}>R</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>h</motion.span>
                
                <motion.span variants={letter} className="second">K</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>-</motion.span>
                <motion.span variants={letter}>23</motion.span>
                <motion.span variants={letter} className="second">T</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>n</motion.span>
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeInUp}>Selamat ulang tahun RAHMAH PUTRI ISTIGHFARINI <br/>Sebenernya doanya secaara keseluruhan intinya ada dibawah lah ya...pokoknya yang baik2.</motion.p>

          <motion.div className="btn_group" variants={stagger}>
            <motion.div className="btn btn_primary" variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={handleClick}>DOA
              <IconContext.Provider value={{color:"#8EA7E9", size:"25px"}}>
                <IoChevronForwardCircle/>
              </IconContext.Provider>
            </motion.div>
            <motion.div className="btn btn_secondary" variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}} onClick={handleClick2}>Coba Diklik</motion.div>
          </motion.div>


          <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={star}>Eitsss tunggu dulu ...</motion.p>
            <motion.p className="more_review" variants={star}>Yok baca sama sama "bismillah"</motion.p>
          </motion.div>
        </div>

        <motion.div className="right_content_wrapper">          
          <motion.img src={process.env.PUBLIC_URL + '/assets/images/bw1.png'} alt="bg" initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, delay:0.8}}/>
        </motion.div>
      </motion.div>
      
      <div ref={ref}>
      <Card />
      </div>

      <div ref={fes}>
      <Slide />
      </div>
      




    </motion.div>
  );
}

export default App;


//lets start framer motion......