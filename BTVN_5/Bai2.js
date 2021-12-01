const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

let newUsers = users.map(user => {
    return user;
});

class App{
    show(list) {
        console.log(list);
    }

    addUser(newId, newName, newAge, newGender, newMoney) {
        newUsers.push({id: newId, name: newName, age: newAge, gender: newGender,money: newMoney});
    }

    deleteByID() {
        let id = 4;
        let index = -1;
        newUsers = users.map(user => {
            return user;
        });
        
        for(let i in users) {
            if(users[i].id === id) {
                index = i;
            }
        }
        if(index === -1) {
            console.log("Invalid id");
        } else {
            newUsers.splice(index, 1);
        }
    }

    updateByID() {
        let id = 4;
        newUsers = users.map(user => {
            return user;
        });

        newUsers = users.map(user => {
            if(user.id === id) {
                return {
                    id: 5, name: 'Hưng Trương', age: '20', gender: 'super male',money: 100000
                }
            } else {
                return user;
            }
        })
    }

    findMoreThanAge15() {
        newUsers = newUsers.filter(user => {
            return user.age > 15
        })
    }

    getSum() {
        let sum = 0;
        newUsers = users.map(user => {
            return user;
        });
        newUsers.forEach(item => {
            if(item.id % 2 == 0) {
                sum += item.money;
            }
        });
        return sum;
    }

    whoRichAndPoor() {
        newUsers = users.map(user => {
            return user;
        });
        let _max = newUsers[0].money;
        let _min = newUsers[0].money;
        newUsers.forEach(item => {
            if(item.money > _max) {
                _max = item.money;
            }
            if(item.money < _min) {
                _min = item.money;
            }
        })
        newUsers.forEach(item => {
            if(item.money === _max) {
                console.log("Who is richest is " + item.name);
            }
            if(item.money === _min) {
                console.log("Who is poorest is " + item.name);
            }
        })
    }

    tranformGender() {
        newUsers = users.map(user => {
            return user;
        });
        newUsers = newUsers.map(item => {
            item.gender = 'female';
            return item; 
        })
      
    }

}

const app = new App();

console.log(`
    1. Show User
    2. Add User
    3. Delete User by id
    4. Update User by id
`)

console.log("Add User")
app.addUser(5, 'Hưng Trương', 20, 'male', 10000);
app.show(newUsers);
console.log("Delete User by id")
app.deleteByID();
app.show(newUsers);
console.log("Update user by id")
app.updateByID();
app.show(newUsers);
console.log("Find user have age more than 15")
newUsers = users.map(user => {
    return user;
});
app.addUser(5, 'Hưng Trương', 20, 'male', 10000);
app.addUser(6, 'Tuyết Nguyễn', 20, 'male', 10000); 
app.findMoreThanAge15();
app.show(newUsers);
console.log("SUM: " + app.getSum());
app.whoRichAndPoor();
console.log('transform genter');
app.tranformGender();
app.show(newUsers);





