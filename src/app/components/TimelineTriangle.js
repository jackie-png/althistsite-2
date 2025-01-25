import * as React from "react"
import { motion } from "framer-motion"
const SvgComponent = (props) => (
  <svg
    viewBox="0 0 70 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M0.5 40.3101V2.68986C0.5 1.3496 1.79244 0.388635 3.07593 0.77458L68.8153 20.5424C69.7647 20.8278 69.7647 22.1722 68.8153 22.4576L3.07592 42.2254C1.79243 42.6114 0.5 41.6504 0.5 40.3101Z"
      fill="#C93030"
    />
  </svg>
)
export { SvgComponent as TimelineTriangle }
