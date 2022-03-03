class UserNamePasswordClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                { username: 'john' },
                { username: 'john123' },
                { username: 'john@123' },
                { username: 'subhransu' },
            ],
            userMessage:'',
            passwordMessage: '',
            password:'',
            regExp: /(?=.*[A-Z]\w{4,15})/
        }
        this.varifyPassword = this.varifyPassword.bind(this);
        this.varifyuser = this.varifyuser.bind(this);
    }

    varifyuser(e) {
        for (var user of this.state.users) {
            if (user.username == e.target.value) {
                this.setState({
                    userMessage: "username taken try antaher",
                });
                break;
            } else {
                this.setState({
                    userMessage: "user name avaliabale",
                })
            }
        }
    }
    varifyPassword(e) {
        if (e.target.value.match(this.state.regExp)) {
            this.setState({
                passwordMessage: "strong password",
            })
        } else {
            if (e.target.value.length < 4) {
                this.setState({
                    passwordMessage: "poor password",
                })
            } else {
                this.setState({
                    passwordMessage: "weak password",
                })
            }
        }
    }
    myFunction(e){
        this.setState({
            password:e.target.value
        })
    }

    render() {
        return (
            <>
                <dl>
                    <dt>UserName</dt>
                    <dd>
                        <input type="text" onKeyUp={this.varifyuser} />
                    </dd>
                    <dd>{this.state.userMessage}</dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" onKeyUp={this.varifyPassword} />
                    </dd>
                    <dd>{this.state.passwordMessage}</dd>
                </dl>
            </>
        )
    }
}

class MainFunctionComp extends React.Component {


    render() {
        return(
        <>
            <div>
                <UserNamePasswordClass/>
            </div>
        </>
        )}
}

ReactDOM.render(
    <MainFunctionComp/>,
    document.getElementById("container")
)