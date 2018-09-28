import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import firebase from './../../base';
import Perfil from './Perfil';

class ShowProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: []
        } 
    }

    componentWillMount() {
        firebase.database().ref('profile')
          .on('child_added', (newProfile) => {
            let inf = {
                name: newProfile.val().name,
                phone: newProfile.val().phone,
                picture: newProfile.val().picture
            };
            this.setState({
                profile: [inf].concat(this.state.profile)
            });
        });
    }

    render() {
        return (
            <div>
                <Grid item xs>
                </Grid>
                <Grid container row>
                {this.state.profile.map(ele => {
                    return (  
                        <Grid>
                            <Perfil
                            nombre={ele.name}
                            fono={ele.phone}
                            />
                        </Grid>
                    )
                })}
                </Grid>
            </div>
        )
    }
}

export default ShowProfile;