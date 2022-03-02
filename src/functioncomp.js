function HeaderComonent(){
    return(
        <>
        <div>
            <h3 className="bg-primary text-white text-center">Amazone shoping</h3>
        </div>
        </>
    )


}
const NagationComponent=()=>(
    <>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </>
)

const FootComponent=()=>(
    <>
    <div className="bg-dark text-center text-white">&copy: copyright 2021
    </div> 
    </>
)

const MainComponnt=()=>(
    <>
    <HeaderComonent/>
    <div className="row" style={{height:"550px"}}>
        <div className="col-5">
            <NagationComponent/>

        </div>
        <div className="col-7">
            <h4>OnlineShping</h4>

        </div>
    </div>
    <div>
        <FootComponent/>
    </div>
    </>
)
ReactDOM.render(<MainComponnt/>,document.getElementById("container"));