console.log('person.js is running');

export const canDrink = (age) => {
    return age >= 21;
}
export const isAdult = (age) => {
    return age >=18;
}
export default () => console.log('Hi! I am a default function.')