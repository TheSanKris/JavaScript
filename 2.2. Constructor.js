function m_User(name, age)
{
  this.name = name;
  this.age = age;
}

const user = new m_User("Mironov Alexandr Vasilyevich", 18);

console.log(user.name);
console.log(user.age)