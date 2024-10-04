


import React from 'react'
import { delay, motion } from 'framer-motion'

const motion = () => {

    // Variant 1 -> TO MAKE CODE CLEANER

    const motionContainer = {
        hidden: {
            x: "100vw",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,

            transition: {
                type: "spring",
                stiffness: "120",

                // Variant 2 , afterChildren

                delay: 1,
                when: "beforeChildren"
            }

        }
    }

    //Variant 2 

    const motionContainerofChild = {
        hidden: {
            x: "-100vw",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }


    //KeyFrames

    const keyFramesContainer = {
        hover: {
            scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
            // x:[-20,20,-20,20] can be done on the axis as well
        }
    }

    {/* Repeating Animations */ }

    const repeatingAnimationsContainer = {
        hover: {
            scale: 1.1,
            repeat: {
                repeat: 10,  // 5 times , Infinity also we can put 
            }
        }
    }

    return (

        <div>

            {/* Basic Animate Property */}

            <Typography component={motion.div}
                animate={{
                    rotateZ: 360, x: 100, y: 50,
                }}
                sx={{ fontSize: { xs: "3rem", md: "4rem" }, fontWeight: "300" }}
            >
                Samir Singh
            </Typography>


            <Typography component={motion.div}
                initial={{
                    y: -50,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                sx={{ fontSize: { xs: "3rem", md: "4rem" }, fontWeight: "300" }}
            >
                Samir Singh
            </Typography>
            <Typography component={motion.div}
                initial={{ x: "-100vw" }}
                animate={{
                    x: 0
                }}
                sx={{ fontSize: { xs: "3rem", md: "4rem" }, fontWeight: "300" }}
            >
                Samir Singh
            </Typography>


            {/* Transition Property  */}


            <Typography component={motion.div}
                initial={{ x: "-100vw" }}
                animate={{
                    x: 0
                }}
                transition={{ duration: "1", type: "tweek , spring", stiffness: 100 }}
                sx={{ fontSize: { xs: "3rem", md: "4rem" }, fontWeight: "300" }}
            >
                Samir Singh
            </Typography>


            {/* Hover Property  */}

            <motion.div
                whileHover={{
                    scale: 1.2, color: "red", originX: 0
                }}
                transition={{ type: "spring", stiffness: 300 }}>
                Hello Guys
            </motion.div>

            <motion.button

                whileHover={{
                    scale: 1.2,
                    textShadow: "1px 2px 3px green",
                    boxShadow: "1px 2px 3px red"
                }}>
                Press
            </motion.button>



            {/* Variants -> To make code cleaner  */}


            <Typography component={motion.div}
                variants={motionContainer}
                initial={hidden}
                animate={visible}

                sx={{ fontSize: { xs: "3rem", md: "4rem" }, fontWeight: "300" }}
            >
                Samir Singh
            </Typography>


            {/* Variant 2  -> Due to parent property child property overshadow so we use this property so that it would reflect after parent transition  */}


            <div variants={motionContainer}
                initial={hidden}
                animate={visible}>

                <div variants={motionContainerofChild}
                    initial={hidden}
                    animate={visible}>
                    Hello
                </div>
            </div>

            {/* KeyFrames -> To repeat the left , right ,top & Bottom */}

            <motion.div variant={keyFramesContainer}
                whileHover="hover">
                hello
            </motion.div>


            {/* Repeating Animations */}

            <motion.div variant={repeatingAnimationsContainer}
                whileHover="hover">
                hello
            </motion.div>

        </div>
    )
}

export default motion