import { List } from "../src/List.js "
var list = new List()
list.add(7)
const result = list.get(0)
if (result == 7) {
    console.log("work");
    console.log(result);
} else {
    console.log("error");
}