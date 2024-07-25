db.users.insert({
    name : 'lee',
    age : 29,
    address: 'seoul'
    
    
});

db.users.find({}, {name:1, age: 1}); //0과 1 혼용할 수 없음 (id 제외)
db.users.find({}, {age: 0});

