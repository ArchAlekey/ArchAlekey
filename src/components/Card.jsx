import '../assets/styles/Cards.css';
import BtnCv from './BtnCv';

function Card({Foto, Nombre, Descripcion}){
    return(
        <div className="card bg-white shadow-md rounded-lg p-6
                        xl:w-[30vw]
                        lg:w-[40vw] 
                        md:w-[60vw] 
                        sm:w-[80vw]">
            <img src={Foto} alt={Foto} className='rounded-xl'/>
            <h3 className="text-[200%] text-black">{Nombre}</h3>
            <p className="text-gray-700 text-2xl my-4">{Descripcion}</p>
            <BtnCv CV={<i class="fa-solid fa-download text-3xl"></i>}/>
        </div>
    );
}

export default Card;