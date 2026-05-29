function displayUser(user) {
    document.getElementById("userImage").src = user.image;
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userGender").textContent= user.gender;
}
function getAndDisplayNextRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(function (res){
            return res.json();
        })
        .then(function (data){
            var userdata=data.results[0];
            var myuserobject={};
            myuserobject.name=userdata.name.title+" "+userdata.name.first+" "+userdata.name.last;
            myuserobject.gender=userdata.gender;
            myuserobject.image=userdata.picture.large;
            displayUser(myuserobject);
        })
        .catch(function (err){
            console.log("Error "+err);
        });
    }