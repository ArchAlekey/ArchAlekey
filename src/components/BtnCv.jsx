import CvDownload from '../../public/documents/CV-2025 - DEV.pdf';

function BtnCv({CV}){

    return(
        <div className="container-btn flex flex-col justify-center content-center">
            <a href={CvDownload} download>
                <button className="cursor-pointer 
                                    w-30 h-12 
                                    bg-sky-600 my-6 rounded-xl hover:bg-sky-200 duration-300 ease-in-out hover:text-sky-900"
                                    >
                    {CV}
                </button>
            </a>
        </div>
    )
}

export default BtnCv;