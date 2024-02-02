const baseURL = 'http://owu.linkpc.net/carsAPI/v1';



const saveCars = (car) => {
    return fetch(baseURL,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
};

export { baseURL, saveCars}