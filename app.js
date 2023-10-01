const btn = document.querySelector('.generate');
const id = document.querySelector('.id');
const advice = document.querySelector('.advice-text');
btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const response = await axios.get('https://api.adviceslip.com/advice');
    id.innerText = response.data.slip.id;
    advice.innerText = response.data.slip.advice;
})