const options = {
    method: "GET",
};
fetch("https://api.thecatapi.com/v1/images/search?limit=10", options)
    .then(response => {
        return response.json();
    })
    .then(responseApi => {
        responseApi.forEach(imagem => {
            document.write(`<img src='${imagem.url}'/> <br/>`);
        });
    })
    .catch((error) => {
        console.log(error);
    });