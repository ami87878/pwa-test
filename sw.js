const CATCH_NAME='V1';

 const storeFile=['index.html','style.css','main.js' ]

this.addEventListener('install',async()=>{
    
    const catche= await caches.open(CATCH_NAME);
    catche.addAll(storeFile)
})