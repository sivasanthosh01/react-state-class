import React,{Component} from "react"
class Home extends Component{

        constructor(){
            super()
            this.state={
            product:[{
                    id:1,
                    name:"Apple",
                    price:130,
                    weight:"2kg",
                    count:0
                },
                {
                    id:2,
                    name:"Apple",
                    price:110,
                    weight:"2kg",
                    count:0
                },
                {
                    id:3,
                    name:"Apple",
                    price:120,
                    weight:"2kg",
                    count:0
                },
                {
                    id:4,
                    name:"Mango",
                    price:120,
                    weight:"2kg",
                    count:0
                },
                {
                    id:5,
                    name:"Orange",
                    price:200,
                    weight:"2kg",
                    count:0
                },],

             tempArr:[]    
            }
        }

    render(){

        const handle=(i,obj)=>{

            let countIncre=this.state.product.map((val,id)=>{

                return val.id===i ? {...val,count:val.count+1}:val
            })

            let priceIncre=this.state.product.filter((e)=>{

                return e.price<obj.price
           
            })
            console.log(priceIncre);
            this.setState({product:countIncre});
            // this.setState({product:priceIncre})
            this.setState({tempArr:priceIncre})
        }

        return <div>
            {/* <h1>{this.state.name}</h1>
            <h2>{this.state.month}</h2> */}
            {this.state.product.map((e,i)=>{
                return <div key={i}>
                   
                    <h1>id: {e.id}</h1>
                    <h4>Name: {e.name}</h4>
                    <h5>Count: {e.count}</h5>
                    <p>Price: {e.price}</p>
                    <button onClick={()=>handle(e.id,e)}>Click</button>
           </div> })}

           <div>
            {this.state.tempArr.map((e)=>{
                return <div>
                     <hr></hr>
                    <h1>Temp Array</h1>
                     <h1>id: {e.id}</h1>
                    <h4>Name: {e.name}</h4>
                    <h5>Count: {e.count}</h5>
                    <p>Price: {e.price}</p>   
                </div>
            })}
           </div>
            

        </div>
    }
}

export default Home 