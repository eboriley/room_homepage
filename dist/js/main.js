const _humburger = document.getElementById("humburger");
const _close = document.getElementById("close");
const navigation = document.querySelector(".nav");

const left_button = document.querySelectorAll("#left-button");
const right_button = document.querySelectorAll("#right-button");
const _image = document.querySelectorAll(".image");
const _info_content = document.querySelectorAll(".info_content");
const _image_child = _image.children;
const _img = document.querySelectorAll(".imgg");
const _img_d = document.querySelectorAll(".imgd");
const _heading = document.querySelectorAll(".heading");
const _message = document.querySelectorAll(".message");


const images = ['../dist/images/mobile-image-hero-1.jpg',
    '../dist/images/mobile-image-hero-2.jpg',
    '../dist/images/mobile-image-hero-3.jpg']

const images_d = ['../dist/images/desktop-image-hero-1.jpg',
    '../dist/images/desktop-image-hero-2.jpg',
    '../dist/images/desktop-image-hero-3.jpg']


const infos = [
    {
        heading: 'Discover innovative ways to decorate',
        message: 'We provide unmatched quality, comfort,' +
            ' and style for property owners across the country.' +
            ' Our experts combine form andnfunction in bringing' +
            ' your vision to life.Create a room in your own style' +
            ' with our collection and make your property a ' +
            'reflection of you and what you love.'
    },
    {
        heading: 'We are available all across the globe',
        message: 'With stores all over the world, it\'s ' +
            ' easy for you to find furniture for your home or ' +
            'place of business. Locally, we\’re in most major' +
            ' cities throughout the country. Find the branch' +
            ' nearest you using our store locator. Any ' +
            'questions? Don\'t hesitate to contact us today.'
    },
    {
        heading: 'Manufactured with the best materials',
        message: 'Our modern furniture store provide a ' +
            'high level of quality. Our company has invested ' +
            'in advanced technology to ensure that every ' +
            'product is made as perfect and as consistent as ' +
            'possible. With three decades of experience in this' +
            ' industry, we understand what customers want' +
            ' for their home and office.'
    }
]

_humburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
})
_close.addEventListener("click", () => {
    navigation.classList.toggle("open");
})


let _image_count = images.indexOf(images[0]);

for (let i = 0; i < left_button.length; i++) {
    left_button[i].addEventListener("click", () => {
        console.log(_image_count);
        if (_image_count === images.indexOf(images[0])) {
            _image_count = images.indexOf(images[images.length - 1]);
            for (let i = 0; i < 3; i++) {
                if (i === 1) {
                    _img[i].src = images[_image_count];
                    _img_d[i].src = images_d[_image_count];
                    _heading[i].innerHTML = infos[_image_count].heading;
                    _message[i].innerHTML = infos[_image_count].message;

                }
                else {
                    _img[i].src = images[0];
                    _img_d[i].src = images_d[0];
                    _heading[i].innerHTML = infos[0].heading;
                    _message[i].innerHTML = infos[0].message;
                }
            }
            transitionImageBackward();
        }
        else if (_image_count === images.indexOf(images[images.length - 1])) {
            _image_count--;
            for (let i = 0; i < 3; i++) {
                if (i === 1) {
                    _img[i].src = images[_image_count];
                    _img_d[i].src = images_d[_image_count];
                    _heading[i].innerHTML = infos[_image_count].heading;
                    _message[i].innerHTML = infos[_image_count].message;
                }
                else {
                    _img[i].src = images[images.length - 1];
                    _img_d[i].src = images_d[images.length - 1];
                    _heading[i].innerHTML = infos[infos.length - 1].heading;
                    _message[i].innerHTML = infos[infos.length - 1].message;
                }
            }
            transitionImageBackward();
        } else {
            _image_count--;
            for (let i = 0; i < 3; i++) {
                if (i === 1) {
                    _img[i].src = images[_image_count];
                    _img_d[i].src = images_d[_image_count];
                    _heading[i].innerHTML = infos[_image_count].heading;
                    _message[i].innerHTML = infos[_image_count].message;
                }
                else {
                    _img[i].src = images[_image_count + 1];
                    _img_d[i].src = images_d[_image_count + 1];
                    _heading[i].innerHTML = infos[_image_count + 1].heading;
                    _message[i].innerHTML = infos[_image_count + 1].message;
                }
            }
            transitionImageBackward();
        }
    })

}



for (let i = 0; i < right_button.length; i++) {
    right_button[i].addEventListener("click", () => {

        if (_image_count === images.indexOf(images[images.length - 1])) {
            for (let i = 0; i < 3; i++) {
                if (i === 1) {
                    _img[i].src = images[0];
                    _img_d[i].src = images_d[0];
                    _heading[i].innerHTML = infos[0].heading;
                    _message[i].innerHTML = infos[0].message;
                }
                else {
                    _img[i].src = images[images.length - 1];
                    _img_d[i].src = images_d[images.length - 1];
                    _heading[i].innerHTML = infos[infos.length - 1].heading;
                    _message[i].innerHTML = infos[infos.length - 1].message;
                }
            }
            _image_count = 0;
            transitionImageForward();
        } else if (_image_count !== images.indexOf(images[images.length - 1])) {
            _image_count++;
            for (let i = 0; i < 3; i++) {
                if (i === 1) {
                    _img[i].src = images[_image_count];
                    _img_d[i].src = images_d[_image_count];
                    _heading[i].innerHTML = infos[_image_count].heading;
                    _message[i].innerHTML = infos[_image_count].message;
                }
                else {
                    _img[i].src = images[_image_count - 1];
                    _img_d[i].src = images_d[_image_count - 1];
                    _heading[i].innerHTML = infos[_image_count - 1].heading;
                    _message[i].innerHTML = infos[_image_count - 1].message;
                }
            }
            transitionImageForward();
        }
    })

}



const transitionImageForward = () => {
    for (let i = 0; i < 3; i++) {
        if (_image[i].classList.contains("backward")) {
            _image[i].classList.remove("backward");
        } else if (_image[i].classList.contains("backward_backward")) {
            _image[i].classList.remove("backward_backward");
        }
        if (_image[i].classList.contains("forward_forward")) {
            _image[i].classList.remove("forward_forward");
            _image[i].classList.add("forward");
            console.log("forward_forward");
        } else {
            _image[i].classList.add("forward_forward");
            console.log("forward else");
        }

    }
}
const transitionInfoForward = () => {
    for (let i = 0; i < 3; i++) {
        if (_info_content[i].classList.contains("backward")) {
            _info_content[i].classList.remove("backward");
        } else if (_info_content[i].classList.contains("backward_backward")) {
            _info_content[i].classList.remove("backward_backward");
        }
        if (_info_content[i].classList.contains("forward_forward")) {
            _info_content[i].classList.remove("forward_forward");
            _info_content[i].classList.add("forward");
            console.log("forward_forward");
        } else {
            _info_content[i].classList.add("forward_forward");
            console.log("forward else");
        }

    }
}


const transitionImageBackward = () => {
    for (let i = 0; i < 3; i++) {
        if (_image[i].classList.contains("forward")) {
            _image[i].classList.remove("forward");
        } else if (_image[i].classList.contains("forward_forward")) {
            _image[i].classList.remove("forward_forward");
        }
        if (_image[i].classList.contains("backward_backward")) {
            _image[i].classList.remove("backward_backward");
            _image[i].classList.add("backward");
        } else {
            _image[i].classList.add("backward_backward");
        }
    }

}
const transitionInfoBackward = () => {
    for (let i = 0; i < 3; i++) {
        if (_info_content[i].classList.contains("forward")) {
            _info_content[i].classList.remove("forward");
        } else if (_info_content[i].classList.contains("forward_forward")) {
            _info_content[i].classList.remove("forward_forward");
        }
        if (_info_content[i].classList.contains("backward_backward")) {
            _info_content[i].classList.remove("backward_backward");
            _info_content[i].classList.add("backward");
        } else {
            _info_content[i].classList.add("backward_backward");
        }
    }

}

const setAllImages = (img, index) => {
    let x = 0;
    for (let i = 0; i < 3; i++) {
        img[i] = x[index];
    }
    return img;
}