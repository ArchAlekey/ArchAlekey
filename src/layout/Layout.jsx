import Card from "../components/Card";
import '../assets/styles/Layout.css';
import Areky from '../assets/img/Areky.jpg';
import InventariosAreky from '../assets/img/InvAreky.png';  
import CardHability from "../components/CardHability";


function Layout({Alias}){
    return(
        <div className="layout w-screen min-h-screen bg-sky-950">
            <header className="header w-auto h-[6vh] bg-black rounded-full my-8 px-10 flex flex-col justify-center border-1 border-solid border-slate-400 cursor-pointer hover:transform hover:scale-110 transition-transform duration-500">
                <a href="https://github.com/ArchAlekey?tab=repositories" target="_blank" rel="noreferrer" className="no-underline">
                    <h3 className="flex flex-col text-center content-center justify-center">
                        <strong className="text-sky-400 text-[190%]">{Alias}</strong>
                    </h3>
                </a>
            </header>
            <main className="main w-screen min-h-[70vh] h-auto flex flex-col justify-center items-center">
                <>
                    <Card 
                        Foto={Areky} 
                        Nombre={"Alejandro Hernández Rodríguez"} 
                        Descripcion={"Desarrollador web full stack con 2 años de experiencia en el desarrollo de aplicaciones web."}/>
                </>
                <>
                    <CardHability />
                </>
            </main>
            <footer className="footer w-screen min-h-[10vh] h-auto bg-sky-900 mt-4 py-6 text-gray-400">
                <div className="card-contacto grid grid-cols-2 w-[60%]">
                    <span className="flex flex-col justify-center content-center hover:text-white transition-colors duration-500 py-4">
                        <a href="https://api.whatsapp.com/send?phone=+5622068728&text=Hola,%20me%20interesan%20sus%20servicios%20como%20desarrollador." target="_blank" rel="noreferrer" className="no-underline flex flex-col justify-center items-center">
                            <i className="fa-brands fa-whatsapp flex flex-col justify-center content-center text-[150%]"></i>
                            <p className="text-[100%]">WhatsApp</p>                        
                        </a>
                    </span>
                    <span className="flex flex-col justify-center items-center hover:text-white transition-colors duration-500 py-4">
                        <a href="https://github.com/ArchAlekey?tab=repositories" target="_blank" rel="noreferrer" className="no-underline flex flex-col justify-center items-center">
                            <i className="fa-brands fa-github flex flex-col justify-center content-center text-[150%]"></i>
                            <p className="text-[100%]">GitHub</p>
                        </a>
                    </span>
                    <span className="flex flex-col justify-center items-center hover:text-white transition-colors duration-500 py-4">
                        <a href="https://www.linkedin.com/in/alex-hr-536526212" target="_blank" rel="noreferrer" className="no-underline flex flex-col justify-center items-center">
                            <i className="fa-brands fa-linkedin flex flex-col justify-center content-center text-[150%]"></i>
                            <p className="text-[100%]">LinkedIn</p>
                        </a>
                    </span>
                    <span className="flex flex-col justify-center items-center hover:text-white transition-colors duration-500 py-4">
                        <i className="fa-solid fa-envelope flex flex-col justify-center content-center text-[150%]"></i>
                        <p className="text-[80%]">alexmetal2001@gmail.com</p>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Layout;