# Class / Object Instance Learning - Amazing Animal

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

# Amazing Animal 2

## Learning Competencies
Pemodelan sistem dengan object atau class
Dapat mengimplementasikan inheritance
Dapat mengimplementasikan polymorphism overriding

## Summary
Setelah sebelumnya kita membuat hewan-hewan menggemaskan di Part 1, mari kita lanjut yuk, membuat hewan kita ini menjadi lebih luar biasa lagi!

## Release 0  Pastikan Amazing Animal part 1 kalian sudah BENAR ya!
Kerjakan di repo yang sama dengan part 1.

Di part 1, kalian telah berhasil membuat beberapa instance hewan dari class Animal dengan berbagai tipe pula. Dicontoh dibawah ini, ada 3 instance. Yaitu instance yang bertipe cat, dog dan fish.

<img width="483" alt="Screen Shot 2022-07-28 at 14 14 35" src="https://user-images.githubusercontent.com/22075597/181444094-135765cb-879f-46fa-894a-0a8ad52ac9a8.png">

Ketika jenis hewan berbeda, maka proses yang dilakukan suatu instance method pun bisa berbeda.

<img width="244" alt="Screen Shot 2022-07-28 at 14 14 55" src="https://user-images.githubusercontent.com/22075597/181444165-749e57b1-8da8-4655-84d6-8be554d6a5ef.png">

Untuk  menghasilkan output seperti diatas, pasti ada beberapa kondisional yang kalian terapkan dalam method move(). Bagaimana bila di masa depan akan ada 10 jenis hewan dengan cara gerak yang berbeda?

Bagaimana bila ada method speak(), apakah akan banyak kondisional lagi di dalamnya?
Apabila ada perubahan kode khusus untuk jenis kucing, kita harus mengubah semua kode untuk jenis hewan lainnya. Hal ini tentu membuat kode kalian tidak bersih dan rentan error ya!

## Release 1: Implementasi Inheritance
Maka, coba kita rapikan kodenya yuk! 
1. Buatlah class Cat, Dog dan Fish. Kemudian buatlah object instance cat, dog dan fish. 
(Jangan hapus class Animal ya)

<img width="477" alt="Screen Shot 2022-07-28 at 14 15 20" src="https://user-images.githubusercontent.com/22075597/181444235-3cf1079c-29e3-4952-b3fe-eb0a837b2bab.png">

Apakah kode kalian terlihat redundant (berulang)? Dengan properti dan method yang hampir sama? Bila iya, sekarang mari kita implementasikan Inheritance.

2. Kalian sudah mempunyai 4 class yaitu Animal, Cat, Dog dan Fish.
Untuk mengimplementasikan inheritance kita perlu menentukan yang mana Parent dan Child. Karena sifat inheritance ini akan mewarisi properti dan method yang dimiliki parent ke child.
Jika Parent (Orang tua) adalah suatu kategori umum dan Child (Anak) adalah suatu kategori khusus. Tentukan siapa Parent dan Child dari keempat class tersebut!
Cara penulisan kode Inheritance: 

<img width="323" alt="Screen Shot 2022-07-28 at 14 15 55" src="https://user-images.githubusercontent.com/22075597/181444342-4fb41b2a-93b8-4e58-9569-78264da79c70.png">


Note: 
1 Parent Class bisa mempunyai banyak Child Class.
Properti yang sudah ada di Parent Class, tidak perlu dibuat ulang dalam Child Class. (Manfaatkan parameter super agar properti tidak redundant)
Tetap pastikan bahwa properti name, age, favouriteFoods mempunyai properti dinamis.
Ingat, jika cara inheritance mu benar, semua properti dan method Parent sudah otomatis dimiliki juga oleh Child dan menjadikan kode kalian lebih DRY / tidak redundant.
Jika bingung, tanyakan buddy instruktur nya ya!

3. Tambahkan properti totalFins (sirip) khusus untuk class Fish. Sehingga output instance setelah inheritance dapat dilihat seperti dibawah ini:

<img width="407" alt="Screen Shot 2022-07-28 at 14 16 34" src="https://user-images.githubusercontent.com/22075597/181444462-2636fd6a-3d09-4751-b7eb-835fe1e98bbf.png">

Note. Perhatikan parameter saat instantiate.

## Release 2: Implementasi Polymorphism Overriding
Karakteristik Polymorphism akan memungkinkan perilaku atau proses yang berbeda di dalam suatu instance method, walau child class memiliki nama method dengan yang sama dengan nama method dalam parent class.
1. Pastikan method move() pada class Fish sudah menerapkan polymorphism overriding, karena mempunyai proses yang berbeda!

<img width="238" alt="Screen Shot 2022-07-28 at 14 17 05" src="https://user-images.githubusercontent.com/22075597/181444563-2988ce96-cc88-4305-b49a-571e3802f644.png">

## Release 3: Enhance Your Animal!
Hewan kalian dapat bertransformasi dan memiliki kekuatan super!  Buatlah class SuperPower dan class hewan yang berkekuatan super. Kamu bebas berkreasi ya! Tetap gunakan konsep Inheritance dan Polymorphism bila ada.

Berikut contoh pemanggilannya. Kalau kamu kehabisan ide ya.

<img width="423" alt="Screen Shot 2022-07-28 at 14 17 31" src="https://user-images.githubusercontent.com/22075597/181444652-a02deaf9-8b7e-42db-a15c-7b2038a05b8f.png">
