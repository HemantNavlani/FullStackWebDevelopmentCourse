let c1 = "blue";
let c2 = "yellow"

switch(c1){
    case "red":
        switch (c2){
            case "blue":
                console.log("purple")
                break
                case "yellow": 
                console.log("orange")
                break
                default:
                    console.log("Color 2 is invalid")
                    break
        }
        break
        case "blue":
            switch(c2){
                case "yellow":
                    console.log("green")
                    break
                    default:
                        console.log("Color 2 is invalid")
            }
            break
            default:
                console.log("Color 1 is invalid");
                break
}