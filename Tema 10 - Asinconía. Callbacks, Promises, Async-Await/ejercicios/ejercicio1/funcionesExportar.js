// Versión con fetch()
export function fetchDatos(url) { 
    return fetch(url)
        .then(res => { 
            if (!res.ok) throw new Error("Error en la petición"); 
            return res.json(); 
        }); 
}

// Version con async/await
export async function fetchDatos(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error en la petición");
    return await res.json();
}
