export class List{
    constructor(){
        this.data=[]
    }
    add(value){
        this.data.push(value)
      
    }
    get(index){
        return this.data[index]
        
    }
}
//var obj=new List()
//obj.add(50)
//obj.get(5)