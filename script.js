const dataAraay = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
]


const cardConatiner = document.getElementById("card-container")

dataAraay.map((content) => {
const card = document.createElement('div');
card.classList.add("card-form")

const userId = document.createElement('span');
userId.classList.add("userId")
userId.textContent = content.userId;

const image = document.createElement("img");
image.classList.add("card-image");
image.src = content.userImage;

const userName = document.createElement("h2");
userName.classList.add("userName");
userName.textContent = content.userName;


const userLastName = document.createElement("h2");
userLastName.classList.add("userLastName");
userLastName.textContent = content.userLastName;

const userAge = document.createElement("h2");
userAge.classList.add("userAge");
userAge.textContent = content.userAge + ":years old";

const userAddresses = document.createElement("h2");
userAddresses.classList.add("userAddresses");
userAddresses.textContent = "Addresses: " + content.userAddresses;



card.appendChild(userId);
card.appendChild(image);
card.appendChild(userName);
card.appendChild(userLastName);
card.appendChild(userAge);
card.appendChild(userAddresses);


cardConatiner.appendChild(card)

card.addEventListener("click", (event) => {

    card.style.backgroundColor = "black";
});
})