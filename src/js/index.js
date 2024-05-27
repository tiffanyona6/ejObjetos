// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const user = {
  name: "John",
  surname: "Doe",
  age: 25,
  hobbies: ["leer", "tocar la guitarra", "pasear con las cabras"],
  pets: [
    { name: "Max", type: "perro" },
    { name: "Whiskers", type: "gato" },
  ],
  address: {
    street: "123 Main Street",
    city: "Gotham",
    state: "California",
    postalCode: "12345",
    country: "USA",
  },
  phone: "+1234567890",
  email: "johndoe@example.com",
  occupation: "Ingeniero de software",
  education: "Master en ciencia de datos",
};
console.log(
  `Hola, me llamo ${user.name} ${user.surname} y tengo ${user.age} años. Mis dos hobbies favoritos, son ${user.hobbies}
  Todo esto me gusta hacerlo en ${user.address.city},  ${user.address.country}, me refiero a estados unidos :P
  Por cierto soy ${user.occupation} realizé mi ${user.education} en la Universidad de Harvard. Llevo dedicandome a esto más de 2 años, asi que... te dejo por aquí mi número de teléfono ${user.phone} y mi correo electrónico ${user.email}. GRACIAS `
);

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: [],
    },
    thirdFloor: {
      numbersDouble: [],
    },
  },
  fourthFloor: {
    numbersDividedBy2: [],
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: [],
  },
};

for (let i = 0; i < data.numbers.length; i++) {
  data.firstFloor.secondFloor.numbersPlus2.push(data.numbers[i] + 2);

  data.firstFloor.thirdFloor.numbersDouble.push(data.numbers[i] * 2);

  data.fourthFloor.numbersDividedBy2.push(data.numbers[i] / 2);

  if (data.numbers[i] % 2 === 0) {
    data.fifthFloor.onlyEven.push(data.numbers[i]);
  } else {
    data.fifthFloor.onlyOdd.push(data.numbers[i]);
  }
}
console.log(data);

const data2 = {
  firstFloor: {
    vowels: ["a", "e", "i", "o", "u"],
  },
  secondFloor: {
    constants: ["s", "n", "t", "d", "c", "b", "r", "c", "m", "v", "t"],
  },

  fourthFloor: {
    asciiCode: [],
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: [],
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: "",
  },
};
