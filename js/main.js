const keyApi = 'WdbMQAX36cQUV66M2PZutvcyzXNMGbV0Q4xNU9VtjQQ';
const perPage = 12;

const imageContent = document.querySelector('.image__content');
let query = '';

const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');



const createPicture = (images) => {
    for(let i = 0; i < images.length; i++) {
        const imageBox = document.createElement('div');
        const imageImg = document.createElement('img');
        imageBox.className = 'image__box';
        imageImg.className = 'image__box-img';
        imageImg.src = images[i].urls.small;
        imageContent.append(imageBox);
        imageBox.append(imageImg)
    }   
}

const clearImages = () => {
    imageContent.innerHTML = '';
}

const pictureLoading = async (query) => {
    try {
        const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${keyApi}&count=${perPage}&query=${query}`);
        if(!res.ok) {
            throw new Error(responce.status)
            pictureLoading();
        }
        const data = await res.json();
        console.log(data)
        createPicture(data);     
    } catch(e) {
        console.log(e);
    }
       
}

pictureLoading();



searchBtn.addEventListener('click', () => {
    clearImages();
    pictureLoading(searchInput.value)
})

