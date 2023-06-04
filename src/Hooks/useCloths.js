import { useEffect, useState } from "react";
import axios from 'axios'

const useCloths = () => {
    let [cloths, setCloths] = useState([]);
    useEffect(() => {
        axios.get("https://trends-c4kb.onrender.com/cloths")
            .then(data => setCloths(data.data))

    }, [])
    return [cloths, setCloths];
}
export default useCloths;