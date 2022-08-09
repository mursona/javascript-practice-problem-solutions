const friends = ['sajib', 'bipul', 'shifatullah', 'sajol', 'tanjima', 'fouziafayeja', 'sadia'];

function longWordFriend(friends){
    let longestName = friends[0];
    for(let i = 0; i < friends.length; i++){
        const friend = friends[i];
        if(friend.length > longestName.length){
            longestName = friend;
        }
    }
    return longestName;
}

const mySelection = longWordFriend(friends);
console.log(mySelection);