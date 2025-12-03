'use strict'

let info = null;
const form = document.querySelector('.form');

const dinamic = document.querySelector('.dinamic')


async function installServiceWorkerAsync() {
    if ('serviceWorker' in navigator) {
        try {
            let serviceWorker = await navigator.serviceWorker.register('/sw.js')
            console.log(`Service worker registered ${serviceWorker}`)
        } catch (err) {
            console.error(`Failed to register service worker: ${err}`)
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.body.onload = function () {
        installServiceWorkerAsync()
    }
})


async function getApi() {

    const url = 'https://foodish-api.com/api/images'
    try {

        const res = await fetch(`${url}/${info}`);

        if (!res.ok) {
            console.log('error')
            throw new Error("error ocuured");

        }

        const data = await res.json();
        dinamic.insertAdjacentHTML('afterbegin',
            `
            <div class='image-wrapper'>
                
                <img class="img" src=${data.image} />
                <p>${info}</>
            </div>
            
            `)


    } catch (error) {

        console.log(error)

    }
}

form.addEventListener('submit', (e) => {

    e.preventDefault();
    const input = e.target[0]
    info = input.value;
    getApi()

})
