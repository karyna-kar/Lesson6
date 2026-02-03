// Написать метод fill, который заполнит ваше имя и возраст для объекта user
// * починить код, чтобы он работал - корректно выводил имя и возраст, не удаляю переменную fill

const counter = {
  user: { name: "", age: 0 },

  fill() {
    this.user.name = "Karina";
    this.user.age = 28;
  },

  log() {
    console.log(JSON.stringify(this.user));
  },
};

/*const fill = counter.fill();
fill();*/
counter.fill();

counter.log();
