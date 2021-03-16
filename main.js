// import axios from 'axios'

const url = "https://api.covid19india.org/data.json";
axios.get(url)
.then(data=>{
    document.getElementById("confirmed").innerHTML = data["data"]["statewise"][0]["confirmed"];
    document.getElementById("active").innerHTML = data["data"]["statewise"][0]["active"];
    document.getElementById("recovered").innerHTML = data["data"]["statewise"][0]["recovered"];
    document.getElementById("deaths").innerHTML = data["data"]["statewise"][0]["deaths"];

    for (let i=0; i<38; i++){
        statesContainer = document.getElementsByClassName('states')[0];
        state = document.createElement("div");
        stateName = document.createElement("p");
        confirmed = document.createElement("p");
        active = document.createElement("p");
        recovered = document.createElement("p");
        deaths = document.createElement("p");

        state.classList.add('state');
        stateName.classList.add('state-container', 'stateName');
        confirmed.classList.add('state-container', 'confirmed');
        active.classList.add('state-container', 'active');
        recovered.classList.add('state-container', 'recovered');
        deaths.classList.add('state-container', 'deaths');

        statesContainer.appendChild(state);
        state.appendChild(stateName);
        state.appendChild(confirmed);
        state.appendChild(active);
        state.appendChild(recovered);
        state.appendChild(deaths);
        
            // document.getElementsByClassName('stateName')[i].innerHTML = "State";                                                        
            // document.getElementsByClassName('confirmed')[i].innerHTML = "Confirmed";
            // document.getElementsByClassName('active')[i].innerHTML = "Active";
            // document.getElementsByClassName('recovered')[i].innerHTML = "Recovered";
            // document.getElementsByClassName('deaths')[i].innerHTML = "Deaths";

        document.getElementsByClassName('stateName')[i].innerHTML = data["data"]["statewise"][i]["state"];                                                        
        document.getElementsByClassName('confirmed')[i].innerHTML = data["data"]["statewise"][i]["confirmed"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');;                                                        
        document.getElementsByClassName('active')[i].innerHTML = data["data"]["statewise"][i]["active"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');;
        document.getElementsByClassName('recovered')[i].innerHTML = data["data"]["statewise"][i]["recovered"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');;
        document.getElementsByClassName('deaths')[i].innerHTML = data["data"]["statewise"][i]["deaths"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');;
    }
})
.catch(err=>console.log(err));

