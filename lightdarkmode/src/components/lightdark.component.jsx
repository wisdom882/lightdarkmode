import React from 'react'
import './lightdark.styles.css'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" 
integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" 
crossorigin="anonymous" />

const Lightdark = () => {
    return(
        <section>
            <div class='card'>
            <div class='content'>
                <div class='imgText'>
                    <div class='imgBx'>
                        <img src="man.jpg" alt="man on desk" width="400" height="500"/>
                    </div>
                    <h3>William John<span>Graphic Designer
                    </span></h3>
                </div>
                <ul class ="sci ">
                    <ul>
                        <li><a href='#'><i class='fa fa-facebook 
                        aria-hidden='true></i></a></li>

                        <li><a href='#'><i class='fa fa-twitter 
                        aria-hidden='true></i></a></li>

                        <li><a href='#'><i class='fa fa-linkedin 
                        aria-hidden='true></i></a></li>
                    </ul>
                </ul>
            </div>
        </div>
        </section>
        
    );
}

export default Lightdark;