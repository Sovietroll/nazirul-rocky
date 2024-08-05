import { motion } from "framer-motion";



const Home = () => {

  return (

    <motion.div
      initial = {{ opacity: 0, y: 10}}
      animate = {{opacity: 1, y: 0}}
      style={{marginTop:"50px"}}
    >

      <h1>Home</h1>
      <p>Welcome to Nazirul Rocky blog</p>

    </motion.div>

    );
}
 
export default Home;

// return (
//   <motion.div
//     className="box"
//     initial={{ opacity: 0, scale: 0.5 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{
//       duration: 0.8,
//       delay: 0.5,
//       ease: [0, 0.71, 0.2, 1.01]