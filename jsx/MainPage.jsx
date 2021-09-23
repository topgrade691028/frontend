import React from 'react';

export default class MainPage extends React.Component {


    render() {
        return <MainPageContent/>
    }
}

class MainPageContent extends React.Component {
    render() {
        return <div className="mx-auto">
            <h3 className='display-4 mx-auto text-center mt-5'>Early Access! v0.6.0</h3>
            <h5 className='display-4 mx-auto text-center mt-2 mb-1'>Баги и предложения сюда: <a href="https://github.com/AppLoidx/helios-rest-api-spring/issues" >GitHub</a></h5>
            <div className={"mx-auto text-center"}>
                <img className="img-fluid" src="assets/img/menhera-witch.png" alt=""/>
            </div>
        </div>
    }
}