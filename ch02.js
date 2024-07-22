//ch02 실습
//L1

use my_database;
db.users.find();

db.users.insert({username: "smith"});

use tutorial
db.users.insert({username: 'smith'});
db.users.insert({username: 'jones'});

db.users.find();
db.users.find({username: "jones"})
db.users.find({ $or: [{username:"smith"}, {username: "jones"}]})

db.users.update({username: "smith"}, {$set: {country:"Canada"}})
db.users.find({username: "smith"})

db.users.find({username: "smith"}, {country : "Canada"})
db.users.find({country: "Canada"}, {username: "smith", country: "Canada"})

db.users.update({username: "smith"}, {$unset: {country:1}})
db.users.find({username: "smith"})

show dbs;
show collections;

//현재 사용중인 데이터베이스
db.stats();

//컬렉션 상태
db.numbers.stats();



//L2
db.users.insert({username: "smith"});
db.users.update({username: "smith"},
{
$set: {
    favorites: {
        cities: ["Chicago", "Chenyenne"],
        movies: ["Casablanca", "For a Few Dollars More", "The Sting"]
    }
}    
})


db.users.insert({username: "smith"});
db.users.update( {username: "jones"},
{
$set: {
favorites: {
movies: ["Casablanca", "Rocky"]
}
}
})

db.users.find({"favorites.movies": "Casablanca"}).pretty()

db.users.update( {"favorites.movies": "Casablanca"},
{$addToSet: {"favorites.movies": "The Maltese Falcon"} },
false, // insert if not found?
true ) // update all found? (if false, updates just first it finds)

