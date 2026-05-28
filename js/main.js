function oK(){
    return new Promise((resolve)=>{
        function hiWorld(){
            console.log("hi");
        }
        setTimeout(()=>{
            resolve(hiWorld());
        },1);
    });
}; //oK

function second(){
    return new Promise ((resolve)=>{
        function helloWorld(){
            console.log('PisimiZda');

        }
        resolve(helloWorld());
    })
}
function menu(){
    return new Promise((resolve)=>{
        function allOk(){
            const menuToggle = document.getElementById('menuToggle');
            const fullscreenMenu = document.getElementById('fullscreenMenu');

            function openMenu(){
                menuToggle.classList.add('active');
                fullscreenMenu.classList.add('active');
            }

            function closeMenu(){
                menuToggle.classList.remove('active');
                fullscreenMenu.classList.remove('active');
            }

            function toggleMenu(){
                fullscreenMenu.classList.contains('active')
                    ? closeMenu()
                    : openMenu();
            }

            /* КНОПКА */
            menuToggle.addEventListener('click', (e)=>{
                e.stopPropagation();
                toggleMenu();
            });

            /* КЛИК ПО ФОНУ */
            fullscreenMenu.addEventListener('click', (e)=>{
                if(e.target === fullscreenMenu){
                    closeMenu();
                }
            });

            /* ЗАКРЫТИЕ ПО ССЫЛКАМ */
            document.querySelectorAll('#fullscreenMenu a').forEach(link=>{
                link.addEventListener('click', ()=>{
                    closeMenu();
                });
            });
        };///allOk

        resolve(allOk());
    })




};//menu
async function main(){
    await oK();
    await second();
    await menu();
}
main();
