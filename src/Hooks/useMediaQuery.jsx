import React, {useState,useEffect} from 'react'




const useMediaQuery = (query) => {

    const [matches,setMaches] = useState(false);

    useEffect(()=> {
        const media  = window.matchMedia(query)
        if(media.matches !== matches){
            setMaches(media.matches);
        }

        const listner = () => setMaches(media.matches);
        window.addEventListener('resize', listner);

        return () => window.removeEventListener('resize',listner);
     }, [matches,query])

     return matches;
}

export default useMediaQuery;
