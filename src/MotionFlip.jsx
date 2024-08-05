import {motion} from 'framer-motion';

const MotionFlip = ({children, duration}) => {
  const animationProps = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {ease: "linear", duration: 1}
  }

  return(
    <motion.div {...animationProps}>
      {children}
    </motion.div>
  )
};

export default MotionFlip; 


