import React from 'react';
import Link from 'next/link';
/* import Gravatar from './Gravatar'; */



class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.delegado}
            &nbsp;&nbsp; || &nbsp;&nbsp;
            {this.props.badge.comite}
          </strong>
          <br />@{this.props.badge.asunto}
          <br />
          {this.props.badge.descripcion}
        </div>
        <style jsx>{`
            .BadgesList ul>li {
                margin-bottom: 1rem;
              }
              
              .BadgesListItem {
                background: #FFFFFF;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
                border-radius: 5px;
                display: flex;
                padding: 1rem;
              }
              
              .BadgesListItem__avatar {
                border-radius: 50%;
                background: #a3a3a3;
                margin-right: 0.5rem;
                width: 80px;
                height: 80px;
              }
        `}</style>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      if(badge.clave==="comiteb"){
      return `${badge.descripcion}`
        .toLowerCase()
        .includes(query.toLowerCase());
      }
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}


function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Directives</label>
          <input
            type="text"
            placeholder="Comite B"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No directives or delegates were found</h3>
        <Link className="btn btn-primary" to="/comite/bicameral/new">
          Create new Delegate
        </Link>
      </div>
    );
  } 

  return (

    <div className="Badges__container">
        <div className="form-group">
            <label>Filter Directives</label>
            <input
              type="text"
              placeholder="Buscar en comite B"
              className="form-control"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
            />
          

          <ul className="list-unstyled">
            {filteredBadges.map(badge => {
              return (
                <li key={badge.id}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/comite/bicameral/${badge.id}`}
                  >
                    <BadgesListItem badge={badge} />
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
    
    </div>


  );
}




export default BadgesList;