import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
export const useUserdetails = () => {
    const [decode, setDecode] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            console.log(decoded)
            setDecode(decoded);
        }
        else {
            setDecode(null);
        }


    }, [])


    return (decode)
}


