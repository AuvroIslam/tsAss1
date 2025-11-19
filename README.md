# TypeScript Problem Solving Assignment

## Blog Posts (Interview Questions)

### ১. TypeScript এ Interface এবং Type এর মধ্যে পার্থক্য কী?

TypeScript **Interface** এবং **Type** উভয়ই object structure define করতে ব্যবহৃত হয়, তবে কিছু মূল পার্থক্য রয়েছে:

#### মূল পার্থক্যসমূহ:

**১. Declaration Merging**
- **Interface**: একই নামে multiple declaration merge হয়
```typescript
interface User {
  name: string;
}
interface User {
  age: number;
}
//  Merged: { name: string; age: number }
```

- **Type**: একই নামে duplicate declaration error দেয়

**২. Union Types**
- **Type**: Union এবং intersection সহজে তৈরি করা যায়
```typescript
type Status = "active" | "inactive";
type ID = string | number;
```

- **Interface**: Union type সরাসরি সম্ভব নয়

**৩. Primitive Types**
- **Type**: Primitive, tuple, function types define করা যায়
```typescript
type Callback = (data: string) => void;
type Coordinates = [number, number];
```

- **Interface**: শুধু object shapes define করে

**৪. Inheritance**
- **Interface**: `extends` keyword ব্যবহার করে
```typescript
interface Dog extends Animal { }
```

- **Type**: Intersection (`&`) ব্যবহার করে
```typescript
type Dog = Animal & { bark(): void };
```

#### কখন কোনটি ব্যবহার করবেন?

- **Interface**: Object/class structure, library API, future extension দরকার হলে
- **Type**: Union types, primitives, complex types, utility types এর জন্য

---

### ২. TypeScript-এ keyof keyword-এর ব্যবহার কী?

**`keyof`** একটি type operator যা object-এর সব keys-কে union type হিসেবে extract করে।

#### Basic Usage:
```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;  // "name" | "age"
```

#### Type-Safe Property Access:
```typescript
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Asha", age: 28 };
getValue(person, "name");   // Valid
getValue(person, "invalid"); // Compile Error
```

#### typeof এর সাথে ব্যবহার:
```typescript
const config = {
  apiUrl: "https://api.com",
  timeout: 5000
};

type ConfigKeys = keyof typeof config;  // "apiUrl" | "timeout"

function getConfig(key: ConfigKeys) {
  return config[key];  // Type-safe access
}
```

#### Mapped Types:
```typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

#### প্রধান সুবিধা:
1. **Type Safety**: Invalid property access compile-time এ detect করে
2. **Autocomplete**: IDE-তে automatic suggestions
3. **Refactoring**: Property rename করলে সব জায়গায় update হয়

**সারাংশ**: `keyof` দিয়ে type-safe property access এবং manipulation সম্ভব, যা runtime errors প্রতিরোধ করে।

---
