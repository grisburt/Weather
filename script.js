
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ["Montserrat", "sans-serif"],
            },
            fontSize : {
                xxl: ['41px','24px']
            },
            boxShadow: {
                button: '2px 2px 4px 0px rgba(0, 0, 0, 0.12), -2px -2px 4px 0px rgba(255, 255, 255, 0.25)',
                button2: '2px 2px 4px 0px rgba(0, 0, 0, 0.12) inset, -2px -2px 4px 0px rgba(255, 255, 255, 0.25) inset',
            }
        },
    },
};

document.querySelector("#heart").onclick = function(){
    document.querySelector("#heartEmpty").classList.toggle("hidden");
    document.querySelector("#heartFull").classList.toggle("hidden");
};



// const openModalButton = document.querySelector('#openModal');
// const modalOverlay = document.querySelector('#modalOverlay');
// const modal = document.querySelector('#modal');
// const main = document.querySelector('#main');

// function openModal() {
//     modalOverlay.classList.remove('hidden');
//     setTimeout(()=> {
//         modal.classList.remove('translate-y-full');
//     }, 100);

//     main.classList.toggle('hidden');

// }

// function closeModal() {
//     setTimeout(() => {
//         modal.classList.add('translate-y-full');
//     }, 100);
//     setTimeout (() => {
//         modalOverlay.classList.add('hidden');
//     },100);
//     main.classList.toggle('hidden');
// }

// openModalButton.addEventListener('click', openModal);
// modalOverlay.addEventListener('click', closeModal);

const modalOverlay = document.querySelector('#modalOverlay');
const buttonOpenModal = document.querySelector('#openModal');
const buttonCloseModal = document.querySelector('#closeModal');

function openModal() {
    modalOverlay.classList.remove('hidden','translate-y-full');
    modalOverlay.classList.add('-translate-y-full');
}
function closeModal() {
    modalOverlay.classList.remove('-translate-y-full');
    modalOverlay.classList.add('hidden','translate-y-full');
}

buttonOpenModal.addEventListener('click',openModal);
buttonCloseModal.addEventListener('click',closeModal);