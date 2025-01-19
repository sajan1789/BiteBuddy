
export const getData = async () => {
    const response = await fetch("https://dukaan-xn7o.onrender.com/products")
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
};


// user 
// create user
export const createUser = async (newUser) => {
    const response = await fetch("https://dukaan-xn7o.onrender.com/customers",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
}