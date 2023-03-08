let cacheData = "APP";
console.log("asof")
this.addEventListener("install",(e)=>{
    e.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                
            ])
        })
    )
})