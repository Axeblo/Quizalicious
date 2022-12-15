
import "./loginView.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 3, yoyo: Infinity, ease: "easeIn" }
const transition2 = { duration: 1, yoyo: Infinity, ease: "" , delay: 3}
function LoginView(props) {

    return <div className="loginView">


        {/* <img src=" Quizalicious logo.svg" className="blob" /> */}
        <div className="newBlob">
            <motion.svg

                width="130"
                height="130"
                viewBox="120 150 220 415"
                initial={{y:200,scale:1.3}}
                animate={{y:0,scale:1}}
                transition={{duration: 1, yoyo: Infinity, ease:"easeInOut", delay: 2.5}}
            >
                {/* <motion.path
                    cx="100"
                    cy="100"
                    r="80"
                    stroke="#ff0055"
                    variants={draw}
                    custom={1}
                /> */}
                <motion.path
                    fill="#646cff00"
                    // fill="transparent"
                    pathLength="0"
                    fillOpacity="1"
                    strokeWidth="4"
                    stroke="#646cff"
                    strokeLinecap="round"
                    d="M 231.49921 152.61456 C 220.59229 152.61394 217.72664 153.15573 206.99921 157.24737 C 189.5337 163.90905 168.9341 183.76085 155.37421 206.99933 C 150.92148 214.63025 143.99921 228.35755 143.99921 229.55597 C 143.99921 229.81227 143.1512 231.92954 142.11444 234.26104 C 141.07767 236.59254 139.32239 240.97433 138.2121 243.99933 C 132.80121 258.74133 134.49028 256.86802 122.90351 260.97784 C 109.53358 265.72016 103.6503 268.25637 92.128115 274.24347 C 65.870327 287.8874 45.077169 307.01905 35.14374 326.67706 C 29.342141 338.15828 26.991547 357.56282 29.89374 369.99933 C 31.14207 375.34868 39.090995 392.87733 41.366396 395.2962 C 41.989456 395.95855 43.738534 398.15694 45.251161 400.18292 C 59.795268 419.66288 89.402473 438.60831 123.99921 450.56964 L 133.49921 453.85284 L 136.08319 461.42706 C 137.50374 465.59201 138.96624 469.2984 139.33319 469.66534 C 139.70013 470.03229 139.99921 470.93773 139.99921 471.67706 C 139.99921 476.18208 155.85521 506.39692 164.11054 517.62433 C 181.44098 541.19407 201.92242 555.49848 222.49921 558.40167 C 228.85328 559.29817 245.05195 557.87521 251.21796 555.87823 C 277.80812 547.26653 301.4034 522.13146 318.53241 484.17315 C 321.42961 477.7529 324.98866 468.94872 326.44061 464.6087 C 330.02656 453.89005 330.27521 453.53377 335.19061 452.06378 C 351.14563 447.29233 375.56869 435.92432 387.49921 427.71612 C 419.80342 405.49082 434.99921 382.29531 434.99921 355.21222 C 434.99921 331.21234 421.2694 308.42512 394.99921 288.82354 C 379.98309 277.61923 356.95691 266.04719 337.22382 259.78839 C 330.46699 257.64531 329.60006 256.64559 327.00311 247.99933 C 326.25974 245.52433 325.27975 243.07261 324.82538 242.55011 C 324.37101 242.02761 323.99921 241.00939 323.99921 240.28839 C 323.99921 236.63868 309.7573 208.38172 302.68476 197.99933 C 290.11339 179.54475 277.11076 167.47597 261.36054 159.64386 C 250.22767 154.10781 243.88608 152.61527 231.49921 152.61456 z M 322.8078 194.65948 C 321.30429 194.69142 320.4366 194.87386 320.22772 195.20636 C 319.8798 195.76015 321.47747 200.01817 323.77655 204.66925 C 328.99409 215.22429 330.18013 217.94845 334.09101 228.34503 C 335.8178 232.93553 337.63632 237.70605 338.13007 238.94659 C 338.62382 240.18714 339.02655 241.99708 339.02655 242.96808 C 339.02655 245.281 341.54006 247.28266 346.39179 248.83331 C 349.90385 249.95579 357.70651 252.75501 363.08319 254.82159 C 367.59376 256.55526 370.4724 257.8492 380.26874 262.54425 C 385.93936 265.26196 391.01969 267.35971 391.55976 267.20636 C 393.12056 266.76317 392.18284 253.18353 390.02851 245.03839 C 382.45141 216.39082 360.13951 198.0396 329.20819 195.01495 C 326.45216 194.74545 324.31131 194.62754 322.8078 194.65948 z M 140.6496 194.70245 C 136.60094 194.55664 128.73557 195.46271 122.51093 196.96026 C 106.70719 200.76238 91.525519 211.00628 82.86249 223.71222 C 79.310405 228.92201 74.82262 239.24072 73.159365 246.02081 C 71.710318 251.92771 70.571521 264.21154 71.298036 266.10479 C 71.618446 266.93977 72.069861 267.62237 72.301943 267.62237 C 72.534026 267.62237 76.636754 265.66924 81.417177 263.28253 C 90.715034 258.64041 105.6441 252.54692 116.2746 249.05401 C 123.24412 246.76402 123.14133 246.88577 126.29413 237.18292 C 128.78467 229.5182 133.76812 217.42526 138.94061 206.49151 C 141.6889 200.68211 143.6155 195.60781 143.22382 195.21612 C 142.92454 194.91685 141.99915 194.75106 140.6496 194.70245 z M 71.983583 443.94854 C 71.498088 443.89976 71.201797 443.97958 71.077333 444.18097 C 70.079201 445.79597 72.383764 463.50623 74.360536 469.40948 C 83.126796 495.58821 102.83045 511.89901 130.59101 515.96222 C 140.02853 517.34354 143.62226 517.22888 143.62226 515.54229 C 143.62226 514.72239 141.47773 509.75119 138.85663 504.49542 C 134.20255 495.16317 128.64776 481.40219 125.41522 471.19854 C 123.40474 464.85236 122.30469 463.94064 113.1828 461.06573 C 109.13235 459.78917 105.39899 458.38354 104.88593 457.94073 C 104.37287 457.49792 103.37319 457.13409 102.66522 457.13409 C 101.10031 457.13409 95.328902 454.59534 81.928896 448.013 C 76.5982 445.39446 73.44007 444.09489 71.983583 443.94854 z M 391.48554 444.13604 C 390.18241 444.27041 387.65237 445.28193 384.12616 447.09308 C 380.11408 449.1538 371.97111 452.73999 366.03046 455.06183 C 360.0898 457.38364 354.34495 459.65506 353.26483 460.1087 C 352.18471 460.56235 349.53249 461.45728 347.37226 462.09893 C 340.86987 464.03038 340.63657 464.3258 336.82343 475.35675 C 332.83869 486.88407 327.627 499.50601 323.17694 508.41143 C 321.6329 511.50137 320.3703 514.7574 320.3703 515.64581 C 320.3703 517.05213 321.22666 517.17384 326.99726 516.58526 C 347.57502 514.48643 362.53406 507.75612 374.51288 495.20636 C 380.66227 488.76386 386.05705 479.39542 389.19061 469.71612 C 391.66514 462.07249 393.71964 445.64555 392.3703 444.2962 C 392.21717 444.14307 391.91991 444.09125 391.48554 444.13604 z "
                    initial={{ pathLength: 0, fill: "#646cff00", stroke: "#646cffff" }}
                    animate={{ pathLength: 1, fill: "#646cffff", stroke: "#646cff00" }}
                    exit={{ stroke: "#646cff00" }}

                    transition={transition} />
                <motion.path
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="4"
                    d="M 250.93085 235.5462 C 240.37707 235.6359 229.76228 236.23363 224.99921 237.29034 C 199.93651 242.8506 184.7574 252.29574 172.90546 269.7044 C 170.20765 273.66706 167.99921 277.14158 167.99921 277.42511 C 167.99921 277.70865 166.80618 280.54124 165.34686 283.72003 C 163.88755 286.89883 162.28271 291.07433 161.78046 292.99933 C 159.22743 302.78449 158.08276 308.02193 156.04413 319.24933 C 155.4699 322.41182 154.54921 327.47433 153.99921 330.49933 L 151.99921 341.49933 L 149.99921 352.49933 C 147.37996 366.90518 146.82509 370.13971 145.4621 378.91339 C 140.27698 412.29057 150.89639 434.00587 176.71601 442.82159 C 179.89695 443.90768 184.03288 445.06908 185.90546 445.40362 C 190.263 446.18212 191.99921 447.65597 191.99921 450.57354 C 191.99921 457.30398 198.18052 473.75329 203.36054 480.80987 C 208.28071 487.5125 217.83222 496.36452 222.97772 498.98956 C 236.97722 506.13157 254.86962 510.2269 274.74921 510.83917 L 279.99921 510.99933 L 279.99921 503.15753 C 279.99921 498.84388 280.29398 489.84387 280.65351 483.15753 L 281.3078 470.99933 L 276.90351 470.99933 C 267.30396 470.99633 253.66838 467.23024 245.9953 462.46222 C 240.9998 459.35784 234.99921 452.39528 234.99921 449.70245 C 234.99921 447.69198 235.76416 447.25938 241.24921 446.16534 C 264.44493 441.53878 280.48868 432.06508 291.48944 416.49933 C 297.65778 407.77131 303.91093 393.77685 306.00897 383.99933 C 307.64657 376.36768 309.81558 365.14804 310.93866 358.49933 C 311.58899 354.64933 312.50824 349.47432 312.98358 346.99933 C 316.1413 330.55804 319.85003 308.59434 320.9914 299.57354 C 323.33156 281.07797 319.22732 264.51242 309.51483 253.25519 C 303.3207 246.0759 291.12026 240.01452 276.49921 236.85284 C 271.97746 235.87505 261.48463 235.4565 250.93085 235.5462 z M 244.71405 278.99933 C 257.26403 278.99933 264.04386 283.20378 267.5578 293.16339 C 270.05106 300.23002 269.74485 303.39826 262.99921 340.49933 L 260.99921 351.49933 C 260.44921 354.52432 259.57618 359.36183 259.0578 362.24933 C 255.25539 383.42951 253.02599 389.16938 245.87616 396.19464 C 240.59996 401.3789 234.53633 403.36352 222.99921 403.68097 C 214.46246 403.91587 211.75131 403.62246 208.49921 402.11847 C 198.5229 397.5049 196.01783 391.10925 197.91718 375.10479 C 198.60937 369.27221 199.54529 362.69932 199.99726 360.49933 C 200.44923 358.29933 201.32424 353.34932 201.94061 349.49933 C 202.55699 345.64933 203.47549 340.24932 203.98358 337.49933 C 204.49168 334.74933 205.39879 329.57432 205.99921 325.99933 C 207.99964 314.08854 209.11036 308.53094 210.19452 304.99933 C 215.57691 287.46641 226.8187 278.99933 244.71405 278.99933 z "
                    initial={{ pathLength: 0, fill: "#ffffff00", stroke: "#ffffffff" }}
                    animate={{ pathLength: 1, fill: "#ffffffff", stroke: "#ffffff00" }}
                    transition={transition} />

            </motion.svg>
        </div>
        <motion.img src="./Bubo_small.png"
        className="bubo"
        alt="Bubo!"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={transition2} />
        <div className="error">{errorHandling()}</div>
        <motion.div className="loginBox" initial={{opacity:0}} animate={{opacity:1}} transition={transition2}>
            <form onSubmit={userLogInACB}>
                <label htmlFor="email">Email address:</label><br />
                <input type="email" placeholder="Email" onChange={userEmailACB}></input>
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="Password" onChange={userPasswordACB} ></input>
                <Link to={"/CreateAccount"}>Create a new account</Link>
                <button type="submit">Log in</button>
            </form>
            <img src="./Quizalicious logo full dark theme.png" className="quiza" alt="" />
        </motion.div>
    </div>;

    function userEmailACB(event) {
        props.onUserEmail(event.target.value)
    }

    function userPasswordACB(event) {
        props.onUserPassword(event.target.value)
    }

    function userLogInACB(event) {
        event.preventDefault()
        props.onUserLogIn()
    }

    function errorHandling() {
        if (!props.error.message)
            return;

        if (props.error.message.includes("auth/wrong-password")) {
            return "Wrong password, try again";
        }
        if (props.error.message.includes("auth/invalid-email")) {
            return "Wrong email, try again";
        }

        if (props.error.message.includes("auth/user-not-found")) {
            return "No user found with this email";
        }
        if (props.error.message.includes("auth/internal-error")) {
            return "Please enter a password";
        }

    }
}

export default LoginView;