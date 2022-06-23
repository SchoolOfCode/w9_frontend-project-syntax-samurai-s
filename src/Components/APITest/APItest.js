import axios from 'axios'

function APItest() {
axios
      .get(`http://localhost:3000/snippets`)
      .then((response) => {
        console.log(response)
      });

      return <h1>Test component loaded</h1>
}

export default APItest;