import * as React from "react"
import { motion } from "framer-motion"
const SvgComponent = (props) => (
  <svg
    width={150}
    height={150}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.g 
        id="Timeline Circle"
        initial={{opacity:1}}
        animate={{scale:[0,1.05,1]}}
        transition={{
            duration: 0.5,
            delay:0.3,
            ease:"easeInOut"
        }}
        >
      <motion.circle 
        id="Outer Circle" 
        cx={75} 
        cy={75} 
        r={75} 
        fill="#C93030" />
      <motion.circle 
        id="Inner Circle" 
        cx={75} 
        cy={75} 
        r={50} 
        fill="white" />
    </motion.g>
  </svg>
)
export { SvgComponent as TimelineCircle }
