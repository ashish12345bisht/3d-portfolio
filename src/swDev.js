export default function swDev(){
    let swURL = `sw.js`;
    navigator.serviceWorker.register(swURL).then((response)=>{
        console.warn("response",response);
    })
}