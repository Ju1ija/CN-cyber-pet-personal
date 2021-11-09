class Animal {
  constructor(name, age) {
    this.name = name,
      this.age = age,
      this.happyLevel = 100,
      this.hungerLevel = 50,
      this.thirstLevel = 50,
      this.tirednessLevel = 50
  }

  play() {
    if (this.happyLevel + 30 <= 100) {
      this.happyLevel += 30;
    } else {
      this.happyLevel = 100;
    }

    if (this.thirstLevel + 5 <= 100) {
      this.thirstLevel += 5;
    } else {
      this.thirstLevel = 100;
    }

    if (this.tirednessLevel + 5 <= 100) {
      this.tirednessLevel += 5;
    } else {
      this.tirednessLevel = 100;
    }
  }

  giveFood() {
    if (this.hungerLevel - 35 >= 0) {
      this.hungerLevel -= 35;
    } else {
      this.hungerLevel = 0;
    }

    if (this.happyLevel + 15 <= 100) {
      this.happyLevel += 15;
    } else {
      this.happyLevel = 100;
    }

    if (this.thirstLevel + 5 <= 100) {
      this.thirstLevel += 5;
    } else {
      this.thirstLevel = 100;
    }

    if (this.tirednessLevel + 5 <= 100) {
      this.tirednessLevel += 5;
    } else {
      this.tirednessLevel = 100;
    }
  }

  giveDrink() {
    if (this.thirstLevel - 35 >= 0) {
      this.thirstLevel -= 35;
    } else {
      this.thirstLevel = 0;
    }

    if (this.hungerLevel - 10 >= 0) {
      this.hungerLevel -= 10;
    } else {
      this.hungerLevel = 0;
    }

    if (this.happyLevel + 10 <= 100) {
      this.happyLevel += 10;
    } else {
      this.happyLevel = 100;
    }
  }

  goToBed() {
    if (this.tirednessLevel - 50 >= 0) {
      this.tirednessLevel -= 50;
    } else {
      this.tirednessLevel = 0;
    }

    if (this.thirstLevel + 5 <= 100) {
      this.thirstLevel += 5;
    } else {
      this.thirstLevel = 100;
    }

    if (this.happyLevel + 10 <= 100) {
      this.happyLevel += 10;
    } else {
      this.happyLevel = 100;
    }
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
    this.shoesChewed = 0;
  }
  bark() {
    document.getElementById("bark").pause();
    document.getElementById("bark").currentTime = 0;
    document.getElementById("bark").play();
  }
  chewShoe() {
    this.shoesChewed++;
  }
}

let cooper = new Dog("Cooper", 2);

let mood = document.getElementById("mood");
let playButton = document.getElementById("pet-playing");
let eatButton = document.getElementById("pet-eating");
let drinkButton = document.getElementById("pet-drinking");
let goToBedButton = document.getElementById("pet-sleeping");
let moodArray = ["&#128522;", "&#128578;", "&#128528;", "&#128577;", "&#128565;"];
let updateMood = () => {
  switch (true) {
    case cooper.happyLevel >= 90:
      mood.innerHTML = `${moodArray[0]}`;
      break;
    case cooper.happyLevel > 60:
      mood.innerHTML = `${moodArray[1]}`;
      break;
    case cooper.happyLevel > 30:
      mood.innerHTML = `${moodArray[2]}`;
      cooper.bark();
      break;
    case cooper.happyLevel > 0:
      mood.innerHTML = `${moodArray[3]}`;
      cooper.bark();
      break;
    case cooper.happyLevel == 0:
      mood.innerHTML = `${moodArray[4]}`;
      break;
  }
}

playButton.addEventListener("click", () => {
  cooper.play();
  updateMood();
  document.getElementById("happy").innerHTML = `${cooper.happyLevel}%`;
  document.getElementById("hungry").innerHTML = `${cooper.hungerLevel}%`;
  document.getElementById("thirsty").innerHTML = `${cooper.thirstLevel}%`;
  document.getElementById("tired").innerHTML = `${cooper.tirednessLevel}%`;
});

eatButton.addEventListener("click", () => {
  cooper.giveFood();
  updateMood();
  document.getElementById("happy").innerHTML = `${cooper.happyLevel}%`;
  document.getElementById("hungry").innerHTML = `${cooper.hungerLevel}%`;
  document.getElementById("thirsty").innerHTML = `${cooper.thirstLevel}%`;
  document.getElementById("tired").innerHTML = `${cooper.tirednessLevel}%`;
});

drinkButton.addEventListener("click", () => {
  cooper.giveDrink();
  updateMood();
  document.getElementById("happy").innerHTML = `${cooper.happyLevel}%`;
  document.getElementById("hungry").innerHTML = `${cooper.hungerLevel}%`;
  document.getElementById("thirsty").innerHTML = `${cooper.thirstLevel}%`;
  document.getElementById("tired").innerHTML = `${cooper.tirednessLevel}%`;
});

goToBedButton.addEventListener("click", () => {
  cooper.goToBed();
  updateMood();
  document.getElementById("happy").innerHTML = `${cooper.happyLevel}%`;
  document.getElementById("hungry").innerHTML = `${cooper.hungerLevel}%`;
  document.getElementById("thirsty").innerHTML = `${cooper.thirstLevel}%`;
  document.getElementById("tired").innerHTML = `${cooper.tirednessLevel}%`;
});

function myLoop() {
  setTimeout(function () {
    if (cooper.happyLevel - 2 >= 0) {
      cooper.happyLevel -= 2;
      if ((cooper.hungerLevel >= 75 || cooper.thirstLevel >= 75 || cooper.tirednessLevel >= 75) && cooper.happyLevel - 10 >= 0) {
        cooper.happyLevel -= 10;
      } else if ((cooper.hungerLevel >= 75 || cooper.thirstLevel >= 75 || cooper.tirednessLevel >= 75) && cooper.happyLevel - 10 <= 0) {
        cooper.happyLevel = 0;
      }
      updateMood();
      document.getElementById("happy").innerHTML = `${cooper.happyLevel}%`;
    }
    if (cooper.hungerLevel + 2 <= 100) {
      cooper.hungerLevel += 2;
      document.getElementById("hungry").innerHTML = `${cooper.hungerLevel}%`;
    }
    if (cooper.thirstLevel + 2 <= 100) {
      cooper.thirstLevel += 2;
      document.getElementById("thirsty").innerHTML = `${cooper.thirstLevel}%`;
    }
    if (cooper.tirednessLevel + 2 <= 100) {
      cooper.tirednessLevel += 2;
      document.getElementById("tired").innerHTML = `${cooper.tirednessLevel}%`;
    }
    myLoop();
  }, 10000);
}

myLoop();