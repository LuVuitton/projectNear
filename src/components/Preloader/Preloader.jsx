import preloaderS from './Preloader.module.css'
const Preloader =()=>{
    return(
        <div className={preloaderS.mainWrapper}>
            <img src="preloader/preloader.gif" alt="Loading..." />
         </div>
    )
}

export default Preloader;