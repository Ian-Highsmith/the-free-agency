import React, { Component } from 'react';
import TeamShow from '../components/TeamShow';
import PlayerTile from '../components/PlayerTile'

class TeamShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {},
      players: []
    }
  }

  componentWillMount() {
    let teamId = this.props.params.id
    fetch(`/api/v1/teams/${teamId}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(body => {
      this.setState({ team: body['team'], players: body['players'] })
    })
  }

  render() {
    let players = this.state.players.map(player => {
      return(
        <div className="Player-show-tile">
        <PlayerTile
          key={player.id}
          id={player.id}
          first_name={player.first_name}
          last_name={player.last_name}
          avatar_url={player.avatar_url}
        />
      </div>
      )
    })
    return(
      <div className="Team Container">
        <TeamShow
          key={this.state.team.id}
          id={this.state.team.id}
          name={this.state.team.name}
          logo_url={this.state.team.logo_url}
        />
        {players}
      </div>
    )
  }
}

export default TeamShowContainer;
