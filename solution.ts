type Primitive = string | number | boolean;

function formatValue(value: Primitive): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | unknown[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}


function getUniqueValues<T extends string | number>(
  array1: T[],
  array2: T[]
): T[] {
  const result: T[] = [];
  let index = 0;

  function exists(value: T): boolean {
    for (let i = 0; i < index; i++) {
      if (result[i] === value) return true;
    }
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    const value = array1[i];
    if (value !== undefined && !exists(value)) {
      result[index] = value;
      index++;
    }
  }

  for (let i = 0; i < array2.length; i++) {
    const value = array2[i];
    if (value !== undefined && !exists(value)) {
      result[index] = value;
      index++;
    }
  }

  return result;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;

    if (product.discount !== undefined) {
      const discountAmount = basePrice * (product.discount / 100);
      return total + (basePrice - discountAmount);
    }

    return total + basePrice;
  }, 0);
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

