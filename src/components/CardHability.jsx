import '../assets/styles/Cards.css';
import TailwindIcon from '../assets/SVG/tailwind-css.png';
import Mysql from '../assets/SVG/base-de-datos.png';
import Git from '../assets/SVG/git.png';
import GitHub from '../assets/SVG/github.png';
import Postman from '../assets/SVG/postman.svg';
/* import SVG from '../assets/SVG/Sprite.svg'; */

function CardHability(){
    return(
        <div className="card-hability min-h-[50vh] h-auto bg-white rounded-lg shadow-md my-8
                        flex flex-col justify-center items-center
                        xl:w-[50vw]
                        md:w-[80vw]">
            <section className='skills'>
                <h2 className="title-section text-black pt-4"><strong>Skills</strong></h2>
                <ul className='skills-ul flex flex-col justify-center items-center min-h-[50vh] text-black text-center
                                md:m-12 
                                xl:text-[200%] 
                                lg:text-[180%]
                                md:text-[150%]'>
                    <li className='li-item-text'>Desarrollo de aplicaciones web</li>
                    <li className='li-item-text'>Partrón de diseño MVC</li>
                    <li className='li-item-text'>Diseño de interfaces UI/UX</li>
                    <li className='li-item-text'>Desarrollo de API Rest</li>
                    <li className='li-item-text'>Diseño, desarrollo y administración de <strong>bases de datos SQL</strong></li>
                    <li className='li-item-text'>Gestión y administración de servidores <strong>Web </strong>con <strong>Nginx</strong></li>
                    <li className='li-item-text'>Manejo de software para el control de versiones <strong>"Git"</strong></li>
                </ul>
            </section>
            <section className='front-end'>
                <h2 className="title-section text-black"><strong>Front-End</strong></h2>
                    <div className='flex justify-center items-center my-8'>
                        <ul className='ul-list h-auto my-16
                                    md:grid md:grid-cols-2 md:gap-y-8
                                    lg:grid lg:grid-cols-5 lg:gap-y-8
                                    xl:grid xl:grid-cols-5 xl:gap-x-4 xl:justify-center content-center'>
                            <li className='li-item flex flex-col justify-center items-center'>
                                <i className="icon fa-brands fa-html5 text-orange-600"></i>
                            </li >
                            <li className='li-item flex flex-col justify-center items-center'>
                                <i className="icon fa-brands fa-css3-alt text-blue-500"></i></li>
                            <li className='li-item flex flex-col justify-center items-center'>
                                <i className="icon fa-brands fa-js text-yellow-400"></i>
                            </li>
                            <li className='li-item flex flex-col justify-center items-center'>
                                <i className="icon fa-brands fa-react text-cyan-400"></i>
                                </li>
                            <li className='li-item  flex flex-col justify-center items-center h-24'>
                                <img src={TailwindIcon} alt="" className='icon-img w-18 py-4'/>
                            </li>
                        </ul>
                    </div>
            </section>
            <section className='back-end'>
                <h2 className="title-section text-black"><strong>Back-End</strong></h2>
                <div className='flex justify-center items-center my-8'>
                    <ul className='ul-list h-auto my-16 
                                md:grid md:grid-cols-2 md:gap-y-8
                                lg:grid lg:grid-cols-5 lg:gap-y-8
                                xl:grid xl:grid-cols-5 xl:gap-x-4'>
                        <li className='li-item flex flex-col justify-center items-center'>
                            <i className="icon fa-brands fa-php text-purple-800"></i>
                        </li>
                        <li className='li-item flex flex-col justify-center items-center'>
                            <img src={Mysql} alt="Mysql" className='icon-img w-18'/>
                        </li>
                        <li className='li-item flex flex-col justify-center items-center'>
                            <img src={Git} alt="Git" className='icon-img w-18'/>
                        </li>
                        <li className='li-item flex flex-col justify-center items-center'>
                            <img src={GitHub} alt="GitHub" className='icon-img w-18'/>
                        </li>
                        <li className='li-item flex flex-col justify-center items-center h-24'>
                            <img src={Postman} alt="Postman" className='icon-img w-18'/>
                        </li>
                    </ul>                    
                </div>
            </section>
        </div>
    );
}

export default CardHability;
// This component is currently empty and can be used to display abilities or skills in the future.