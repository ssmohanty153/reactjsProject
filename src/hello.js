var data=[
    {Name:"subhransu",Price:2400,Photo:"../asserts/Screenshot (1).png"},
    {Name:"susanta",Price:56009,Photo:"../asserts/Screenshot (2).png"},
    {Name:"dinesh",Price:13422,Photo:"../asserts/Screenshot (3).png"}
];

const element=(
    <>
    <h2 className="text-center bg-primary text-white mt-3">Product Catagory</h2>
    <div className="row row-cols-3">
        {
            data.map(product=>
                <div className="card text-center   ">
                    <div className="card-header">
                    <h3>{product.Name}</h3>
                    </div>

                  <div className="card-body center" >
                      <img src={product.Photo} height="200" width="200"></img>
                   </div> 

                   <div className="card-fotter">
                      <h4>{product.Price}</h4>
                   </div> 


                    </div>     
                )
        }
    </div>
    </>
)
ReactDOM.render(element,document.getElementById("container"));
