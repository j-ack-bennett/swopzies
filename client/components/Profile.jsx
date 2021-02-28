import React from "react";
import { connect, useStore } from "react-redux";

function Profile(props) {
  const profile = props.auth.user;
  const listings = props.listings;
  console.log(listings)

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="is-4">Profile</h3>

        <div className="content">
          <table className="table-profile">
            <tbody>
              <tr>
                <td>Username</td>
                <td>{profile.username}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>{profile.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{profile.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{profile.email}</td>
              </tr>
              <tr>
                <td>Bio</td>
                <td>{profile.bio}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{profile.phone}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{profile.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
      </div>
      <div className="card">
        <div className="card-content">
          <h3 className="is-4">My listings</h3>
          <div className="content">
            <table className="table-profile">
              <tbody>
                {listings.map(listing => {
                  if (listing.user_id === profile.id) {
                    return (
                      <tr key={listing.id}>
                        <td>{listing.title}</td>
                      </tr>
                    )
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth,
    listings: globalState.listings,
  };
};
export default connect(mapStateToProps)(Profile);
