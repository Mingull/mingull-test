
# Whats this for?
  
This is just a test package

## Installation

`npm i mingull-test-package`

This is the way to set up this package

```JS
const { User, Admin } = require('mingull-test-package');

const  userOne = new  User("firstname", "lastname");
const  userTwo = new  User("John", "Doe");
const  adminOne = new  Admin("Mingull", "Dev");

console.log(adminOne.getAllUser())
```

output:

```LOG
[
    User { firstname: 'firstname', lastname: 'lastname' },
    User { firstname: 'John', lastname: 'Doe' },
    Admin { firstname: 'Mingull', lastname: 'Dev' }
]
```
