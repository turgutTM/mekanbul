var mongoose = require("mongoose")

require("dotenv").config()

mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on("connected",function(){
    console.log(process.env.MONGO_URI+" adresindeki veritabanına bağlanıldı.");
});

mongoose.connection.on("error",function(){
    console.log("Bağlantı sağlanamadı.");
});

mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı kesildi.");
});


process.on("SIGINT", function(){
    mongoose.connection.close();
    console.log("Bağlantı Kapatıldı");
    process.exit(0);
});

/*
kapat=function(msg,callback){
    mongoose.connection.close(function(){
        console.log("Bağlantı Kapatıldı"+msg);
        callback();
    });
    process.on("SIGINT",function(){
        kapat("Uygulama Kapatıldı",function(){
            process.exit(0);
        });
    });
};
*/

require("./venue");

