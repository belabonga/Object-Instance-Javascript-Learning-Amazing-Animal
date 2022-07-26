# Amazing Animal

## Learning Competencies
Pemodelan sistem dengan object atau class
Menggunakan class dan object instance di JavaScript
Dapat menggunakan properti default dan dinamis dalam pembuatan instance
Dapat membuat class dan instance dengan penamaan yang benar

## Summary
Untuk memenuhi keinginan para pecinta hewan, mari kita tuangkan hewan-hewan tersebut ke dalam konsep OOP!	

## Release 0: Membuat class Animal
1. Buatlah sebuah class yang bernama Animal dan memiliki properti sebagai berikut: 
- name (Nama hewan)
- age (Umur hewan)
- type (Jenis hewan)
- favouriteFoods (Makanan-makanan kesukaan hewan tsb)
- totalLegs (Jumlah kaki hewan)

2.	Buatlah object instance dari Animal (Instantiation). Berikut contoh output suatu instance kucing:

```js
const ruruTheCat = new Animal() //proses instantiate
console.log(ruruTheCat) // Hasil instantiate disebut instance
/*
    Animal {
        name: "Ruru";
        age: 1,
        type: "Cat",
        favouriteFoods: ["Salmon", "Tuna", "Chicken"],
        totalLegs: 4
    }
*/

ruruTheCat.name = "Ruru the Cat" // Jika mengganti properti nama
console.log(ruruTheCat)
/*
    Animal {
        name: "Ruru the Cat";
        age: 1,
        type: "Cat",
        favouriteFoods: ["Salmon", "Tuna", "Chicken"],
        totalLegs: 4
    }
*/
```

Pada release 0 ini untuk semua properti di hardcode sesuai output di gambar atas, jika sudah sesuai silahkan melanjutkan ke release 1.

Release 1: Membuat Instance Method move dan getInformation
Hewan kesayanganmu juga bisa bergerak loh! Buatlah instance method move() dalam class Animal. Berikut contoh pemanggilan method move: 

```js
ruruTheCat.move()
// I walking and running with my legs
```

2. Jangan lupa, kamu juga harus melampirkan biodata dari hewan kesayanganmu.. Buatlah instance method bernama getInformation(), yang berisi data name, age, type, favouriteFoods. Method ini juga memanggil method move yang sudah dibuat tadi. Oh iya, method ini juga menerima 1 parameter kata salam ya!

```js
ruruTheCat.getInformation("Annyeong haseo...")
/*
    I'm walking and running with my legs
    Annyeong haseo.. My name Ruru The Cat
    My current age is 1 year(s) old
    I am a Cat
    My favorite foods are Salmon, Tuna, Chicken.
*/
```

## Release 2: Membuat Properti Default dan Dinamis
Ingat! Hewan itu bisa berbagai jenis loh. Bila saat kamu membuat beberapa instance, ternyata menghasilkan hal yang sama, berarti ada yang kurang tepat ya dengan kodemu!
Buatlah properti name, age, type, dan favouriteFoods menjadi dinamis!

```js
const charlieTheDog = new Animal("Charlie", 2, "Dog", ["Meat", "Cake"])
console.log(charlieTheDog)
/*
    Animal {
        name: "Charlie";
        age: 2,
        type: "Dog",
        favouriteFoods: ["Meat", "Cake"],
        totalLegs: 4
    }
*/

charlieTheDog.move()
// Im walking and running with my legs

charlieTheDog.getInformation("Sawadikap!")
/*
    I'm walking and running with my legs
    Sawadikap My name is Charlie
    My current age is 2 year(s) old
    I am a Dog
    My favorite foods are Meat, Cake.
*/
```

Oops! Jangan lupa, ada hewan semisal ikan yang tidak mempunyai kaki loh! Sehingga tidak memiliki kaki dan cara bergeraknya pun berbeda. Tetapi asumsi, kebanyakan hewan berkaki empat ya! Hint: Kalian bisa gunakan default parameter.

```js
const charlieTheDog = new Animal("Charlie", 2, "Dog", ["Meat", "Cake"])
const nemoTheFish = new Animal("Nemo", 1, "Fish", ["Pellets", "Moss", "Worms"], 0)

console.log(nemoTheFish)
/*
    Animal {
        name: "Nemo";
        age: 1,
        type: "Fish",
        favouriteFoods: ["Pellets", "Moss", "Worms"],
        totalLegs: 0
    }
*/

nemoTheFish.move()
// I use my fins to swimming
```

```js
nemoTheFish.getInformation(“Aloha”)
/* 
  I use my fins to swimming
  Aloha My name Nemo
  My current age is 1 years(s) old
  I am a Fish 
  My favorite foods are Pellets, Moss, Worms
*/

```
