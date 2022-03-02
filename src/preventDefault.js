

class EventClassDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ""
        }
        this.register = this.register.bind(this);//binding to context[current url]
    }
    register(e) {
        e.preventDefault();//to prevent refresh which is onsubmit
        this.setState({
            msg: "form submit"
        })
    }
    render() {
        return (
            <>
                <form onSubmit={this.register}>
                    USERNAME:
                    <input type="text" name="userName" />
                    <button>submit</button>
                    <h2>{this.state.msg}</h2>
                </form>
            </>
        )
    }

}
class MainComponent extends React.Component {


    render() {
        return (
            <>
                <div>
                    <EventClassDemo />
                </div>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent />,
    document.getElementById("container")
)