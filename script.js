
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
            },
        },
    },
};

document.querySelector("#heart").onclick = function(){
    document.querySelector("#heartEmpty").classList.toggle("hidden");
    document.querySelector("#heartFull").classList.toggle("hidden");
};


document.querySelector('#openModal').onclick =function(){
    document.querySelector('#modal').classList.toggle('hidden');
    document.querySelector('#modal').classList.add('animateslideInUp');
    document.querySelector('#modal').classList.remove('animateslideOutDOwn');

}
document.querySelector('#closeModal').onclick =function(){
    document.querySelector('#modal').classList.toggle('hidden');
    document.querySelector('#modal').classList.add('animateslideOutDOwn');
}
