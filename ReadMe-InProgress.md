# Snippet Samurai

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

<div style="text-align:center"><img src="https://i.imgur.com/xYKiF06.png" /></div>.

## Overview

Snippet Samurai is a React-based App created with simplicity and cognitive load awareness in mind. This minimalistic search tool allows the user to search for and view code snippets, which are hosted on a Heroku database.
The app suggests results based on text entered into the input field, and features a submission form which allows the user to post their
own code snippets to the database. New entries to the database can instantly be accessed on the frontend.
<br>
<br>

## Features

- Code Snippet retrieval
- Code Snippet database entry
- Responsive UI
  <br>
  <br>

## Roadmap

- Dark Mode
- User save snippets
- User registration / Log In system
- Download Json with code snippet
- Accessibility modes (Colorblind etc)
  <br>
  <br>

## Installation / Run Locally

Install the Snippet Samurai Front/Back End using npm

```bash
  git clone //git repo url
```

```bash
  npm i
  cd Snippet Samurai
```

Start the server

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

## Code Example Dependency

```javascript
const [isActive, setActive] = useState('false');

const handleFilter = e => {
	const searchWord = e.target.value;
	console.log(searchWord);
	setWordEntered(searchWord);
	axios
		.get(`http://localhost:3000/snippets?title=${searchWord}`)
		.then(response => {
			console.log(response.data.data);
			setFilteredData(response.data.data);
		});
	const newFilter = filteredData.map(value => {
		return value.title.toLowerCase().includes(searchWord.toLowerCase());
	});
	if (searchWord === '') {
		setFilteredData([]);
	} else {
		setFilteredData(newFilter);
	}
};
```

<br>
<br>

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

<br>
<br>

## Dependency Licenses

- React
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
- React testing Library
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
- Axios
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
- Jest
  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Authors

- [Katie Walters](https://github.com/KatieClarinet)
- [Matt Davies](https://github.com/DevMattDavies)
- [Mari](https://github.com/wisteria-hawthorn)
- [CJ](https://www.https://github.com/Esva)
