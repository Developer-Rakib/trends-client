import { useEffect, useState } from "react";
import axios from 'axios'

const useCloths = () => {
    let [cloths, setCloths] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/cloths")
            .then(data => setCloths(data.data))

    }, [])
    return [cloths, setCloths];
}
export default useCloths;