function EventfunctionDemo(){
    function InsertClick(){
        alert("data is inserted");
    }
    return(
    <>
<button onClick={InsertClick}>Insert</button>

    </>
    )
}

class EventClassDemo extends React.Component{
    DeleteClick(){
        alert("record deleted");
    }
    render(){
        return(
            <>
            <button className="button" onClick={this.DeleteClick}>Delete</button>
            </>
        )
    }

}
class MainComponent extends React.Component{


    render(){
        return(
            <>
            <div>
                <EventClassDemo/>
           
                <EventfunctionDemo/>
            </div>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)