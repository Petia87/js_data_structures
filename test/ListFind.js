import { List } from "../src/List.js"

export function ListFind(){
    const input=[1,2,3,4,5,6]
    const list=new List()
    list.addMany(input)
    const result=list.find(5)
    if(result){
        console.log("It was find");
    }else{
        console.log("It wasn't find");
    }
   console.log("don't work");
}
ListFind()