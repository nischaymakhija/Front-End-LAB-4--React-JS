import axios from 'axios';

const getDataFromServer = () => {
    return (
        axios.get("http://localhost:3000/items")
        .then(response => response.data)
    )
}

const pushData = (payeeName, setDate, price, product) => {
    let purchase = {
        payeeName,
        setDate,
        price,
        product
    }
    return (
        axios.post("http://localhost:3000/items", purchase, {
            headers : {'Content-Type': 'application/json'}
        }).then (response => response.data)
    )
}

export { 
    getDataFromServer,
    pushData
};