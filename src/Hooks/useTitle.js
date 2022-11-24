import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
     document.title = `${title} - Recycle Bin`;
    }, [title])

    }

export default useTitle;