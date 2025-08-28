import * as config from "./config"

export const getHolidays = async (ano) =>{
    const url = `${config.url_api()}/feriados/v1/${ano}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };

    try{
        const response = await fetch(url, options)
        if(!response.ok){   
            throw new Error(`HTTP error! ${response.status}`)
            return;
        }

        return await response.json()
    }catch(error){
        console.error('Error fetching Holiday:', error)
        throw error; 
    }
}