const SERVER_URL = "https://apibusplus.onrender.com"

export async function get({url, token}){
    try{
        const res = await fetch(`${SERVER_URL}/${url}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            },
        });
        const res_data = await res.json();
        return res_data;
    }
    catch(err){
        console.log(err);
    }
}
export async function post({url,data,token}){
    try{
        const res = await fetch(`${SERVER_URL}/${url}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            },
            body: data
        });
        const res_data = await res.json();
        return res_data;
    }
    catch(err){
        console.log(err);
    }
}
export async function _delete({url,token}){
    try{
        const res = await fetch(`${SERVER_URL}/${url}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            },
        });
        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}
export async function patch({url,data,token}){
    try{
        const res = await fetch(`${SERVER_URL}/${url}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            },
            body: data
        });
        const res_data = await res.json();
        return res_data;
    }
    catch(err){
        console.log(err);
    }
}