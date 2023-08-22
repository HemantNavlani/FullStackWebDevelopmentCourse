class User{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    setPassword(newPassword){
        let a = newPassword;
        if(a.length>=8 && /\d/.test(a) && /[A-Z]/.test(a)) 
         this.password=newPassword;
        else console.error("Error : Invalid Password")
    }

    getPassword(){
        let b = this.password;
        let str = "";
        for(let i=0;i<b.length;i++){
            str+="*"
        }
        return str;
    }
}

let user1 = new User("Hemant");
try{
user1.setPassword("dsss12BBBBB")
}
catch(error){
    console.log(error.message);
}

console.log(user1.getPassword())

let user2 = new User("Mithun", "Password123")
console.log(user2.getPassword());
user2.setPassword("myPassword");
user2.setPassword("MyPassword");
user2.setPassword("Mypassword123");
console.log(user2.getPassword());