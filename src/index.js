import React from "react";
import { render } from "react-dom";
import "./reset.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';

import App from "./app/App";

import axios from 'axios';
import { BASE_API } from './utils/config';

axios.defaults.baseURL = BASE_API;

render(<App />, document.getElementById("root"));
