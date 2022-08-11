import React, { Component } from 'react';
import queries from '../services/queries';

class Subscribe extends Component {
    state = {
        email: '',
        validation: '',
        res: ''
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
        console.log(this.state.email);
    }
    creatEmail = () => {
        console.log('bb');
        if (this.state.email !== '')
            queries.creactEmail(this.state.email).then(response => {
                console.log(response);
                const res=response.data.data.createEmail
                if(res!==null) 
                this.setState({ res: 'success ' + response.data.data.createEmail.data.attributes.email })
                else this.setState({ res: 'error: maybe this email exist'  })
            })
        else console.log('email required');
    }

    response = () => {
        if (this.state.res !== '' && this.state.res !== null)
            return <p className='m-4 alert alert-success'>{this.state.res}</p>
    }

    render() {
        return (<section className="cta-section theme-bg-light py-5 text-center">
            <div className="container text-center single-col-max-width">
                <h2 className="heading">
                    Abdou's blog - I write articles about Web Development and Android.
                </h2>
                <div className="intro">
                    Welcome to my blog. Subscribe and get my latest blog post in your
                    inbox.
                </div>
                <div className="single-form-max-width pt-3 mx-auto">
                    <form className="signup-form row g-2 g-lg-2 align-items-center">
                        <div className="col-12 col-md-9">
                            <input
                                type="email"
                                id="semail"
                                name="semail1"
                                className="form-control me-md-1 semail"
                                placeholder="Enter email"
                                onChange={event => this.handleEmailChange(event)}
                            />
                        </div>
                        <div className="col-12 col-md-2">
                            <button type="button" onClick={this.creatEmail} className="btn btn-primary">
                                Subscribe
                            </button>
                        </div>
                    </form>
                    {/*//signup-form*/}
                </div>
                {/*//single-form-max-width*/}
                {this.response()}
            </div>
            {/*//container*/}
        </section>);
    }
}

export default Subscribe;