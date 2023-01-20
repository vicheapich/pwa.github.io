if("serviceWorker" in navigator){
    navigator.serviceWorker.register("software.js").then(registration =>{
        console.log("SW Registered");
        console.log(registration);
    }).catch(error =>{
        console.log("SW Register failed");
        console.log(error);
    })
}