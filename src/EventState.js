// class EventArgument extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             msg:""
//         }
//         this.displayData=this.displayData.bind(this);//binding to context[current url]
//     }
//     displayData(SyntenticEvent){
//         switch(SyntenticEvent.target.name){
//             case "Insert":
//                this.setState({
//                    msg:"record is Inserted"
//                })
//                break;
//              case "Delete":
//                 this.setState({
//                     msg:"record is Deleted"
//                 })
//                  break; 
                 
//                  case "Edit":
//                     this.setState({
//                         msg:"record is edited"
//                     })
//                  break; 
//         }

//     }
//     render(){
//         return(
//             <>
//             <button name="Insert" className="btn btn-danger m-3" onClick={this.displayData}>insert</button>
//             <button name="Delete" className="btn btn-warning m-3" onClick={this.displayData}>delete</button>
//             <button name="Edit"  className="btn btn-primary m-3" onClick={this.displayData}>edit</button>
//             <div><h3 className="text text-center">{this.state.msg}</h3></div>
//             </>
//         )
//     }
// }
// class MainComponent extends React.Component{
//     render(){
//         return(
//             <>
//             <EventArgument/>
//             </>
//         )
//     }
// }

// ReactDOM.render(
//     <MainComponent/>,
//     document.getElementById("container")
// )


//2nd= step By event handler



// class EventArgument extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             msg:""
//         }
//     }
//     displayData(SyntenticEvent){
//         switch(SyntenticEvent.target.name){
//             case "Insert":
//                this.setState({
//                    msg:"record is Inserted"
//                })
//                break;
//              case "Delete":
//                 this.setState({
//                     msg:"record is Deleted"
//                 })
//                  break; 
                 
//                  case "Edit":
//                     this.setState({
//                         msg:"record is edited"
//                     })
//                  break; 
//         }

//     }
//     render(){
//         return(
//             <>
//             <button name="Insert" className="btn btn-danger m-3" onClick={this.displayData.bind(this)}>insert</button>
//             <button name="Delete" className="btn btn-warning m-3" onClick={this.displayData.bind(this)}>delete</button>
//             <button name="Edit"  className="btn btn-primary m-3" onClick={this.displayData.bind(this)}>edit</button>
//             <div><h3 className="text text-center">{this.state.msg}</h3></div>
//             </>
//         )
//     }
// }
// class MainComponent extends React.Component{
//     render(){
//         return(
//             <>
//             <EventArgument/>
//             </>
//         )
//     }
// }

// ReactDOM.render(
//     <MainComponent/>,
//     document.getElementById("container")
// ) 

//3rd step by call back


class EventArgument extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:""
        }
    }
    displayData(SyntenticEvent){
        switch(SyntenticEvent.target.name){
            case "Insert":
               this.setState({
                   msg:"record is Inserted"
               })
               break;
             case "Delete":
                this.setState({
                    msg:"record is Deleted"
                })
                 break; 
                 
                 case "Edit":
                    this.setState({
                        msg:"record is edited"
                    })
                 break; 
        }

    }
    render(){
        return(
            <>
            <button name="Insert" className="btn btn-danger m-3" onClick={()=>{this.displayData(event)}}>insert</button>
            <button name="Delete" className="btn btn-warning m-3" onClick={this.displayData.bind(this)}>delete</button>
            <button name="Edit"  className="btn btn-primary m-3" onClick={this.displayData.bind(this)}>edit</button>
            <div><h3 className="text text-center">{this.state.msg}</h3></div>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
            <EventArgument/>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
) 

