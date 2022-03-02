class EventArgument extends React.Component{
    displayData(SyntenticEvent){
        switch(SyntenticEvent.target.name){
            case "Insert":
                document.writeln("record inserted");
               break;
             case "Delete":
                 document.write("record is deleted");
                 break; 
                 
                 case "Edit":
                 document.write("record is edited");
                 break; 
        }

    }
    render(){
        return(
            <>
            <button name="Insert" className="btn btn-danger m-3" onClick={this.displayData}>insert</button>
            <button name="Delete" className="btn btn-warning m-3" onClick={this.displayData}>delete</button>
            <button name="Edit"  className="btn btn-primary m-3" onClick={this.displayData}>edit</button>
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