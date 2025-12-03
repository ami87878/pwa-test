 'use strict'
    
    let info = null;
    const form = document.querySelector('.form');
    
    const dinamic=document.querySelector('.dinamic')
    

    async function getApi() {

        const url='https://foodish-api.com/api/images'
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
            //console.log('img',img)//
            //img.src=data.image
            console.log(data)

        } catch (error) {

            console.log(error)

        }
    }

    form.addEventListener('submit', (e) => {

        e.preventDefault();
        const input=e.target[0]
        info = input.value;
        getApi()

    })
