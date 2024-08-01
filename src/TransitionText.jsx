import {motion} from 'framer-motion';

const TransitionText = ({children, delay}) => {
  const animationProps = {
    initial : { opacity: 0, y: 20},
    animate: { opacity: 1, y: 0},
    transition: {ease: "linear", delay}
  }

  return (
    <motion.div {...animationProps}>
      {children}
    </motion.div>
  )
};

export default TransitionText;