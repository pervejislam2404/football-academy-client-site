import React from "react";

const AllFees = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="container py-5 overflow-scroll">
        {/* table-one */}
        <table className="table border text-center">
          <thead>
            <tr>
              <th rowspan="2" scope="row">Age</th>
              <th scope="col">Term 1 (14 weeks)</th>
              <th scope="col">Term 2 (12 weeks)</th>
              <th scope="col">Term 3 (12 weeks)</th>
              <th scope="col">Term 1 & 2 Combined</th>
              <th scope="col">Term 2 & 3 Combined</th>
              <th scope="col">Full Season</th>
            </tr>
            <tr>
              <th scope="row">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <th scope="row">U6</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">U8</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">U10</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">U12</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>

        {/* table-two */}

        <table className="table border text-center">
          <thead>
            <tr>
              <th rowspan="2" scope="row">Age</th>
              <th scope="col">Term 1 (14 weeks)</th>
              <th scope="col">Term 2 (12 weeks)</th>
              <th scope="col">Term 3 (12 weeks)</th>
              <th scope="col">Term 1 & 2 Combined</th>
              <th scope="col">Term 2 & 3 Combined</th>
              <th scope="col">Full Season</th>
            </tr>
            <tr>
              <th scope="row">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <th scope="row">U6</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">U8</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">U10</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">U12</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>


        {/* table-three */}

        <table className="table border text-center">
          <thead>
            <tr>
              <th rowspan="2" scope="row">Age</th>
              <th scope="col">Term 1 (14 weeks)</th>
              <th scope="col">Term 2 (12 weeks)</th>
              <th scope="col">Term 3 (12 weeks)</th>
              <th scope="col">Term 1 & 2 Combined</th>
              <th scope="col">Term 2 & 3 Combined</th>
              <th scope="col">Full Season</th>
            </tr>
            <tr>
              <th scope="row">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
              <th scope="col">2x / week</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <th scope="row">U6</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">U8</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">U10</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">U12</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default AllFees;
