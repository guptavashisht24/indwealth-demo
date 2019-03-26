import React, { Component } from 'react';
import Stars from './stars';


class Mutual extends Component{
    constructor(props){
        super(props);
        this.state = {
            api_response : [],
            count : ''
        }
        this.api = this.api.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.offset = 16
    }
api(offset=16){
        let self = this;
        var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let result = JSON.parse(this.responseText);
       self.setState({
           api_response : result.data,
           count : result.count,
       })
    }
  };
  xhttp.open("GET", "https://indiawealth.in/api/v2/funds/getList/?limit="+offset+"&offset=0", true);
  xhttp.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3NjgsInVzZXJuYW1lIjoiOTgxMTg4NTk4OSIsImV4cCI6MTU1NDEwMDIwNCwiZW1haWwiOiJhZGl0eWFleGFtQGdtYWlsLmNvbSIsIm1vYmlsZSI6Ijk4MTE4ODU5ODkiLCJvcmlnX2lhdCI6MTU1MzQ5NTQwNH0.AegsqGlvfjS7IMYv1xa8EWIgaEdOXpo4Sve2FMLIwlo");
  xhttp.send();
}
componentDidMount(){
    this.api();
    window.addEventListener('scroll',this.handleScroll)
}
handleScroll(){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.offset+=16;
        this.api(this.offset);
    }
}

    render(){
        let result = this.state.api_response.map(function(data,index){
            let color = (data.returns.oneYear>0)?"green":"red";
            return(<div key={index} className="w50 mt10">
                <div className="dataContainer w90">
                <div className="first-row crx mt10 ml5">
                    <div className="fl name w70">
                     {data.name}
                    </div>
                    <div className="fr rating w20">
                     <Stars value={data.rating}/>
                    </div>
                </div>
                <div className="second-row mt130 ma inline">
                    <div className="dib w30">
                        <div className="small">
                            1 yr returns
                        </div>
                        <div className={color}>
                            {data.returns.oneYear}
                        </div>
                    </div>
                    <div className="dib w30">
                     <div className="small">
                            AUM
                        </div>
                        <div>
                            &#8377; {data.aum} Cr
                        </div>
                    </div>
                    <div className="dib w30">
                     <div className="small">
                            Expense Ratio
                        </div>
                        <div>
                            {data.expenseRatio}
                        </div>
                    </div>
                </div>
            </div>
            </div>)
        })
        return(<div className="tc">
            {this.state.count && <div className="App">
            Explore Funds
            </div>}
            {this.state.count && <div className="App">
              Showing {this.state.count} results
            </div>}
            <div className="inline">
            {result}
            </div>
        </div>)
    }
}

export default Mutual;