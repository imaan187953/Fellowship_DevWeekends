// ================================
// MODULE PATTERN
// ================================

const Counter = (() => {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    getCount() {
      return count;
    }
  };
})();

Counter.increment();
Counter.increment();

console.log("Module Pattern:");
console.log(Counter.getCount());

// ================================
// SINGLETON PATTERN
// ================================

const Database = (() => {
  let instance;

  function createInstance() {
    return {
      connected: true
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    }
  };
})();

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log("\nSingleton Pattern:");
console.log(db1 === db2);

// ================================
// FACTORY PATTERN
// ================================

function createStudent(name, age) {
  return {
    name,
    age,

    introduce() {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
}

const student1 = createStudent("Iman", 21);

console.log("\nFactory Pattern:");
student1.introduce();

// ================================
// OBSERVER PATTERN
// ================================

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(message) {
    this.observers.forEach(observer => observer(message));
  }
}

const news = new Subject();

news.subscribe(message => {
  console.log("Subscriber 1:", message);
});

news.subscribe(message => {
  console.log("Subscriber 2:", message);
});

console.log("\nObserver Pattern:");
news.notify("New JavaScript version released!");