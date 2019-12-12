import Link from 'next/link';
import Gravatar from '../components/Gravatar';
/* import Gravatar from './Gravatar'; */



class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.image}
        />

        <div>
          <strong>
            {this.props.badge.name}
            &nbsp;&nbsp; || &nbsp;&nbsp;
            {this.props.badge.spieces}
          </strong>
          <br />@{this.props.badge.type}
          <br />
          {this.props.badge.origin.name}
        </div>
        <style>{`
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
      return `${badge.name}`
        .toLowerCase()
        .includes(query.toLowerCase());
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
                    route={`/bicameral/${badge.id}`}
                  >
                    <BadgesListItem badge={badge} />
                  </Link>
                </li>
              );
            })}
          </ul>

        </div>
        <style>{`
         .BadgesListItem {
            background: #FFFFFF;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
            border-radius: 5px;
            display: flex;
            padding: 1rem;
            cursor: pointer;
            -webkit-transition: width 2s; /* Safari prior 6.1 */
            transition: 600ms;
          }
          .BadgesListItem:hover{
            transform: scale(1.1);
          }
          
          .BadgesListItem__avatar {
            border-radius: 50%;
            background: #a3a3a3;
            margin-right: 0.5rem;
            width: 100px;
            height: 100px;
          }
            .list-unstyled {
                padding-left: 0;
                list-style: none;

              }

              .text-reset {
                color: inherit !important;
              }
              .text-decoration-none {
                text-decoration: none !important;
              }
              .form-control {
                display: block;
                width: 100%;
                height: calc(1.5em + 0.75rem + 2px);
                padding: 0.375rem 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #495057;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
              }
              .form-group {
                margin-bottom: 1rem;
              }
              

        `}</style>
    </div>


  );
}




export default BadgesList;