import { useEffect, useState } from "react";
import axios from 'axios'

const useCloths = () => {
    let [cloths, setCloths] = useState([]);
    useEffect(() => {
        axios.get("https://floating-coast-61520.herokuapp.com/cloths")
            .then(data => setCloths(data.data))

    }, [])
    return [cloths, setCloths];
}
export default useCloths;